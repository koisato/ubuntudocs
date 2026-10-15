import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { isMarkdownPreferred, rewritePath } from 'fumadocs-core/negotiation';
import { createI18nMiddleware } from 'fumadocs-core/i18n/middleware';
import { docsContentRoute, docsRoute } from '@/lib/shared';
import { i18n } from '@/lib/i18n';

const { rewrite: rewriteDocs } = rewritePath(
  `${docsRoute}{/*path}`,
  `${docsContentRoute}{/*path}/content.md`,
);
const { rewrite: rewriteSuffix } = rewritePath(
  `${docsRoute}{/*path}.md`,
  `${docsContentRoute}{/*path}/content.md`,
);

// adds the language to the URL: /docs -> English, /hu/docs -> Hungarian
const i18nProxy = createI18nMiddleware(i18n);

export default function proxy(request: NextRequest, event: NextFetchEvent) {
  const result = rewriteSuffix(request.nextUrl.pathname);
  if (result) {
    return NextResponse.rewrite(new URL(result, request.nextUrl));
  }

  if (isMarkdownPreferred(request)) {
    const result = rewriteDocs(request.nextUrl.pathname);

    if (result) {
      return NextResponse.rewrite(new URL(result, request.nextUrl));
    }
  }

  return i18nProxy(request, event);
}

export const config = {
  // skip route handlers, Next.js files and static files in /public
  matcher: ['/((?!api|_next/static|_next/image|og/|llms|images/|favicon.ico|.*\.png$).*)'],
};

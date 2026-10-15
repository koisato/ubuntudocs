import { RootProvider } from 'fumadocs-ui/provider/next';
import '../global.css';
import { i18nProvider } from 'fumadocs-ui/i18n';
import { translations } from '@/lib/layout.shared';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export default async function Layout({ params, children }: LayoutProps<'/[lang]'>) {
  const { lang } = await params;

  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider i18n={i18nProvider(translations, lang)}>{children}</RootProvider>
      </body>
    </html>
  );
}

import Link from 'next/link';

const text = {
  en: {
    title: 'Ubuntu Server tutorial',
    before: 'Open',
    after: 'to read the documentation.',
    credit: 'Docs template made by',
  },
  hu: {
    title: 'Ubuntu szerver tutorial',
    before: 'Kattints a',
    after: '-ra a dokumentáció megtekintéséhez.',
    credit: 'A dokumentáció sablonját a',
  },
};

export default async function HomePage({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params;
  const t = text[lang === 'hu' ? 'hu' : 'en'];
  const docsUrl = lang === 'hu' ? '/hu/docs' : '/docs';

  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <h1 className="text-2xl font-bold mb-4">{t.title}</h1>
      <p>
        {t.before}{' '}
        <Link href={docsUrl} className="font-medium underline">
          /docs
        </Link>{' '}
        {t.after}
      </p>
      <p className="mt-6 text-sm text-fd-muted-foreground">
        {t.credit}{' '}
        <a href="https://fumadocs.dev" target="_blank" rel="noopener" className="underline">
          Fumadocs
        </a>
        {lang === 'hu' ? ' készítette.' : '.'}
      </p>
    </div>
  );
}

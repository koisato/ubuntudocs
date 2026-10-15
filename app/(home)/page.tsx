import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <h1 className="text-2xl font-bold mb-4">Ubuntu Server tutorial</h1>
      <p>
        Open{' '}
        <Link href="/docs" className="font-medium underline">
          /docs
        </Link>{' '}
        to read the documentation.
      </p>
      <p className="mt-6 text-sm text-fd-muted-foreground">
        Docs template made by{' '}
        <a href="https://fumadocs.dev" target="_blank" rel="noopener" className="underline">
          Fumadocs
        </a>
        .
      </p>
    </div>
  );
}

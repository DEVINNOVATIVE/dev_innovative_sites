"use client";

type RoutePageProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function RoutePage({ eyebrow, title, description }: RoutePageProps) {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-[1400px] items-center px-4 py-16 sm:px-6 lg:px-8">
      <section className="max-w-3xl space-y-5">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
          {eyebrow}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">{title}</h1>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      </section>
    </main>
  );
}
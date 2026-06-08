const stats = [
  { value: "12+", label: "Years of delivery" },
  { value: "120+", label: "Projects launched" },
  { value: "30+", label: "Industries served" },
];

export function HomeStats() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 pb-20 sm:px-6 lg:px-8">
      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-border bg-[#f8fafc] p-6">
            <p className="text-4xl font-semibold tracking-tight text-secondary">{stat.value}</p>
            <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
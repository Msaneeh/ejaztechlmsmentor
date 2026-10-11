import React from 'react'

const Features = () => {
  return (
    <section id="features" className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-text">
              Why Ejaztech
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Everything you need to succeed
            </h2>
            <p className="mt-4 text-base text-muted-text">
              We've designed every piece of the program so you can focus on one
              thing — becoming great at AI.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-border-brand bg-surface p-5 transition-colors hover:bg-surface2/60"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface2 text-primary-text">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold tracking-tight">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-text leading-relaxed">
                    {f.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  )
}

export default Features
import React from 'react'

const Phases = () => {
  return (
          <section id="phases" className="py-20 sm:py-24 bg-surface border-y border-border-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-text">
              The Curriculum
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Three phases. Twelve weeks. One goal.
            </h2>
            <p className="mt-4 text-base text-muted-text">
              Each phase builds on the last — structured so you never feel lost
              and always know what's next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.number}
                  className="glass-panel relative overflow-hidden rounded-[2rem] p-6 shadow-xs"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-dim blur-[60px]" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-surface2 text-primary-text">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-3xl font-bold tracking-tight text-muted-text/40">
                        {p.number}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-semibold tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-text leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  )
}

export default Phases
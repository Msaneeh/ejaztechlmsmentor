import React from 'react'

const Testimonial = () => {
  return (
    <section
        id="testimonials"
        className="py-20 sm:py-24 bg-surface border-y border-border-brand"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-text">
              From our learners
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Real people. Real results.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="glass-panel relative overflow-hidden rounded-[2rem] p-6 shadow-xs"
              >
                <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gold-dim blur-[60px]" />

                <div className="relative z-10">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-gold text-gold"
                      />
                    ))}
                  </div>

                  <p className="mt-4 text-sm text-muted-strong leading-relaxed">
                    "{t.quote}"
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-text text-sm font-bold text-bg">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold tracking-tight">
                        {t.name}
                      </p>
                      <p className="text-[11px] text-muted-text">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Testimonial
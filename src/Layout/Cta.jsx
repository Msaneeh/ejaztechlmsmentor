import React from 'react'

const Cta = () => {
  return (
    <section className="py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel relative overflow-hidden rounded-[2.5rem] p-8 sm:p-12 text-center shadow-xs">
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent-dim blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-gold-dim blur-[80px]" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Ready to build your AI career?
              </h2>
              <p className="mt-4 text-base text-muted-text">
                Join Cohort 3 and start your 12-week journey from zero to hero.
                Limited seats available.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button
                  asChild
                  className="btn-primary h-11 rounded-full px-6 text-sm font-medium"
                >
                  <Link to="/auth">
                    Enroll Now
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="btn-glass h-11 rounded-full px-6 text-sm font-medium"
                >
                  <a href="mailto:business@ejaztech.ai">
                    Talk to Us
                  </a>
                </Button>
              </div>

              <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-muted-text">
                <li className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                  Live mentor sessions
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                  Real-world projects
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                  Verified certificate
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Cta
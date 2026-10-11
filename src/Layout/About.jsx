import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-text">
              About the Program
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Built for people who want to{" "}
              <span className="text-muted-strong">actually build AI</span>
            </h2>
            <p className="mt-5 text-base text-muted-text leading-relaxed">
              Most AI courses teach you to import a library and call a function.
              We teach you how the math works, how to build from scratch, and how
              to debug when the model doesn't cooperate. You'll finish with a
              portfolio of real projects — not just a certificate.
            </p>
          </div>
        </div>
      </section>
  )
}

export default About
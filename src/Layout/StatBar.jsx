import React from 'react'

const StatBar = () => {
  return (
    <section className="border-y border-border-brand bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-primary-text">
                  {s.value}
                </div>
                <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-muted-text">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default StatBar
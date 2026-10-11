import { GraduationCap } from "lucide-react";

const MentorHero = ({ mentorInfo }) => {
  return (
    <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-5 shadow-xs">
      <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

      <div className="relative z-10 flex items-center gap-4">
        
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-text text-lg font-bold text-bg sm:h-16 sm:w-16 sm:text-xl">
          {mentorInfo.name.charAt(0)}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-xl font-semibold tracking-tight text-primary-text sm:text-2xl">
              {mentorInfo.name}
            </h1>
            <span className="rounded-full border border-border-brand bg-surface2 px-2.5 py-0.5 text-[10px] font-medium text-muted-strong">
              {mentorInfo.role}
            </span>
          </div>

          <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-text sm:text-sm">
            <GraduationCap className="h-3.5 w-3.5" />
            {mentorInfo.cohort}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentorHero;
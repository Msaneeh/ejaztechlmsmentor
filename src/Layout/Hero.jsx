import { Play } from "lucide-react"
import { Badge } from "@/components/ui/badge";


const Hero = () => {
  return (
          <section className="relative overflow-hidden">
        
        <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-accent-dim blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-gold-dim blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-6 rounded-full border-border-brand bg-surface2 px-3 py-1 text-[11px] font-medium text-muted-strong"
            >
              <Sparkles className="mr-1.5 h-3 w-3 text-gold" />
              Cohort 3 Enrollment Now Open
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              From Zero to{" "}
              <span className="bg-gradient-to-r from-foreground to-muted-strong bg-clip-text text-transparent">
                AI Engineer
              </span>{" "}
              in 12 Weeks
            </h1>

            <p className="mt-6 text-base sm:text-lg text-muted-text leading-relaxed max-w-2xl mx-auto">
              A structured, mentor-led program that takes you from Python basics
              to building production machine learning models — with real projects,
              live feedback, and a community that has your back.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                className="btn-primary h-11 rounded-full px-6 text-sm font-medium"
              >
                <Link to="/auth">
                  Start Your Journey
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="btn-glass h-11 rounded-full px-6 text-sm font-medium"
              >
                <a href="#phases">
                  <Play className="mr-1.5 h-4 w-4" />
                  View Curriculum
                </a>
              </Button>
            </div>

            <p className="mt-4 text-[11px] text-muted-text">
              No credit card required · Free to explore
            </p>
          </div>
        </div>
      </section>
  )
}

export default Hero;
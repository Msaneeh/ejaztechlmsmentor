import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Users,
  Award,
  Video,
  Code2,
  Brain,
  Rocket,
  CheckCircle2,
  Star,
  Play,
 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";


const LandingPage = () => {
  const phases = [
    {
      number: "01",
      title: "Foundations of AI",
      description:
        "Python, NumPy, Pandas, linear algebra, and data visualization — the bedrock every AI practitioner needs.",
      icon: Brain,
    },
    {
      number: "02",
      title: "Supervised Machine Learning",
      description:
        "Regression, classification, decision trees, SVMs, and model evaluation through hands-on labs.",
      icon: Code2,
    },
    {
      number: "03",
      title: "Unsupervised & Deep Learning",
      description:
        "Clustering, PCA, neural networks, and TensorFlow — cap off with a real-world capstone.",
      icon: Rocket,
    },
  ];

  const features = [
    {
      icon: Video,
      title: "Live Mentor Sessions",
      description:
        "Weekly evaluation calls with industry mentors to review progress, unblock challenges, and guide your path.",
    },
    {
      icon: Code2,
      title: "Hands-on Projects",
      description:
        "Every concept is applied immediately — build notebooks, train models, and ship real AI projects.",
    },
    {
      icon: Users,
      title: "Cohort Community",
      description:
        "Learn alongside driven peers in a private community. Share wins, ask questions, and grow together.",
    },
    {
      icon: Award,
      title: "Verified Certificates",
      description:
        "Earn a shareable certificate for every phase you complete — verified and LinkedIn-ready.",
    },
    {
      icon: Sparkles,
      title: "Personalized Feedback",
      description:
        "Get detailed code reviews and project feedback from mentors who've shipped production ML systems.",
    },
    {
      icon: Rocket,
      title: "Career Support",
      description:
        "Portfolio reviews, interview prep, and job referrals from our network of hiring partners.",
    },
  ];

  const stats = [
    { value: "500+", label: "Learners Trained" },
    { value: "3", label: "Structured Phases" },
    { value: "12", label: "Weeks Program" },
    { value: "94%", label: "Completion Rate" },
  ];

  const testimonials = [
    {
      name: "Aisha Bello",
      role: "ML Engineer @ Fintech Startup",
      quote:
        "The hands-on projects and mentor feedback completely changed how I approach machine learning. I landed my first ML role 2 months after finishing.",
    },
    {
      name: "Chinedu Okafor",
      role: "Data Scientist @ Healthcare AI",
      quote:
        "I came in knowing basic Python and left building production-grade models. The phase structure made it easy to stay consistent.",
    },
    {
      name: "Fatima Yusuf",
      role: "AI Research Intern",
      quote:
        "The community and mentors are unmatched. Every question I asked was answered thoughtfully. It feels like a real apprenticeship.",
    },
  ];

  return (
    <div className="min-h-screen bg-bg text-primary-text">
     <Navbar />

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        {/* Decorative orbs */}
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

      {/* ============ STATS BAR ============ */}
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

      {/* ============ ABOUT ============ */}
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

      {/* ============ PHASES ============ */}
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

      {/* ============ FEATURES ============ */}
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

      {/* ============ TESTIMONIALS ============ */}
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

      {/* ============ CTA ============ */}
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

      {/* ============ FOOTER ============ */}
      
      
    </div>
  );
};

export default LandingPage;
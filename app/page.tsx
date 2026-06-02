import Link from 'next/link'
import { ArrowRight, Cloud, Users, Calendar, Award, Zap, Shield, Brain, BarChart3, ChevronRight } from 'lucide-react'

const stats = [
  { value: '589+', label: 'Community Members' },
  { value: '4.8★', label: 'Member Rating' },
  { value: '3+', label: 'Events Hosted' },
  { value: '917', label: 'Global SBG Network' },
]

const pillars = [
  {
    icon: <Cloud size={28} />,
    title: 'Cloud Fundamentals',
    description: 'Master AWS core services — compute, storage, networking — and understand how cloud infrastructure powers modern applications.',
    tag: 'Foundation',
  },
  {
    icon: <Shield size={28} />,
    title: 'Security & Compliance',
    description: 'Learn cloud security best practices, IAM, encryption, and how to architect secure, compliant systems on AWS.',
    tag: 'Security',
  },
  {
    icon: <Brain size={28} />,
    title: 'AI & Machine Learning',
    description: 'Harness AWS SageMaker, Bedrock, and Rekognition to build intelligent applications and deploy ML models at scale.',
    tag: 'AI/ML',
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Business Analytics',
    description: 'Use AWS data services to transform raw data into actionable insights that drive real business transformation.',
    tag: 'Analytics',
  },
  {
    icon: <Zap size={28} />,
    title: 'Hands-On Projects',
    description: 'Apply theoretical knowledge through real-world AWS projects, gaining portfolio-worthy experience in the cloud.',
    tag: 'Practice',
  },
  {
    icon: <Award size={28} />,
    title: 'AWS Certifications',
    description: 'Get guided preparation for AWS certifications that validate your expertise and open doors to top tech careers.',
    tag: 'Career',
  },
]

const upcomingEvent = {
  title: 'AWS Student Community Day 2026',
  date: 'June 13, 2026',
  time: '10:00 AM PKT',
  location: 'Islamabad (Venue TBA)',
  attendees: 96,
  description: 'A full-day, city-wide Cloud & DevOps conference bringing together students, developers, AWS Cloud Captains, Community Builders, and industry professionals from across Islamabad and beyond.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 grid-bg opacity-60" />

        {/* Radial glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
             style={{ background: 'radial-gradient(circle, rgba(255,153,0,0.08) 0%, transparent 70%)' }} />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
             style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)' }} />

        {/* Horizontal scan line */}
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-aws-orange/30 to-transparent"
             style={{ top: '30%' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
          <div className="max-w-4xl">
            {/* Tag */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-px bg-aws-orange" />
              <span className="section-tag">AWS Student Builder Group · QAU Islamabad</span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold text-white leading-[0.95] mb-8 orange-glow"
                style={{ fontSize: 'clamp(3rem, 9vw, 7rem)', letterSpacing: '-0.03em' }}>
              BUILD THE
              <br />
              <span className="text-aws-orange">FUTURE</span>
              <br />
              IN THE CLOUD
            </h1>

            <p className="font-body text-aws-muted text-lg leading-relaxed max-w-xl mb-12">
              Pakistan's premier student-led AWS community at Quaid-i-Azam University.
              We don't just learn cloud — we build careers, projects, and the future of technology.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="https://www.meetup.com/aws-sbg-at-quaid-i-azam-university-islamabad/" target="_blank"
                    className="btn-primary flex items-center gap-2">
                Join for Free
                <ArrowRight size={16} />
              </Link>
              <Link href="/events" className="btn-outline flex items-center gap-2">
                View Events
                <Calendar size={16} />
              </Link>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="card-glass p-6 transition-all duration-300">
                <div className="font-display font-bold text-aws-orange mb-1"
                     style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
                  {stat.value}
                </div>
                <div className="font-mono text-xs text-aws-muted tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom diagonal */}
        <div className="absolute bottom-0 left-0 right-0 h-20"
             style={{ background: 'linear-gradient(to bottom, transparent, #060810)' }} />
      </section>

      {/* ── MISSION STATEMENT ── */}
      <section className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag">Our Mission</span>
              <h2 className="section-title mt-4 mb-6">
                Democratizing Cloud
                <br />
                <span className="text-aws-orange">Education in Pakistan</span>
              </h2>
              <p className="font-body text-aws-muted leading-relaxed text-base mb-6">
                AWS Student Builder Group QAU is a student-led, student-driven community focused on making cloud technology accessible to every student at Quaid-i-Azam University.
              </p>
              <p className="font-body text-aws-muted leading-relaxed text-base mb-8">
                We believe that cloud skills are the foundation of tomorrow's economy — and every Pakistani student deserves access to world-class cloud education, hands-on experience, and a network that accelerates their career.
              </p>
              <Link href="/about" className="btn-outline flex items-center gap-2 w-fit">
                Our Full Story
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* Visual element */}
            <div className="relative h-80 lg:h-full min-h-80">
              <div className="absolute inset-0 grid-bg opacity-40 rounded" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display font-bold text-aws-orange/20 select-none leading-none"
                       style={{ fontSize: 'clamp(6rem, 15vw, 12rem)' }}>
                    AWS
                  </div>
                  <div className="font-mono text-xs text-aws-orange/40 tracking-[0.5em] uppercase mt-2">
                    Student Builder Group QAU
                  </div>
                </div>
              </div>
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-aws-orange/40" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-aws-orange/40" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-aws-orange/40" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-aws-orange/40" />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="py-28 bg-aws-navy/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-tag">What We Do</span>
            <h2 className="section-title mt-4">
              Six Pillars of
              <br />
              <span className="text-aws-orange">Cloud Excellence</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <div key={i} className="card-glass p-8 group transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-aws-orange/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start justify-between mb-5">
                  <div className="text-aws-orange">{pillar.icon}</div>
                  <span className="font-mono text-[10px] text-aws-orange/60 tracking-widest uppercase border border-aws-orange/20 px-2 py-1">
                    {pillar.tag}
                  </span>
                </div>
                <h3 className="font-display font-bold text-white text-xl mb-3 tracking-wide">{pillar.title}</h3>
                <p className="font-body text-aws-muted text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED EVENT ── */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="section-tag">Upcoming</span>
              <h2 className="section-title mt-4">Don't Miss This</h2>
            </div>
            <Link href="/events" className="btn-outline hidden md:flex items-center gap-2">
              All Events
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="card-glass p-10 relative overflow-hidden group">
            {/* Accent corner */}
            <div className="absolute top-0 left-0 w-1 h-full bg-aws-orange" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-aws-orange via-aws-orange/50 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-aws-orange/15 border border-aws-orange/30 text-aws-orange font-mono text-[10px] tracking-widest uppercase px-3 py-1">
                    Upcoming Event
                  </span>
                  <span className="font-mono text-xs text-aws-muted">{upcomingEvent.attendees} attending</span>
                </div>
                <h3 className="font-display font-bold text-white text-3xl mb-4 tracking-wide">
                  {upcomingEvent.title}
                </h3>
                <p className="font-body text-aws-muted text-sm leading-relaxed mb-6 max-w-lg">
                  {upcomingEvent.description}
                </p>
                <div className="flex flex-wrap gap-6 text-sm font-body text-aws-muted">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-aws-orange" />
                    {upcomingEvent.date} · {upcomingEvent.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={14} className="text-aws-orange" />
                    {upcomingEvent.attendees} Registered
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:items-end pl-6 lg:pl-0">
                <Link
                  href="https://www.meetup.com/aws-sbg-at-quaid-i-azam-university-islamabad/events/314304932/"
                  target="_blank"
                  className="btn-primary flex items-center gap-2"
                >
                  Register Now
                  <ArrowRight size={16} />
                </Link>
                <Link href="/events" className="btn-outline flex items-center gap-2 text-center">
                  View All Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-28 bg-aws-orange/5 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px]"
             style={{ background: 'radial-gradient(ellipse, rgba(255,153,0,0.1) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="section-tag">Join Us</span>
          <h2 className="section-title mt-4 mb-6">
            Ready to Build in
            <br />
            <span className="text-aws-orange">the Cloud?</span>
          </h2>
          <p className="font-body text-aws-muted text-base leading-relaxed mb-10">
            Join 589+ students who are already learning, building, and launching their cloud careers with AWS Student Builder Group QAU. Membership is completely free.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="https://www.meetup.com/aws-sbg-at-quaid-i-azam-university-islamabad/" target="_blank"
                  className="btn-primary">
              Join on Meetup — Free
            </Link>
            <Link href="/contact" className="btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

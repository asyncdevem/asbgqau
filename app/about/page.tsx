import Link from 'next/link'
import { ArrowRight, Target, Eye, Heart, Lightbulb } from 'lucide-react'

const values = [
  {
    icon: <Target size={24} />,
    title: 'Purpose-Driven Learning',
    description: 'Every workshop, event, and resource we create is designed with one goal — making you job-ready and cloud-certified faster.',
  },
  {
    icon: <Eye size={24} />,
    title: 'Radical Transparency',
    description: 'We share real-world lessons, failures, and wins openly. Knowledge grows when shared freely among a community.',
  },
  {
    icon: <Heart size={24} />,
    title: 'Community First',
    description: 'We are students helping students. Our peer-learning model means mentors and mentees grow together at every level.',
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Build, Don't Just Learn",
    description: "Theory without practice is incomplete. We prioritize hands-on AWS projects that go into your portfolio and your career.",
  },
]

const milestones = [
  { year: '2023', title: 'Club Founded', desc: 'AWS Student Builder Group QAU was established as part of the AWS Student Builder Groups global network.' },
  { year: '2024', title: 'First Major Event', desc: 'Hosted Cloud Nexus, bringing 71 students together for an immersive cloud workshop day.' },
  { year: '2025', title: 'AWS CONNECT', desc: 'Organized AWS CONNECT at Daftarkhawan Vanguard with 46 attendees and industry speakers.' },
  { year: '2026', title: 'Community Day', desc: 'Planning the biggest event yet — AWS Student Community Day Islamabad 2026 with 96+ pre-registrations.' },
]

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen">

      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px]"
             style={{ background: 'radial-gradient(circle at 80% 20%, rgba(255,153,0,0.07) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="section-tag">Who We Are</span>
            <h1 className="section-title mt-4 mb-8">
              More Than a Club.
              <br />
              <span className="text-aws-orange">A Movement.</span>
            </h1>
            <p className="font-body text-aws-muted text-lg leading-relaxed mb-6">
              AWS Student Builder Group QAU is Pakistan's most active student-led AWS community. Born at Quaid-i-Azam University, we've grown to 589+ members and are part of a worldwide network of 917 AWS Student Builder Groups.
            </p>
            <p className="font-body text-aws-muted text-base leading-relaxed">
              Our story is simple: a group of students saw a gap between academic education and the cloud skills demanded by industry — and decided to close it themselves.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 bg-aws-navy/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-glass p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-aws-orange" />
              <div className="pl-6">
                <span className="section-tag">Mission</span>
                <p className="font-display font-bold text-white text-2xl mt-4 leading-snug tracking-wide">
                  "To teach students the AWS Cloud and its use cases — security, AI, analytics, and business transformation — through hands-on experience and real projects."
                </p>
              </div>
            </div>
            <div className="card-glass p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-aws-accent" />
              <div className="pl-6">
                <span className="section-tag" style={{ color: '#00D4FF' }}>Vision</span>
                <p className="font-display font-bold text-white text-2xl mt-4 leading-snug tracking-wide">
                  "A Pakistan where every student has access to cloud education that launches real careers — and where QAU leads that charge in Islamabad."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About description */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-tag">Our Story</span>
              <h2 className="section-title mt-4 mb-8">
                Student-Led.
                <br />
                <span className="text-aws-orange">Industry-Ready.</span>
              </h2>
              <div className="space-y-4 font-body text-aws-muted text-sm leading-relaxed">
                <p>
                  AWS Student Builder Group QAU was founded on a simple belief: students learn best when they're building real things for real reasons. We're not a lecture series — we're a launchpad.
                </p>
                <p>
                  Our curriculum covers the full spectrum of AWS Cloud services, from foundational compute and storage to advanced AI/ML workloads, serverless architecture, and cloud security. But more than AWS skills, we teach students how to think like cloud architects and present like tech professionals.
                </p>
                <p>
                  Through events like Cloud Nexus and AWS CONNECT, we bring students face-to-face with AWS Cloud Captains, Community Builders, and working professionals who share real career pathways in Pakistan's growing tech sector.
                </p>
                <p>
                  As part of the official AWS Student Builder Groups program, our members get access to AWS resources, credits, certifications guidance, and a global peer network spanning 917 groups worldwide.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-4">
              {values.map((v, i) => (
                <div key={i} className="card-glass p-6 flex gap-5 items-start group transition-all duration-300">
                  <div className="text-aws-orange flex-shrink-0 mt-1">{v.icon}</div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg mb-2 tracking-wide">{v.title}</h3>
                    <p className="font-body text-aws-muted text-sm leading-relaxed">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-aws-navy/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="section-tag">Journey</span>
            <h2 className="section-title mt-4">
              Our <span className="text-aws-orange">Milestones</span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-16 top-0 bottom-0 w-px bg-aws-orange/20" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <div className="relative flex-shrink-0">
                    <div className="w-32 font-mono text-right text-aws-orange font-bold text-lg pr-8">{m.year}</div>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 bg-aws-orange rotate-45" />
                  </div>
                  <div className="card-glass p-6 flex-1">
                    <h3 className="font-display font-bold text-white text-xl mb-2 tracking-wide">{m.title}</h3>
                    <p className="font-body text-aws-muted text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="section-title mb-6">
            Be Part of
            <br />
            <span className="text-aws-orange">Our Story</span>
          </h2>
          <p className="font-body text-aws-muted mb-10">
            Every great community is built by people who show up. Join AWS Student Builder Group QAU and write the next chapter with us.
          </p>
          <Link href="https://www.meetup.com/aws-sbg-at-quaid-i-azam-university-islamabad/" target="_blank"
                className="btn-primary inline-flex items-center gap-2">
            Join the Community
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  )
}

import Link from 'next/link'
import { Instagram, Linkedin, ExternalLink, Mail, MapPin, MessageSquare } from 'lucide-react'

const contactChannels = [
  {
    icon: <ExternalLink size={24} />,
    title: 'Join on Meetup',
    description: 'Sign up for free and RSVP to events. This is the primary channel for all club activity and event registrations.',
    action: 'meetup.com/aws-sbg-at-quaid-i-azam-university-islamabad',
    href: 'https://www.meetup.com/aws-sbg-at-quaid-i-azam-university-islamabad/',
    cta: 'Visit Meetup',
    primary: true,
  },
  {
    icon: <Instagram size={24} />,
    title: 'Instagram',
    description: 'Follow us for event highlights, AWS tips, member stories, and behind-the-scenes content.',
    action: '@awscloudclubqau',
    href: 'https://www.instagram.com/awscloudclubqau',
    cta: 'Follow Us',
    primary: false,
  },
  {
    icon: <Linkedin size={24} />,
    title: 'LinkedIn',
    description: 'Connect professionally, see career opportunities shared by our network, and follow club updates.',
    action: 'AWS Student Builder Group QAU',
    href: 'https://www.linkedin.com/company/aws-cloud-club-qau/',
    cta: 'Connect',
    primary: false,
  },
]

const faqs = [
  {
    q: 'Who can join AWS Student Builder Group QAU?',
    a: 'Any student currently enrolled at Quaid-i-Azam University can join. Membership is completely free — just sign up on Meetup and attend our events.',
  },
  {
    q: 'Do I need prior cloud experience to join?',
    a: 'Absolutely not. We welcome students at all levels — from complete beginners to those already working with AWS. Our events are designed to serve everyone.',
  },
  {
    q: 'How do I attend an event?',
    a: 'Register on our Meetup page and RSVP to any event you want to attend. We\'ll send you all details (venue, time, agenda) closer to the date.',
  },
  {
    q: 'Can I speak at or sponsor an event?',
    a: 'Yes! We love working with AWS professionals, companies, and community builders. Reach out to us on LinkedIn or Instagram with your proposal.',
  },
  {
    q: 'How do I join the core team?',
    a: 'We open applications for team positions each semester. Keep an eye on our Instagram and Meetup for announcements. You can also reach out directly to express interest.',
  },
  {
    q: 'Is AWS Student Builder Group QAU officially affiliated with Amazon?',
    a: 'Yes. We are an official AWS Student Builder Group — part of Amazon\'s global network of student-led AWS communities. This gives us access to AWS resources, credits, and the SBG program benefits.',
  },
]

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen">

      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2"
             style={{ background: 'radial-gradient(circle, rgba(255,153,0,0.06) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="section-tag">Get in Touch</span>
          <h1 className="section-title mt-4 mb-6">
            Let's Start a
            <br />
            <span className="text-aws-orange">Conversation</span>
          </h1>
          <p className="font-body text-aws-muted text-lg max-w-xl">
            Whether you want to join, speak at an event, partner with us, or just learn more about the AWS Student Builder Group — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact channels */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {contactChannels.map((channel, i) => (
              <div key={i} className={`card-glass p-8 relative overflow-hidden group transition-all duration-300 ${
                channel.primary ? 'border-aws-orange/30' : ''
              }`}>
                {channel.primary && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-aws-orange to-aws-orange/30" />
                )}
                <div className={`mb-5 ${channel.primary ? 'text-aws-orange' : 'text-aws-muted group-hover:text-aws-orange transition-colors'}`}>
                  {channel.icon}
                </div>
                <h3 className="font-display font-bold text-white text-2xl mb-3 tracking-wide">{channel.title}</h3>
                <p className="font-body text-aws-muted text-sm leading-relaxed mb-4">{channel.description}</p>
                <p className="font-mono text-xs text-aws-orange/70 mb-6 break-all">{channel.action}</p>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 ${channel.primary ? 'btn-primary' : 'btn-outline'} text-xs`}
                >
                  {channel.cta}
                </a>
              </div>
            ))}
          </div>

          {/* Location */}
          <div className="card-glass p-10 mb-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-aws-accent" style={{ background: '#00D4FF' }} />
            <div className="pl-6">
              <div className="flex items-center gap-3 mb-6">
                <MapPin size={20} className="text-aws-orange" />
                <span className="section-tag">Find Us</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display font-bold text-white text-2xl mb-4 tracking-wide">Quaid-i-Azam University</h3>
                  <p className="font-body text-aws-muted text-sm leading-relaxed mb-2">University Road, Islamabad</p>
                  <p className="font-body text-aws-muted text-sm leading-relaxed mb-2">Punjab, Pakistan 45320</p>
                  <p className="font-mono text-xs text-aws-orange mt-4 tracking-wider">
                    Events are also held at partner venues across Islamabad — check individual event pages for locations.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="card-glass p-6 text-center w-full max-w-xs">
                    <div className="font-mono text-xs text-aws-muted mb-2 tracking-widest uppercase">Part of</div>
                    <div className="font-display font-bold text-white text-lg mb-1">AWS Student Builder Groups</div>
                    <div className="font-mono text-xs text-aws-orange">917 Groups Worldwide</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <div className="mb-12">
              <span className="section-tag">FAQ</span>
              <h2 className="section-title mt-4">
                Common <span className="text-aws-orange">Questions</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, i) => (
                <div key={i} className="card-glass p-8 group transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-aws-orange font-bold text-lg leading-none flex-shrink-0 mt-1">?</span>
                    <div>
                      <h4 className="font-display font-bold text-white text-lg mb-3 tracking-wide leading-snug">{faq.q}</h4>
                      <p className="font-body text-aws-muted text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-aws-navy/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="section-tag">Still Have Questions?</span>
          <h2 className="section-title mt-4 mb-6">
            We're One
            <br />
            <span className="text-aws-orange">Message Away</span>
          </h2>
          <p className="font-body text-aws-muted mb-10">
            The fastest way to reach us is via Instagram DMs or LinkedIn. We typically respond within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://www.instagram.com/awscloudclubqau" target="_blank" rel="noopener noreferrer"
               className="btn-primary inline-flex items-center gap-2">
              <Instagram size={16} />
              DM on Instagram
            </a>
            <a href="https://www.linkedin.com/company/aws-cloud-club-qau/" target="_blank" rel="noopener noreferrer"
               className="btn-outline inline-flex items-center gap-2">
              <Linkedin size={16} />
              Message on LinkedIn
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

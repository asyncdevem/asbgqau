import Link from 'next/link'
import { Calendar, MapPin, Users, ArrowRight, Clock } from 'lucide-react'

const upcomingEvents = [
  {
    id: 'community-day-2026',
    title: 'AWS Student Community Day Islamabad 2026',
    date: 'June 13, 2026',
    time: '10:00 AM PKT',
    location: 'Islamabad (Venue TBA)',
    attendees: 96,
    status: 'upcoming',
    tags: ['Conference', 'Networking', 'Workshops'],
    description: `A full-day, city-wide Cloud & DevOps conference bringing together students, developers, AWS Cloud Captains, Community Builders, User Group Leaders, and industry professionals from across Islamabad and beyond.

What's inside:
• Expert talks by AWS professionals & community leaders
• Hands-on workshops & real-world cloud use cases
• Panel discussions on careers, certifications & industry trends
• Networking with the AWS community across Pakistan
• Swags, giveaways & an engaging community experience`,
    meetupUrl: 'https://www.meetup.com/aws-sbg-at-quaid-i-azam-university-islamabad/events/314304932/',
  },
]

const pastEvents = [
  {
    id: 'aws-connect',
    title: 'AWS CONNECT',
    date: 'February 14, 2025',
    time: '10:00 AM PKT',
    location: 'Daftarkhawan Vanguard, 5-A Constitution Ave, F-5/1, Islamabad',
    attendees: 46,
    status: 'past',
    tags: ['Networking', 'Community'],
    description: 'AWS CONNECT brought together cloud enthusiasts for a day of networking, talks, and community building. Participants connected with AWS professionals and fellow students passionate about cloud technology.',
    meetupUrl: 'https://www.meetup.com/aws-sbg-at-quaid-i-azam-university-islamabad/events/313040912/',
  },
  {
    id: 'cloud-nexus',
    title: 'Cloud Nexus',
    date: 'December 27, 2025',
    time: '10:00 AM PKT',
    location: 'Daftarkhawan Vanguard, 5-A Constitution Ave, F-5/1, Islamabad',
    attendees: 71,
    status: 'past',
    tags: ['Workshop', 'Cloud', 'Hands-On'],
    description: 'Cloud Nexus was our biggest event of the year — an immersive day of cloud workshops, expert sessions, and hands-on labs where students built real AWS projects under the guidance of experienced practitioners.',
    meetupUrl: 'https://www.meetup.com/aws-sbg-at-quaid-i-azam-university-islamabad/events/312286597/',
  },
]

function EventCard({ event, featured = false }: { event: typeof upcomingEvents[0], featured?: boolean }) {
  return (
    <div className={`card-glass transition-all duration-300 relative overflow-hidden group ${featured ? 'p-10' : 'p-8'}`}>
      {event.status === 'upcoming' && (
        <div className="absolute top-0 left-0 w-1 h-full bg-aws-orange" />
      )}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-aws-orange/60 via-aws-orange/20 to-transparent" />

      <div className={`${event.status === 'upcoming' ? 'pl-6' : ''}`}>
        {/* Tags & Status */}
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <span className={`font-mono text-[10px] tracking-widest uppercase px-3 py-1 border ${
            event.status === 'upcoming'
              ? 'bg-aws-orange/15 border-aws-orange/30 text-aws-orange'
              : 'bg-white/5 border-white/10 text-aws-muted'
          }`}>
            {event.status === 'upcoming' ? '● Upcoming' : 'Past Event'}
          </span>
          {event.tags.map((tag) => (
            <span key={tag} className="font-mono text-[10px] tracking-widest uppercase px-3 py-1 border border-aws-orange/15 text-aws-muted">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className={`font-display font-bold text-white mb-4 tracking-wide leading-tight ${
          featured ? 'text-3xl' : 'text-2xl'
        }`}>
          {event.title}
        </h3>

        {/* Meta */}
        <div className="flex flex-wrap gap-5 mb-6 text-sm font-body text-aws-muted">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-aws-orange" />
            {event.date}
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-aws-orange" />
            {event.time}
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-aws-orange" />
            {event.location}
          </div>
          <div className="flex items-center gap-2">
            <Users size={14} className="text-aws-orange" />
            {event.attendees} {event.status === 'upcoming' ? 'Registered' : 'Attended'}
          </div>
        </div>

        {/* Description */}
        <p className="font-body text-aws-muted text-sm leading-relaxed mb-8 whitespace-pre-line max-w-2xl">
          {event.description}
        </p>

        {/* Action */}
        <Link
          href={event.meetupUrl}
          target="_blank"
          className={`inline-flex items-center gap-2 ${
            event.status === 'upcoming' ? 'btn-primary' : 'btn-outline'
          }`}
        >
          {event.status === 'upcoming' ? 'Register Now' : 'View Recap'}
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  )
}

export default function EventsPage() {
  return (
    <div className="pt-20 min-h-screen">

      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2"
             style={{ background: 'radial-gradient(circle, rgba(255,153,0,0.06) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="section-tag">Events</span>
          <h1 className="section-title mt-4 mb-6">
            Where Cloud
            <br />
            <span className="text-aws-orange">Builders Meet</span>
          </h1>
          <p className="font-body text-aws-muted text-lg max-w-xl">
            From workshops to conferences, every AWS Student Builder Group event is an opportunity to learn something real, build something new, and connect with people who share your ambitions.
          </p>
        </div>
      </section>

      {/* Upcoming */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-3 h-3 bg-aws-orange rounded-full animate-pulse" />
            <h2 className="font-display font-bold text-white text-2xl tracking-wide">Upcoming Events</h2>
          </div>
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} featured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Past */}
      <section className="py-16 bg-aws-navy/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-3 h-3 border border-aws-muted" style={{ transform: 'rotate(45deg)' }} />
            <h2 className="font-display font-bold text-white text-2xl tracking-wide">Past Events</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Want to speak? */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="section-tag">Collaborate</span>
          <h2 className="section-title mt-4 mb-6">
            Want to Speak or
            <br />
            <span className="text-aws-orange">Partner With Us?</span>
          </h2>
          <p className="font-body text-aws-muted mb-10">
            We're always looking for AWS practitioners, cloud professionals, and organizations who want to share knowledge with Pakistan's brightest student cloud community.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  )
}

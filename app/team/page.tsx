import { Linkedin, Instagram, Github, Globe } from 'lucide-react'

// ── REPLACE THESE WITH REAL TEAM DATA ──
const leadership = [
  {
    name: 'Club President',
    role: 'President & Founder',
    department: 'Computer Science',
    bio: 'Visionary behind AWS Student Builder Group QAU. AWS Certified Solutions Architect and passionate about making cloud education accessible to every student in Pakistan.',
    avatar: 'https://api.dicebear.com/7.x/bottts-neutral/svg?seed=president&backgroundColor=0a0e1a',
    linkedin: '#',
    github: '#',
    badge: 'AWS Certified',
  },
  {
    name: 'VP Operations',
    role: 'Vice President — Operations',
    department: 'Software Engineering',
    bio: 'Orchestrates club logistics, partnerships, and event production. Specializes in AWS DevOps and CI/CD pipelines.',
    avatar: 'https://api.dicebear.com/7.x/bottts-neutral/svg?seed=vp-ops&backgroundColor=0a0e1a',
    linkedin: '#',
    github: '#',
    badge: 'AWS Certified',
  },
  {
    name: 'VP Technical',
    role: 'Vice President — Technical',
    department: 'Computer Science',
    bio: 'Designs the club\'s technical curriculum and hands-on workshop content. Expert in AWS AI/ML services and cloud architecture.',
    avatar: 'https://api.dicebear.com/7.x/bottts-neutral/svg?seed=vp-tech&backgroundColor=0a0e1a',
    linkedin: '#',
    github: '#',
    badge: 'AWS AI Practitioner',
  },
]

const coreteam = [
  {
    name: 'Head of Events',
    role: 'Events Lead',
    department: 'Information Technology',
    avatar: 'https://api.dicebear.com/7.x/bottts-neutral/svg?seed=events&backgroundColor=0a0e1a',
    linkedin: '#',
  },
  {
    name: 'Head of Marketing',
    role: 'Marketing Lead',
    department: 'Business & IT',
    avatar: 'https://api.dicebear.com/7.x/bottts-neutral/svg?seed=marketing&backgroundColor=0a0e1a',
    linkedin: '#',
  },
  {
    name: 'Head of Design',
    role: 'Creative Lead',
    department: 'Software Engineering',
    avatar: 'https://api.dicebear.com/7.x/bottts-neutral/svg?seed=design&backgroundColor=0a0e1a',
    linkedin: '#',
  },
  {
    name: 'Head of Education',
    role: 'Education Lead',
    department: 'Computer Science',
    avatar: 'https://api.dicebear.com/7.x/bottts-neutral/svg?seed=education&backgroundColor=0a0e1a',
    linkedin: '#',
  },
  {
    name: 'Community Manager',
    role: 'Community Lead',
    department: 'Information Technology',
    avatar: 'https://api.dicebear.com/7.x/bottts-neutral/svg?seed=community&backgroundColor=0a0e1a',
    linkedin: '#',
  },
  {
    name: 'Social Media Lead',
    role: 'Social & Content',
    department: 'Business & IT',
    avatar: 'https://api.dicebear.com/7.x/bottts-neutral/svg?seed=social&backgroundColor=0a0e1a',
    linkedin: '#',
  },
]

// ── Photo gallery (replace with your actual event photos) ──
const galleryPlaceholders = [
  { label: 'Cloud Nexus 2025', note: 'Replace with event photo' },
  { label: 'AWS CONNECT 2025', note: 'Replace with event photo' },
  { label: 'Workshop Day', note: 'Replace with event photo' },
  { label: 'Team Meetup', note: 'Replace with team photo' },
]

export default function TeamPage() {
  return (
    <div className="pt-20 min-h-screen">

      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="section-tag">The People</span>
          <h1 className="section-title mt-4 mb-6">
            Meet the Team
            <br />
            <span className="text-aws-orange">Building the Future</span>
          </h1>
          <p className="font-body text-aws-muted text-lg max-w-xl">
            AWS Student Builder Group QAU is powered by a passionate team of students who volunteer their time to build Pakistan's most active university cloud community.
          </p>
        </div>
      </section>

      {/* ── IMPORTANT NOTICE FOR CLUB ── */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border border-aws-orange/30 bg-aws-orange/5 p-6 font-mono text-xs text-aws-orange/80 tracking-wider">
            <span className="text-aws-orange font-bold">// DEVELOPER NOTE: </span>
            Replace the placeholder team data in <code>/app/team/page.tsx</code> with your actual team members' names, roles, photos, LinkedIn profiles, and bios. The avatars use DiceBear API — swap with real photos via Next.js Image component.
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="section-tag">Leadership</span>
            <h2 className="section-title mt-3">
              Executive <span className="text-aws-orange">Board</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((member, i) => (
              <div key={i} className="card-glass p-8 group transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aws-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Avatar */}
                <div className="relative w-20 h-20 mb-6">
                  <div className="w-20 h-20 hex-clip bg-aws-navy border border-aws-orange/30 overflow-hidden">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-aws-orange/15 border border-aws-orange/30 px-2 py-0.5">
                    <span className="font-mono text-[8px] text-aws-orange tracking-widest uppercase">{member.badge}</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-white text-2xl tracking-wide mb-1">{member.name}</h3>
                <p className="text-aws-orange font-mono text-xs tracking-wider uppercase mb-1">{member.role}</p>
                <p className="text-aws-muted font-mono text-xs mb-4">{member.department}</p>
                <p className="font-body text-aws-muted text-sm leading-relaxed mb-6">{member.bio}</p>

                <div className="flex gap-3">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                     className="w-8 h-8 border border-aws-orange/20 flex items-center justify-center text-aws-muted hover:text-aws-orange hover:border-aws-orange transition-colors">
                    <Linkedin size={14} />
                  </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer"
                     className="w-8 h-8 border border-aws-orange/20 flex items-center justify-center text-aws-muted hover:text-aws-orange hover:border-aws-orange transition-colors">
                    <Github size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-16 bg-aws-navy/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="section-tag">Core Team</span>
            <h2 className="section-title mt-3">
              The Crew That
              <span className="text-aws-orange"> Makes It Happen</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {coreteam.map((member, i) => (
              <div key={i} className="card-glass p-5 text-center group transition-all duration-300">
                <div className="w-14 h-14 hex-clip bg-aws-navy border border-aws-orange/20 overflow-hidden mx-auto mb-4">
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-display font-bold text-white text-sm tracking-wide mb-1">{member.name}</h4>
                <p className="font-mono text-[9px] text-aws-orange tracking-wider uppercase mb-0.5">{member.role}</p>
                <p className="font-mono text-[9px] text-aws-muted">{member.department}</p>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center justify-center mt-3 text-aws-muted hover:text-aws-orange transition-colors">
                  <Linkedin size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="section-tag">Gallery</span>
            <h2 className="section-title mt-3">
              Moments That
              <span className="text-aws-orange"> Define Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryPlaceholders.map((item, i) => (
              <div key={i} className={`card-glass relative overflow-hidden group ${i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
                   style={{ minHeight: i === 0 ? '320px' : '150px' }}>
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <div className="font-mono text-[10px] text-aws-orange tracking-widest uppercase mb-2 border border-aws-orange/30 px-3 py-1">
                    {item.label}
                  </div>
                  <p className="font-mono text-[9px] text-aws-muted tracking-wider text-center">{item.note}</p>
                </div>
                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-aws-orange/40" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-aws-orange/40" />
              </div>
            ))}
          </div>

          <p className="font-mono text-xs text-aws-muted text-center mt-6 tracking-wider">
            Follow us on{' '}
            <a href="https://www.instagram.com/awscloudclubqau" target="_blank" rel="noopener noreferrer"
               className="text-aws-orange hover:underline">@awscloudclubqau</a>{' '}
            for real-time photos and highlights.
          </p>
        </div>
      </section>

      {/* Join the team */}
      <section className="py-24 bg-aws-navy/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="section-tag">Join Us</span>
          <h2 className="section-title mt-4 mb-6">
            Want to Be on
            <br />
            <span className="text-aws-orange">This Page?</span>
          </h2>
          <p className="font-body text-aws-muted mb-10">
            We open applications for core team positions each semester. If you're passionate about cloud, community, and making a real difference at QAU — we want to hear from you.
          </p>
          <a href="/contact" className="btn-primary inline-flex items-center gap-2">
            Apply to Join the Team
          </a>
        </div>
      </section>

    </div>
  )
}

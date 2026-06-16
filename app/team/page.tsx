import { Linkedin, Instagram, Github, Globe } from 'lucide-react'

// ── TEAM DATA ──
const organizer = {
  name: 'Ali Mumtaz',
  role: 'Club Organizer',
  department: 'Quaid-i-Azam University',
  bio: 'Leading AWS Student Builder Group QAU with a vision to empower students through cloud computing education and hands-on AWS experience.',
  avatar: '/organizer/IMG_0853.png',
  linkedin: '#',
  github: '#',
  badge: 'Organizer',
}

const operationsTeam = [
  {
    name: 'Abdul Raheem',
    role: 'Operations Team',
    department: 'Operations',
    avatar: '/team-photos/Abdul Raheem.jpg',
    linkedin: '#',
  },
  {
    name: 'Abdul Wahab',
    role: 'Operations Team',
    department: 'Operations',
    avatar: '/team-photos/Abdul Wahab.png',
    linkedin: '#',
  },
  {
    name: 'Muhammad Saad',
    role: 'Operations Team',
    department: 'Operations',
    avatar: '/team-photos/Muhammad Saad.jpg',
    linkedin: '#',
  },
]

const mediaTeam = [
  {
    name: 'Zoha Manahil',
    role: 'Media Team',
    department: 'Media',
    avatar: '/team-photos/Zoha Manahail.jpg',
    linkedin: '#',
  },
  {
    name: 'Amna Abaid Ullah',
    role: 'Media Team',
    department: 'Media',
    avatar: 'https://api.dicebear.com/7.x/bottts-neutral/svg?seed=amna&backgroundColor=0a0e1a',
    linkedin: '#',
  },
  {
    name: 'Fatima Arif',
    role: 'Media Team',
    department: 'Media',
    avatar: 'https://api.dicebear.com/7.x/bottts-neutral/svg?seed=fatima&backgroundColor=0a0e1a',
    linkedin: '#',
  },
]

const designTeam = [
  {
    name: 'Aliha Bintul Huda',
    role: 'Design Team',
    department: 'Design',
    avatar: '/team-photos/Aliha Bintul Huda.jpg',
    linkedin: '#',
  },
  {
    name: 'Maryam Bashir',
    role: 'Design Team',
    department: 'Design',
    avatar: '/team-photos/Maryam Bashir.jpg',
    linkedin: '#',
  },
  {
    name: 'Hubab Masood',
    role: 'Design Team',
    department: 'Design',
    avatar: '/team-photos/Hubab Masood.jpg',
    linkedin: '#',
  },
]

const creativesTeam = [
  {
    name: 'Fajar Rana Naeem',
    role: 'Creatives Team',
    department: 'Creative',
    avatar: '/team-photos/Fajar Rana Naeem.jpg',
    linkedin: '#',
  },
  {
    name: 'Laiba Iftikhar',
    role: 'Creatives Team',
    department: 'Creative',
    avatar: '/team-photos/Laiba Iftikhar.jpg',
    linkedin: '#',
  },
  {
    name: 'Luqman Bhatti',
    role: 'Creatives Team',
    department: 'Creative',
    avatar: '/team-photos/Luqman Bhatti.jpg',
    linkedin: '#',
  },
]

const communityLead = {
  name: 'Mahnoor Shakeel',
  role: 'Community Engagement Lead',
  department: 'Community',
  avatar: '/team-photos/Mahnoor Shakeel.jpg',
  linkedin: '#',
}

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

      {/* Organizer */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="section-tag">Leadership</span>
            <h2 className="section-title mt-3">
              Club <span className="text-aws-orange">Organizer</span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="card-glass p-8 group transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aws-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Avatar */}
              <div className="relative w-24 h-24 mb-6 mx-auto">
                <div className="w-24 h-24 hex-clip bg-aws-navy border border-aws-orange/30 overflow-hidden">
                  <img
                    src={organizer.avatar}
                    alt={organizer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-aws-orange/15 border border-aws-orange/30 px-2 py-0.5">
                  <span className="font-mono text-[8px] text-aws-orange tracking-widest uppercase">{organizer.badge}</span>
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-display font-bold text-white text-2xl tracking-wide mb-1">{organizer.name}</h3>
                <p className="text-aws-orange font-mono text-xs tracking-wider uppercase mb-1">{organizer.role}</p>
                <p className="text-aws-muted font-mono text-xs mb-4">{organizer.department}</p>
                <p className="font-body text-aws-muted text-sm leading-relaxed mb-6">{organizer.bio}</p>

                <div className="flex gap-3 justify-center">
                  <a href={organizer.linkedin} target="_blank" rel="noopener noreferrer"
                     className="w-8 h-8 border border-aws-orange/20 flex items-center justify-center text-aws-muted hover:text-aws-orange hover:border-aws-orange transition-colors">
                    <Linkedin size={14} />
                  </a>
                  <a href={organizer.github} target="_blank" rel="noopener noreferrer"
                     className="w-8 h-8 border border-aws-orange/20 flex items-center justify-center text-aws-muted hover:text-aws-orange hover:border-aws-orange transition-colors">
                    <Github size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operations Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="section-tag">Operations</span>
            <h2 className="section-title mt-3">
              Operations <span className="text-aws-orange">Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {operationsTeam.map((member, i) => (
              <div key={i} className="card-glass p-6 text-center group transition-all duration-300">
                <div className="w-20 h-20 hex-clip bg-aws-navy border border-aws-orange/20 overflow-hidden mx-auto mb-4">
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-display font-bold text-white text-base tracking-wide mb-1">{member.name}</h4>
                <p className="font-mono text-[10px] text-aws-orange tracking-wider uppercase mb-0.5">{member.role}</p>
                <p className="font-mono text-[10px] text-aws-muted">{member.department}</p>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center justify-center mt-3 text-aws-muted hover:text-aws-orange transition-colors">
                  <Linkedin size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Team */}
      <section className="py-16 bg-aws-navy/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="section-tag">Media</span>
            <h2 className="section-title mt-3">
              Media <span className="text-aws-orange">Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {mediaTeam.map((member, i) => (
              <div key={i} className="card-glass p-6 text-center group transition-all duration-300">
                <div className="w-20 h-20 hex-clip bg-aws-navy border border-aws-orange/20 overflow-hidden mx-auto mb-4">
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-display font-bold text-white text-base tracking-wide mb-1">{member.name}</h4>
                <p className="font-mono text-[10px] text-aws-orange tracking-wider uppercase mb-0.5">{member.role}</p>
                <p className="font-mono text-[10px] text-aws-muted">{member.department}</p>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center justify-center mt-3 text-aws-muted hover:text-aws-orange transition-colors">
                  <Linkedin size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="section-tag">Design</span>
            <h2 className="section-title mt-3">
              Design <span className="text-aws-orange">Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {designTeam.map((member, i) => (
              <div key={i} className="card-glass p-6 text-center group transition-all duration-300">
                <div className="w-20 h-20 hex-clip bg-aws-navy border border-aws-orange/20 overflow-hidden mx-auto mb-4">
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-display font-bold text-white text-base tracking-wide mb-1">{member.name}</h4>
                <p className="font-mono text-[10px] text-aws-orange tracking-wider uppercase mb-0.5">{member.role}</p>
                <p className="font-mono text-[10px] text-aws-muted">{member.department}</p>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center justify-center mt-3 text-aws-muted hover:text-aws-orange transition-colors">
                  <Linkedin size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creatives Team */}
      <section className="py-16 bg-aws-navy/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="section-tag">Creatives</span>
            <h2 className="section-title mt-3">
              Creatives <span className="text-aws-orange">Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {creativesTeam.map((member, i) => (
              <div key={i} className="card-glass p-6 text-center group transition-all duration-300">
                <div className="w-20 h-20 hex-clip bg-aws-navy border border-aws-orange/20 overflow-hidden mx-auto mb-4">
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-display font-bold text-white text-base tracking-wide mb-1">{member.name}</h4>
                <p className="font-mono text-[10px] text-aws-orange tracking-wider uppercase mb-0.5">{member.role}</p>
                <p className="font-mono text-[10px] text-aws-muted">{member.department}</p>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center justify-center mt-3 text-aws-muted hover:text-aws-orange transition-colors">
                  <Linkedin size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Engagement Lead */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="section-tag">Community</span>
            <h2 className="section-title mt-3">
              Community <span className="text-aws-orange">Engagement</span>
            </h2>
          </div>

          <div className="max-w-md mx-auto">
            <div className="card-glass p-6 text-center group transition-all duration-300">
              <div className="w-24 h-24 hex-clip bg-aws-navy border border-aws-orange/20 overflow-hidden mx-auto mb-4">
                <img src={communityLead.avatar} alt={communityLead.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-display font-bold text-white text-xl tracking-wide mb-1">{communityLead.name}</h4>
              <p className="font-mono text-xs text-aws-orange tracking-wider uppercase mb-0.5">{communityLead.role}</p>
              <p className="font-mono text-xs text-aws-muted mb-4">{communityLead.department}</p>
              <a href={communityLead.linkedin} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center mt-3 text-aws-muted hover:text-aws-orange transition-colors">
                <Linkedin size={14} />
              </a>
            </div>
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

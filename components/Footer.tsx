import Link from 'next/link'
import { Cloud, Instagram, Linkedin, ExternalLink, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-aws-orange/10 bg-aws-darker">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-aws-orange/10 border border-aws-orange/40 flex items-center justify-center"
                   style={{ clipPath: 'polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)' }}>
                <Cloud size={18} className="text-aws-orange" />
              </div>
              <span className="font-display font-bold text-xl tracking-wider">
                AWS<span className="text-aws-orange"> Student Builder Group</span>
              </span>
            </div>
            <p className="font-body text-aws-muted text-sm leading-relaxed max-w-xs">
              A student-led AWS Student Builder Group at Quaid-i-Azam University, Islamabad — building the next generation of cloud professionals.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://www.instagram.com/awscloudclubqau" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 border border-aws-orange/20 flex items-center justify-center text-aws-muted hover:text-aws-orange hover:border-aws-orange transition-colors">
                <Instagram size={16} />
              </a>
              <a href="https://www.linkedin.com/company/aws-cloud-club-qau/" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 border border-aws-orange/20 flex items-center justify-center text-aws-muted hover:text-aws-orange hover:border-aws-orange transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="https://www.meetup.com/aws-sbg-at-quaid-i-azam-university-islamabad/" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 border border-aws-orange/20 flex items-center justify-center text-aws-muted hover:text-aws-orange hover:border-aws-orange transition-colors">
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="section-tag mb-5">Navigate</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/events', label: 'Events' },
                { href: '/team', label: 'Team' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-aws-muted hover:text-aws-orange text-sm font-body transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="section-tag mb-5">Info</h4>
            <ul className="space-y-3 text-aws-muted text-sm font-body">
              <li>Quaid-i-Azam University</li>
              <li>Islamabad, Pakistan</li>
              <li className="pt-1">
                <span className="text-aws-orange">589</span> Members
              </li>
              <li>
                <span className="text-aws-orange">4.8 ★</span> Rating
              </li>
              <li className="pt-1 text-xs">
                Part of AWS Student Builder Groups Network — 917 groups worldwide
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-aws-orange/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <p className="font-mono text-xs text-aws-muted tracking-wider">
              © 2026 AWS Student Builder Group QAU · All rights reserved
            </p>
            <p className="font-mono text-xs text-aws-muted">
              Powered by AWS Student Builder Groups
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 pt-4 border-t border-aws-orange/5">
            <p className="font-mono text-[10px] text-aws-muted/70">
              Built by <span className="text-aws-orange/90">Muhammad Adnan Sultan</span> · TechOps Lead
            </p>
            <a href="https://www.linkedin.com/in/dev-madnansultan/" target="_blank" rel="noopener noreferrer"
               className="text-aws-muted/60 hover:text-aws-orange transition-colors">
              <Linkedin size={12} />
            </a>
            <a href="https://github.com/madnansultandotme" target="_blank" rel="noopener noreferrer"
               className="text-aws-muted/60 hover:text-aws-orange transition-colors">
              <Github size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

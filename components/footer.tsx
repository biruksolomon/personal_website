import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/biruksolomon", color: "text-primary" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/biruk-solomon-6176b3353/",
      color: "text-accent",
    },
    { name: "Email", icon: Mail, href: "mailto:biruksolomonmoges@gmail.com", color: "text-primary" },
  ]

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-primary">Biruk Solomon</h3>
            <p className="text-muted-foreground text-sm">
              Backend & DevOps Engineer crafting scalable systems and cloud infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-accent transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-accent transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Get In Touch</h4>
            <p className="text-sm text-muted-foreground">Interested in collaborating? Let's connect!</p>
            <a
              href="mailto:biruksolomonmoges@gmail.com"
              className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Send Email
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-border pt-8 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 text-muted-foreground hover:${link.color} transition-colors duration-300`}
                  aria-label={link.name}
                >
                  <Icon size={20} />
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">© {currentYear} Biruk Solomon. All rights reserved.</p>
            <a
              href="#"
              className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

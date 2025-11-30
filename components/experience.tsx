import { Briefcase, Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      role: "Freelance Backend & DevOps Engineer",
      company: "Personal Projects",
      period: "02/2024 – Present",
      location: "Addis Ababa, Ethiopia",
      highlights: [
        "Designed and built scalable backend systems using Java Spring Boot",
        "Developed secure REST APIs with authentication, authorization, and validation",
        "Engineered relational database models using PostgreSQL and MySQL",
        "Implemented CI/CD pipelines using Jenkins for automation",
        "Containerized applications with Docker and orchestrated with Kubernetes",
        "Automated infrastructure provisioning using Terraform",
        "Integrated third-party services (payment gateways, email systems)",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 border-t border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group p-6 border border-border rounded-lg hover:border-primary/50 hover:bg-card/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="text-primary" size={24} />
                </div>

                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                    <p className="text-lg text-accent font-semibold mt-1">{exp.company}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary font-bold mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

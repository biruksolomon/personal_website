import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "SmartTech",
      description:
        "Enterprise-grade e-commerce and service maintenance platform with real-time order tracking and payment integration.",
      tags: ["Spring Boot", "PostgreSQL", "Docker", "Kubernetes", "REST API"],
      image: "/smarttech-api.jpg",
      github: "https://github.com/biruksolomon/SmartTech-BackEnd",
      live: "https://github.com/biruksolomon/SmartTech-BackEnd",
    },
    {
      title: "TaskMaster",
      description:
        "Multi-user task management system with real-time collaboration, team workspaces, and advanced analytics.",
      tags: ["Spring Boot", "MongoDB", "Microservices", "Redis", "Jenkins"],
      image: "/task-management-app.jpg",
      github: "https://github.com/biruksolomon/taskmaster-springboot",
      live: "https://github.com/biruksolomon/taskmaster-springboot",
    },
    {
      title: "Infrastructure Automation",
      description:
        "Terraform-based infrastructure provisioning with automated CI/CD pipelines and Kubernetes deployment strategies.",
      tags: ["Terraform", "Kubernetes", "AWS", "CI/CD", "Infrastructure as Code"],
      image: "/cloud-infrastructure-diagram.png",
      github: "https://github.com",
      live: "https://example.com",
    },
  ]

  return (
    <section id="projects" className="py-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <a
            href="https://github.com/biruksolomon"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-accent hover:text-primary transition-colors"
          >
            View all on GitHub
            <ExternalLink size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-card">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-accent/10 text-accent border border-accent/30 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded-lg hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group/link"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent border border-accent/30 rounded-lg hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 group/link"
                  >
                    <span className="text-sm font-medium">Live</span>
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

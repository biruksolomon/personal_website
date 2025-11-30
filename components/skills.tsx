import { Code2, Cloud, Database, GitBranch } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      category: "Backend Development",
      icon: Code2,
      skills: ["Java", "Spring Boot", "Go", "RESTful APIs", "Microservices", "Spring Cloud"],
    },
    {
      category: "DevOps & Cloud",
      icon: Cloud,
      skills: ["Docker", "Kubernetes", "AWS", "Terraform", "Jenkins", "CI/CD Pipelines"],
    },
    {
      category: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Database Design"],
    },
    {
      category: "Tools & Version Control",
      icon: GitBranch,
      skills: ["Git", "GitHub", "GitLab", "Linux", "Shell Scripting"],
    },
  ]

  return (
    <section id="skills" className="py-20 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="group p-6 border border-border rounded-lg hover:border-accent/50 hover:bg-card/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

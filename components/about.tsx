export default function About() {
  return (
    <section id="about" className="py-20 border-t border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12">About Me</h2>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-lg">
            I'm a passionate Backend and DevOps Engineer with hands-on experience building scalable, secure, and
            high-performance systems. I combine technical expertise with a problem-solving mindset to deliver solutions
            that matter.
          </p>

          <p>
            My expertise spans across <span className="text-primary font-semibold">Java Spring Boot</span>,{" "}
            <span className="text-accent font-semibold">Go</span>, and modern backend architecture patterns. I design
            robust REST APIs, microservices, and database systems that power enterprise applications.
          </p>

          <p>
            On the DevOps side, I'm proficient in containerization with{" "}
            <span className="text-primary font-semibold">Docker</span>, orchestration with{" "}
            <span className="text-accent font-semibold">Kubernetes</span>, CI/CD automation through Jenkins, and
            infrastructure-as-code using Terraform. I ensure smooth deployments and maintainable cloud-native systems.
          </p>

          <p>
            I've developed real-world projects like <span className="text-primary font-semibold">SmartTech</span>{" "}
            (enterprise e-commerce and maintenance platform) and{" "}
            <span className="text-accent font-semibold">TaskMaster</span> (multi-user task management), integrating
            payment gateways, email systems, and analytics tools.
          </p>

          <p>
            Eager to leverage my strong problem-solving abilities, collaboration skills, and continuous learning mindset
            to contribute to cutting-edge backend systems and innovative applications.
          </p>
        </div>
      </div>
    </section>
  )
}

"use client"

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { useTypingAnimation } from "@/hooks/use-typing-animation"

export default function Hero() {
  const descriptionText =
    "Crafting scalable backend systems and cloud infrastructure. Specialized in Spring Boot microservices, Kubernetes orchestration, and modern DevOps practices."
  const { displayedText } = useTypingAnimation(descriptionText, 30, 500)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Biruk Solomon
              </h1>
              <p className="text-xl sm:text-2xl text-accent font-semibold">Backend & DevOps Engineer</p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl h-20">
              {displayedText}
              <span className="inline-block w-0.5 h-6 bg-accent ml-1 animate-pulse"></span>
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/biruksolomon"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border hover:border-primary hover:bg-primary/10 rounded-lg transition-all duration-300 glow-accent"
                aria-label="GitHub"
              >
                <Github size={20} className="text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/biruk-solomon-6176b3353/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border hover:border-accent hover:bg-accent/10 rounded-lg transition-all duration-300 glow-accent"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-accent" />
              </a>
              <a
                href="mailto:biruksolomonmoges@gmail.com"
                className="p-3 bg-card border border-border hover:border-primary hover:bg-primary/10 rounded-lg transition-all duration-300 glow-accent"
                aria-label="Email"
              >
                <Mail size={20} className="text-primary" />
              </a>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:gap-3 group"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-border bg-card">
              <Image src="/profile.jpg" alt="Biruk Solomon" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full filter blur-3xl"></div>
          </div>
        </div>

        {/* Location Badge */}
        <div className="mt-16 flex items-center justify-center gap-2 text-muted-foreground">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <span className="text-sm">Based in Addis Ababa, Ethiopia</span>
        </div>
      </div>
    </section>
  )
}

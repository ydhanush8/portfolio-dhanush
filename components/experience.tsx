"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Mobius by Gaian Solutions",
    period: "Feb 2025 - Present",
    responsibilities: [
      "Built an agentic AI-powered orchestration dashboard that surfaced real-time run telemetry, execution states, logs, & artifacts for 15+ engineering teams, improving operational visibility and decision-making.",
      "Integrated workflow and run-orchestration APIs to automate 10+ backend processes, reducing manual DevOps interventions by almost 40% and improving deployment reliability.",
      "Contributed to the agent-execution lifecycle, run scheduling, state transitions, logs, artifacts, and observability, improving reliability and governance for production-grade agentic AI workloads.",
      "Designed agentic AI workflows enabling users to visually orchestrate autonomous agents, tools, and prompts through reusable modules.",
      "Implemented reusable prompt + artifact attachment flows across 20+ agent workflows, enabling modular agent behavior and reducing user iteration time"
    ],
    skills: ["Next.js","ReactJs", "JavaScript", "TailwindCSS"],
  },
  {
    title: "Software Developer",
    company: "HealthOFin. ",
    period: "Nov 2024 – Jan 2025",
    responsibilities: [
      "Built a farmer–investor platform with secure REST APIs and RBAC-driven onboarding, ensuring authenticated and policy-controlled access across user roles.",
      "Developed dashboards and multi-tenant admin controls supporting Farmers, Investors, and Platform Admins with least-privilege access boundaries",
      "Developed interactive dashboards and reporting features, allowing farmers and investors to track investments, portfolio performance, and status."
    ],
    skills: ["React", "Node", "Express", "MongoDB", "Responsive Design"],
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Experience</h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>

              <ul className="list-disc pl-5 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm">
                    {resp}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <Badge key={idx} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

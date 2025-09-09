"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Mobius by Gaian Solutions",
    period: "Feb 2025 - Present",
    responsibilities: [
      "Developed end-to-end project flow where users submit detailed forms, displayed as interactive project cards on the dashboard for better visibility and tracking.",
      "Integrated workflow APIs to automate and track 10+ backend processes, reducing manual effort by 40%.",
      "Designed core and favourite prompt flows enabling users to interact with agents, execute commands, attach artifacts, and reuse prompts across 20+ workflows, improving overall efficiency."
    ],
    skills: ["Next.js","ReactJs", "JavaScript", "TailwindCSS"],
  },
  {
    title: "Software Developer",
    company: "HealthOFin. ",
    period: "Nov 2024 – Jan 2025",
    responsibilities: [
      "Collaborated on a platform connecting farmers with IT-sector investors, implementing onboarding, investment tracking, and admin control for seamless role-based interaction",
      "Contributed to 10+ secure APIs enabling user verification, farm listings, document uploads, and transparent investment workflows across 3 user roles.",
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

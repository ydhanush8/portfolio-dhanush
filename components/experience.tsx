"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Software Engineer (AMTS-1)",
    company: "Mobius by Gaian Solutions",
    period: "Feb 2025 - Present",
    location: "Hyderabad, Telangana",
    projects: [
      {
        name: "UnifiedInfra",
        points: [
          "Built infrastructure automation for provisioning cloud clusters with support for CPU, GPU, and TPU capacity on GCP using Kubernetes and Crossplane.",
          "Developed Go-based APIs for creating fleets, managing resource demand and constraints, and scaling cluster capacity across GKE and EKS.",
          "Integrated Kubernetes, Crossplane, and Karmada to automate cluster provisioning and track realized infrastructure and cluster health across environments.",
        ],
      },
      {
        name: "CARMA",
        points: [
          "Developed document ingestion and AI-powered compliance analysis workflows to evaluate organizational compliance against regulatory requirements.",
          "Built document processing, compliance evaluation and dashboards with compliance scores, KRIs and insights.",
          "Implemented support for 6+ regulatory frameworks, enabling continuous compliance monitoring across standards such as GDPR, HIPAA, SOC 2, and the EU AI Act.",
        ],
      },
    ],
    skills: ["Go", "Kubernetes", "Crossplane", "Karmada", "GCP", "AWS EKS"],
  },
  {
    title: "Software Developer",
    company: "HealthOFin",
    period: "Aug 2024 - Jan 2025",
    location: "Remote",
    projects: [
      {
        name: "FarmIT",
        points: [
          "Built a crowdfunding platform connecting farmers with investors to fund farm loans through investments.",
          "Developed role-based dashboards and secure REST APIs for Farmers, Investors, and Administrators.",
          "Designed loan lifecycle management with funding tracking, repayment schedules and transaction records.",
        ],
      },
    ],
    skills: ["React", "Node.js", "Express", "MongoDB"],
  },
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
                <div className="sm:text-right">
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
              </div>

              <div className="space-y-4">
                {exp.projects.map((project) => (
                  <div key={project.name}>
                    <h4 className="font-semibold">{project.name}</h4>
                    <ul className="mt-2 list-disc pl-5 space-y-2">
                      {project.points.map((point, idx) => (
                        <li key={idx} className="text-sm">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

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

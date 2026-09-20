"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Contact Me</h2>

        <div className="gap-10">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Get In Touch</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <Link
                    href="mailto:dhanushsaireddy8@gmail.com"
                    className="font-medium hover:underline"
                  >
                    dhanushsaireddy8@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <Link
                    href="tel:7386802745"
                    className="font-medium hover:underline"
                  >
                    +91 7386802745
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Hyderabad, India</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <Link
                    href="https://www.linkedin.com/in/dhanushsr8/"
                    target="_blank"
                    className="font-medium hover:underline"
                  >
                    linkedin.com/in/dhanushsr8
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
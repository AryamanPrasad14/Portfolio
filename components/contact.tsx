"use client"

import type React from "react"
import { Mail, Instagram, Linkedin, Github, MapPin } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "",
      value: "thearyamanprasad@gmail.com",
      href: "mailto:thearyamanprasad@gmail.com",
    },
    {
      icon: Instagram,
      label: "",
      value: "Instagram",
      href: "https://www.instagram.com/_aryaman__prasad_?igsh=MXFzYTAya2d4Z21vMw==",
    },
    {
      icon: Linkedin,
      label: "",
      value: "LinkedIn",
      href: "https://www.linkedin.com/in/aryaman-prasad-7aa9991a2",
    },
    {
      icon: Github,
      label: "",
      value: "Github",
      href: "https://github.com/AryamanPrasad14",
    },
    {
      icon: MapPin,
      label: "",
      value: "Guwahati, Assam, India",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Let's discuss your next project or explore collaboration opportunities
          </p>
        </div>

        <div className="space-y-8 text-center">
          <h3 className="font-heading text-2xl font-semibold mb-6">Let's Connect</h3>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
            I'm always interested in hearing about new opportunities, innovative projects, and collaborations.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-4 mt-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-200">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  {item.href !== "#" ? (
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

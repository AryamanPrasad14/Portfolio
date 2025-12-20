import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Certifications() {
  const certifications = [
    {
      title: "React.js Development",
      issuer: "Value Added Course",
      description:
        "Comprehensive course covering React fundamentals, hooks, state management, and modern development practices",
      date: "2024",
      skills: ["React.js", "JSX", "Hooks", "State Management", "Component Architecture"],
      credentialUrl: "#",
    },
    {
      title: "Software Conceptual Design",
      issuer: "NPTEL",
      description:
        "Advanced course on software design principles, architectural patterns, and system design methodologies",
      date: "2024",
      skills: ["System Design", "Architecture Patterns", "UML", "Design Principles", "Software Engineering"],
      credentialUrl: "#",
    },
  ]

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{cert.title}</CardTitle>
                      <CardDescription className="text-base font-medium text-accent">
                        {cert.issuer} • {cert.date}
                      </CardDescription>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </a>
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{cert.description}</p>

                <div>
                  <h4 className="font-semibold mb-2 text-sm">Skills Acquired:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

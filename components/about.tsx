import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Code } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a strong foundation in modern web technologies and AI integration
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I recently completed my <strong>MCA from Assam Don Bosco University</strong>, where I've developed a deep
              understanding of software engineering principles and modern development practices.
            </p>

            <p className="text-lg leading-relaxed">
              As an <strong>Intern at Trusnetix Technologies</strong>, I've gained hands-on experience building
              scalable web applications, working with cutting-edge technologies, and collaborating with cross-functional
              teams to deliver high-quality solutions.
            </p>

            <p className="text-lg leading-relaxed">
              I specialize in creating <strong> Web/App applications with AI/ML integration</strong>, with exceptional user experiences while maintaining robust backend architectures.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <GraduationCap className="h-6 w-6 text-primary mr-3" />
                  <h3 className="font-semibold text-lg">Education</h3>
                </div>
                <p className="text-muted-foreground">
                  Master of Computer Applications
                  <br />
                  Assam Don Bosco University
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Briefcase className="h-6 w-6 text-accent mr-3" />
                  <h3 className="font-semibold text-lg">Experience</h3>
                </div>
                <p className="text-muted-foreground">
                  Intern
                  <br />
                  Trusnetix Technologies Pvt. Ltd.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-chart-3">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Code className="h-6 w-6 text-chart-3 mr-3" />
                  <h3 className="font-semibold text-lg">Specialization</h3>
                </div>
                <p className="text-muted-foreground">
                  Web/App Development
                  <br />
                  AI & ML Integration
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

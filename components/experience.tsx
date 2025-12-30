import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Professional journey and key contributions</p>
        </div>

        <Card className="border-l-4 border-l-primary">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <CardTitle className="text-2xl">Software Engineer Intern</CardTitle>
                <CardDescription className="text-lg font-medium text-primary">
                  Trusnetix Technologies Pvt. Ltd.
                </CardDescription>
              </div>
              <div className="flex flex-col sm:items-end gap-1">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  Jan 2025 - Present
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  Hybrid
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3">Key Contributions:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                  Developed and maintained full-stack web applications using MERN stack and Next.js
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                  Integrated AI capabilities using Gemini API for enhanced user experiences
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                  Implemented payment processing systems with Razorpay integration
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                  Collaborated with cross-functional teams to deliver scalable solutions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                  Optimized application performance and implemented responsive design principles
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "React.js",
                  "Node.js",
                  "MongoDB",
                  "Express.js",
                  "Next.js",
                  "Tailwind CSS",
                  "Gemini API",
                  "Material UI",
                  "Razorpay",
                ].map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

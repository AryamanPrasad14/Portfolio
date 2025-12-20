import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "SportEase",
      description:
        "AI-powered fitness trainer and venue booking platform with integrated payment processing",
      image: "/modern-sports-app.png",
      technologies: ["Next.js", "MERN Stack", "Razorpay API", "MongoDB"],
      features: ["AI Personal Trainer", "Venue Booking System", "Payment Integration", "Real-time Analytics"],
      githubUrl: "https://github.com/AryamanPrasad14/SportsEase",
    },
    {
      title: "Zencart",
      description:
        "Full-featured e-commerce platform with modern UI and comprehensive admin dashboard",
      image: "/modern-ecommerce-interface.png",
      technologies: ["MERN Stack", "Tailwind CSS", "MongoDB"],
      features: ["Product Management", "User Authentication", "Shopping Cart", "Order Tracking"],
      githubUrl: "#",
    },
    {
      title: "Attendance System",
      description:
        "Comprehensive attendance management system for educational institutions",
      image: "/attendance-dashboard-interface.png",
      technologies: ["HTML", "CSS", "MySQL", "JavaScript"],
      features: ["Student Management", "Attendance Tracking", "Report Generation", "Admin Dashboard"],
      githubUrl: "#",
    },
    {
      title: "Tic Tac Toe (GUI)",
      description:
        "Classic two-player Tic Tac Toe with a polished Tkinter interface, win/tie detection, and restart flow",
      image: "/tictactoe-py.png",
      technologies: ["Python", "Tkinter"],
      features: ["3x3 Grid UI", "Win/Tie Detection", "Scoreboard", "Restart Game"],
      githubUrl: "https://github.com/AryamanPrasad14/TicTacToe",
    },
    {
      title: "Cherry Collector (2D Game)",
      description:
        "A Unity 2D platformer where the player collects cherries, avoids enemies, and completes levels with smooth controls",
      image: "/cherry-collector-unity.png",
      technologies: ["C#", "Unity", "Tilemap", "Cinemachine"],
      features: ["Platformer Mechanics", "Collectibles & Scoring", "Parallax Backgrounds", "Responsive Controls"],
      githubUrl: "https://github.com/AryamanPrasad14/Cherry-Collector",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions built with modern technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <ul className="text-sm text-muted-foreground space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex pt-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

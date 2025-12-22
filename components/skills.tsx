import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Languages & Databases",
      icon: "💻",
      skills: [
        "HTML","CSS","JavaScript","C++","Python","Java",
        "SQL","MySQL","MongoDB","Oracle Database",
      ],
    },
    {
      title: "Frameworks & Technologies",
      icon: "⚡",
      skills: [
        "Linux","MERN Stack","Next.js","Firebase",
        "RESTful APIs","Material UI","UI/UX Design",
      ],
    },
    {
      title: "Developer Tools",
      icon: "🛠️",
      skills: ["VS Code","Android Studio","Git","GitHub","Postman","Figma"],
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="
                hover:shadow-lg transition-all duration-300
                bg-white dark:bg-neutral-900
                border border-neutral-200 dark:border-neutral-800
              "
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{category.icon}</div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="
                        cursor-default
                        hover:bg-primary hover:text-primary-foreground
                        dark:bg-neutral-800 dark:text-gray-300
                        dark:hover:bg-primary dark:hover:text-white
                        transition-colors duration-200
                      "
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

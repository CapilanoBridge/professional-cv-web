import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { ExternalLink, GitBranch, Mail, MapPin, Phone } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between px-4">
          <h1 className="text-lg font-semibold">Dylan Mylz</h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <Avatar className="w-32 h-32 mx-auto mb-6">
            <AvatarImage src="/avatar.svg" alt="Dylan Mylz" />
            <AvatarFallback>DM</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl font-bold mb-4">Dylan Mylz</h1>
          <p className="text-xl text-muted-foreground mb-6">Full Stack Developer & AI Enthusiast</p>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative web applications and leveraging AI to solve real-world problems.
            Currently pursuing Computer Science with a focus on modern web technologies and machine learning.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python",
              "PostgreSQL", "MongoDB", "Git", "Docker", "AWS", "Tailwind CSS",
              "GraphQL", "REST APIs", "Machine Learning", "AI/ML"
            ].map((skill) => (
              <Badge key={skill} variant="secondary" className="text-center py-2">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Full Stack Developer Intern</CardTitle>
                <CardDescription>Tech Startup Inc. • June 2024 - Present</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Developed and maintained web applications using React and Node.js</li>
                  <li>Implemented RESTful APIs and integrated with third-party services</li>
                  <li>Collaborated with cross-functional teams in agile development environment</li>
                  <li>Optimized application performance and improved user experience</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI Research Assistant</CardTitle>
                <CardDescription>University of Technology • September 2023 - May 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Conducted research on machine learning algorithms for natural language processing</li>
                  <li>Developed Python scripts for data preprocessing and model training</li>
                  <li>Presented findings at departmental seminars and contributed to research papers</li>
                  <li>Mentored junior students in AI and machine learning concepts</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Freelance Web Developer</CardTitle>
                <CardDescription>Self-Employed • January 2023 - Present</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Built custom websites for small businesses using modern web technologies</li>
                  <li>Implemented responsive designs and optimized for mobile devices</li>
                  <li>Managed client relationships and delivered projects on time and within budget</li>
                  <li>Integrated e-commerce solutions and payment gateways</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <Card>
            <CardHeader>
              <CardTitle>Bachelor of Science in Computer Science</CardTitle>
              <CardDescription>University of Technology • 2021 - 2025 (Expected)</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                GPA: 3.8/4.0 • Relevant Coursework: Data Structures, Algorithms, Machine Learning, Web Development, Database Systems
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Dean's List (2022, 2023, 2024)</li>
                <li>President of Computer Science Club</li>
                <li>Completed capstone project on AI-powered web applications</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Task Manager</CardTitle>
                <CardDescription>Personal Project • React, Node.js, OpenAI API</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A smart task management application that uses AI to categorize and prioritize tasks.
                  Features natural language processing for task input and intelligent suggestions.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">OpenAI</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>E-Commerce Platform</CardTitle>
                <CardDescription>University Project • Next.js, PostgreSQL, Stripe</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Full-stack e-commerce solution with user authentication, product catalog,
                  shopping cart, and payment integration. Deployed on Vercel with database on Railway.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">Stripe</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Weather Dashboard</CardTitle>
                <CardDescription>Personal Project • Vue.js, OpenWeather API</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Interactive weather dashboard with location-based forecasts, weather maps,
                  and historical data visualization. Features responsive design and offline support.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline">Vue.js</Badge>
                  <Badge variant="outline">Chart.js</Badge>
                  <Badge variant="outline">PWA</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Machine Learning Portfolio</CardTitle>
                <CardDescription>Academic Project • Python, TensorFlow, Flask</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Collection of machine learning models including image classification,
                  natural language processing, and predictive analytics. Deployed as web API.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">TensorFlow</Badge>
                  <Badge variant="outline">Flask</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span>dylan.mylz@email.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://github.com/dylanmylz" target="_blank" rel="noopener noreferrer">
                      <GitBranch className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://linkedin.com/in/dylanmylz" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}

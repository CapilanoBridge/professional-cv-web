import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"
import { ExternalLink, GitBranch, Mail, MapPin, Phone } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <div className="rounded-2xl border border-border bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground">
              CV
            </div>
            <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
              <a href="#about" className="transition-colors hover:text-foreground">About</a>
              <a href="#skills" className="transition-colors hover:text-foreground">Skills</a>
              <a href="#experience" className="transition-colors hover:text-foreground">Experience</a>
              <a href="#projects" className="transition-colors hover:text-foreground">Projects</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-semibold">Dylan Mylz Mabborang</h1>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <section className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-2xl shadow-slate-900/5 dark:bg-slate-950 dark:shadow-black/20">
          <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-500/20" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/20" />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="inline-flex rounded-full bg-secondary/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-secondary-foreground">
                AI-powered web developer
              </p>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Crafting thoughtful digital experiences with modern AI and web technologies.</h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                  I build polished, responsive websites and AI-enabled applications with Next.js, Shadcn UI, and modern deployment workflows. My work focuses on usability, performance, and real-world impact.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Experience", value: "3+ years" },
                  { label: "Projects", value: "12+ launched" },
                  { label: "Education", value: "BSIT Information Technology" },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl border border-border bg-background/80 px-4 py-4 text-center shadow-sm shadow-slate-900/5 dark:bg-slate-900/80">
                    <p className="text-2xl font-semibold">{item.value}</p>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <Card className="overflow-hidden border border-border bg-white/85 shadow-xl shadow-slate-900/5 dark:bg-slate-950/90">
              <CardContent className="space-y-6 p-8">
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20 rounded-3xl ring-1 ring-border">
                    <AvatarImage src="/Dyls.jpg" alt="Dylan Mylz Mabborang" />
                    <AvatarFallback>DM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">Profile</p>
                    <h2 className="text-2xl font-bold">Dylan Mylz Mabborang</h2>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm leading-7 text-muted-foreground">
                    AI-powered web developer crafting thoughtful digital experiences with modern AI and web technologies. I build polished, responsive websites and AI-enabled applications with Next.js, Shadcn UI, and modern deployment workflows. My work focuses on usability, performance, and real-world impact.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl bg-muted/70 p-4 text-sm">
                      <p className="font-semibold">Location</p>
                        <p className="text-muted-foreground">Manila, Philippines</p>
                    </div>
                    <div className="rounded-3xl bg-muted/70 p-4 text-sm">
                      <p className="font-semibold">Availability</p>
                      <p className="text-muted-foreground">Open to new opportunities</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                    <Button variant="secondary" className="w-full text-sm" asChild>
                      <a href="/resume.pdf" download>
                        Download Resume
                      </a>
                    </Button>
                  <Button variant="outline" className="w-full text-sm" asChild>
                    <a href="mailto:dylanmylz17@gmail.com">Contact Me</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="about" className="mb-14">
          <div className="mb-6 space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-secondary-foreground">About</p>
            <h2 className="text-3xl font-bold">Professional summary</h2>
            <p className="max-w-3xl text-muted-foreground">
              I am a dedicated information technology student and developer who builds modern, accessible web experiences. My work draws on AI research, applied software engineering, and collaborative project delivery to create polished products that scale.
            </p>
          </div>
          <Card className="border border-border bg-background/80 p-6 dark:bg-slate-950/80">
            <CardContent className="grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">Focus Areas</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>AI-enhanced web development</li>
                  <li>Responsive product design</li>
                  <li>Automated deployment workflows</li>
                </ul>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">Tools</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Next.js", "React", "TypeScript", "Tailwind", "Node.js", "Python"
                  ].map((tool) => (
                    <Badge key={tool} variant="secondary" className="py-2 px-3 text-sm">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">Approach</p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  I focus on clean code, accessible interfaces, and thoughtful interactions that feel fast and intuitive across devices.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="skills" className="mb-14">
          <div className="mb-6 space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-secondary-foreground">Skills</p>
            <h2 className="text-3xl font-bold">Technical competencies</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "JavaScript", "TypeScript", "React", "Next.js",
              "Node.js", "Python", "PostgreSQL", "Docker",
              "AWS", "Tailwind CSS", "GraphQL", "AI/ML"
            ].map((skill) => (
              <div key={skill} className="rounded-3xl border border-border bg-background/80 p-4 text-center shadow-sm shadow-slate-900/5 dark:bg-slate-950/80">
                <Badge variant="secondary" className="mx-auto mb-3 py-2 px-3 text-sm">
                  {skill}
                </Badge>
                <p className="text-sm text-muted-foreground">Experienced</p>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-10" />

        <section id="experience" className="mb-14">
          <div className="mb-6 space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-secondary-foreground">Experience</p>
            <h2 className="text-3xl font-bold">Work & research history</h2>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Fullstack Intern</CardTitle>
                <CardDescription>ECA • 2026</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Supported full-stack development using modern JavaScript frameworks.</li>
                  <li>Assisted in building responsive user interfaces and backend services.</li>
                  <li>Collaborated with the engineering team to ship production-ready features.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Freelance Web Developer</CardTitle>
                <CardDescription>Self-Employed • 2025 - Present</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Built custom websites for small businesses using modern web technologies.</li>
                  <li>Implemented responsive designs and optimized for mobile devices.</li>
                  <li>Managed client relationships and delivered projects on time and within budget.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-14">
          <div className="mb-6 space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-secondary-foreground">Education</p>
            <h2 className="text-3xl font-bold">Academic background</h2>
          </div>
          <Card className="border border-border bg-background/80 dark:bg-slate-950/80">
            <CardHeader>
                <CardTitle>BSIT Bachelor of Science in Information Technology</CardTitle>
                <CardDescription>St. Paul University Philippines • 2024 - 2028</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Member of Junior Philippines Computer Society (JPCS)</li>
                </ul>
            </CardContent>
          </Card>
        </section>

        <section id="projects" className="mb-14">
          <div className="mb-6 space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-secondary-foreground">Projects</p>
            <h2 className="text-3xl font-bold">Portfolio highlights</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="group border border-border bg-background/80 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 dark:bg-slate-950/80">
              <CardHeader>
                <CardTitle>AI-Powered Task Manager</CardTitle>
                <CardDescription>Personal Project • React, Node.js, OpenAI API</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A smart task management application that uses AI to categorize and prioritize tasks.
                  Features natural language processing for task input and intelligent suggestions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">OpenAI</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group border border-border bg-background/80 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 dark:bg-slate-950/80">
              <CardHeader>
                <CardTitle>E-Commerce Platform</CardTitle>
                <CardDescription>University Project • Next.js, PostgreSQL, Stripe</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Full-stack e-commerce solution with user authentication, product catalog,
                  shopping cart, and payment integration. Deployed on Vercel with database on Railway.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">Stripe</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group border border-border bg-background/80 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 dark:bg-slate-950/80">
              <CardHeader>
                <CardTitle>Weather Dashboard</CardTitle>
                <CardDescription>Personal Project • Vue.js, OpenWeather API</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Interactive weather dashboard with location-based forecasts, weather maps,
                  and historical data visualization. Features responsive design and offline support.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Vue.js</Badge>
                  <Badge variant="outline">Chart.js</Badge>
                  <Badge variant="outline">PWA</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group border border-border bg-background/80 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10 dark:bg-slate-950/80">
              <CardHeader>
                <CardTitle>Machine Learning Portfolio</CardTitle>
                <CardDescription>Academic Project • Python, TensorFlow, Flask</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Collection of machine learning models including image classification,
                  natural language processing, and predictive analytics. Deployed as web API.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">TensorFlow</Badge>
                  <Badge variant="outline">Flask</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <div className="mb-6 space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-secondary-foreground">Contact</p>
            <h2 className="text-3xl font-bold">Get in touch</h2>
          </div>
          <Card className="border border-border bg-background/80 dark:bg-slate-950/80">
            <CardContent className="pt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span>dylanmylz17@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <span>09666436804</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span>Manila, Philippines</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://github.com/CapilanoBridge" target="_blank" rel="noopener noreferrer">
                      <GitBranch className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="https://www.linkedin.com/in/dylan-mylz-mabborang-75862739a/" target="_blank" rel="noopener noreferrer">
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

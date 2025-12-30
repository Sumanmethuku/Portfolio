/* eslint-disable */

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from '@/images/Suman.jpeg';
import { BlurImage } from "@/components/blur-image"
import { generateMetadata } from '@/lib/seo';

const title = 'About Me';
export const metadata = generateMetadata(title);
export default function AboutPage() {
  return (
    <div className="py-16 space-y-16">
      <section className="space-y-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Full Stack Web Developer specializing in React, Next.js, and TypeScript.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Hi there! I'm Suman Methuku</h2>
              <p className="text-lg leading-relaxed">
                Hardworking and adaptable developer with a solid foundation in web technologies and programming. Quick to learn new tools, comfortable taking on challenges, and able to work well in fast-paced environments.
              </p>
              <p className="leading-relaxed">
                I specialize in building modern, responsive web applications using React, Next.js, TypeScript, and Node.js. Focused on improving every day and delivering clean, reliable work while growing as a developer.
              </p>
              <p className="leading-relaxed">
                Currently working as a Junior Developer at NextPage Technologies, where I develop and maintain scalable web applications, implement REST APIs, and work with PostgreSQL databases.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button asChild variant="outline">
                <a
                  href="/Suman's Resume.pdf"
                  download="Suman_Methuku_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          <div className="md:col-span-1 flex justify-center">
            <div className="aspect-square w-full max-w-xs relative bg-muted rounded-xl overflow-hidden flex items-center justify-center text-muted-foreground border-4 border-primary/20">
              <BlurImage
                src={Logo}
                alt="Suman Methuku's avatar"
                size="4xl"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Professional Experience</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {[
              {
                role: "Junior Developer",
                company: "NextPage Technologies Pvt. Ltd.",
                period: "Mar 2024 – Present",
                description: "Developed and maintained scalable web applications using Next.js, React, Express.js, and SQL, ensuring robust front-end and back-end integration. Collaborated with cross-functional teams to optimize performance, enhance security, and deploy scalable features.",
                achievements: [
                  "Implemented REST APIs and improved loading times through optimized queries and code refactoring.",
                  "Integrated Socket.io for real-time updates in analytics and monitoring modules.",
                  "Leveraged Cursor IDE and AI-assisted tools to accelerate debugging and documentation.",
                  "Worked in an Agile startup environment, delivering features under tight timelines."
                ],
              },
            ].map((job, index) => (
              <Card key={index} className="relative pl-6 border-l-4 border-primary">
                <CardHeader>
                  <CardTitle>{job.role}</CardTitle>
                  <CardDescription className="flex justify-between text-base">
                    <span>{job.company}</span>
                    <span>{job.period}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{job.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="text-muted-foreground">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Education & Certifications</h2>
        <Card className="max-w-3xl mx-auto border-l-4 border-primary pl-6">
          <CardHeader>
            <CardTitle>Bachelor of Technology – Electronics and Communication Engineering</CardTitle>
            <CardDescription className="flex justify-between text-base">
              <span>MLR Institute of Technology</span>
              <span>2021 - 2024</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              CGPA: 8.09 | Focused on electronics, communication systems, and software development.
            </p>
          </CardContent>
        </Card>
        <Card className="max-w-3xl mx-auto border-l-4 border-primary pl-6">
          <CardHeader>
            <CardTitle>Diploma – Electronics and Communication Engineering</CardTitle>
            <CardDescription className="flex justify-between text-base">
              <span>VMR Polytechnic College</span>
              <span>2018 - 2021</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              CGPA: 9.47 | Strong foundation in electronics and programming fundamentals.
            </p>
          </CardContent>
        </Card>

        <Card className="max-w-3xl mx-auto border-l-4 border-primary pl-6">
          <CardHeader>
            <CardTitle>Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1">
              <li>Java Programming – Great Learning</li>
              <li>Problem Solving – HackerRank</li>
              <li>MySQL – Great Learning</li>
            </ul>
            <p className="mt-4">
              Active on competitive platforms: LeetCode, HackerRank, CodeChef. Regularly solving algorithmic challenges to strengthen DSA and analytical skills.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold">Let's Work Together</h2>
        <p className="text-lg text-muted-foreground">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Me</Link>
        </Button>
      </section>
    </div>
  );
}
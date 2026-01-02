/* eslint-disable */

"use client"

import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Separator } from "@/components/ui/separator"
import { motion } from 'framer-motion';
import { Calendar, Clock, ExternalLink } from 'lucide-react';

// Static blog data - add your Medium posts here
const BLOG_POSTS = [
  {
    id: 1,
    title: "5 Things I Learned in My First Year as a Developer",
    brief: "When I started my first dev job, I thought I knew what being a developer meant. I had my degree, I could write code, and I'd built a few projects. Turns out, I knew nothing. Here's what the first year actually taught me.",
    url: "https://medium.com/@sumanmethuku01/5-things-i-learned-in-my-first-year-as-a-developer-7f7437dbcf74",
    date: "Dec 29, 2024",
    readTime: "5 min read",
    tags: ["Career Advice", "Programming", "Web Development"]
  },
  {
    id: 2,
    title: "Mastering Cache Types: Boost Your Application Performance and Scalability",
    brief: "Ever wondered why some apps feel snappy while others lag? A robust caching strategy is usually the secret. Let's dive deep into the layers of caching, from Browser and CDN to Redis and Write patterns.",
    url: "https://medium.com/@sumanmethuku01/mastering-cache-types-boost-your-application-performance-and-scalability-24d0d712b9d6",
    date: "Jan 2, 2025",
    readTime: "8 min read",
    tags: ["Caching", "Backend", "Performance", "System Design"]
  },
  {
    id: 3,
    title: "The Simple Guide to Finding Freelance Clients",
    brief: "Escaping the Upwork trap and finding high-paying clients directly isn't about luck—it's about systems. Learn how to pivot from 'Developer' to 'Solver' and build a direct pipeline of clients.",
    url: "https://medium.com/@sumanmethuku01/the-simple-guide-to-finding-freelance-clients-1665287c5f6e",
    date: "Jan 2, 2025",
    readTime: "7 min read",
    tags: ["Freelancing", "Career Guidance", "Client Acquisition"]
  },
];

export default function Blogs() {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {BLOG_POSTS.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 border border-border bg-card hover:border-primary/50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="size-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="size-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground line-clamp-2 hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <Separator />
              <CardContent className="py-4 flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                  {post.brief}
                </p>
              </CardContent>
              <CardFooter className="pt-2 pb-4 flex flex-col gap-3 items-start">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: 'default', size: 'sm' }),
                    'mt-2 text-sm font-medium rounded-full gap-2'
                  )}
                >
                  Read on Medium
                  <ExternalLink className="size-4" />
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Link to Medium profile */}
      <div className="text-center mt-12">
        <Link
          href="https://medium.com/@sumanmethuku01"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: 'outline', size: 'lg' }),
            'rounded-full gap-2'
          )}
        >
          View all posts on Medium
          <ExternalLink className="size-4" />
        </Link>
      </div>
    </div>
  );
}
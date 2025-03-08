"use client"

import { motion } from 'framer-motion'
import { Award, Book, Briefcase, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { AppConstants } from '@/configs/constants'

const skills = [
  { name: 'Structural Analysis', level: 95 },
  { name: 'AutoCAD', level: 90 },
  { name: 'Revit', level: 85 },
  { name: 'SketchUp', level: 80 },
  { name: 'Rhino', level: 75 },
  { name: 'BIM', level: 85 }
]

const experiences = [
  {
    year: '2020 - Present',
    title: 'Senior Architectural Engineer',
    company: 'Modern Architects Co.',
    description: 'Leading structural design projects and sustainable architecture initiatives.'
  },
  {
    year: '2017 - 2020',
    title: 'Project Engineer',
    company: 'Urban Development Group',
    description: 'Managed residential and commercial construction projects.'
  },
  {
    year: '2015 - 2017',
    title: 'Junior Engineer',
    company: 'Innovative Structures LLC',
    description: 'Assisted in structural analysis and design documentation.'
  }
]

const education = [
  {
    year: '2013 - 2015',
    degree: 'Master of Engineering',
    institution: 'MIT',
    field: 'Structural Engineering'
  },
  {
    year: '2009 - 2013',
    degree: 'Bachelor of Science',
    institution: 'Stanford University',
    field: 'Architectural Engineering'
  }
]

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h1 className="text-4xl font-bold mb-6">About {AppConstants.appName}</h1>
              <p className="text-xl text-muted-foreground mb-8">
                An architectural engineer with over 8 years of experience in structural design
                and sustainable architecture. Passionate about creating innovative solutions
                that combine aesthetic beauty with engineering precision.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/portfolio">View Projects</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                alt={AppConstants.appName}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Technical Proficiency
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg border"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Professional Journey
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-8"
              >
                <div className="flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{experience.year}</div>
                  <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                  <div className="text-muted-foreground mb-2">{experience.company}</div>
                  <p className="text-muted-foreground">{experience.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Education
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-8"
              >
                <div className="flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{edu.year}</div>
                  <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                  <div className="text-muted-foreground mb-2">{edu.institution}</div>
                  <p className="text-muted-foreground">{edu.field}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
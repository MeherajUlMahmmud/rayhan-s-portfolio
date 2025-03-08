"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Building2, Compass, Ruler } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Architectural SVG Components
const BlueprintGrid = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-10"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
  >
    <defs>
      <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
        <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </pattern>
      <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.2" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#smallGrid)" />
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
)

const CompassRose = () => (
  <svg
    className="absolute bottom-10 right-10 w-32 h-32 opacity-20 text-primary"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
    <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.5" />
    <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.5" />
    <line x1="15" y1="15" x2="85" y2="85" stroke="currentColor" strokeWidth="0.5" />
    <line x1="15" y1="85" x2="85" y2="15" stroke="currentColor" strokeWidth="0.5" />
    <text x="50" y="15" textAnchor="middle" fill="currentColor" fontSize="8">
      N
    </text>
    <text x="85" y="50" textAnchor="middle" fill="currentColor" fontSize="8">
      E
    </text>
    <text x="50" y="90" textAnchor="middle" fill="currentColor" fontSize="8">
      S
    </text>
    <text x="15" y="50" textAnchor="middle" fill="currentColor" fontSize="8">
      W
    </text>
  </svg>
)

const ArchitecturalElement = () => (
  <svg
    className="absolute top-20 left-10 w-40 h-40 opacity-10 text-primary"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10,90 L90,90 L90,40 L50,10 L10,40 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
    <line x1="10" y1="40" x2="90" y2="40" stroke="currentColor" strokeWidth="0.5" />
    <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.5" />
    <rect x="40" y="70" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
  </svg>
)

const FloorPlan = () => (
  <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="160" height="160" fill="none" stroke="currentColor" strokeWidth="1" />
    <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1" />
    <rect x="120" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1" />
    <rect x="20" y="120" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1" />
    <rect x="120" y="120" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1" />
    <line x1="80" y1="20" x2="80" y2="180" stroke="currentColor" strokeWidth="1" />
    <line x1="120" y1="20" x2="120" y2="180" stroke="currentColor" strokeWidth="1" />
    <line x1="20" y1="80" x2="180" y2="80" stroke="currentColor" strokeWidth="1" />
    <line x1="20" y1="120" x2="180" y2="120" stroke="currentColor" strokeWidth="1" />
    <rect x="75" y="75" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="1" />
  </svg>
)

const ColumnDetail = () => (
  <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
    <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
    <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="0.5" />
    <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="0.5" />
    <path
      d="M50,20 C60,25 70,35 80,50 C70,65 60,75 50,80 C40,75 30,65 20,50 C30,35 40,25 50,20 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeDasharray="2,2"
    />
  </svg>
)

const SectionView = () => (
  <svg className="w-full h-full" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="80" x2="200" y2="80" stroke="currentColor" strokeWidth="2" />
    <rect x="20" y="30" width="160" height="50" fill="none" stroke="currentColor" strokeWidth="1" />
    <path d="M20,30 L100,10 L180,30" fill="none" stroke="currentColor" strokeWidth="1" />
    <line x1="60" y1="30" x2="60" y2="80" stroke="currentColor" strokeWidth="1" />
    <line x1="100" y1="30" x2="100" y2="80" stroke="currentColor" strokeWidth="1" />
    <line x1="140" y1="30" x2="140" y2="80" stroke="currentColor" strokeWidth="1" />
    <rect x="90" y="60" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1" />
  </svg>
)

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
          <BlueprintGrid />
          <CompassRose />
          <ArchitecturalElement />
        </div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovating Structural Design with Engineering Precision
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Creating sustainable and innovative architectural solutions that shape the future of our built environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground">
                <Link href="/portfolio">
                  View Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-background/20 hover:bg-background/30 border-white text-white">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <BlueprintGrid />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-4">
              <svg className="w-16 h-16 text-chart-2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" />
                <line x1="20" y1="40" x2="80" y2="40" stroke="currentColor" strokeWidth="2" />
                <line x1="20" y1="60" x2="80" y2="60" stroke="currentColor" strokeWidth="2" />
                <line x1="40" y1="20" x2="40" y2="80" stroke="currentColor" strokeWidth="2" />
                <line x1="60" y1="20" x2="60" y2="80" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">Expertise & Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Combining engineering precision with architectural creativity to deliver exceptional results across
              various domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-lg border relative overflow-hidden group"
            >
              <div className="absolute right-0 top-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity">
                <FloorPlan />
              </div>
              <Building2 className="h-12 w-12 mb-4 text-chart-1" />
              <h3 className="text-xl font-semibold mb-2">Structural Design</h3>
              <p className="text-muted-foreground">
                Innovative solutions for complex architectural challenges using cutting-edge engineering principles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-lg border relative overflow-hidden group"
            >
              <div className="absolute right-0 top-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity">
                <ColumnDetail />
              </div>
              <Compass className="h-12 w-12 mb-4 text-chart-2" />
              <h3 className="text-xl font-semibold mb-2">Sustainable Architecture</h3>
              <p className="text-muted-foreground">
                Eco-friendly designs that minimize environmental impact while maximizing functionality and aesthetics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-lg border relative overflow-hidden group"
            >
              <div className="absolute right-0 top-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity">
                <SectionView />
              </div>
              <Ruler className="h-12 w-12 mb-4 text-chart-3" />
              <h3 className="text-xl font-semibold mb-2">Technical Consulting</h3>
              <p className="text-muted-foreground">
                Expert guidance on architectural engineering aspects of your construction projects.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of our most innovative and impactful architectural engineering projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
                title: "Modern Office Complex",
                category: "Commercial"
              },
              {
                image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
                title: "Sustainable Residence",
                category: "Residential"
              },
              {
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
                title: "Urban Bridge Design",
                category: "Infrastructure"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <p className="text-sm text-gray-300 mb-2">{project.category}</p>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
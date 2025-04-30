"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Building2, Compass, Ruler, Award, Clock, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { AppConstants } from '@/lib/constants'
import Image from 'next/image'
import Head from 'next/head'

// Architectural SVG Components
const StructuralBeam = () => (
  <svg
    className="absolute w-full h-full opacity-20"
    viewBox="0 0 1000 1000"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100,100 L900,100 L900,150 L100,150 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="5000"
      strokeDashoffset="5000"
      className="animate-draw"
    />
    <path
      d="M200,100 L200,900"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="800"
      strokeDashoffset="800"
      className="animate-draw-delay-1"
    />
    <path
      d="M800,100 L800,900"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="800"
      strokeDashoffset="800"
      className="animate-draw-delay-1"
    />
    <path
      d="M100,900 L900,900 L900,850 L100,850 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="5000"
      strokeDashoffset="5000"
      className="animate-draw-delay-2"
    />
  </svg>
)

const FloorPlanElement = () => (
  <svg
    className="absolute top-0 right-0 w-1/3 h-1/3 opacity-10"
    viewBox="0 0 300 300"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="50" y="50" width="200" height="200" fill="none" stroke="currentColor" strokeWidth="1" />
    <rect x="50" y="50" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1" />
    <rect x="170" y="50" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1" />
    <rect x="50" y="170" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1" />
    <rect x="170" y="170" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1" />
    <line x1="130" y1="50" x2="130" y2="250" stroke="currentColor" strokeWidth="1" />
    <line x1="50" y1="130" x2="250" y2="130" stroke="currentColor" strokeWidth="1" />
    <circle cx="150" cy="150" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
  </svg>
)

const ArchitecturalScale = () => (
  <svg
    className="absolute bottom-0 left-0 w-1/3 h-16 opacity-10"
    viewBox="0 0 300 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="10" y1="25" x2="290" y2="25" stroke="currentColor" strokeWidth="1" />
    <line x1="10" y1="20" x2="10" y2="30" stroke="currentColor" strokeWidth="1" />
    <line x1="50" y1="15" x2="50" y2="35" stroke="currentColor" strokeWidth="1" />
    <line x1="90" y1="20" x2="90" y2="30" stroke="currentColor" strokeWidth="1" />
    <line x1="130" y1="15" x2="130" y2="35" stroke="currentColor" strokeWidth="1" />
    <line x1="170" y1="20" x2="170" y2="30" stroke="currentColor" strokeWidth="1" />
    <line x1="210" y1="15" x2="210" y2="35" stroke="currentColor" strokeWidth="1" />
    <line x1="250" y1="20" x2="250" y2="30" stroke="currentColor" strokeWidth="1" />
    <line x1="290" y1="15" x2="290" y2="35" stroke="currentColor" strokeWidth="1" />
    <text x="10" y="45" fontSize="8" fill="currentColor">0</text>
    <text x="50" y="45" fontSize="8" fill="currentColor">1</text>
    <text x="130" y="45" fontSize="8" fill="currentColor">3</text>
    <text x="210" y="45" fontSize="8" fill="currentColor">5</text>
    <text x="290" y="45" fontSize="8" fill="currentColor">7</text>
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

// Dynamic architectural grid that animates in
const DynamicGrid = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-5"
    viewBox="0 0 1000 1000"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Horizontal lines */}
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.line
        key={`h-${i}`}
        x1="0"
        y1={i * 50}
        x2="1000"
        y2={i * 50}
        stroke="currentColor"
        strokeWidth="0.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: i * 0.1 }}
      />
    ))}
    {/* Vertical lines */}
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.line
        key={`v-${i}`}
        x1={i * 50}
        y1="0"
        x2={i * 50}
        y2="1000"
        stroke="currentColor"
        strokeWidth="0.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: i * 0.1 + 1 }}
      />
    ))}
  </svg>
)

// Add this new animated component
const FloatingBlueprint = () => (
  <motion.div
    className="absolute top-1/4 left-1/4 w-32 h-32 opacity-10"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 0.1, scale: 1 }}
    transition={{ duration: 2, delay: 2 }}
  >
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="animate-rotate-slow">
      <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" />
      <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="0.5" />
      <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.5" />
      <path d="M50,50 L150,150 M50,150 L150,50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
    </svg>
  </motion.div>
)

// Add this animated compass component
const AnimatedCompass = () => (
  <motion.div
    className="absolute bottom-1/4 right-1/4 w-24 h-24 opacity-10"
    initial={{ opacity: 0, rotate: -90 }}
    animate={{ opacity: 0.1, rotate: 0 }}
    transition={{ duration: 2, delay: 2.5 }}
  >
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
      <motion.path
        d="M50,10 L50,90 M10,50 L90,50"
        stroke="currentColor"
        strokeWidth="0.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 3 }}
      />
      <motion.path
        d="M50,50 L50,20"
        stroke="currentColor"
        strokeWidth="2"
        className="animate-bounce-subtle"
      />
      <motion.path
        d="M50,50 L70,50"
        stroke="currentColor"
        strokeWidth="1"
        className="animate-bounce-subtle"
      />
    </svg>
  </motion.div>
)

// Detailed Floor Plan with measurements
const DetailedFloorPlan = () => (
  <motion.div
    className="absolute bottom-1/3 right-1/3 w-64 h-64 opacity-10"
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{ opacity: 0.15, scale: 1 }}
    transition={{ duration: 2.5, delay: 3 }}
  >
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      {/* Outer walls */}
      <rect x="50" y="50" width="300" height="300" fill="none" stroke="currentColor" strokeWidth="2" />

      {/* Interior walls */}
      <line x1="50" y1="150" x2="200" y2="150" stroke="currentColor" strokeWidth="2" />
      <line x1="200" y1="50" x2="200" y2="350" stroke="currentColor" strokeWidth="2" />
      <line x1="200" y1="250" x2="350" y2="250" stroke="currentColor" strokeWidth="2" />

      {/* Windows */}
      <path d="M50,100 L50,120 M350,200 L350,220 M250,50 L270,50 M100,350 L120,350"
        stroke="currentColor" strokeWidth="1" strokeDasharray="4,2" />

      {/* Doors */}
      <path d="M150,150 A30,30 0 0 0 180,180" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M200,200 A30,30 0 0 1 230,230" fill="none" stroke="currentColor" strokeWidth="1" />

      {/* Furniture */}
      <rect x="70" y="70" width="40" height="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <rect x="260" y="80" width="60" height="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="300" cy="300" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />

      {/* Dimensions */}
      <line x1="50" y1="380" x2="350" y2="380" stroke="currentColor" strokeWidth="0.5" />
      <line x1="50" y1="375" x2="50" y2="385" stroke="currentColor" strokeWidth="0.5" />
      <line x1="350" y1="375" x2="350" y2="385" stroke="currentColor" strokeWidth="0.5" />
      <text x="200" y="395" fontSize="10" textAnchor="middle" fill="currentColor">300cm</text>

      <line x1="380" y1="50" x2="380" y2="350" stroke="currentColor" strokeWidth="0.5" />
      <line x1="375" y1="50" x2="385" y2="50" stroke="currentColor" strokeWidth="0.5" />
      <line x1="375" y1="350" x2="385" y2="350" stroke="currentColor" strokeWidth="0.5" />
      <text x="395" y="200" fontSize="10" textAnchor="middle" fill="currentColor" transform="rotate(90, 395, 200)">300cm</text>
    </svg>
  </motion.div>
)

// Architectural Elevation Drawing
const ElevationDrawing = () => (
  <motion.div
    className="absolute top-1/3 left-20 w-40 h-40 opacity-10"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 0.15, x: 0 }}
    transition={{ duration: 1.5, delay: 3.5 }}
  >
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      {/* Building outline */}
      <rect x="50" y="80" width="100" height="100" fill="none" stroke="currentColor" strokeWidth="1" />

      {/* Roof */}
      <path d="M40,80 L100,30 L160,80" fill="none" stroke="currentColor" strokeWidth="1" />

      {/* Windows */}
      <rect x="65" y="100" width="20" height="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <rect x="115" y="100" width="20" height="30" fill="none" stroke="currentColor" strokeWidth="0.5" />

      {/* Door */}
      <rect x="85" y="140" width="30" height="40" fill="none" stroke="currentColor" strokeWidth="0.5" />

      {/* Details */}
      <line x1="50" y1="120" x2="150" y2="120" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2,1" />
      <line x1="40" y1="80" x2="50" y2="80" stroke="currentColor" strokeWidth="0.5" />
      <line x1="150" y1="80" x2="160" y2="80" stroke="currentColor" strokeWidth="0.5" />

      {/* Scale */}
      <line x1="40" y1="190" x2="160" y2="190" stroke="currentColor" strokeWidth="0.5" />
      <line x1="40" y1="185" x2="40" y2="195" stroke="currentColor" strokeWidth="0.5" />
      <line x1="160" y1="185" x2="160" y2="195" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  </motion.div>
)

// Structural Detail
const StructuralDetail = () => (
  <motion.div
    className="absolute top-10 left-1/3 w-36 h-36 opacity-5"
    initial={{ opacity: 0, rotate: -45 }}
    animate={{ opacity: 0.1, rotate: 0 }}
    transition={{ duration: 2, delay: 4 }}
  >
    <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
      {/* I-Beam */}
      <path d="M30,20 L120,20 L120,30 L30,30 Z" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M70,30 L70,120" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M80,30 L80,120" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M30,120 L120,120 L120,130 L30,130 Z" fill="none" stroke="currentColor" strokeWidth="1" />

      {/* Cross-section markers */}
      <path d="M40,20 L40,30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,1" />
      <path d="M110,20 L110,30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,1" />
      <path d="M40,120 L40,130" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,1" />
      <path d="M110,120 L110,130" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,1" />

      {/* Dimensions */}
      <line x1="20" y1="40" x2="20" y2="110" stroke="currentColor" strokeWidth="0.5" />
      <line x1="15" y1="40" x2="25" y2="40" stroke="currentColor" strokeWidth="0.5" />
      <line x1="15" y1="110" x2="25" y2="110" stroke="currentColor" strokeWidth="0.5" />
      <text x="15" y="75" fontSize="6" textAnchor="middle" fill="currentColor" transform="rotate(90, 15, 75)">90cm</text>
    </svg>
  </motion.div>
)

// Animated 3D Isometric Building
const IsometricBuilding = () => (
  <motion.div
    className="absolute bottom-20 right-20 w-40 h-40 opacity-10"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 0.15, y: 0 }}
    transition={{ duration: 2, delay: 4.5 }}
  >
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      {/* Building base */}
      <path d="M50,150 L150,150 L150,50 L50,50 Z" fill="none" stroke="currentColor" strokeWidth="1" transform="skewX(-15) skewY(15)" />

      {/* Floors */}
      <path d="M50,130 L150,130" fill="none" stroke="currentColor" strokeWidth="0.5" transform="skewX(-15) skewY(15)" />
      <path d="M50,110 L150,110" fill="none" stroke="currentColor" strokeWidth="0.5" transform="skewX(-15) skewY(15)" />
      <path d="M50,90 L150,90" fill="none" stroke="currentColor" strokeWidth="0.5" transform="skewX(-15) skewY(15)" />
      <path d="M50,70 L150,70" fill="none" stroke="currentColor" strokeWidth="0.5" transform="skewX(-15) skewY(15)" />

      {/* Windows */}
      <path d="M70,130 L90,130 L90,110 L70,110 Z" fill="none" stroke="currentColor" strokeWidth="0.3" transform="skewX(-15) skewY(15)" />
      <path d="M110,130 L130,130 L130,110 L110,110 Z" fill="none" stroke="currentColor" strokeWidth="0.3" transform="skewX(-15) skewY(15)" />
      <path d="M70,90 L90,90 L90,70 L70,70 Z" fill="none" stroke="currentColor" strokeWidth="0.3" transform="skewX(-15) skewY(15)" />
      <path d="M110,90 L130,90 L130,70 L110,70 Z" fill="none" stroke="currentColor" strokeWidth="0.3" transform="skewX(-15) skewY(15)" />

      {/* Animation path for "construction" */}
      <motion.path
        d="M30,160 C40,140 60,130 100,130 S160,140 170,160"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="5,3"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, delay: 5, repeat: Infinity, repeatType: "loop" }}
      />
    </svg>
  </motion.div>
)

// Foundation Plan
const FoundationPlan = () => (
  <motion.div
    className="absolute top-1/2 left-10 w-32 h-32 opacity-5"
    initial={{ opacity: 0, scale: 0.7 }}
    animate={{ opacity: 0.1, scale: 1 }}
    transition={{ duration: 2, delay: 5 }}
  >
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      {/* Main foundation outline */}
      <rect x="30" y="30" width="140" height="140" fill="none" stroke="currentColor" strokeWidth="2" />

      {/* Grid lines */}
      <line x1="30" y1="70" x2="170" y2="70" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2,2" />
      <line x1="30" y1="110" x2="170" y2="110" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2,2" />
      <line x1="30" y1="150" x2="170" y2="150" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2,2" />
      <line x1="70" y1="30" x2="70" y2="170" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2,2" />
      <line x1="110" y1="30" x2="110" y2="170" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2,2" />
      <line x1="150" y1="30" x2="150" y2="170" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2,2" />

      {/* Foundation piles */}
      <circle cx="70" cy="70" r="5" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="70" cy="110" r="5" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="70" cy="150" r="5" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="110" cy="70" r="5" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="110" cy="110" r="5" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="110" cy="150" r="5" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="150" cy="70" r="5" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="150" cy="110" r="5" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="150" cy="150" r="5" fill="none" stroke="currentColor" strokeWidth="1" />

      {/* Labels */}
      <text x="70" y="70" fontSize="4" textAnchor="middle" fill="currentColor" dy="-8">P1</text>
      <text x="70" y="110" fontSize="4" textAnchor="middle" fill="currentColor" dy="-8">P2</text>
      <text x="70" y="150" fontSize="4" textAnchor="middle" fill="currentColor" dy="-8">P3</text>
    </svg>
  </motion.div>
)

// Construction Detail
const ConstructionDetail = () => (
  <motion.div
    className="absolute right-10 top-1/4 w-28 h-28 opacity-10"
    initial={{ opacity: 0, rotate: 45 }}
    animate={{ opacity: 0.15, rotate: 0 }}
    transition={{ duration: 2, delay: 5.5 }}
  >
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* Wall section */}
      <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1" />

      {/* Wall layers */}
      <line x1="20" y1="30" x2="80" y2="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,1" />
      <line x1="20" y1="40" x2="80" y2="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,1" />
      <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="0.5" />
      <line x1="20" y1="60" x2="80" y2="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,1" />
      <line x1="20" y1="70" x2="80" y2="70" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,1" />

      {/* Layer labels */}
      <text x="15" y="30" fontSize="3" textAnchor="end" fill="currentColor">1</text>
      <text x="15" y="40" fontSize="3" textAnchor="end" fill="currentColor">2</text>
      <text x="15" y="50" fontSize="3" textAnchor="end" fill="currentColor">3</text>
      <text x="15" y="60" fontSize="3" textAnchor="end" fill="currentColor">4</text>
      <text x="15" y="70" fontSize="3" textAnchor="end" fill="currentColor">5</text>

      {/* Dimensions */}
      <line x1="85" y1="20" x2="85" y2="80" stroke="currentColor" strokeWidth="0.3" />
      <line x1="83" y1="20" x2="87" y2="20" stroke="currentColor" strokeWidth="0.3" />
      <line x1="83" y1="80" x2="87" y2="80" stroke="currentColor" strokeWidth="0.3" />
      <text x="90" y="50" fontSize="3" textAnchor="start" fill="currentColor" transform="rotate(90, 90, 50)">60cm</text>
    </svg>
  </motion.div>
)

// Animated Technical Drawing
const TechnicalDrawing = () => (
  <svg
    className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 w-40 h-40 opacity-5"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M20,100 L180,100"
      stroke="currentColor"
      strokeWidth="0.5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 1 }}
    />
    <motion.path
      d="M100,20 L100,180"
      stroke="currentColor"
      strokeWidth="0.5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 1.2 }}
    />
    <motion.circle
      cx="100"
      cy="100"
      r="50"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 3, delay: 1.5 }}
    />
    <motion.path
      d="M20,20 L180,180"
      stroke="currentColor"
      strokeWidth="0.5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 1.8 }}
    />
    <motion.path
      d="M20,180 L180,20"
      stroke="currentColor"
      strokeWidth="0.5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 2 }}
    />
    <motion.path
      d="M100,20 L100,180"
      stroke="currentColor"
      strokeWidth="0.5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 2.2 }}
    />
    <motion.path
      d="M20,100 L180,100"
      stroke="currentColor"
      strokeWidth="0.5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 2.4 }}
    />
  </svg>
)

export default function HomePage() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" />
      </Head>
      <style jsx global>{`
        body {
          font-family: 'Space Grotesk', sans-serif;
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Space Grotesk', sans-serif;
        }
      `}</style>

      {/* Hero Section - Theme-responsive */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 overflow-hidden text-foreground/20">
          <DynamicGrid />
          <StructuralBeam />
          <FloorPlanElement />
          <ArchitecturalScale />
          <FloatingBlueprint />
          <AnimatedCompass />
          <DetailedFloorPlan />
          <ElevationDrawing />
          <StructuralDetail />
          <IsometricBuilding />
          <FoundationPlan />
          <ConstructionDetail />
          <TechnicalDrawing />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100px' }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="h-1 bg-primary mb-6 mx-auto"
            />
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight"
            >
              {AppConstants.heroTitle}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl text-muted-foreground mb-8"
            >
              {AppConstants.heroSubtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button asChild size="lg" className="group transition-all duration-300">
                <Link href="/portfolio" className="flex items-center">
                  View Portfolio
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="hover:bg-accent">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Architectural measurement lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-10 right-10 h-[1px] bg-border"
        >
          <div className="absolute left-0 h-3 w-[1px] -top-1 bg-border"></div>
          <div className="absolute left-1/4 h-3 w-[1px] -top-1 bg-border"></div>
          <div className="absolute left-1/2 h-3 w-[1px] -top-1 bg-border"></div>
          <div className="absolute left-3/4 h-3 w-[1px] -top-1 bg-border"></div>
          <div className="absolute right-0 h-3 w-[1px] -top-1 bg-border"></div>
        </motion.div>
      </section>

      {/* Stats Section - Theme-responsive */}
      <section className="py-16 border-t border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center animate-float"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-foreground">15+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center animate-float"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-foreground">120+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center animate-float"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-foreground">50+</h3>
              <p className="text-muted-foreground">Satisfied Clients</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services - Theme-responsive */}
      <section className="py-24 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 text-foreground/50">
          <DynamicGrid />
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
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
                className="relative"
              >
                <svg className="w-16 h-16 text-primary" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" />
                  <line x1="20" y1="40" x2="80" y2="40" stroke="currentColor" strokeWidth="2" />
                  <line x1="20" y1="60" x2="80" y2="60" stroke="currentColor" strokeWidth="2" />
                  <line x1="40" y1="20" x2="40" y2="80" stroke="currentColor" strokeWidth="2" />
                  <line x1="60" y1="20" x2="60" y2="80" stroke="currentColor" strokeWidth="2" />
                </svg>
                <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping-slow opacity-75"></div>
              </motion.div>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Expertise</h2>
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
              className="bg-card p-8 rounded-lg border border-border relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute right-0 top-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity text-foreground">
                <FloorPlanElement />
              </div>
              <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Structural Design</h3>
              <p className="text-muted-foreground">
                Innovative solutions for complex architectural challenges using cutting-edge engineering principles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-lg border border-border relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute right-0 top-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity text-foreground">
                <ColumnDetail />
              </div>
              <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Compass className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Sustainable Architecture</h3>
              <p className="text-muted-foreground">
                Eco-friendly designs that minimize environmental impact while maximizing functionality and aesthetics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-lg border border-border relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute right-0 top-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity text-foreground">
                <SectionView />
              </div>
              <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Ruler className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Technical Consulting</h3>
              <p className="text-muted-foreground">
                Expert guidance on architectural engineering aspects of your construction projects.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects - Theme-responsive */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="h-1 bg-primary mx-auto mb-6"
            />
            <h2 className="text-3xl font-bold mb-4 text-foreground">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of our most innovative and impactful architectural engineering projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AppConstants.portfolioItems.slice(0, 3).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg h-[400px] border border-border shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center mb-3">
                      <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                        {project.category}
                      </span>
                      <span className="ml-3 text-xs text-gray-300">{project.year}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="inline-flex items-center text-white text-sm font-medium group"
                    >
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="hover:bg-accent">
              <Link href="/portfolio" className="flex items-center">
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
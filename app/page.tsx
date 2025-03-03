import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Users, Award, BookOpen } from "lucide-react"

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative clouds */}
      <div className="hidden md:block">
        <div className="cloud w-32 h-32 top-20 left-10 cloud-animation" style={{ animationDelay: "0s" }}></div>
        <div className="cloud w-24 h-24 top-40 right-20 cloud-animation" style={{ animationDelay: "2s" }}></div>
        <div className="cloud w-40 h-40 top-80 left-1/4 cloud-animation" style={{ animationDelay: "4s" }}></div>
        <div className="cloud w-28 h-28 top-60 right-1/3 cloud-animation" style={{ animationDelay: "6s" }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-sky-800">
                Where Little Minds <span className="rainbow-text">Soar</span> to New Heights
              </h1>
              <p className="text-lg md:text-xl mb-6 text-gray-700 max-w-lg">
                At SKYHIGH Preschool, we create a nurturing environment where children can explore, learn, and grow
                their wings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/admissions"
                  className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 px-6 rounded-lg transition-colors inline-flex items-center justify-center"
                >
                  Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="bg-white hover:bg-sky-50 text-sky-600 font-medium py-3 px-6 rounded-lg border border-sky-200 transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/download.jpeg"
                  alt="Happy children playing and learning"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-sky-600 font-bold">Enrolling Now!</p>
                <p className="text-gray-600 text-sm">For 2025-2026 Academic Year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">Our Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our age-appropriate programs designed to nurture your child's development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProgramCard
              title="LKG (Lower Kindergarten)"
              age="3-4 years"
              description="A gentle introduction to structured learning through play, developing social skills and curiosity."
              icon={<Users className="h-10 w-10 text-sky-500" />}
            />
            <ProgramCard
              title="UKG (Upper Kindergarten)"
              age="4-5 years"
              description="Building on foundations with more advanced concepts, preparing children for primary education."
              icon={<BookOpen className="h-10 w-10 text-sky-500" />}
            />
            <ProgramCard
              title="Kindergarten"
              age="5-6 years"
              description="Comprehensive program focusing on literacy, numeracy, and creative development."
              icon={<Award className="h-10 w-10 text-sky-500" />}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">Why Choose SKYHIGH</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a unique learning experience that helps your child thrive
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              title="Experienced Teachers"
              description="Our certified educators are passionate about early childhood development."
            />
            <FeatureCard
              title="Safe Environment"
              description="Security measures and child-friendly facilities for peace of mind."
            />
            <FeatureCard
              title="Creative Curriculum"
              description="Balanced approach to academic, social, and emotional growth."
            />
            <FeatureCard
              title="Small Class Sizes"
              description="Personalized attention with low student-to-teacher ratios."
            />
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4 md:mb-0">Upcoming Events</h2>
            <Link href="/news" className="text-sky-600 hover:text-sky-700 font-medium inline-flex items-center">
              View All News & Events <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventCard
              title="Open House Day"
              date="March 15, 2025"
              description="Visit our campus, meet teachers, and learn about our programs."
            />
            <EventCard
              title="Spring Festival"
              date="April 10, 2025"
              description="Join us for a day of fun activities, games, and performances."
            />
            <EventCard
              title="Parent Workshop"
              date="April 25, 2025"
              description="Learn effective strategies to support your child's development at home."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sky-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our SKYHIGH Family?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a visit or apply for admission today to secure your child's spot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-sky-600 hover:bg-sky-100 font-medium py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
            >
              Schedule a Visit
            </Link>
            <Link
              href="/admissions"
              className="bg-sky-700 hover:bg-sky-800 text-white font-medium py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProgramCard({
  title,
  age,
  description,
  icon,
}: {
  title: string
  age: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <div className="bg-sky-50 rounded-xl p-6 shadow-md card-hover">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-sky-800 mb-2">{title}</h3>
      <p className="text-sky-600 font-medium mb-3">Ages: {age}</p>
      <p className="text-gray-600">{description}</p>
      <Link href="/admissions" className="mt-4 inline-block text-sky-600 hover:text-sky-700 font-medium">
        Learn more →
      </Link>
    </div>
  )
}

function FeatureCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm card-hover">
      <h3 className="text-xl font-bold text-sky-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function EventCard({
  title,
  date,
  description,
}: {
  title: string
  date: string
  description: string
}) {
  return (
    <div className="bg-sky-50 rounded-xl p-6 shadow-md card-hover">
      <div className="flex items-center mb-3">
        <Calendar className="h-5 w-5 text-sky-600 mr-2" />
        <span className="text-sky-600 font-medium">{date}</span>
      </div>
      <h3 className="text-xl font-bold text-sky-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href="/news" className="text-sky-600 hover:text-sky-700 font-medium">
        Read more →
      </Link>
    </div>
  )
}


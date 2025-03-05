import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Calendar, Clock, ArrowRight } from "lucide-react"

export default function AdmissionsPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative clouds */}
      <div className="hidden md:block">
        <div className="cloud w-32 h-32 top-20 left-10 cloud-animation" style={{ animationDelay: "0s" }}></div>
        <div className="cloud w-24 h-24 top-40 right-20 cloud-animation" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-800">Admissions</h1>
            <p className="text-lg text-gray-600">
              Join our SKYHIGH family and give your child the best start in their educational journey
            </p>
          </div>

          <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-xl mb-12">
            <Image
              src="/placeholder.svg?height=500&width=1200"
              alt="Children in a classroom setting"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-8 text-center">Our Programs</h2>

          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            <ProgramDetailCard
              title="LKG (Lower Kindergarten)"
              age="3-4 years"
              description="Our LKG program focuses on developing foundational skills through play-based learning. Children engage in activities that promote language development, fine motor skills, social interaction, and cognitive growth."
              highlights={[
                "Introduction to letters, numbers, shapes, and colors",
                "Sensory play and creative expression",
                "Development of social skills and emotional regulation",
                "Physical activities to enhance gross motor skills",
                "Structured routines to build independence",
              ]}
              image="/placeholder.svg?height=400&width=600"
            />

            <ProgramDetailCard
              title="UKG (Upper Kindergarten)"
              age="4-5 years"
              description="Building on the foundation established in LKG, our UKG program introduces more structured learning experiences while maintaining a play-based approach. Children develop pre-reading, pre-writing, and early math skills."
              highlights={[
                "Phonics and letter recognition",
                "Number concepts and basic addition",
                "Science exploration and discovery",
                "Art, music, and movement activities",
                "Social studies and cultural awareness",
              ]}
              image="/placeholder.svg?height=400&width=600"
            />

            <ProgramDetailCard
              title="Kindergarten"
              age="5-6 years"
              description="Our Kindergarten program prepares children for a smooth transition to primary school. The curriculum balances academic readiness with creative expression and social development."
              highlights={[
                "Reading and writing fundamentals",
                "Mathematical operations and problem-solving",
                "Scientific inquiry and experiments",
                "Project-based learning",
                "Technology integration and digital literacy",
              ]}
              image="/placeholder.svg?height=400&width=600"
            />
          </div>
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">Admission Process</h2>
            <p className="text-gray-600">Follow these simple steps to enroll your child at BIGSTEP Preschool</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line connecting steps */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-sky-200 hidden md:block"></div>

              <div className="space-y-8">
                <ProcessStep
                  number="1"
                  title="Inquiry and Tour"
                  description="Contact us to schedule a visit to our campus. This is an opportunity for you and your child to explore our facilities and meet our staff."
                />

                <ProcessStep
                  number="2"
                  title="Application Submission"
                  description="Complete the online application form and submit the required documents, including birth certificate, immunization records, and previous school records (if applicable)."
                />

                <ProcessStep
                  number="3"
                  title="Assessment and Interview"
                  description="We conduct a friendly, age-appropriate assessment to understand your child's developmental level and learning style. Parents will also have a brief interview with our admissions team."
                />

                <ProcessStep
                  number="4"
                  title="Acceptance and Enrollment"
                  description="Upon acceptance, you'll receive an offer letter. Secure your child's place by completing the enrollment form and paying the registration fee."
                />

                <ProcessStep
                  number="5"
                  title="Orientation"
                  description="Attend our parent orientation session to learn about school policies, curriculum, and how you can support your child's learning journey."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fees and Schedule Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-12 text-center">Fees and Schedule</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-sky-50 rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-sky-800 mb-6">Tuition Fees (2025-2026)</h3>

              <div className="space-y-4">
                <FeeItem program="LKG (Lower Kindergarten)" fee="$8,500 per year" />
                <FeeItem program="UKG (Upper Kindergarten)" fee="$9,000 per year" />
                <FeeItem program="Kindergarten" fee="$9,500 per year" />
              </div>

              <div className="mt-6 pt-6 border-t border-sky-200">
                <h4 className="font-bold text-sky-800 mb-3">Additional Fees</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Registration Fee:</span>
                      <span className="text-gray-600 ml-2">$500 (one-time, non-refundable)</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Materials Fee:</span>
                      <span className="text-gray-600 ml-2">$350 per year</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Meal Plan (optional):</span>
                      <span className="text-gray-600 ml-2">$1,200 per year</span>
                    </div>
                  </li>
                </ul>
              </div>

              <p className="mt-6 text-sm text-gray-600">* Payment plans available (monthly, quarterly, or annually)</p>
            </div>

            <div className="bg-sky-50 rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-sky-800 mb-6">School Schedule</h3>

              <div className="space-y-4">
                <ScheduleItem day="Monday - Friday" hours="8:30 AM - 2:30 PM" note="Regular school hours" />
                <ScheduleItem day="Monday - Friday" hours="7:30 AM - 8:30 AM" note="Early drop-off (additional fee)" />
                <ScheduleItem
                  day="Monday - Friday"
                  hours="2:30 PM - 5:30 PM"
                  note="After-school program (additional fee)"
                />
              </div>

              <div className="mt-6 pt-6 border-t border-sky-200">
                <h4 className="font-bold text-sky-800 mb-3">Academic Calendar Highlights</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">First Day of School:</span>
                      <span className="text-gray-600 ml-2">September 2, 2025</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Winter Break:</span>
                      <span className="text-gray-600 ml-2">December 20, 2025 - January 5, 2026</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Spring Break:</span>
                      <span className="text-gray-600 ml-2">March 15-22, 2026</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Last Day of School:</span>
                      <span className="text-gray-600 ml-2">June 18, 2026</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Now Section */}
      <section className="py-16 bg-sky-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your child's journey with SKYHIGH Preschool today. Spaces fill quickly, so we encourage early
            application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-sky-600 hover:bg-sky-100 font-medium py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
            >
              Schedule a Tour
            </Link>
            <Link
              href="/admissions/apply"
              className="bg-sky-700 hover:bg-sky-800 text-white font-medium py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
            >
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find answers to common questions about our admissions process</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <FaqItem
              question="What is the ideal age for my child to start preschool?"
              answer="Children can join our LKG program at age 3, provided they are toilet trained and demonstrate readiness for a structured environment. We assess each child individually to ensure they're prepared for the preschool experience."
            />
            <FaqItem
              question="Do you offer financial aid or scholarships?"
              answer="Yes, we have a limited number of need-based scholarships available. Please contact our admissions office for more information about the application process and eligibility criteria."
            />
            <FaqItem
              question="What is your teacher-to-student ratio?"
              answer="We maintain low teacher-to-student ratios to ensure personalized attention. For LKG, our ratio is 1:8, for UKG it's 1:10, and for Kindergarten, it's 1:12. Each class also has a teaching assistant."
            />
            <FaqItem
              question="How do you handle food allergies and dietary restrictions?"
              answer="We take allergies very seriously. Our facility is nut-free, and we can accommodate most dietary restrictions. Parents should provide detailed information about allergies during enrollment, and we'll work with you to create a safe plan."
            />
            <FaqItem
              question="What is your approach to discipline?"
              answer="We use positive discipline techniques that focus on teaching appropriate behavior rather than punishment. Our approach emphasizes respect, clear communication, and natural consequences, helping children develop self-regulation skills."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function ProgramDetailCard({
  title,
  age,
  description,
  highlights,
  image,
}: {
  title: string
  age: string
  description: string
  highlights: string[]
  image: string
}) {
  return (
    <div className="bg-sky-50 rounded-xl overflow-hidden shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-8">
          <h3 className="text-2xl font-bold text-sky-800 mb-2">{title}</h3>
          <p className="text-sky-600 font-medium mb-4">Ages: {age}</p>
          <p className="text-gray-600 mb-6">{description}</p>

          <h4 className="font-bold text-sky-800 mb-3">Program Highlights:</h4>
          <ul className="space-y-2">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative min-h-[300px]">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  )
}

function ProcessStep({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <div className="flex items-start gap-6">
      <div className="relative">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-600 text-white font-bold z-10 relative">
          {number}
        </div>
      </div>
      <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-xl font-bold text-sky-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

function FeeItem({
  program,
  fee,
}: {
  program: string
  fee: string
}) {
  return (
    <div className="flex justify-between items-center pb-2 border-b border-sky-100">
      <span className="font-medium">{program}</span>
      <span className="text-sky-800 font-bold">{fee}</span>
    </div>
  )
}

function ScheduleItem({
  day,
  hours,
  note,
}: {
  day: string
  hours: string
  note: string
}) {
  return (
    <div className="flex items-start gap-3 pb-2 border-b border-sky-100">
      <Clock className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" />
      <div>
        <div className="flex justify-between items-center w-full">
          <span className="font-medium">{day}</span>
          <span className="text-sky-800 font-bold">{hours}</span>
        </div>
        <p className="text-sm text-gray-600">{note}</p>
      </div>
    </div>
  )
}

function FaqItem({
  question,
  answer,
}: {
  question: string
  answer: string
}) {
  return (
    <div className="bg-sky-50 rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-sky-800 mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  )
}


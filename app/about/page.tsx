import Image from "next/image"
import { CheckCircle, Award, Heart } from "lucide-react"

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-800">About SKYHIGH Preschool</h1>
            <p className="text-lg text-gray-600">Nurturing young minds to reach for the stars since 2010</p>
          </div>

          <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-xl mb-12">
            <Image
              src="/placeholder.svg?height=500&width=1200"
              alt="Bigstep Preschool building and playground"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                BigStep Preschool was founded in 2010 by a group of passionate educators who believed in creating a
                nurturing environment where children could develop a love for learning from an early age.
              </p>
            
              <p className="text-gray-600">
                Our name "BIGSTEP" represents our commitment to helping children reach their highest potential,
                encouraging them to dream big and providing them with the foundation to achieve those dreams.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Children in classroom"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Children playing outdoors"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Art activity"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Music class"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision Section */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600">Guiding principles that shape our approach to early childhood education</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-sky-600 mr-3" />
                <h3 className="text-2xl font-bold text-sky-800">Our Mission</h3>
              </div>
              <p className="text-gray-600 mb-4">
                To provide a safe, nurturing, and stimulating environment where children can develop socially,
                emotionally, physically, and intellectually at their own pace.
              </p>
              <ul className="space-y-2">
                {[
                  "Foster a love for learning through play-based activities",
                  "Develop critical thinking and problem-solving skills",
                  "Nurture creativity and self-expression",
                  "Build confidence and independence",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-sky-600 mr-3" />
                <h3 className="text-2xl font-bold text-sky-800">Our Vision</h3>
              </div>
              <p className="text-gray-600 mb-4">
                To be recognized as a leading preschool that prepares children to become lifelong learners and
                responsible global citizens.
              </p>
              <ul className="space-y-2">
                {[
                  "Create innovative learning experiences that inspire curiosity",
                  "Establish strong partnerships with families and the community",
                  "Embrace diversity and promote inclusive practices",
                  "Continuously improve our programs based on research and feedback",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">Our Team</h2>
            <p className="text-gray-600">Meet our dedicated educators who make BIGSTEP  Preschool special</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember
              name="Sarah Johnson"
              role="Principal"
              image="/placeholder.svg?height=300&width=300"
              description="With over 15 years of experience in early childhood education, Sarah leads our school with passion and dedication."
            />
            <TeamMember
              name="Michael Chen"
              role="Lead Teacher - Kindergarten"
              image="/placeholder.svg?height=300&width=300"
              description="Michael brings creativity and energy to the classroom, making learning an adventure for our kindergarteners."
            />
            <TeamMember
              name="Emily Rodriguez"
              role="Lead Teacher - UKG"
              image="/placeholder.svg?height=300&width=300"
              description="Emily specializes in developing early literacy skills and creating a nurturing classroom environment."
            />
            <TeamMember
              name="David Wilson"
              role="Lead Teacher - LKG"
              image="/placeholder.svg?height=300&width=300"
              description="David's gentle approach helps our youngest students transition smoothly into the school environment."
            />
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">Our Facilities</h2>
            <p className="text-gray-600">
              Designed with children in mind, our facilities provide a safe and stimulating environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FacilityCard
              title="Spacious Classrooms"
              image="/placeholder.svg?height=300&width=400"
              description="Bright, airy classrooms equipped with age-appropriate learning materials and technology."
            />
            <FacilityCard
              title="Outdoor Playground"
              image="/placeholder.svg?height=300&width=400"
              description="Safe play equipment, sandboxes, and green spaces for physical development and nature exploration."
            />
            <FacilityCard
              title="Activity Centers"
              image="/placeholder.svg?height=300&width=400"
              description="Dedicated spaces for art, music, reading, and sensory play to encourage holistic development."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">What Parents Say</h2>
            <p className="text-gray-600">Hear from families who are part of our SKYHIGH community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="BigStep Preschool has been a second home for our daughter. The teachers are caring, and we've seen tremendous growth in her confidence and skills."
              author="Jennifer & Mark Taylor"
              role="Parents of Emma, Kindergarten"
            />
            <TestimonialCard
              quote="We couldn't be happier with our decision to enroll our son at SKYHIGH. The balanced approach to academics and play is exactly what we were looking for."
              author="Robert & Lisa Chen"
              role="Parents of Nathan, UKG"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function TeamMember({
  name,
  role,
  image,
  description,
}: {
  name: string
  role: string
  image: string
  description: string
}) {
  return (
    <div className="bg-sky-50 rounded-xl overflow-hidden shadow-md card-hover">
      <div className="relative h-64 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-sky-800">{name}</h3>
        <p className="text-sky-600 font-medium mb-2">{role}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

function FacilityCard({
  title,
  image,
  description,
}: {
  title: string
  image: string
  description: string
}) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover">
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-sky-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

function TestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string
  author: string
  role: string
}) {
  return (
    <div className="bg-sky-50 rounded-xl p-6 shadow-md">
      <p className="text-gray-600 italic mb-4">"{quote}"</p>
      <div>
        <p className="font-bold text-sky-800">{author}</p>
        <p className="text-sky-600 text-sm">{role}</p>
      </div>
    </div>
  )
}


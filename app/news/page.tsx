import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

// Mock news data
const newsItems = [
  {
    id: 1,
    title: "Annual Sports Day - A Spectacular Success",
    date: "February 15, 2025",
    excerpt:
      "Our annual Sports Day was a tremendous success with enthusiastic participation from all age groups. Children showcased their athletic abilities and team spirit.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Events",
  },
  {
    id: 2,
    title: "New STEM Learning Lab Inaugurated",
    date: "January 28, 2025",
    excerpt:
      "We're excited to announce the opening of our new STEM Learning Lab, equipped with age-appropriate materials to foster scientific thinking and exploration.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Facilities",
  },
  {
    id: 3,
    title: "Parent Workshop on Early Literacy",
    date: "January 15, 2025",
    excerpt:
      "Thank you to all parents who attended our workshop on supporting early literacy at home. The session provided practical strategies for fostering a love of reading.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Workshops",
  },
  {
    id: 4,
    title: "Cultural Day Celebrations",
    date: "December 10, 2024",
    excerpt:
      "Our Cultural Day celebration was a vibrant display of diversity, with children learning about different traditions, cuisines, and customs from around the world.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Events",
  },
  {
    id: 5,
    title: "Kindergarten Graduation Ceremony",
    date: "November 30, 2024",
    excerpt:
      "Congratulations to our Kindergarten graduates! The ceremony was a heartwarming celebration of their achievements and readiness for primary school.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Events",
  },
  {
    id: 6,
    title: "New Art Curriculum Launched",
    date: "November 15, 2024",
    excerpt:
      "We've enhanced our art curriculum to include more diverse techniques and materials, allowing children to express their creativity in new and exciting ways.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Curriculum",
  },
]

// Mock upcoming events
const upcomingEvents = [
  {
    id: 1,
    title: "Open House Day",
    date: "March 15, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "SKYHIGH Campus",
    description: "Visit our campus, meet teachers, and learn about our programs.",
  },
  {
    id: 2,
    title: "Spring Festival",
    date: "April 10, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "School Playground",
    description: "Join us for a day of fun activities, games, and performances.",
  },
  {
    id: 3,
    title: "Parent Workshop: Positive Discipline",
    date: "April 25, 2025",
    time: "6:00 PM - 7:30 PM",
    location: "School Auditorium",
    description: "Learn effective strategies to support your child's behavior development.",
  },
]

export default function NewsPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-800">News & Updates</h1>
            <p className="text-lg text-gray-600">
              Stay informed about the latest happenings and upcoming events at SKYHIGH Preschool
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-12 bg-sky-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-sky-800 mb-8">Upcoming Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-sky-600 mr-2" />
                  <span className="text-sky-600 font-medium">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold text-sky-800 mb-2">{event.title}</h3>
                <div className="flex items-center mb-2 text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{event.time}</span>
                </div>
                <p className="text-gray-600 mb-2">
                  <strong>Location:</strong> {event.location}
                </p>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <Link
                  href={`/events/${event.id}`}
                  className="text-sky-600 hover:text-sky-700 font-medium inline-flex items-center"
                >
                  Event Details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-sky-800 mb-8">Latest News</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news) => (
              <div key={news.id} className="bg-sky-50 rounded-xl overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image
                    src={news.image || "/placeholder.svg"}
                    alt={news.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-sky-600 text-white text-xs font-medium px-2 py-1 rounded">
                    {news.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Calendar className="h-4 w-4 text-sky-600 mr-2" />
                    <span className="text-sky-600 text-sm">{news.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-sky-800 mb-2">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <Link
                    href={`/news/${news.id}`}
                    className="text-sky-600 hover:text-sky-700 font-medium inline-flex items-center"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-sky-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg mb-8">
              Stay updated with the latest news, events, and educational insights from SKYHIGH Preschool.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-300"
                required
              />
              <button
                type="submit"
                className="bg-sky-800 hover:bg-sky-900 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm mt-4 text-sky-100">We respect your privacy. You can unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      {/* Archive Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-sky-800 mb-8">News Archive</h2>

            <div className="space-y-6">
              <ArchiveMonth month="February 2025" count={3} />
              <ArchiveMonth month="January 2025" count={5} />
              <ArchiveMonth month="December 2024" count={4} />
              <ArchiveMonth month="November 2024" count={6} />
              <ArchiveMonth month="October 2024" count={3} />
              <ArchiveMonth month="September 2024" count={7} />
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/news/archive"
                className="bg-sky-100 hover:bg-sky-200 text-sky-800 font-medium py-2 px-6 rounded-lg transition-colors inline-flex items-center"
              >
                View Complete Archive <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ArchiveMonth({ month, count }: { month: string; count: number }) {
  return (
    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
      <Link
        href={`/news/archive/${month.toLowerCase().replace(" ", "-")}`}
        className="text-sky-800 hover:text-sky-600 font-medium"
      >
        {month}
      </Link>
      <span className="bg-sky-100 text-sky-800 text-sm px-2 py-1 rounded-full">
        {count} {count === 1 ? "post" : "posts"}
      </span>
    </div>
  )
}


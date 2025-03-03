"use client"
import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

// Mock gallery data
const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Children playing in classroom",
    category: "Classroom",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Art activity",
    category: "Activities",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Outdoor playtime",
    category: "Playground",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Music class",
    category: "Activities",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Science experiment",
    category: "Classroom",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Sports day",
    category: "Events",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Reading corner",
    category: "Classroom",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Annual day celebration",
    category: "Events",
  },
  {
    id: 9,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Gardening activity",
    category: "Activities",
  },
  {
    id: 10,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Playground equipment",
    category: "Playground",
  },
  {
    id: 11,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Parent-teacher meeting",
    category: "Events",
  },
  {
    id: 12,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Computer lab",
    category: "Facilities",
  },
]

const categories = ["All", "Classroom", "Activities", "Playground", "Events", "Facilities"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string
    alt: string
  }>(null)

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-800">Our Gallery</h1>
            <p className="text-lg text-gray-600">
              Glimpses of joyful learning and memorable moments at SKYHIGH Preschool
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category ? "bg-sky-600 text-white" : "bg-sky-100 text-sky-800 hover:bg-sky-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative aspect-square rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-shadow"
                onClick={() => setSelectedImage({ src: image.src, alt: image.alt })}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-start p-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full h-auto">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-sky-300 transition-colors"
                aria-label="Close lightbox"
              >
                <X size={24} />
              </button>
              <div className="relative w-full" style={{ height: "80vh" }}>
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <p className="text-white text-center mt-4">{selectedImage.alt}</p>
            </div>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-sky-800 mb-4">Visit Our School</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Pictures can only tell part of the story. Schedule a visit to experience the warm, nurturing environment of
            SKYHIGH Preschool in person.
          </p>
          <a
            href="/contact"
            className="bg-sky-600 hover:bg-sky-700 text-white font-medium py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
          >
            Schedule a Tour
          </a>
        </div>
      </section>
    </div>
  )
}


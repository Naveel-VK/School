"use client"
import { useState } from "react"
import type React from "react"

import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    childName: "",
    childAge: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    // Simulate API call
    try {
      // In a real application, this would be an API call to your backend
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        childName: "",
        childAge: "",
      })
    } catch (error) {
      setSubmitError("There was an error submitting your form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sky-800">Contact Us</h1>
            <p className="text-lg text-gray-600">
              We'd love to hear from you! Reach out with any questions about our programs or to schedule a visit.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ContactInfoCard
              icon={<MapPin className="h-8 w-8 text-sky-600" />}
              title="Our Location"
              details={["123 Sky Avenue", "Cloud City, CC 12345", "United States"]}
            />

            <ContactInfoCard
              icon={<Phone className="h-8 w-8 text-sky-600" />}
              title="Phone Numbers"
              details={["Main Office: (123) 456-7890", "Admissions: (123) 456-7891", "After Hours: (123) 456-7892"]}
            />

            <ContactInfoCard
              icon={<Mail className="h-8 w-8 text-sky-600" />}
              title="Email Addresses"
              details={[
                "General Inquiries: info@skyhighpreschool.com",
                "Admissions: admissions@skyhighpreschool.com",
                "Principal: principal@skyhighpreschool.com",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-12 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Clock className="h-8 w-8 text-sky-600 mr-3" />
              <h2 className="text-3xl font-bold text-sky-800">School Hours</h2>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-sky-800 mb-4">Regular School Hours</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="font-medium">Monday - Friday:</span>
                      <span>8:30 AM - 2:30 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Saturday - Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-sky-800 mb-4">Office Hours</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="font-medium">Monday - Friday:</span>
                      <span>8:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Saturday:</span>
                      <span>9:00 AM - 12:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="text-xl font-bold text-sky-800 mb-4">Extended Care Programs</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="font-medium">Early Drop-off:</span>
                    <span>7:30 AM - 8:30 AM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">After-school Program:</span>
                    <span>2:30 PM - 5:30 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-sky-800 mb-8 text-center">Get in Touch</h2>

            {submitSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Send className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                <p className="text-green-700 mb-6">
                  Thank you for reaching out to SKYHIGH Preschool. We'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-sky-50 rounded-xl p-8 shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Admissions">Admissions</option>
                      <option value="Schedule a Tour">Schedule a Tour</option>
                      <option value="Employment">Employment</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-sky-800 mb-4">Child Information (Optional)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="childName" className="block text-gray-700 font-medium mb-2">
                        Child's Name
                      </label>
                      <input
                        type="text"
                        id="childName"
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="childAge" className="block text-gray-700 font-medium mb-2">
                        Child's Age
                      </label>
                      <input
                        type="text"
                        id="childAge"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  ></textarea>
                </div>

                {submitError && <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">{submitError}</div>}

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-sky-600 hover:bg-sky-700 text-white font-medium py-3 px-8 rounded-lg transition-colors inline-flex items-center ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold text-sky-800 mb-4">Find Us</h2>
            <p className="text-gray-600">
              We're conveniently located in the heart of Cloud City, with easy access to public transportation.
            </p>
          </div>

          <div className="bg-white p-2 rounded-xl shadow-md">
            {/* This would be a real map in a production environment */}
            <div className="relative h-96 w-full bg-gray-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500">Interactive Map Would Be Displayed Here</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-6 rounded-lg transition-colors inline-flex items-center"
            >
              Get Directions 
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactInfoCard({
  icon,
  title,
  details,
}: {
  icon: React.ReactNode
  title: string
  details: string[]
}) {
  return (
    <div className="bg-sky-50 rounded-xl p-6 shadow-md text-center">
      <div className="flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-sky-800 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="text-gray-600">
            {detail}
          </li>
        ))}
      </ul>
    </div>
  )
}


import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-sky-700 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl mb-4">SKYHIGH Preschool</h3>
            <p className="mb-4">Where little minds soar to new heights</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-sky-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-sky-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-sky-300 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-sky-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sky-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-sky-300 transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-sky-300 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-sky-300 transition-colors">
                  News & Updates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-4">Contact Us</h3>
            <address className="not-italic">
              <div className="flex items-start gap-2 mb-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>123 Sky Avenue, Cloud City, CC 12345</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Phone size={18} className="flex-shrink-0" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@skyhighpreschool.com" className="hover:text-sky-300 transition-colors">
                  info@skyhighpreschool.com
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-sky-600 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SKYHIGH Preschool. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


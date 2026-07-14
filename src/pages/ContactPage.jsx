import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

const contactCards = [
  {
    icon: MapPin,
    title: 'Address',
    lines: ['Y-12, Block EP, Sector V,', 'Salt Lake, Kolkata,', 'West Bengal 700091'],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+91-33-2357-0930', '+91-33-2321-2053'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@iem.edu.in', 'bsh@iem.edu.in'],
  },
  {
    icon: Clock,
    title: 'Office Hours',
    lines: ['Mon - Fri: 9:00 AM - 5:00 PM', 'Sat: 9:00 AM - 1:00 PM'],
  },
]

function ContactPage() {
  return (
    <div>
      <Navbar />
      <PageHero
        badge="Contact"
        title="Get in Touch"
        subtitle="Have a question about admissions, academics, or research? We'd love to hear from you."
      />

      {/* Contact info cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 lg:pt-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand-blue" strokeWidth={2} />
                </div>
                <h3 className="text-navy font-bold text-base sm:text-lg mb-2">{card.title}</h3>
                {card.lines.map((line) => (
                  <p key={line} className="text-gray-500 text-sm sm:text-base leading-relaxed">{line}</p>
                ))}
              </div>
            )
          })}
        </div>
      </section>

      {/* Form + Map */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Contact form */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8">
            <h2 className="text-navy font-bold text-lg sm:text-xl mb-1">Send us a Message</h2>
            <p className="text-gray-500 text-sm mb-6">We typically respond within 1-2 business days.</p>

            <form className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-navy text-xs font-medium mb-1.5 block">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-shadow"
                  />
                </div>
                <div>
                  <label className="text-navy text-xs font-medium mb-1.5 block">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-shadow"
                  />
                </div>
              </div>

              <div>
                <label className="text-navy text-xs font-medium mb-1.5 block">Subject</label>
                <input
                  type="text"
                  placeholder="What is this regarding?"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-shadow"
                />
              </div>

              <div>
                <label className="text-navy text-xs font-medium mb-1.5 block">Message</label>
                <textarea
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-shadow resize-none"
                />
              </div>

              <button
                type="button"
                className="flex w-full sm:w-auto items-center justify-center gap-2 bg-brand-blue hover:bg-blue-700 text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors mt-2"
              >
                Send Message
                <Send className="w-4 h-4" strokeWidth={2} />
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm min-h-[280px] sm:min-h-[400px]">
            <iframe
              title="IEM Location Map"
              src="https://www.google.com/maps?q=IEM+Salt+Lake+Kolkata&output=embed"
              className="w-full h-full min-h-[280px] sm:min-h-[400px]"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage
"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Clock, CheckCircle } from "lucide-react"

const vendorCategories = [
  "Engineering Services",
  "Equipment Supply",
  "Construction Services",
  "Maintenance Services",
  "Technical Consultancy",
  "Material Supply",
  "Logistics & Transportation",
  "HSE Services",
  "Manpower Supply",
  "Other Services",
]

export default function VendorRegistration() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Vendor Registration</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Join our network of trusted vendors and partners to collaborate on energy projects
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Registration Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="shadow-xl border-0 bg-white rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Vendor Information</h2>

                <form className="space-y-6">
                  {/* Company Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Details</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                        <input
                          type="text"
                          placeholder="Your company name"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Registration Number *</label>
                        <input
                          type="text"
                          placeholder="Company registration number"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Year Established</label>
                      <input
                        type="number"
                        placeholder="e.g., 2010"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Number of Employees</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                        <option value="">Select range</option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="201-500">201-500</option>
                        <option value="500+">500+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Address *</label>
                    <textarea
                      placeholder="Full company address"
                      rows={3}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  {/* Contact Information */}
                  <div className="pt-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person *</label>
                        <input
                          type="text"
                          placeholder="Full name"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Position/Title *</label>
                        <input
                          type="text"
                          placeholder="e.g., Procurement Manager"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          placeholder="company@example.com"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          placeholder="+234 (0) 123 456 7890"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                      <input
                        type="url"
                        placeholder="https://www.example.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>

                  {/* Services & Products */}
                  <div className="pt-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Services & Products</h3>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Vendor Category *</label>
                      <select
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="">Select primary category</option>
                        {vendorCategories.map((category) => (
                          <option key={category} value={category.toLowerCase().replace(/\s+/g, "-")}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Products/Services Description *
                      </label>
                      <textarea
                        placeholder="Detailed description of your products or services"
                        rows={4}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>

                  {/* Certifications & Experience */}
                  <div className="pt-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Certifications & Experience</h3>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Certifications</label>
                      <textarea
                        placeholder="List relevant certifications (ISO, industry-specific, etc.)"
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Previous Experience</label>
                      <textarea
                        placeholder="Brief description of relevant projects or experience"
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                      <input type="checkbox" id="attachments" className="rounded" />
                      <label htmlFor="attachments" className="text-sm font-medium">
                        I would like to attach supporting documents (certifications, company profile, etc.)
                      </label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="terms" required className="rounded" />
                      <label htmlFor="terms" className="text-sm font-medium">
                        I agree to the terms and conditions and privacy policy
                      </label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 flex items-center justify-center"
                  >
                    Submit Registration
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="border-0 shadow-lg bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Registration Process</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <FileText className="h-5 w-5 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Submit Registration</h4>
                      <p className="text-sm text-gray-600">Complete the form with your company details</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Verification</h4>
                      <p className="text-sm text-gray-600">Our team will review your application</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Approval</h4>
                      <p className="text-sm text-gray-600">Receive confirmation and vendor ID</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-0 shadow-lg bg-primary-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Register?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Access to procurement opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Simplified bidding process</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Long-term business relationships</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Potential for strategic partnerships</span>
                  </li>
                </ul>
              </div>

              <div className="border-0 shadow-lg bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
                <p className="text-gray-600 mb-4">
                  If you have any questions about the vendor registration process, please contact our procurement team.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-primary-500 font-medium">Email:</span>
                    <span className="ml-2 text-gray-600">vendors@digitalenergy.ng</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary-500 font-medium">Phone:</span>
                    <span className="ml-2 text-gray-600">+234 (0) 123 456 7890</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

import React from 'react'

export default function Newsletter_section() {
  return (
    <div>
        <section className="bg-blue-600 py-16 px-6">
           <div className="max-w-4xl mx-auto text-center">
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                 Stay Updated with Our Latest Courses
              </h2>

              {/* Paragraph */}
              <p className="text-blue-100 mb-8">
                 Join our newsletter to get exclusive learning resources, updates, and special offers straight to your inbox.
              </p>

              {/* Newsletter Form */}
              <form className="flex flex-col sm:flex-row gap-4 justify-center">
                 <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-5 py-3 rounded-lg w-full sm:w-2/3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                 />
                 <button
                    type="submit"
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
                 >
                    Subscribe
                 </button>
              </form>

              {/* Small Text */}
              <p className="text-sm text-blue-200 mt-4">
                 We care about your privacy. Unsubscribe anytime.
              </p>
           </div>
        </section>

    </div>
  )
}

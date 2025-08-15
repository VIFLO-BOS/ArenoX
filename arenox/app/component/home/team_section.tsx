import React from 'react'

export default function Team_section() {
  return (
    <div>
        <section className="bg-gray-50 py-16">
           <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-12">Meet Our Team</h2>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                 {/* Card 1 */}
                 <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                    <img
                       src="https://via.placeholder.com/150"
                       alt="John Doe"
                       className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
                    <p className="text-blue-600 text-sm mb-2">CEO & Founder</p>
                    <p className="text-gray-600 text-sm">
                       Visionary leader with 10+ years of experience in tech innovation.
                    </p>
                 </div>

                 {/* Card 2 */}
                 <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                    <img
                       src="https://via.placeholder.com/150"
                       alt="Jane Smith"
                       className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
                    <p className="text-blue-600 text-sm mb-2">CTO</p>
                    <p className="text-gray-600 text-sm">
                       Expert in AI and software architecture, driving innovation at scale.
                    </p>
                 </div>

                 {/* Card 3 */}
                 <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                    <img
                       src="https://via.placeholder.com/150"
                       alt="Michael Lee"
                       className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">Michael Lee</h3>
                    <p className="text-blue-600 text-sm mb-2">Head of Design</p>
                    <p className="text-gray-600 text-sm">
                       Passionate about creating intuitive and user-friendly experiences.
                    </p>
                 </div>

                 {/* Card 4 */}
                 <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                    <img
                       src="https://via.placeholder.com/150"
                       alt="Sophia Johnson"
                       className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">Sophia Johnson</h3>
                    <p className="text-blue-600 text-sm mb-2">Marketing Lead</p>
                    <p className="text-gray-600 text-sm">
                       Creative strategist helping brands connect with their audiences.
                    </p>
                 </div>
              </div>
           </div>
        </section>

    </div>
  )
}

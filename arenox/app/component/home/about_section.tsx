
export default function About_section() {
  return (
    <div>


      <section className="py-16 lg:py-25 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

         
          <div className="flex justify-center">
            <img
              src="/public/images/undraw_online-learning_tgmv.svg"
              alt="Learning Illustration"
              className="w-full max-w-md"
              loading="lazy"
            />
          </div>
          

         
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We’re Here to Make Learning Simple and Impactful
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Education is the most powerful tool for change and we’re on a mission to make it accessible to everyone, everywhere.
              We connect learners with industry experts who know how to make complex topics simple, practical, and engaging.
              Whether you’re a student, a working professional, or a curious mind, we’ve built this platform to help you achieve your dreams.
            </p>
            <a
              href="#about"
              className="inline-block bg-blue-600 !text-white px-6 py-3 rounded-sm shadow-md hover:bg-blue-700 transition-colors duration-500"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

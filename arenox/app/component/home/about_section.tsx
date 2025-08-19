export default function About_section() {
  return (
    <section className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left: Illustration */}
        <div className="flex justify-center">
          <img
            src="/images/undraw_online-learning_tgmv.svg"
            alt="Learning Illustration"
            className="w-full max-w-md rounded-xl shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Right: Text Content */}
        <div>
          <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm mb-3 block">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            We’re Here to Make <span className="text-blue-600">Learning</span> Simple and Impactful
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Education is the most powerful tool for change and we’re on a mission
            to make it accessible to everyone, everywhere. We connect learners with
            industry experts who simplify complex topics into engaging, practical lessons.
            Whether you’re a student, a professional, or simply curious, we’ve built this
            platform to help you achieve your dreams.
          </p>
          <a
            href="#about"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-7 py-3 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  )
}

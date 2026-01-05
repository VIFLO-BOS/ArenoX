export default function Newsletter_section() {
  return (
    <div className="flex items-center justify-center bg-linear-to-r from-blue-700 to-indigo-800 relative overflow-hidden py-24">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>

      <div className="z-10 px-6 max-w-4xl mx-auto text-center relative">
        {/* Heading */}
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold mb-6 backdrop-blur-sm">
          🚀 Join the Community
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Stay Updated with Our Latest Courses
        </h2>

        {/* Paragraph */}
        <p className="text-gray-200 text-lg mb-10 max-w-2xl mx-auto">
          Join our newsletter to get exclusive learning resources, updates, and
          special offers straight to your inbox. No spam, ever.
        </p>

        {/* Newsletter Form */}
        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            aria-label="Email Address"
            className="px-6 py-4 rounded-xl w-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-500/30 bg-white border border-transparent transition-all shadow-lg"
          />
          <button
            type="submit"
            aria-label="Subscribe"
            className="bg-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-700 transition duration-300 ease-in-out shadow-lg hover:shadow-orange-700/50 hover:-translate-y-1"
          >
            Subscribe
          </button>
        </form>

        {/* Small Text */}
        <p className="text-xs text-blue-200/80 mt-6">
          We care about your privacy. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}

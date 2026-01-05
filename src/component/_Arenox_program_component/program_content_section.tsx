import Image from "next/image";

export default function Program_content_section() {
  const categories = [
    {
      name: "Programming & Development",
      desc: "Learn to code websites, apps, and software from scratch, using tools trusted by industry leaders.",
      url: "https://i.pinimg.com/1200x/b8/70/f0/b870f0abbf1459f066614a76bc7ae66b.jpg",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Business & Entrepreneurship",
      desc: "Build a profitable business, manage teams effectively, and develop growth strategies.",
      url: "https://i.pinimg.com/736x/6e/e9/18/6ee918d6bad713109da451d783c45126.jpg", // Data visualization, graphs
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Design & Creativity",
      desc: "Master graphic design, branding, and digital content creation to make your ideas visually stunning.",
      url: "https://i.pinimg.com/736x/63/95/9d/63959d39985fe45e664e45a76bd489e8.jpg", // Modern office workspace
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Data Science & Analytics",
      desc: "Unlock the power of data with tools like Excel, SQL, and Python to drive informed decisions.",
      url: "https://i.pinimg.com/736x/db/cc/50/dbcc50a4b3179023dff5543f5ad88e75.jpg",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:flex-nowrap gap-10 px-4 lg:px-24 py-16 bg-gray-50/50 h-full">
      {/* Sidebar Filters */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 w-full lg:w-[20rem] h-fit sticky top-24">
        <h2 className="font-bold text-lg mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
          <i className="bi bi-funnel"></i> Filters
        </h2>
        <form action="" className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label
              htmlFor="Program Type"
              className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide"
            >
              Program Type
            </label>
            <div className="space-y-2">
              {["Bootcamp", "Certification", "Degree"].map((type, i) => (
                <label
                  key={i}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm font-medium">
                    {type}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="Duration"
              className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide"
            >
              Duration
            </label>
            <div className="flex flex-col gap-2">
              {["4-8 weeks", "2-6 months", "6+ months"].map((duration, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-3 py-2 rounded-lg bg-gray-50 hover:bg-blue-50 cursor-pointer transition-colors border border-transparent hover:border-blue-100 group"
                >
                  <span className="text-sm text-gray-600 group-hover:text-blue-700 font-medium">
                    {duration}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      i === 0
                        ? "bg-green-500"
                        : i === 1
                        ? "bg-orange-500"
                        : "bg-blue-500"
                    }`}
                  ></span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="Format"
              className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide"
            >
              Format
            </label>
            <div className="space-y-2">
              {["Online", "Hybrid", "Self-paced", "Instructor-led"].map(
                (format, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="format"
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm font-medium">
                      {format}
                    </span>
                  </label>
                )
              )}
            </div>
          </div>

          <button className="w-full mt-2 py-2 bg-gray-900 text-white rounded-xl font-medium hover:bg-black transition-colors">
            Apply Filters
          </button>
        </form>
      </div>

      {/* Main Content */}
      <div className="w-full">
        {/* Top Tabs */}
        <div className="hidden lg:flex p-1.5 bg-white rounded-full w-fit shadow-sm border border-gray-100 mb-8">
          {["Bootcamp", "Certifications", "Degrees"].map((tab, i) => (
            <button
              key={i}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                i === 0
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {categories.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.url}
                  alt={item.name}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold shadow-sm">
                  {item.rating}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col p-5 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                    Course
                  </span>
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                  {item.name}
                </h2>

                <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>

                {/* Info */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4 pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-1">
                    <i className="bi bi-clock"></i> 16 weeks
                  </div>
                  <div className="flex items-center gap-1">
                    <i className="bi bi-person-video3"></i> Instructor Led
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {["HTML", "React", "JS"].map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-600 text-[10px] uppercase font-bold px-2 py-1 rounded-md border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto">
                  <button className="flex-1 bg-blue-600 text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all">
                    Explore
                  </button>
                  <button className="flex-1 bg-white text-gray-700 border border-gray-200 text-sm font-semibold py-2.5 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all">
                    Syllabus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why choose our programs section */}
        <div className="bg-linear-to-br from-blue-900 to-indigo-900 rounded-3xl p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-20 bg-blue-500/20 blur-3xl rounded-full translate-x-10 -translate-y-10"></div>
          <div className="absolute bottom-0 left-0 p-20 bg-orange-500/10 blur-3xl rounded-full -translate-x-10 translate-y-10"></div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <h1 className="font-bold text-2xl lg:text-3xl mb-2">
                  Why choose our programs?
                </h1>
                <p className="text-blue-200">
                  World-class education tailored for your success.
                </p>
              </div>
              <button className="w-fit whitespace-nowrap rounded-full bg-white text-blue-900 font-bold px-6 py-3 hover:bg-blue-50 transition shadow-lg">
                Compare Programs <i className="bi bi-arrow-right ml-1"></i>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 text-2xl">
                  🏅
                </div>
                <h3 className="font-bold text-lg mb-2">
                  Recognized Credentials
                </h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Earn certificates and degrees valued by top employers
                  worldwide.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4 text-2xl">
                  🦸‍♂️
                </div>
                <h3 className="font-bold text-lg mb-2">Expert Mentorship</h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Direct guidance from industry veterans and 1-on-1 coaching.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 text-2xl">
                  💼
                </div>
                <h3 className="font-bold text-lg mb-2">Career Support</h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Resume reviews, mock interviews, and exclusive job board
                  access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

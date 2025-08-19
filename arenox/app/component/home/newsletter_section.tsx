export default function Newsletter_section() {
   return (
      <div className="flex items-center justify-center my-10 rounded-xl mx-20 bg-[url('https://i.pinimg.com/1200x/18/11/8e/18118ef0cc8d2bdabd3cab6619a900bf.jpg')] bg-cover bg-center ">
         <section className="z-10 py-16 mb-20 max-w-4xl mx-auto text-center">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold !text-white mb-4">
               Stay Updated with Our Latest Courses
            </h2>

            {/* Paragraph */}
            <p className="!text-gray-100 mb-8">
               Join our newsletter to get exclusive learning resources, updates,
               and special offers straight to your inbox.
            </p>

            {/* Newsletter Form */}
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
               <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email Address"
                  className="px-5 py-3 rounded-lg w-full sm:w-2/3 focus:outline-none focus:ring-2 bg-blue-50 focus:ring-blue-300"
               />
               <button
                  type="submit"
                  aria-label="Subscribe"
                  className="bg-orange-400 !text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition duration-300 ease-in"
               >
                  Subscribe
               </button>
            </form>

            {/* Small Text */}
            <p className="text-sm !text-gray-200 mt-4">
               We care about your privacy. Unsubscribe anytime.
            </p>
         </section>

         {/* Separate Video Section */}
         {/* <div className="max-w-4xl mx-auto px-6">
            <video className="w-80" poster="https://i.pinimg.com/videos/thumbnails/originals/88/47/6f/88476fd44a47341a7c3bdf0da16b50f6.0000000.jpg" preload="auto" src="https://v1.pinimg.com/videos/mc/expMp4/88/47/6f/88476fd44a47341a7c3bdf0da16b50f6_t3.mp4" autoPlay style={{objectFit: "contain"}}></video>
         </div> */}
      </div>
   )
}


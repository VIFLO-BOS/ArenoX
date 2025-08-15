export default function Courses() {
   const categories = [
      {
         name: "Programming & Development",
         desc: "Learn to code websites, apps, and software from scratch, using tools trusted by industry leaders.",
         url: "https://i.pinimg.com/1200x/b8/70/f0/b870f0abbf1459f066614a76bc7ae66b.jpg",
         rating: "⭐⭐⭐⭐⭐"
      },
      {
         name: "Business & Entrepreneurship",
         desc: "Build a profitable business, manage teams effectively, and develop growth strategies.",
         url: "https://i.pinimg.com/736x/6e/e9/18/6ee918d6bad713109da451d783c45126.jpg", // Data visualization, graphs
         rating: "⭐⭐⭐⭐⭐"
      },
      {
         name: "Design & Creativity",
         desc: "Master graphic design, branding, and digital content creation to make your ideas visually stunning.",
         url: "https://i.pinimg.com/736x/63/95/9d/63959d39985fe45e664e45a76bd489e8.jpg", // Modern office workspace
         rating: "⭐⭐⭐⭐⭐"
      },
      {
         name: "Data Science & Analytics",
         desc: "Unlock the power of data with tools like Excel, SQL, and Python to drive informed decisions.",
         url: "https://i.pinimg.com/736x/db/cc/50/dbcc50a4b3179023dff5543f5ad88e75.jpg",
         rating: "⭐⭐⭐⭐⭐"
      },
      {
         name: "Marketing & Communication",
         desc: "Learn SEO, social media management, and advertising strategies to grow your audience.",
         url: "https://i.pinimg.com/736x/b0/41/ab/b041abab5f12ce21f693f0bf2e1f895b.jpg",
         rating: "⭐⭐⭐⭐⭐"
      },
      {
         name: "Personal Development",
         desc: "Improve your productivity, mindset, and soft skills to excel in any field.",
         url: "https://i.pinimg.com/736x/d1/bb/7a/d1bb7a3ce0877a73ebc34d9ee7e55907.jpg",
         rating: "⭐⭐⭐⭐⭐"
      }
   ];

   return (
      <div className="bg-white py-15">
         <div className="container mx-auto px-10">
            <div className="mb-10">
               <h1 className="font-semibold text-4xl pb-4 text-center">Find Your Perfect Learning Path</h1>
               <p className="pb-5 text-center lg:px-20">We understand that every learner has unique goals. That’s why our courses are grouped into well-defined categories, making it easy for you to find the right skills for your career, business, or personal development journey.
               </p>
            </div>

            <div className="flex justify-start overflow-x-auto gap-3 mb-10 p-5 scrollbar-hide flex-nowrap"
               style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}>
               {categories.map((item, index) => (
                  <div
                     key={index}
                     className="bg-white shadow-lg rounded-sm w-64 sm:w-72 flex-shrink-0 border-b-2 border-orange-500 hover:scale-102 transition-all duration-300 ease-in-out cursor-pointer"
                  >
                     <div className="text-center lg:text-start h-90 flex flex-col justify-between">
                        <div className="flex flex-col gap-1">
                           <div>
                              <img
                                 src={item.url}
                                 alt=""
                                 className="w-full h-48 object-cover object-center rounded-sm mb-2"
                              />
                           </div>
                           <h1 className="text-lg font-bold px-2">{item.name}</h1>
                           <p className="text-sm text-gray-600 px-2">{item.desc}</p>
                        </div>

                        <div className="flex justify-between">
                        <span className="text-sm bg-orange-400 hover:bg-orange-500 !text-white shadow text-center py-1 m-3 rounded-sm  cursor-pointer px-1 self-end">
                           Explore Courses
                        </span>
                           <span className="text-sm px-4 py-1 m-3 rounded-sm   text-center">
                              {item.rating}
                           </span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

         </div>
      </div>
   )
}
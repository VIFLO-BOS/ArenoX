
export default function Freelance_section() {

   const bgImg: Object = {
      background: "linear-gradient(to right, rgba(0,0,0,0.7 ), rgba(0,0,0,0.5)),url('/images/background/10.jpg')",
      backgroundSize: "cover",
   }
   return (
      <div className="py-10 px-10 bg-cover bg-no-repeat bg-center " style={bgImg}>

         <div className="container mx-auto lg:px-10">
            <div className="mt-5" >
               <h1 className="!text-white text-5xl font-semibold mb-8 text-center lg:text-start lg:w-150">Popular Courses Loved by Learners</h1>
               <p className="!text-white mb-5 opacity-70 text-center lg:text-start lg:w-150">These are the courses our learners can’t stop talking about. Tried, tested, and proven to deliver real results in career growth, creativity, and confidence.</p>

               <div className="flex gap-2 mb-10">
                  <button className="bg-orange-500 hover:bg-orange-600 py-2 px-3 rounded-sm !text-white  transition-all duration-500" type="button">Become a Tutor</button>
                  <button className="!text-white py-2 px-3 rounded-sm hover:bg-blue-800  transition-all duration-500">Browse Freelancer <i className="bi bi-arrow-right !text-white"></i> </button>
               </div>
            </div>

            <div className="container mx-auto">
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  p-6">

                  {/* Card 1 */}
                  <div className="bg-white rounded-xl max-w-xs mx-auto shadow-md hover:scale-105 transition duration-500 flex flex-col h-full">
                     <img className="w-full h-48 object-fill rounded-lg" src="https://i.pinimg.com/1200x/0e/4f/dc/0e4fdce8ac22e09688c580e5bc4dcd7d.jpg" alt="" />
                     <div className="flex flex-col flex-grow p-3">
                        <h1 className="text-lg font-bold mb-4">JavaScript Mastery from Zero to Hero</h1>
                        <p className="text-gray-800 mb-4">
                           Learn the language that powers 95% of the web through practical projects.
                        </p>
                        <div className="mt-auto p-3">
                           <span className="text-black font-semibold cursor-pointer">
                              Learn Course <i className="bi bi-arrow-right "></i>
                           </span>
                        </div>
                     </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white rounded-xl max-w-xs mx-auto shadow-md hover:scale-105 transition duration-500 flex flex-col h-full">
                     <img className="w-full h-48 object-cover rounded-lg" src="https://i.pinimg.com/736x/a9/bf/6f/a9bf6fc33e76a36b46e40701a0e32bc1.jpg" alt="" />
                     <div className="flex flex-col flex-grow p-3">
                        <h1 className="text-lg font-bold mb-4">Digital Marketing Bootcamp</h1>
                        <p className="text-gray-800 mb-4">
                           Build campaigns, analyze results, and create brands people trust.
                        </p>
                        <div className="mt-auto p-3">
                           <span className="text-black font-semibold cursor-pointer">
                              Learn Course <i className="bi bi-arrow-right "></i>
                           </span>
                        </div>
                     </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white rounded-xl max-w-xs mx-auto shadow-md hover:scale-105 transition duration-500 flex flex-col h-full">
                     <img className="w-full h-48 object-cover rounded-lg" src="https://i.pinimg.com/1200x/df/5f/c1/df5fc1e693a5a491d64a75ecd769a73f.jpg" alt="" />
                     <div className="flex flex-col flex-grow p-3">
                        <h1 className="text-lg font-bold mb-4">Graphic Design Essentials</h1>
                        <p className="text-gray-800 ">
                           From color theory to typography, create professional visuals using industry tools.
                        </p>
                        <div className="mt-auto p-3">
                           <span className="text-black font-semibold cursor-pointer">
                              Learn Course <i className="bi bi-arrow-right "></i>
                           </span>
                        </div>
                     </div>
                  </div>

               </div>

            </div>
         </div>
      </div>
   )
}

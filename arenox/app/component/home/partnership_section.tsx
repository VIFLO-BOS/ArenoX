
export const Partnership_section = () => {
  return (
    <div>
      
      <section className="bg-white pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-lg font-bold text-gray-800 mb-12">
            Trusted by Leading Organizations
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-80 hover:opacity-100 transition">
            {/* Partner Logo 1 */}
            <img
              src="/images/companies/microsoft.svg"
              alt="Partner 1"
              className="h-14 object-contain grayscale hover:grayscale-0 transition"
            />

            {/* Partner Logo 2 */}
            <img
              src="/images/companies/google.svg"
              alt="Partner 2"
              className="h-14 object-contain grayscale hover:grayscale-0 transition"
            />

            {/* Partner Logo 3 */}
            <img
              src="/images/companies/airbnb.svg"
              alt="Partner 3"
              className="h-14 object-contain grayscale hover:grayscale-0 transition"
            />

            {/* Partner Logo 4 */}
            <img
              src="/images/companies/fedex.svg"
              alt="Partner 4"
              className="h-14 object-contain grayscale hover:grayscale-0 transition"
            />

            {/* Partner Logo 5 */}
            <img
              src="/images/companies/hubspot.svg"
              alt="Partner 5"
              className="h-14 object-contain grayscale hover:grayscale-0 transition"
            />

            {/* Partner Logo 6 */}
            <img
              src="/images/companies/walmart.svg"
              alt="Partner 5"
              className="h-14 object-contain grayscale hover:grayscale-0 transition"
            />
          </div>
        </div>
      </section>

    </div>
  )
}

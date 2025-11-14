import Image from "next/image";

export const Partnership_section = () => {
  return (
    <div>
      <section className="bg-white pb-16">
        <div className="flex justify-between gap-2 max-w-7xl mx-auto p-10">
          <div>
            <h2 className="text-center lg:text-start text-lg font-bold text-gray-800 mb-12">
              Trusted by Leading Organizations
            </h2>
            <div className="flex flex-wrap justify-center lg:justify-self-start items-center gap-10 opacity-80 hover:opacity-100 transition">
              {/* Partner Logo 1 */}
              <Image
                width={400}
                height={400}
                src="/images/companies/microsoft.svg"
                alt="Partner 1"
                className="w-20 h-10 object-contain grayscale hover:grayscale-0 transition"
              />

              {/* Partner Logo 2 */}
              <Image
                width={400}
                height={400}
                src="/images/companies/google.svg"
                alt="Partner 2"
                className="w-20 h-10 object-contain grayscale hover:grayscale-0 transition"
              />

              {/* Partner Logo 3 */}
              <Image
                width={400}
                height={400}
                src="/images/companies/airbnb.svg"
                alt="Partner 3"
                className="w-20 h-10 object-contain grayscale hover:grayscale-0 transition"
              />

              {/* Partner Logo 4 */}
              <Image
                width={400}
                height={400}
                src="/images/companies/fedex.svg"
                alt="Partner 4"
                className="w-20 h-10 object-contain grayscale hover:grayscale-0 transition"
              />

              {/* Partner Logo 5 */}
              <Image
                width={400}
                height={400}
                src="/images/companies/hubspot.svg"
                alt="Partner 5"
                className="w-20 h-10 object-contain grayscale hover:grayscale-0 transition"
              />

              {/* Partner Logo 6 */}
              <Image
                width={400}
                height={400}
                src="/images/companies/walmart.svg"
                alt="Partner 5"
                className="w-20 h-10 object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          </div>

          <div className="div">
            <h2 className="text-2xl font-semibold">
              We have over{" "}
              <span className="!text-blue-500 font-bold">
                50K<span className="!text-orange-500 text-4xl">+</span>
              </span>{" "}
              partners across the world.
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

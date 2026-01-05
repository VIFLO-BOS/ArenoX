import Image from "next/image";



export default function View_user({) {
  return (
    <div
      className="w-full max-w-9xl bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 overflow-y-auto max-h-[90vh] transition-all duration-500"
      style={{ scrollbarWidth: "none" }}
    >
      <button
        onClick={onClose}
        className="text-slate-500 hover:text-red-600 transition text-2xl fixed top-4 right-4 "
      >
        ✕
      </button>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="">
            <Image
              src="/images/student-img/stud-2.jpg"
              width={150}
              height={50}
              alt="images"
              className="rounded-full w-35 h-35"
              loading="lazy"
            />
          </div>
          <div className="text-center mt-3">
            <h2 className="text-2xl font-medium text-slate-700">
              Bankole Olaniyi
            </h2>
            <p className="flex flex-col text-sm text-slate-500">
              <span className="font-mediu">Username:bosman</span>
              <span>UUID: wieutbhvh27657bhjgh</span>
            </p>
          </div>
        </div>
        /* @ information-grid : grid layout for personal, address, company, and login information */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
          /* @ personal-info : display user's personal information section */}
          <section>
            <h3 className="text-lg font-bold text-slate-700 mb-3 border-b border-slate-200 pb-1">
              Personal Information
            </h3>
            <div className="space-y-3 text-sm">
              <p>
                <span className="text-slate-500 block">Email</span>
                <span className="font-medium text-slate-800">
                  bankoleolaniyi@gmail.com
                </span>
              </p>
              <p>
                <span className="text-slate-500 block">Phone</span>
                <span className="font-medium text-slate-800">082437987679</span>
              </p>
              <p>
                <span className="text-slate-500 block">Birth Date</span>
                <span className="font-medium text-slate-800">20/12/2000</span>
              </p>
              <p>
                <span className="text-slate-500 block">Website</span>
                <a
                  href={`https://google.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 hover:underline"
                >
                  google.com
                </a>
              </p>
            </div>
          </section>

          /* @ address-info : display user's address and location details */}
          <section>
            <h3 className="text-lg font-bold text-slate-700 mb-3 border-b border-slate-200 pb-1">
              Address Information
            </h3>
            <div className="space-y-3 text-sm">
              <p>
                <span className="text-slate-500 block">Street</span>
                <span className="font-medium text-slate-800">
                  234, Olowu Street
                </span>
              </p>
              <p>
                <span className="text-slate-500 block">Suite</span>
                <span className="font-medium text-slate-800">234</span>
              </p>
              <p>
                <span className="text-slate-500 block">City</span>
                <span className="font-medium text-slate-800">Lagos</span>
              </p>
              <p>
                <span className="text-slate-500 block">Zip Code</span>
                <span className="font-medium text-slate-800">123456</span>
              </p>
              <p>
                <span className="text-slate-500 block">Geo Location</span>
                <span className="font-medium text-slate-800">
                  Lat: 123456, Lng: 123456
                </span>
              </p>
            </div>
          </section>

          /* @ company-info : display user's company information */}
          <section>
            <h3 className="text-lg font-bold text-slate-700 mb-3 border-b border-slate-200 pb-1">
              Company Information
            </h3>
            <div className="space-y-3 text-sm">
              <p>
                <span className="text-slate-500 block">Company Name</span>
                <span className="font-medium text-slate-800">
                  Arenox Learning Platform
                </span>
              </p>
              <p>
                <span className="text-slate-500 block">Catch Phrase</span>
                <span className="italic text-slate-700">
                  "Are you ready to learn?"
                </span>
              </p>
              <p>
                <span className="text-slate-500 block">Business Strategy</span>
                <span className="font-medium text-slate-800">
                  "Are you ready to learn?"
                </span>
              </p>
            </div>
          </section>

          /* @ login-info : display user's login credentials and authentication details */}
          <section>
            <h3 className="text-lg font-bold text-slate-700 mb-3 border-b border-slate-200 pb-1">
              Login Information
            </h3>
            <div className="space-y-3 text-sm">
              <p>
                <span className="text-slate-500 block">UUID</span>
                <span className="font-mono text-slate-800">123456</span>
              </p>
              <p>
                <span className="text-slate-500 block">Username</span>
                <span className="font-medium text-slate-800">bosman</span>
              </p>
              <p>
                <span className="text-slate-500 block">Password (hashed)</span>
                <span className="font-mono text-slate-800">123456</span>
              </p>
              <p>
                <span className="text-slate-500 block">MD5</span>
                <span className="font-mono text-slate-800">123456</span>
              </p>
              <p>
                <span className="text-slate-500 block">SHA1</span>
                <span className="font-mono text-slate-800">123456</span>
              </p>
              <p>
                <span className="text-slate-500 block">Registered</span>
                <span className="font-medium text-slate-800">20/12/2000</span>
              </p>
            </div>
          </section>
        </div>
      </div>
      /* @ edit-button : button to trigger edit user modal */}
      <div className="text-center mt-6 ">
        <button
          className="rounded ring ring-black/5 text-white bg-blue-600 hover:bg-blue-700 transition py-1 px-5"
          onClick={editUser}
        >
          Edit
        </button>
      </div>
    </div>
  );
}


import React from "react";
import { UserType as User } from "@/utils/data/fetchdata/userData";
import Image from "next/image";

interface ViewUserModalProps {
  onClose: () => void;
  userDetails: User | null;
  editUser: () => void;
}

export default function View_user_modal({
  onClose,
  userDetails,
  editUser,
}: ViewUserModalProps) {
  if (!userDetails) return null;

  return (
    <div
      className="w-full max-w-5xl bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 overflow-y-auto max-h-[90vh] transition-all duration-500"
      style={{ scrollbarWidth: "none" }}
    >
      {" "}
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
              {userDetails.firstname} {userDetails.lastname}
            </h2>
            <p className="flex flex-col text-sm text-slate-500">
              <span className="font-mediu">
                Username: {userDetails.login.username}
              </span>
              <span>UUID: {userDetails.login.uuid}</span>
            </p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
          {/* Personal Information */}
          <section>
            <h3 className="text-lg font-bold text-slate-700 mb-3 border-b border-slate-200 pb-1">
              Personal Information
            </h3>
            <div className="space-y-3 text-sm">
              <p>
                <span className="text-slate-500 block">Email</span>
                <span className="font-medium text-slate-800">
                  {userDetails.email}
                </span>
              </p>
              <p>
                <span className="text-slate-500 block">Phone</span>
                <span className="font-medium text-slate-800">
                  {userDetails.phone}
                </span>
              </p>
              <p>
                <span className="text-slate-500 block">Birth Date</span>
                <span className="font-medium text-slate-800">
                  {userDetails.birthDate}
                </span>
              </p>
              <p>
                <span className="text-slate-500 block">Website</span>
                <a
                  href={`https://${userDetails.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 hover:underline"
                >
                  {userDetails.website}
                </a>
              </p>
            </div>
          </section>

          {/* Address Information */}
          <section>
            <h3 className="text-lg font-bold text-slate-700 mb-3 border-b border-slate-200 pb-1">
              Address Information
            </h3>
            <div className="space-y-3 text-sm">
              <p>
                <span className="text-slate-500 block">Street</span>
                <span className="font-medium text-slate-800">
                  {userDetails.address.street}
                </span>
              </p>
              <p>
                <span className="text-slate-500 block">Suite</span>
                <span className="font-medium text-slate-800">
                  {userDetails.address.suite}
                </span>
              </p>
              <p>
                <span className="text-slate-500 block">City</span>
                <span className="font-medium text-slate-800">
                  {userDetails.address.city}
                </span>
              </p>
              <p>
                <span className="text-slate-500 block">Zip Code</span>
                <span className="font-medium text-slate-800">
                  {userDetails.address.zipcode}
                </span>
              </p>
              <p>
                <span className="text-slate-500 block">Geo Location</span>
                <span className="font-medium text-slate-800">
                  Lat: {userDetails.address.geo.lat}, Lng:{" "}
                  {userDetails.address.geo.lng}
                </span>
              </p>
            </div>
          </section>

          {/* Company Information */}
          <section>
            <h3 className="text-lg font-bold text-slate-700 mb-3 border-b border-slate-200 pb-1">
              Company Information
            </h3>
            <div className="space-y-3 text-sm">
              <p>
                <span className="text-slate-500 block">Company Name</span>
                <span className="font-medium text-slate-800">
                  {userDetails.company.name}
                </span>
              </p>
              <p>
                <span className="text-slate-500 block">Catch Phrase</span>
                <span className="italic text-slate-700">
                  {`"${userDetails.company.catchPhrase}"`}
                </span>
              </p>
              <p>
                <span className="text-slate-500 block">Business Strategy</span>
                <span className="font-medium text-slate-800">
                  {userDetails.company.bs}
                </span>
              </p>
            </div>
          </section>

          {/* Login Information */}
          <section>
            <h3 className="text-lg font-bold text-slate-700 mb-3 border-b border-slate-200 pb-1">
              Login Information
            </h3>
            <div className="space-y-3 text-sm">
              <p>
                <span className="text-slate-500 block">UUID</span>
                <span className="font-mono text-slate-800">
                  {userDetails.login.uuid}
                </span>
              </p>
              <p>
                <span className="text-slate-500 block">Username</span>
                <span className="font-medium text-slate-800">
                  {userDetails.login.username}
                </span>
              </p>
              <p>
                <span className="text-slate-500 block">Password (hashed)</span>
                <span className="font-mono text-slate-800">
                  {userDetails.login.password}
                </span>
              </p>
              <p>
                <span className="text-slate-500 block">MD5</span>
                <span className="font-mono text-slate-800">
                  {userDetails.login.md5}
                </span>
              </p>
              <p>
                <span className="text-slate-500 block">SHA1</span>
                <span className="font-mono text-slate-800">
                  {userDetails.login.sha1}
                </span>
              </p>
              <p>
                <span className="text-slate-500 block">Registered</span>
                <span className="font-medium text-slate-800">
                  {new Date(userDetails.login.registered).toLocaleDateString()}
                </span>
              </p>
            </div>
          </section>
        </div>
      </div>
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

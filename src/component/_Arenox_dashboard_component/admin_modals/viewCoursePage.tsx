import React from "react";
import Image from "next/image";
import { coursesDetails } from "@/utils/types/course/course";

/* @ view-course-modal-props : define props for course view modal */

interface viewBookModalProps {
  onClose: () => void;
  editBook: () => void;
  courseDataToView: coursesDetails | null;
}

/* @ view-course-modal : modal component for displaying detailed course information */

export default function View_Course_modal({
  onClose,
  courseDataToView,
  editBook,
}: viewBookModalProps) {
  if (!courseDataToView) return null;

  return (
    <div
      className="w-full max-w-6xl bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-4 overflow-y-auto max-h-[90vh] transition-all duration-500"
      style={{ scrollbarWidth: "thin" }}
    >
      <button
        onClick={onClose}
        className="text-slate-500 hover:text-red-600 transition text-2xl fixed top-3 right-4 "
      >
        ✕
      </button>
      <div className="flex flex-col justify-center p-6 max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center border-b border-b-gray-400">
          <div className="w-full max-w-md center">
            <Image
              src={courseDataToView.courseImageUrl}
              width={800}
              height={400}
              alt={courseDataToView.title}
              className="rounded-lg w-full h-auto mt-2 object-cover"
              loading="lazy"
            />
          </div>
          <div className="text-center mt-3">
            <h2
              className={`text-2xl font-medium text-slate-700 ${courseDataToView.bgColor}`}
            >
              {courseDataToView.title}
            </h2>
            <p className="flex flex-col text-sm text-slate-500">
              <span className="font-medium">
                Category: {courseDataToView.category}
              </span>
              <span>ID: {courseDataToView.id}</span>
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2  mx-auto">
          {/* Course Details */}
          <section>
            <h3 className="text-lg font-bold text-slate-700 mb-3 border-b border-slate-200 pb-1">
              Course Details
            </h3>
            <div className="space-y-3 text-sm">
              <p>
                <span className="text-slate-800 block font-bold">
                  Course Title
                </span>
                <span className="font-normal text-slate-600 text-wrap">
                  {courseDataToView.title}
                </span>
              </p>
              <p>
                <span className="text-slate-800 block font-bold">Category</span>
                <span className="font-normal text-slate-600 text-wrap">
                  {courseDataToView.category}
                </span>
              </p>
              <p>
                <span className="text-slate-800 block font-bold">
                  Paragraph
                </span>
                <span className="font-normal text-slate-600 text-wrap">
                  {courseDataToView.paragraph}
                </span>
              </p>
              <p>
                <span className="text-slate-800 block font-bold">
                  Description
                </span>
                <span className="font-normal text-slate-600 text-wrap">
                  {courseDataToView.description}
                </span>
              </p>
              <p>
                <span className="text-slate-800 block font-bold">Rating</span>
                <span className="font-normal text-slate-600 text-wrap">
                  {courseDataToView.rating} / 5
                </span>
              </p>
              <p>
                <span className="text-slate-800 block font-bold">Duration</span>
                <span className="font-normal text-slate-600 text-wrap">
                  {courseDataToView.hrs} hours
                </span>
              </p>
              <p>
                <span className="text-slate-800 block font-bold">Price</span>
                <span className="font-normal text-slate-600 text-wrap">
                  ${courseDataToView.price}
                </span>
              </p>
            </div>
          </section>

          {/* Tutor Information */}
          <section className="border-l pl-2 border-l-gray-400">
            <h3 className="text-lg font-bold text-slate-700 mb-3 border-b border-slate-200 pb-1">
              Tutor Information
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-4">
                <div>
                  {" "}
                  <Image
                    src={courseDataToView.tutor.imageUrl}
                    width={50}
                    height={50}
                    alt={courseDataToView.tutor.name}
                    className="rounded-full w-15 h-15 object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="">
                    <span className="text-slate-800 block font-bold">
                      Name:
                    </span>
                    <span className="font-normal text-slate-600 text-wrap">
                      {courseDataToView.tutor.name}
                    </span>
                  </p>
                  <p className="">
                    <span className="text-slate-800 block font-bold">
                      Designation:
                    </span>
                    <span className="font-normal text-slate-600 text-wrap">
                      {courseDataToView.tutor.designation}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3 text-sm mt-3 pr-5">
              <p>
                <span className="text-slate-800 block font-bold">
                  Years of Expertise
                </span>
                <span className="font-normal text-slate-600 text-wrap">
                  {courseDataToView.tutor.experience}
                </span>
              </p>
              <p>
                <span className="text-slate-800 block font-bold">
                  Crendentials
                </span>
                <span className="font-normal text-slate-600 text-wrap">
                  {courseDataToView.tutor.credentials}
                </span>
              </p>
              <p>
                <span className="text-slate-800 block font-bold">Bio</span>
                <span className="font-normal text-slate-600 text-wrap text-justify">
                  {courseDataToView.tutor.bio.split("  ")}
                </span>
              </p>
              <p>
                <span className="text-slate-800 block font-bold">Skills</span>
                <span className="font-normal text-slate-600 text-wrap text-justify">
                  {courseDataToView.tutor.skills.join(", ")}
                </span>
              </p>
              <p>
                <span className="text-slate-800 block font-bold">
                  Working Experiences
                </span>
                <span className="font-normal text-slate-600 text-wrap text-justify">
                  {courseDataToView.tutor.experiences.join(" ")}
                </span>
              </p>
              <p>
                <span className="text-slate-800 block font-bold">
                  Languages
                </span>
                <span className="font-normal text-slate-600 text-wrap">
                  {courseDataToView.tutor.languages.join(", ")}
                </span>
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <p>
                  <span className="text-slate-800 block font-bold">Email</span>
                  <span className="font-normal text-slate-600 text-wrap">
                    {courseDataToView.tutor.contact.email}
                  </span>
                </p>
                <p>
                  <span className="text-slate-800 block font-bold">Phone</span>
                  <span className="font-normal text-slate-600 text-wrap">
                    {courseDataToView.tutor.contact.phone}
                  </span>
                </p>
                <p>
                  <span className="text-slate-800 block font-bold">
                    whatsapp
                  </span>
                  <span className="font-normal text-slate-600 text-wrap">
                    {courseDataToView.tutor.contact.whatsapp}
                  </span>
                </p>

                <p>
                  <span className="text-slate-800 block font-bold">
                    Linkedln
                  </span>
                  <span className="font-normal text-slate-600 text-wrap">
                    {courseDataToView.tutor.contact.linkedin}
                  </span>
                </p>
                <p>
                  <span className="text-slate-800 block font-bold">
                    Instagram
                  </span>
                  <span className="font-normal text-slate-600 text-wrap">
                    {courseDataToView.tutor.contact.instagram}
                  </span>
                </p>
                <p>
                  <span className="text-slate-800 block font-bold">
                    Facebook
                  </span>
                  <span className="font-normal text-slate-600 text-wrap">
                    {courseDataToView.tutor.contact.facebook}
                  </span>
                </p>
                <p>
                  <span className="text-slate-800 block font-bold">X</span>
                  <span className="font-normal text-slate-600 text-wrap">
                    {courseDataToView.tutor.contact.x}
                  </span>
                </p>
                <p>
                  <span className="text-slate-800 block font-bold">
                    Web Address
                  </span>
                  <span className="font-normal text-slate-600 text-wrap">
                    {courseDataToView.tutor.contact.website}
                  </span>
                </p>
                <p>
                  <span className="text-slate-800 block font-bold">
                    Location
                  </span>
                  <span className="font-normal text-slate-600 text-wrap">
                    {courseDataToView.tutor.contact.location}
                  </span>
                </p>
                <p>
                  <span className="text-slate-800 block font-bold">
                    Availability
                  </span>
                  <span className="font-normal text-slate-600 text-wrap">
                    {courseDataToView.tutor.availability}
                  </span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="text-center mt-6 ">
        <button
          className="rounded ring ring-black/5 text-white bg-blue-600 hover:bg-blue-700 transition py-1 px-5"
          onClick={editBook}
        >
          Edit
        </button>
      </div>
    </div>
  );
}


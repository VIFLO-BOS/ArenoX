"use client";
import React, { useEffect, useMemo, useState } from "react";
import Admin_modal from "../admin_modals/admin_modal";
import Create_user_form from "../admin_modals/userForm";
import { UserType } from "@/utils/data/fetchdata/userData";
import Edit_user_form from "../admin_modals/editUserForm";
import View_user_modal from "../admin_modals/viewUserPage";
import toast from "react-hot-toast";

interface sortConfig {
  key: keyof UserType | null;
  dir: "asc" | "desc";
}
export default function Admin_user_list() {
  const [Users, setUsers] = useState<UserType[]>([]);
  const [DataToTable, setDataToTable] = useState<UserType[]>([]);

  useEffect(() => {
    let cancelled = false;
    async function fetchUser() {
      try {
        const res = await fetch("/api/data/users");
        const result = await res.json();
        setUsers(result.data || null);
        setDataToTable(result.data || null);
      } catch (error) {
        if (!cancelled) {
          if (error instanceof Error) {
            toast.error(error.message);
          } else {
            toast.error("an unknown error occured while fetching users!");
          }
        }
      }
    }
    fetchUser();
    return () => {
      cancelled = true;
    };
  }, []);

  // Page Loading State
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (window.onload) {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  try {
    // Simulate data fetching
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  } catch (err) {
    console.error(err);
    setError("Failed to load user data.");
  }

  // this is for the all form modal
  const [isCreateModalform, setisCreateModalOpen] = useState(false);
  const [isEditModalform, setisEditModalOpen] = useState(false);
  const [isViewUserModal, setisViewUserModal] = useState(false);
  const openCreateModalForm = () => setisCreateModalOpen(true);
  const openEditModalForm = () => setisEditModalOpen(true);
  const openViewUserModal = () => setisViewUserModal(true);
  const closeModal = () => {
    setisCreateModalOpen(false);
    setisEditModalOpen(false);
    setisViewUserModal(false);
  };

  // delete functions
  const handleDelete = (id: string) => {
    const dataToDelete = Users.filter((item) => item.id === id);
    const confirmDelete = window.confirm(
      `Are you sure you want to delete this user ${dataToDelete[0].firstname} ${dataToDelete[0].lastname}`
    );

    if (confirmDelete) {
      setDataToTable(Users.filter((item) => item.id !== id));
    }
  };

  // paginations
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = DataToTable.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(DataToTable.length / itemsPerPage);

  // table filtering functionalities
  const [query, setQuery] = useState("");
  const filteredData = currentUsers.filter((item) => {
    return (
      item.firstname.toLowerCase().includes(query.toLocaleLowerCase()) ||
      item.lastname.toLowerCase().includes(query.toLocaleLowerCase()) ||
      item.email.toLowerCase().includes(query.toLocaleLowerCase()) ||
      item.phone.toString().includes(query.toLocaleLowerCase())
    );
  });

  // sorting data
  const [sortConfig, setSortConfig] = useState<sortConfig>({
    key: null,
    dir: "asc",
  });

  // handling sort functions
  const handleSort = (key: keyof UserType) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.dir === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, dir: direction });
  };

  const sortedData = useMemo(() => {
    if (!sortConfig.key) {
      return filteredData;
    }

    const data = [...filteredData];

    data.sort((a, b) => {
      const key = sortConfig.key as keyof UserType;
      const A = (a[key] ?? "").toString().toLowerCase();
      const B = (b[key] ?? "").toString().toLowerCase();
      if (A < B) return sortConfig.dir === "asc" ? -1 : 1;
      if (A > B) return sortConfig.dir === "asc" ? 1 : -1;
      return 0;
    });
    return data;
  }, [filteredData, sortConfig]);

  // function to view user details
  //  get the user data
  const [userDataToView, setuserDataToView] = useState<UserType | null>(null);
  const handleViewUser = (id: string) => {
    const selectUser = sortedData.find((item) => item.id === id);
    if (selectUser) {
      setuserDataToView(selectUser);
      openViewUserModal();
    }
  };

  return (
    <>
      <div className="min-h-screen">
        <div className="mx-auto">
          {/* MAIN TABLE */}
          <div className="bg-white backdrop-blur-md border border-gray-200 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg mb-5">
            <div className="p-4 border-b border-gray-100 flex flex-wrap gap-2 items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">
                👥 User Records
              </h2>
              <div className="flex items-center gap-1 bg-white text-gray-500 ring ring-black/5 rounded px-2 py-1 w-full sm:w-72">
                <i className="bi bi-search"></i>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name, email or role..."
                  className="outline-0 w-60"
                />
              </div>
              <div className="flex items-center gap-5">
                <button
                  className="ring ring-black/5 px-2 bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-102 transition-all duration-200  py-1 rounded"
                  onClick={openCreateModalForm}
                >
                  <i className="bi bi-person-add">&nbsp;</i>Add User
                </button>
              </div>
            </div>
            <div className="overflow-x-auto w-full">
              <table className="w-full min-w-[600px] text-sm text-gray-700 ">
                <thead className="bg-sky-100 text-gray-600 uppercase text-xs border-b border-gray-200 sticky top-0 z-10">
                  <tr>
                    <th
                      className="p-4 whitespace-nowrap text-gray-600 text-left font-semibold tracking-wide"
                      onClick={() => handleSort("id")}
                    >
                      S/N
                    </th>
                    <th
                      className="p-4 whitespace-nowrap text-gray-600 mx-auto  text-left font-semibold tracking-wide cursor-pointer hover:text-blue-600"
                      onClick={() => handleSort("firstname")}
                    >
                      Name
                    </th>
                    <th
                      className="p-4 whitespace-nowrap text-gray-600 mx-auto  text-left font-semibold tracking-wide cursor-pointer hover:text-blue-600"
                      onClick={() => handleSort("email")}
                    >
                      Email
                    </th>
                    <th className="p-4 whitespace-nowrap text-gray-600 mx-auto  text-left font-semibold tracking-wide">
                      Phone
                    </th>
                    <th
                      className="p-4 whitespace-nowrap text-gray-600 mx-auto  text-left font-semibold tracking-wide cursor-pointer hover:text-blue-600"
                      onClick={() => handleSort("birthDate")}
                    >
                      Birthday
                    </th>
                    <th
                      className="p-4 whitespace-nowrap text-gray-600 mx-auto  text-left font-semibold tracking-wide cursor-pointer"
                      onClick={() => handleSort("address")}
                    >
                      Address
                    </th>
                    <th className="p-4 whitespace-nowrap text-gray-600 mx-auto  text-left font-semibold tracking-wide">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {loading ? (
                    <tr>
                      <td
                        colSpan={7}
                        className="p-8 whitespace-normal text-center text-gray-500 italic animate-pulse"
                      >
                        Loading...
                      </td>
                    </tr>
                  ) : error ? (
                    <tr>
                      <td
                        colSpan={7}
                        className="p-8 whitespace-normal text-center text-red-600"
                      >
                        {error}
                      </td>
                    </tr>
                  ) : sortedData.length === 0 ? (
                    <tr>
                      <td
                        colSpan={7}
                        className="p-8  whitespace-normal text-center text-gray-500"
                      >
                        No users found.
                      </td>
                    </tr>
                  ) : sortedData.length > 0 ? (
                    sortedData &&
                    sortedData.map((u, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-blue-50/50 transition duration-150"
                      >
                        <td className="px-4 py-2 whitespace-normal font-medium text-gray-700 text-left border-b-gray-200">
                          {idx + 1}
                        </td>
                        <td className="flex items-center px-4 py-2 whitespace-normal font-medium text-left border-b-gray-200">
                          <span className="w-10 h-10 bg-indigo-100 text-indigo-500 text-medium rounded-full flex items-center justify-center mr-3">
                            {u.firstname
                              .split(" ")
                              .map((n) => n[0])
                              .join("") +
                              u.lastname
                                .split(" ")
                                .map((x) => x[0])
                                .join("")}
                          </span>
                          <span>{u.firstname + " " + u.lastname}</span>
                        </td>
                        <td className="px-4 py-2 whitespace-normal font-medium text-left border-b-gray-200">
                          {u.email}
                        </td>
                        <td className="px-4 py-2 whitespace-normal font-medium text-left border-b-gray-200">
                          {u.phone}
                        </td>
                        <td className="px-4 py-2 whitespace-normal font-medium text-left border-b-gray-200">
                          {u.birthDate}
                        </td>
                        <td className="px-4 py-2 whitespace-normal font-medium text-left border-b-gray-200 text-gray-600">
                          {u.address.street}, {u.address.city}
                        </td>
                        <td className="px-4 py-2 whitespace-normal font-medium text-left border-b-gray-200 flex items-center space-x-2">
                          <button
                            onClick={() => handleViewUser(u.id)}
                            className="p-2 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-200 transition"
                          >
                            <i className="bi bi-eye"></i>
                          </button>
                          <button
                            onClick={() => openEditModalForm()}
                            className="p-2 rounded-md bg-orange-50 text-orange-600 hover:bg-orange-200 transition"
                          >
                            <i className="bi bi-pencil"></i>
                          </button>
                          <button
                            onClick={() => handleDelete(u.id)}
                            className="p-2 rounded-md bg-red-50 text-red-600 hover:bg-red-200 transition"
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    "No data found"
                  )}
                </tbody>
                <tfoot className="mt-2">
                  <tr>
                    <td colSpan={7} className="px-4 py-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          Showing{" "}
                          {currentPage * itemsPerPage - itemsPerPage + 1} to{" "}
                          {Math.min(
                            currentPage * itemsPerPage,
                            Users.length
                          )}{" "}
                          of {Users.length} users
                        </span>
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <button
                            onClick={() =>
                              setCurrentPage((prev) => Math.max(prev - 1, 1))
                            }
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md disabled:opacity-50"
                          >
                            {"<"}
                          </button>
                          <button
                            onClick={() =>
                              setCurrentPage((prev) =>
                                Math.min(prev + 1, totalPages)
                              )
                            }
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md disabled:opacity-50"
                          >
                            {">"}
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Admin_modal isOpen={isCreateModalform} onClose={closeModal}>
        <Create_user_form onClose={closeModal} />
      </Admin_modal>
      <Admin_modal isOpen={isEditModalform} onClose={closeModal}>
        <Edit_user_form onClose={closeModal} />
      </Admin_modal>
      <Admin_modal isOpen={isViewUserModal} onClose={closeModal}>
        <View_user_modal
          userDetails={userDataToView}
          onClose={closeModal}
          editUser={openEditModalForm}
        />
      </Admin_modal>
    </>
  );
}

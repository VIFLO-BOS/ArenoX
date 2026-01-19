"use client";
import { useEffect, useMemo, useState } from "react";
import { UserType } from "@/utils/data/fetchdata/userData";
import toast from "react-hot-toast";
import Link from "next/link";
import { useParams } from "next/navigation";

/* @ sort-config-interface : define sorting configuration type for table columns */
interface sortConfig {
  key: keyof UserType | null;
  dir: "asc" | "desc";
}

/* @ component-definition : main admin user list component with table, modals, and CRUD operations */
export default function Admin_user_list() {
  const params = useParams();
  const dashboard = params.dashboard as string;

  /* @ user-state : manage users data and table display data */
  const [Users, setUsers] = useState<UserType[]>([]);
  const [DataToTable, setDataToTable] = useState<UserType[]>([]);

  /* @ fetch-users : fetch user data from API on component mount */
  useEffect(() => {
    let cancelled = false;
    async function fetchUser() {
      try {
        const res = await fetch("/api/data/users");
        const result = await res.json();
        // console.log(result, "here is the result from data");
        if (!Array.isArray(result.data)) {
          toast.error("Unexpected data format received.");
        } else {
          setUsers(result.data || null);
          setDataToTable(result.data || null);
        }
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

  /* @ loading-error-state : manage page loading and error states */
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (window.onload) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, []);

  try {
    // Simulate data fetching
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  } catch (err) {
    // console.error(err);
    setError("Failed to load user data.");
  }

  /* @ delete-handler : handle user deletion with confirmation dialog */
  const handleDelete = (id: string) => {
    console.log(id);
    const dataToDelete = Users.filter((item) => item._id === id);

    if (dataToDelete.length === 0) {
      toast.error("User not found!");
      return;
    }

    const firstName = dataToDelete[0].name.split(" ")[0];
    const lastName = dataToDelete[0].name.split(" ")[1] || "";
    const confirmDelete = window.confirm(
      `Are you sure you want to delete this user ${firstName} ${lastName}`,
    );

    if (confirmDelete) {
      setUsers(Users.filter((item) => item._id !== id));
      setDataToTable(Users.filter((item) => item._id !== id));
      toast.success("User deleted successfully!");
    }
  };

  /* @ pagination : manage pagination state and calculate current page items */
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = DataToTable.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(DataToTable.length / itemsPerPage);

  /* @ table-filtering : filter users by name, email, or phone based on search query */
  const [query, setQuery] = useState("");
  const filteredData = currentUsers.filter((item) => {
    const namePath = item.name ? item.name.split(" ") : [];
    const firstName = namePath[0] || " ";
    const lastName = namePath[1] || " ";
    return (
      firstName.toLowerCase().includes(query.toLocaleLowerCase()) ||
      lastName.toLowerCase().includes(query.toLocaleLowerCase()) ||
      item.email.toLowerCase().includes(query.toLocaleLowerCase()) ||
      item.phone.toString().includes(query.toLocaleLowerCase())
    );
  });

  /* @ sorting-state : manage table column sorting configuration */
  const [sortConfig, setSortConfig] = useState<sortConfig>({
    key: null,
    dir: "asc",
  });

  /* @ sort-handler : handle column sort direction toggle */
  const handleSort = (key: keyof UserType) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.dir === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, dir: direction });
  };

  /* @ sorted-data : apply sorting logic to filtered data using useMemo for performance */
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

  // console.log(sortedData)
  /* @ render : main component render with table and modals */
  return (
    <>
      <div className="min-h-screen ">
        <div className="mx-auto max-w-7xl">
          {/* MAIN TABLE */}
          <div className="bg-white border border-gray-100 rounded-xl shadow-xl shadow-gray-200/50 overflow-hidden mb-10">
            <div className="p-6 border-b border-gray-100 flex flex-wrap gap-4 items-center justify-between bg-white/50 backdrop-blur-xl sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                  <i className="bi bi-people-fill text-xl"></i>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                  User Records
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <div className="relative group w-full sm:w-72">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="bi bi-search text-gray-400 group-focus-within:text-blue-500 transition-colors"></i>
                  </div>
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search users..."
                    className="pl-10 pr-4 py-2.5 w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-blue-500 block transition-all"
                  />
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200 px-5 py-2.5 rounded-xl font-medium transition-all active:scale-95 flex items-center gap-2">
                  <Link
                    href="/dashboard/admin/adduser"
                    className="flex items-center gap-2"
                  >
                    <i className="bi bi-plus-lg"></i> <span>Add User</span>
                  </Link>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto w-full">
              <table className="w-full min-w-[800px] text-left border-collapse">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th
                      className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer hover:text-blue-600 transition-colors"
                      onClick={() => handleSort("_id")}
                    >
                      S/N
                    </th>
                    <th
                      className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer hover:text-blue-600 transition-colors"
                      onClick={() => handleSort("firstName")}
                    >
                      Name
                    </th>
                    <th
                      className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer hover:text-blue-600 transition-colors"
                      onClick={() => handleSort("email")}
                    >
                      Email
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Phone
                    </th>
                    <th
                      className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer hover:text-blue-600 transition-colors"
                      onClick={() => handleSort("birthDate")}
                    >
                      Birthday
                    </th>
                    <th
                      className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider cursor-pointer hover:text-blue-600 transition-colors"
                      onClick={() => handleSort("address")}
                    >
                      Address
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-50">
                  {loading ? (
                    <tr>
                      <td
                        colSpan={7}
                        className="px-6 py-10 text-center text-gray-500 italic"
                      >
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                          Loading users...
                        </div>
                      </td>
                    </tr>
                  ) : error ? (
                    <tr>
                      <td
                        colSpan={7}
                        className="px-6 py-10 text-center text-red-500 bg-red-50/50"
                      >
                        <i className="bi bi-exclamation-triangle mr-2"></i>{" "}
                        {error}
                      </td>
                    </tr>
                  ) : sortedData.length === 0 ? (
                    <tr>
                      <td
                        colSpan={7}
                        className="px-6 py-10 text-center text-gray-500"
                      >
                        <div className="flex flex-col items-center gap-2 opacity-50">
                          <i className="bi bi-inbox text-3xl"></i>
                          No users found matching criteria.
                        </div>
                      </td>
                    </tr>
                  ) : sortedData.length > 0 ? (
                    sortedData &&
                    sortedData.map((u, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-blue-50/30 transition-colors group"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">
                          #{idx + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            <span className="w-10 h-10 bg-linear-to-br from-blue-500 to-indigo-600 text-white text-sm font-bold rounded-full flex items-center justify-center shadow-md ring-2 ring-white">
                              {u.name && u.name.split(" ").length >= 2
                                ? (
                                    u.name.split(" ")[0][0] +
                                    u.name.split(" ")[1][0]
                                  ).toUpperCase()
                                : u.firstName && u.lastName
                                  ? (
                                      u.firstName[0] + u.lastName[0]
                                    ).toUpperCase()
                                  : "NA"}
                            </span>
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {u.name && u.name.split(" ").length >= 2
                                  ? u.name
                                  : u.firstName && u.lastName
                                    ? `${u.firstName} ${u.lastName}`
                                    : "Unknown User"}
                              </span>
                              <span className="text-xs text-gray-500">
                                User ID: {u._id.slice(-4)}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {u.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">
                          {u.phone ? (
                            u.phone
                          ) : (
                            <span className="text-gray-300 italic">N/A</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {u.birthDate ? (
                            <div className="flex items-center gap-2">
                              <i className="bi bi-calendar4 text-gray-400"></i>
                              {u.birthDate}
                            </div>
                          ) : (
                            <span className="text-gray-300 italic">N/A</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {u.address?.city ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              {u.address.city}
                            </span>
                          ) : (
                            <span className="text-gray-300 italic">N/A</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center justify-end gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                            <Link
                              href={`/${dashboard}/admin/userlist/view/${u._id}`}
                            >
                              <button
                                className="p-2 rounded-lg text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors tooltip"
                                title="View Details"
                              >
                                <i className="bi bi-eye"></i>
                              </button>
                            </Link>
                            <Link
                              href={`/${dashboard}/admin/edituser/${u._id}`}
                            >
                              <button
                                className="p-2 rounded-lg text-orange-600 bg-orange-50 hover:bg-orange-100 transition-colors"
                                title="Edit User"
                              >
                                <i className="bi bi-pencil-square"></i>
                              </button>
                            </Link>
                            <button
                              onClick={() => handleDelete(u._id)}
                              className="p-2 rounded-lg text-red-600 bg-red-50 hover:bg-red-100 transition-colors"
                              title="Delete User"
                            >
                              <i className="bi bi-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    "No data found"
                  )}
                </tbody>
                <tfoot className="bg-gray-50/50 border-t border-gray-100">
                  <tr>
                    <td colSpan={7} className="px-6 py-4">
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <span className="text-sm text-gray-500">
                          Showing{" "}
                          <span className="font-semibold text-gray-900">
                            {currentPage * itemsPerPage - itemsPerPage + 1}
                          </span>{" "}
                          to{" "}
                          <span className="font-semibold text-gray-900">
                            {Math.min(currentPage * itemsPerPage, Users.length)}
                          </span>{" "}
                          of{" "}
                          <span className="font-semibold text-gray-900">
                            {Users.length}
                          </span>{" "}
                          entries
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              setCurrentPage((prev) => Math.max(prev - 1, 1))
                            }
                            disabled={currentPage === 1}
                            className="px-4 py-2 text-sm font-medium bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
                          >
                            Previous
                          </button>
                          <button
                            onClick={() =>
                              setCurrentPage((prev) =>
                                Math.min(prev + 1, totalPages),
                              )
                            }
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 text-sm font-medium bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
                          >
                            Next
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
    </>
  );
}

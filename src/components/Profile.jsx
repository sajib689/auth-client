'use client';

import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Profile = () => {
  const axiosSecure = useAxiosSecure();
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("access-token");
    const email = localStorage.getItem("email");

    if (!token || !email) {
      router.push("/login");
      return;
    }

    const fetchData = async () => {
      try {
        const res = await axiosSecure.get(`/api/v1/users/user/${email}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data?.data); // assuming data has structure { data: {...userData} }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [axiosSecure, router]);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <div className="flex flex-col items-center space-y-4">
          <img
            src={user.photoURL || "https://i.pravatar.cc/150?img=3"}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-gray-300 object-cover"
          />
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800">{user.name || "Unknown User"}</h2>
            <p className="text-sm text-gray-500">{user.role || "Frontend Developer"}</p>
          </div>
          <div className="w-full">
            <div className="text-sm text-gray-600 space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Email:</span>
                <span>{user.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Phone:</span>
                <span>{user.phone || "+8801XXXXXXXXX"}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Location:</span>
                <span>{user.location || "Jashore, Bangladesh"}</span>
              </div>
            </div>
          </div>
          <button className="mt-6 w-full bg-gray-800 hover:bg-gray-900 text-white py-2 rounded-lg transition duration-300">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

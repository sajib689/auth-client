'use client';

import Link from "next/link";
import AuthSideInfo from "./AuthSideInfo";
import { useRouter } from "next/navigation";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Login = () => {
  const axiosSecure = useAxiosSecure()
    const router = useRouter();
    const handleLogin = async (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
    
      try {
        const res = await axiosSecure.post(`/api/v1/users/login`, { email, password });
        const data = res.data;
    
        if (data.success) {
          localStorage.setItem('access-token', data.token);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Login Success",
            showConfirmButton: false,
            timer: 1500
          });
          form.reset();
          router.push("/profile");
        } else {
          alert("Login failed! Please check your credentials.");
        }
      } catch (error) {
        console.error('Error:', error);
        alert("An error occurred during login.");
      }
    };
    
    return (
        <div className="flex h-screen">
      <AuthSideInfo />
      <div className="flex flex-col justify-center items-center bg-white w-full lg:w-1/2 p-6">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-xl font-semibold">Sign In</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input type="email" placeholder="Email address" name="email" className="input-style w-full" />
            <input type="password" placeholder="Password" name="password" className="input-style w-full" />
            <div className="text-right text-sm">
              <a href="#" className="text-gray-600 underline">Forgot Password?</a>
            </div>
            <button className="bg-gray-800 cursor-pointer text-white py-2 rounded w-full">Sign in</button>
            <p className="text-xs text-center text-gray-500">Already have an account? <Link href="/register" className="underline">Sign up</Link></p>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Login;
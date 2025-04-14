'use client';
import { useEffect } from "react";
import AuthSideInfo from "./AuthSideInfo";
import { useRouter } from "next/navigation";


const Register = () => {
    const router = useRouter();
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const number = form.number.value;
        const password = form.password.value;
       
            fetch(`http://localhost:5000/api/v1/users/register`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstName, lastName, email, number, password })
            })
            .then( () => {
                alert("Registration successful!");
                form.reset();
                router.push("/login");	
            })
            .catch((error) => {
                console.error('Error:', error);
                alert("Registration failed!");
            });
    };
    return (
        <div className="flex h-screen">
        <AuthSideInfo />
        <div className="flex flex-col justify-center items-center bg-white w-full lg:w-1/2 p-6">
          <div className="w-full max-w-md space-y-4">
            <h2 className="text-xl font-semibold">Sign up now</h2>
            <form onSubmit={handleRegister} className="space-y-3">
              <div className="flex gap-2">
                <input type="text" placeholder="First name" name="firstName" className="input-style" />
                <input type="text" placeholder="Last name" name="lastName" className="input-style" />
              </div>
              <input type="email" placeholder="Email address" name="email" className="input-style w-full" />
              <input type="tel" placeholder="Phone number" name="number" className="input-style w-full" />
              <input type="password" placeholder="Password" name="password" className="input-style w-full" />
              <div className="space-y-2 text-sm text-gray-600">
                <label className="flex items-start gap-2">
                  <input type="checkbox" />
                  By creating an account, I agree to the Terms of Use and Privacy Policy.
                </label>
                <label className="flex items-start gap-2">
                  <input type="checkbox" />
                  I would like to receive news, offers, and updates.
                </label>
              </div>
              <button type="submit" className="bg-gray-800 text-white py-2 rounded w-full cursor-pointer">Sign up</button>
              <p className="text-xs text-center text-gray-500">Already have an account? <a href="/login" className="underline">Sign In</a></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;
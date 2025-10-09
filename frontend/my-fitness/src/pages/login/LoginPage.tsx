import { useState } from "react";
import logo from "../../assets/logo.png";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<"instructor" | "student">(
    "instructor"
  );

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-wine w-[380px] p-8 rounded-2xl shadow-lg border border-gold flex flex-col items-center">
        <div className="flex w-full">
          <button
            onClick={() => setActiveTab("instructor")}
            className={`w-1/2 py-2 text-center font-semibold ${
              activeTab === "instructor"
                ? "text-gold border-b-2 border-gold"
                : "text-goldlight hover:text-gold transition"
            }`}
          >
            Instructor
          </button>
          <button
            onClick={() => setActiveTab("student")}
            className={`w-1/2 py-2 text-center font-semibold ${
              activeTab === "student"
                ? "text-gold border-b-2 border-gold"
                : "text-goldlight hover:text-gold transition"
            }`}
          >
            Student
          </button>
        </div>

        <img src={logo} alt="My Fitness Logo" className="w-44 mt-3" />

        <h1 className="text-gold text-3xl font-bold mb-8 tracking-wide font-[Cinzel]">
          MY FITNESS
        </h1>

        <div className="w-full mb-4">
          <label className="block text-gold text-sm mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 bg-graymid text-ivory rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>

        <div className="w-full mb-6">
          <label className="block text-gold text-sm mb-1">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 bg-graymid text-ivory rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>

        <button className="w-full bg-gold text-dark font-bold py-2 rounded-md hover:bg-goldlight transition">
          {activeTab === "instructor"
            ? "LOGIN AS INSTRUCTOR"
            : "LOGIN AS STUDENT"}
        </button>

        <p className="text-goldlight text-sm mt-6 cursor-pointer hover:underline">
          Forgot password?
        </p>
      </div>
    </div>
  );
}

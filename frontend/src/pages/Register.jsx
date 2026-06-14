import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  registerUser,
} from "../services/authService";

export default function Register() {

  const navigate =
    useNavigate();

  const [form, setForm] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        await registerUser(
          form
        );

        navigate(
          "/login"
        );

      } catch (err) {

        setError(
          err.response?.data?.message ||
          "Registration failed"
        );

      } finally {

        setLoading(false);

      }
    };

  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-[#020617]
      "
    >

      <div
        className="
        w-full
        max-w-md
        p-8
        rounded-3xl
        bg-[#0F172A]
        border
        border-cyan-500/20
        "
      >

        <h1
          className="
          text-3xl
          font-bold
          text-center
          text-white
          mb-2
          "
        >
          Create Account
        </h1>

        <p
          className="
          text-center
          text-slate-400
          mb-8
          "
        >
          Join GeoStrategist AI
        </p>

        <form
          onSubmit={
            handleSubmit
          }
          className="
          space-y-4
          "
        >

          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e)=>
              setForm({
                ...form,
                name:
                  e.target.value,
              })
            }
            className="
            w-full
            p-3
            rounded-xl
            bg-slate-900
            text-white
            "
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e)=>
              setForm({
                ...form,
                email:
                  e.target.value,
              })
            }
            className="
            w-full
            p-3
            rounded-xl
            bg-slate-900
            text-white
            "
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e)=>
              setForm({
                ...form,
                password:
                  e.target.value,
              })
            }
            className="
            w-full
            p-3
            rounded-xl
            bg-slate-900
            text-white
            "
          />

          {error && (
            <div
              className="
              text-red-400
              text-sm
              "
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="
            w-full
            bg-cyan-500
            hover:bg-cyan-400
            text-black
            font-bold
            p-3
            rounded-xl
            "
          >
            {
              loading
                ? "Creating..."
                : "Register"
            }
          </button>

        </form>

      </div>

    </div>
  );
}
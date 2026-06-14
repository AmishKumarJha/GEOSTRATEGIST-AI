import { useState } from "react";

import { Link, useNavigate }
from "react-router-dom";

import {
  GoogleLogin,
} from "@react-oauth/google";

import {
  loginUser,
} from "../services/authService";

import api
  from "../services/api";

import useAuthStore
  from "../store/authStore";

export default function Login() {

  const navigate =
    useNavigate();

  const setAuth =
    useAuthStore(
      (state) =>
        state.setAuth
    );

  const [email, setEmail] =
    useState("");

  const [
    password,
    setPassword,
  ] = useState("");

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        const res =
          await loginUser({
            email,
            password,
          });

        setAuth(
          res.data.user,
          res.data.token
        );

        navigate("/");

      } catch (err) {

        setError(
          err.response?.data
            ?.message ||
          "Login failed"
        );

      } finally {

        setLoading(false);

      }

    };

  const handleGoogleLogin =
    async (
      credentialResponse
    ) => {

      try {

        const res =
          await api.post(
            "/auth/google",
            {
              token:
                credentialResponse.credential,
            }
          );

        setAuth(
          res.data.user,
          res.data.token
        );

        navigate("/");

      } catch (err) {

        console.error(err);

        setError(
          "Google login failed"
        );

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
      px-4
      "
    >

      <div
        className="
        w-full
        max-w-md

        bg-[#0F172A]

        border
        border-cyan-500/20

        rounded-3xl

        p-8

        shadow-[0_0_40px_rgba(34,211,238,0.15)]
        "
      >

        <div className="text-center">

          <h1
            className="
            text-4xl
            font-bold

            bg-gradient-to-r
            from-cyan-400
            via-blue-400
            to-violet-400

            bg-clip-text
            text-transparent
            "
          >
            GeoStrategist AI
          </h1>

          <p
            className="
            text-slate-400
            mt-3
            "
          >
            Sign in to access
            geopolitical intelligence
          </p>

        </div>

        <form
          onSubmit={
            handleSubmit
          }
          className="
          mt-8
          space-y-4
          "
        >

          <input
            type="email"
            placeholder="Email"

            value={email}

            onChange={(e)=>
              setEmail(
                e.target.value
              )
            }

            className="
            w-full

            p-3

            rounded-xl

            bg-slate-900

            border
            border-slate-700

            text-white

            outline-none
            "
          />

          <input
            type="password"
            placeholder="Password"

            value={password}

            onChange={(e)=>
              setPassword(
                e.target.value
              )
            }

            className="
            w-full

            p-3

            rounded-xl

            bg-slate-900

            border
            border-slate-700

            text-white

            outline-none
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

            p-3

            rounded-xl

            bg-cyan-500

            text-black

            font-bold

            hover:bg-cyan-400
            transition
            "
          >
            {
              loading
                ? "Signing In..."
                : "Login"
            }
          </button>

        </form>

        <div
          className="
          mt-6
          flex
          justify-center
          "
        >

          <GoogleLogin
            onSuccess={
              handleGoogleLogin
            }
            onError={() =>
              setError(
                "Google Login Failed"
              )
            }
          />

        </div>

        <div
          className="
          mt-6
          text-center
          "
        >

          <span
            className="
            text-slate-400
            "
          >
            Don't have an account?
          </span>

          <Link
            to="/register"
            className="
            ml-2
            text-cyan-400
            hover:text-cyan-300
            "
          >
            Register
          </Link>

        </div>

      </div>

    </div>

  );
}
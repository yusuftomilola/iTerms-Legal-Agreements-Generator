import React from "react";
import { useState } from "react";
import {
  auth,
  googleAuthProvider,
  facebookAuthProvider,
} from "../config/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { googleIcon, facebookIcon } from "../assets/icons";

export default function SignIn() {
  const navigateTo = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form submitted");
      const { email, password } = formData;

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      if (user) {
        console.log("Successfully signed in");
        console.log(user);
        console.log(user.email);
        console.log(user.displayName);
        console.log(auth.currentUser.email);
        toast.success(`Welcome, ${auth.currentUser.displayName}`, {
          autoClose: 1000,
        });
        navigateTo("/");
      }
    } catch (error) {
      console.log(error);
      console.log(error.message);
      console.log(error.code);
    }
  };

  const handleGoogleClick = async () => {
    try {
      const googleUserCredential = await signInWithPopup(
        auth,
        googleAuthProvider
      );

      const user = googleUserCredential.user;

      console.log("google user: ", user);

      toast.success(`Welcome, ${auth.currentUser.displayName}`, {
        autoClose: 1000,
      });
      navigateTo("/");
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const handleFacebookClick = async () => {
    try {
      const facebookUserCredential = await signInWithPopup(
        auth,
        facebookAuthProvider
      );

      const facebookUser = facebookUserCredential.user;

      const facebookCredential = FacebookAuthProvider.credentialFromResult(
        facebookUserCredential
      );
      const facebookAccessToken = facebookCredential.accessToken;

      console.log("facebook user: ", facebookUser);
      toast.success("Account created", {
        autoClose: 1000,
      });
      navigateTo("/");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      {/*
        <html class="h-full bg-white">
        <body class="h-full">
      */}

      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 pb-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-8 text-2xl font-semibold leading-9 tracking-tight text-gray-900">
                Sign in
              </h2>
            </div>

            <div className="relative">
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className=" px-6 text-gray-900">Sign in with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                onClick={handleGoogleClick}
              >
                <img src={googleIcon} alt="google Icon" />
                <span className="text-sm font-semibold leading-6">Google</span>
              </button>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                onClick={handleFacebookClick}
              >
                <img src={facebookIcon} alt="facebook icon" />
                <span className="text-sm font-semibold leading-6">
                  Facebook
                </span>
              </button>
            </div>

            <div className="relative">
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className=" px-6 text-gray-900 mt-4">Or</span>
              </div>
            </div>

            <div className="">
              <div>
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputs}
                        placeholder="Enter your email"
                        autoComplete="email"
                        className="block w-full border-grey-700 border-b-2 py-1.5 placeholder:text-gray-400 focus:ring-0 outline-none sm:text-sm sm:leading-6 bg-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        value={formData.password}
                        onChange={handleInputs}
                        placeholder="At least 8 characters long"
                        autoComplete="current-password"
                        className="block w-full border-grey-700 border-b-2 py-1.5 placeholder:text-gray-400 focus:ring-0 outline-none sm:text-sm sm:leading-6 bg-transparent"
                      />
                    </div>
                  </div>

                  {/* <div className="flex items-center justify-between"> */}
                  {/* <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-3 block text-sm leading-6 text-gray-700"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm leading-6">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div> */}
                  {/* </div> */}

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-[#8770FF] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#7963e6]"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-5">
                <div className="mt-3">
                  <p>
                    Don't have an account?
                    <Link to={"/sign-up"} className="underline text-[#8770FF]">
                      {" "}
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 h-screen flex-1 lg:block bg-[#8770FF]">
          {/* <img
            alt=""
            src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            className="absolute inset-0 h-full w-full object-cover bg-[#8770FF]"
          /> */}
        </div>
      </div>
    </>
  );
}

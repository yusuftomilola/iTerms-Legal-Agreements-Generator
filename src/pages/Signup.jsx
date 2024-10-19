import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  googleAuthProvider,
  facebookAuthProvider,
  db,
} from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  FacebookAuthProvider,
} from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { googleIcon, facebookIcon } from "../assets/icons";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";

const Signup = () => {
  const navigateTo = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleInputs = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    const { firstName, email, password } = formData;

    // Check if full name is empty
    if (!firstName.trim()) {
      toast.error("firstName is required");
      return false;
    }

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    // Password length validation
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return false;
    }

    return true;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Perform validation
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    try {
      console.log("Form submitted");
      const { email, password, firstName } = formData;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // update user profile
      await updateProfile(user, {
        displayName: firstName,
      });

      // prepare data for firestore cloud database
      const formDataCopy = { ...formData };
      const firestoreData = {
        firstName: formDataCopy.firstName,
        lastName: formDataCopy.lastName,
        email: formDataCopy.email,
        timeStamp: serverTimestamp(),
      };

      // Create user profile in Firestore cloud database
      await setDoc(doc(db, "users", auth.currentUser.uid), firestoreData);

      console.log("email and password user: ", user);

      navigateTo("/");
      toast.success(`Account created`, {
        autoClose: 1000,
      });
      setFormData({
        firstName: "",
        email: "",
        password: "",
      });
    } catch (error) {
      toast.error("Error signing up");
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
      const googleUser = googleUserCredential.user;
      console.log("google user: ", googleUser);
      toast.success("Account created", {
        autoClose: 1000,
      });
      navigateTo("/");
    } catch (error) {
      toast.error("Error signing up");
      console.log(error.message);
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
      toast.error("Error signing up");
    }
  };

  return (
    <>
      <div className="flex min-h-screen">
        <div className="flex flex-1 flex-col justify-center px-4 pb-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-8 text-2xl font-semibold leading-9 tracking-tight text-gray-900">
                Sign up
              </h2>
            </div>

            <div className="mt-5">
              <div>
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Your Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleInputs}
                        // required
                        placeholder="Your First Name"
                        autoComplete="firstName"
                        className="block w-full border-grey-700 border-b-2 py-1.5 placeholder:text-gray-400 focus:ring-0 outline-none sm:text-sm sm:leading-6 bg-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        // required
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
                        // required
                        value={formData.password}
                        onChange={handleInputs}
                        placeholder="At least 8 characters long"
                        autoComplete="current-password"
                        className="block w-full border-grey-700 border-b-2 py-1.5 placeholder:text-gray-400 focus:ring-0 outline-none sm:text-sm sm:leading-6 bg-transparent"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-xs">
                      By proceeding, I agree with the{" "}
                      <span className="text-[#8770FF]">Terms of Service</span>{" "}
                      and{" "}
                      <span className="text-[#8770FF]">Privacy & Policy</span>
                    </p>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-[#8770FF] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#7963e6]"
                    >
                      Create account
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-2">
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center"
                  >
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className=" px-6 text-gray-900">Or sign up with</span>
                  </div>
                </div>

                <div className="mt-2 grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-3 rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                    onClick={handleGoogleClick}
                  >
                    <img src={googleIcon} alt="google Icon" />
                    <span className="text-sm font-semibold leading-6">
                      Google
                    </span>
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

                <div className="mt-3">
                  <p>
                    Already have an account?
                    <Link to={"/sign-in"} className="underline text-[#8770FF]">
                      {" "}
                      Log In
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block bg-[#8770FF]">
          {/* <img
            alt=""
            src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            className="absolute inset-0 h-full w-full object-cover bg-[#8770FF]"
          /> */}
        </div>
      </div>
    </>
  );
};

export default Signup;

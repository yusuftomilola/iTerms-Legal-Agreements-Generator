import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const onChange = (e) => setEmail(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);

      toast.success(`Check your email`);
    } catch (error) {
      toast.error("Could not send reset email");
    }
  };

  return (
    <div>
      <p className="pageHeader">Forgot Password</p>

      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={onChange}
        />

        <Link to="/sign-in">Sign In</Link>

        <button className="signInText">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;

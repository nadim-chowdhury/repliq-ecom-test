import { Link } from "react-router-dom";

export default function Register() {
  return (
    <form className="max-w-sm mx-auto mt-8">
      <div className="flex flex-col">
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          className="border px-4 py-1 rounded mb-4"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          className="border px-4 py-1 rounded mb-4"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          className="border px-4 py-1 rounded mb-4"
        />
      </div>

      <button
        type="submit"
        className="bg-slate-800 text-white px-4 py-1 rounded mb-3"
      >
        Register
      </button>

      <p>
        Already Have An Account?
        <Link to="/login" className="border px-4 py-1 rounded ml-2">
          Login Here
        </Link>
      </p>
    </form>
  );
}

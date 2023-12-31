import { Link } from "react-router-dom";

export default function Login() {
  return (
    <form className="max-w-sm mx-auto mt-8">
      <h2 className="mb-4 text-2xl font-bold">Login Here</h2>

      <div className="flex flex-col">
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
        Log In
      </button>

      <p>
        Don&apos;t Have Any Account?
        <Link to="/register" className="border px-4 py-1 rounded ml-2">
          Register Here
        </Link>
      </p>
    </form>
  );
}

import { Link } from "react-router-dom";

export default function Login() {
  return (
    <form className="max-w-sm mx-auto">
      <div className="flex flex-col">
        <input type="text" className="border px-4 py-1 rounded mb-4" />
        <input type="text" className="border px-4 py-1 rounded mb-4" />
      </div>

      <button
        type="submit"
        className="bg-slate-800 text-white px-4 py-1 rounded mb-3"
      >
        Log In
      </button>

      <p>
        Don&apos;t Have Any Account?
        <Link to="/register" className="border px-4 py-1 rounded ml-1">
          Register Here
        </Link>
      </p>
    </form>
  );
}

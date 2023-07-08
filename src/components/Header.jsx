import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="px-4 py-8 flex justify-between items-center shadow mb-4">
      <Link to="/" className="font-bold text-2xl">
        REPLIQ eCom
      </Link>

      <div>
        <Link
          to="/cart"
          className="bg-slate-800 text-white px-4 py-1 rounded mr-2"
        >
          Cart
        </Link>
        <Link to="/login" className="bg-slate-800 text-white px-4 py-1 rounded">
          Log In
        </Link>
      </div>
    </header>
  );
}

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const products = useSelector((state) => state.cart);

  return (
    <header className="px-4 py-8 flex justify-between items-center shadow mb-4 sticky top-0 z-10 bg-white">
      <Link to="/" className="font-bold text-2xl">
        REPLIQ eCom
      </Link>

      <div>
        <Link
          to="/cart"
          className="bg-slate-800 text-white px-4 py-1 rounded mr-2 btn-hover"
        >
          Cart &nbsp;
          <span className="bg-white text-slate-800 px-2 rounded">
            {products.length}
          </span>
        </Link>
        <Link
          to="/login"
          className="bg-slate-800 text-white px-4 py-1 rounded btn-hover"
        >
          Log In
        </Link>
      </div>
    </header>
  );
}

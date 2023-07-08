import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ProductCard({ product }) {
  return (
    <div className="border rounded  overflow-hidden">
      <div>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-40"
        />
        <h3 className="py-4 font-bold px-2 bg-slate-100">
          {product.title.slice(0, 16)} {product.title.length > 16 ? "..." : ""}
        </h3>
      </div>

      <div className="flex justify-between px-2 my-3">
        <h4 className="text-slate-600">{product.brand}</h4>
        <h4>${product.price}</h4>
      </div>

      <div className="flex justify-between p-1">
        <Link
          to={`/products/${product.id}`}
          className="w-[28%] py-1 bg-slate-800 text-white rounded text-center"
        >
          View
        </Link>
        <button
          type="button"
          className="w-[68%] py-1 bg-slate-800 text-white rounded btn-hover"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [allProducts, setAllProducts] = useState(null);
  console.log(allProducts);

  const productsApi = "https://dummyjson.com/products";

  useEffect(() => {
    axios.get(productsApi).then((res) => setAllProducts(res.data.products));
  }, []);

  return (
    <div className="px-4">
      <h2 className="text-3xl font-bold text-center py-8">
        Find Your Desired Products
      </h2>

      {allProducts ? (
        <div className="grid grid-cols-4 gap-5 my-4 max-w-6xl mx-auto">
          {allProducts.map((p) => (
            <ProductCard product={p} key={p.id} />
          ))}
        </div>
      ) : (
        <p className="text-2xl font-bold text-slate-600 text-center">
          Loading...
        </p>
      )}
    </div>
  );
}

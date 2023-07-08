import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";

export default function ProductDetails() {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  console.log(item);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setItem(res.data));
  }, [id]);

  return (
    <div className="flex justify-center px-4 max-w-6xl mx-auto mt-8">
      {item ? (
        <>
          <div className="w-96 overflow-hidden rounded mr-8">
            <img src={item.images[0]} alt="img" className="mb-4" />
            {item.images.length > 1 && (
              <div className="flex justify-between">
                <img
                  src={item.images[1]}
                  alt="img"
                  className="w-[32%] border rounded"
                />
                <img
                  src={item.images[2]}
                  alt="img"
                  className="w-[32%] border rounded"
                />
                <img
                  src={item.images[3]}
                  alt="img"
                  className="w-[32%] border rounded"
                />
              </div>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-bold">{item.title}</h2>

            <div className="flex justify-between items-center my-4">
              <h3 className="border rounded px-4 py-1">{item.category}</h3>
              <h3 className="font-bold">{item.brand}</h3>
            </div>

            <h4 className="mb-4 font-bold">${item.price}</h4>
            <p>{item.description}</p>
            <p>{item.description}</p>
            <p>{item.description}</p>

            <div className="flex justify-between items-center my-4">
              <h3 className="font-bold">
                Discount: {item.discountPercentage}%
              </h3>
              <h3>Available: {item.stock} Piece</h3>
            </div>

            <button
              onClick={() => dispatch(add(item))}
              className="bg-slate-800 text-white px-4 py-1 rounded btn-hover"
            >
              Add To Cart
            </button>
          </div>
        </>
      ) : (
        <p className="text-2xl font-bold text-slate-600">Loading...</p>
      )}
    </div>
  );
}

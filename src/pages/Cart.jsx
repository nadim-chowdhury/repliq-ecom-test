import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";
// import { useEffect } from "react";
// import { calculateTotalPrice } from "../store/totalPriceSlice";

function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (pId) => {
    dispatch(remove(pId));
  };

  // useEffect(() => {
  //   const totalPrice = products.reduce((acc, item) => acc + item.price, 0);
  //   dispatch(calculateTotalPrice(totalPrice));
  // }, [products, dispatch]);

  const openModal = () => {
    alert("Thanks for shopping & stay connected");
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h3 className="text-center mt-8 mb-2 text-4xl font-bold">Cart</h3>

      {products.map((p) => (
        <div
          key={p.id}
          className="flex justify-between items-center m-6 p-6 rounded-md bg-white"
        >
          <div className="flex items-center">
            <img
              src={p.thumbnail}
              alt={p.title}
              className="w-24 rounded mr-12 border"
            />

            <h5 className="font-bold text-lg m-6">{p.title}</h5>
          </div>

          <div className="flex">
            <h5 className="border rounded-full text-center px-4 py-1 mr-8">
              ${p.price}
            </h5>
            <button
              onClick={() => handleRemove(p.id)}
              className="bg-gray-800 text-white py-1 px-6 rounded btn-hover"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* <div>
        <p>Total Price: ${useSelector((state) => state.totalPrice)}</p>
      </div> */}

      {
        products.length > 0 ? <button
        className="btn-hover px-4 py-1 bg-slate-800 text-white rounded w-32 mx-auto block"
        onClick={openModal}
      >
        Checkout
      </button> : <p className="text-xl text-center text-slate-600 mt-8 border rounded py-2">There is no products in your cart</p>
      }
    </div>
  );
}

export default Cart;

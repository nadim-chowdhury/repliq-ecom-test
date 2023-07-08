import axios from "axios";
import { useEffect, useState } from "react";

export default function Customers() {
  const [customers, setCustomers] = useState(null);

  console.log(customers);

  const openModal = () => {
    alert("User Details");
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => setCustomers(res.data.users))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="mt-10">
      {customers ? (
        <table className="w-full max-w-6xl mx-auto">
          <thead>
            <tr>
              <th className="text-start py-3 pl-4 text-white bg-slate-800 rounded-l">
                Profile
              </th>
              <th className="text-start py-3 text-white bg-slate-800">Name</th>
              <th className="text-start py-3 text-white bg-slate-800">Email</th>
              <th className="text-start py-3 text-white bg-slate-800">Phone</th>
              <th className="text-start py-3 text-white bg-slate-800 rounded-r">
                Ip
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr
                key={c.id}
                className="text-slate-700 cursor-pointer"
                onClick={openModal}
              >
                <td>
                  <img
                    src={c.image}
                    alt=""
                    className="w-12 border rounded-full mt-2 ml-3"
                  />
                </td>
                <td>
                  {c.firstName} {c.lastName}
                </td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>{c.ip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-2xl font-bold text-slate-600 text-center">
          Loading...
        </p>
      )}
    </div>
  );
}

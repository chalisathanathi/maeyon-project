import { useEffect, useState } from "react";
import { UserTable } from "../components/UserTable";
import { AdminTable } from "../components/AdminTable";
import axios from "axios";
import Landing from "../components/Landing";
import Benefits from "../components/Benefits";
import Button from "../components/Button";
import Description from "../components/Description";
import ProductLeft1 from "../components/ProductLeft1";
import ProductRight from "../components/ProductRight.jsx";
import ProductLeft2 from "../components/ProductLeft2.jsx";

// const API_GET = "https://jsd5-mock-backend.onrender.com/members";

const API = "https://67eca027aa794fb3222e43e2.mockapi.io/members";

// const API = "http://localhost:3000/members";

export default function Home() {
  const [view, setView] = useState(null);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(API);
      setUsers(res.data);
    } catch {
      alert("Failed to fetch users");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-start w-full">
      <section className="text-center pl-30">
        <Landing />
      </section>
      <section className="py-15 text-center px-30 bg-orange-50">
        <Benefits />
      </section>
      <section className="my-15 px-30 flex flex-col justify-center items-center">
        <h3 className="font-bold text-5xl text-orange-900 tracking-wide">Best Selling</h3>
        <p className="text-center mt-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, accusamus reprehenderit, officiis maiores tempora ipsum obcaecati facere perspiciatis nisi ullam minus voluptas ab architecto quasi cum tenetur assumenda eveniet consequuntur porro accusantium voluptates corporis similique provident incidunt. Expedita, excepturi! Veniam?</p>
        <ProductLeft1 />
        <div className="bg-orange-50">
            <ProductRight />
        </div>
        <ProductLeft2 />
      </section>
      {/* <section className="flex justify-center gap-x-3 font-bold">
        <button
          onClick={() => setView("user")}
          className=" p-5 bg-sky-200 flex rounded-2xl cursor-pointer border hover:bg-sky-300"
        >
          User Section
        </button>
        <button
          onClick={() => setView("admin")}
          className=" p-5 bg-rose-100 flex rounded-2xl cursor-pointer border hover:bg-rose-200"
        >
          Admin Section
        </button>
      </section>
      <section className="w-full flex justify-center gap-x-3">
        {view === "user" ? (
          <section className=" p-5  flex">
            <UserTable users={users} />
          </section>
        ) : view === "admin" ? (
          <section className=" p-5  flex">
            {" "}
            <AdminTable
              users={users}
              setUsers={setUsers}
              fetchUsers={fetchUsers}
              API={API}
            />
          </section>
        ) : null}
      </section> */}
    </div>
  );
}

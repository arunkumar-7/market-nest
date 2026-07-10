import { FaAppleAlt, FaLeaf } from "react-icons/fa";
import { GiMilkCarton } from "react-icons/gi";
import { LuCookie } from "react-icons/lu";
import { MdBakeryDining } from "react-icons/md";
import { Link } from "react-router-dom";

function Category() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Shop by Category</h2>
        </div>
      </div>

      <div className="flex flex-wrap gap-5">
        <Link
          to="/category/vegetables"
          className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white px-8 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-600 hover:bg-green-600 hover:text-white hover:shadow-xl"
        >
          <FaLeaf className="text-3xl text-green-600 transition group-hover:text-white" />
          <span className="text-lg font-semibold">Vegetables</span>
        </Link>

        <Link
          to="/category/fruits"
          className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white px-8 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-600 hover:bg-green-600 hover:text-white hover:shadow-xl"
        >
          <FaAppleAlt className="text-3xl text-red-500 transition group-hover:text-white" />
          <span className="text-lg font-semibold">Fruits</span>
        </Link>

        <Link
          to="/category/dairy"
          className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white px-8 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-600 hover:bg-green-600 hover:text-white hover:shadow-xl"
        >
          <GiMilkCarton className="text-3xl text-blue-500 transition group-hover:text-white" />
          <span className="text-lg font-semibold">Dairy</span>
        </Link>

        <Link
          to="/category/bakery"
          className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white px-8 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-600 hover:bg-green-600 hover:text-white hover:shadow-xl"
        >
          <MdBakeryDining className="text-3xl text-orange-500 transition group-hover:text-white" />
          <span className="text-lg font-semibold">Bakery</span>
        </Link>

        <Link
          to="/category/snacks"
          className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white px-8 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-600 hover:bg-green-600 hover:text-white hover:shadow-xl"
        >
          <LuCookie className="text-3xl text-amber-600 transition group-hover:text-white" />
          <span className="text-lg font-semibold">Snacks</span>
        </Link>
      </div>
    </section>
  );
}

export default Category;

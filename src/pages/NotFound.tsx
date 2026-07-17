import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <h1 className="text-8xl font-extrabold text-red-600">404</h1>

      <h2 className="mt-4 text-3xl font-bold text-gray-800">
        Oops! Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-gray-500">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link
        to="/"
        className="mt-8 flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-green-700"
      >
        <FaHome />
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;

import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-3xl font-bold text-gray-900">Oops! Something went wrong.</h1>
      <h2 className="text-red-500 text-lg sm:text-xl mt-2">
        {error.data || "An unexpected error occurred!"} <br />
        {error.status && `Error Code: ${error.status}`}
      </h2>
      <NavLink to="/" className="mt-4">
        <button className="bg-amber-950 text-white px-4 py-2 rounded-md shadow-md hover:bg-amber-800 transition">
          Go Home
        </button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;

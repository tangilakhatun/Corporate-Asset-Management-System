import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md shadow-2xl bg-base-100 text-center">
        <div className="card-body">
          <h1 className="text-7xl font-bold text-error">404</h1>
          <h2 className="text-2xl font-semibold mt-2">
            Page Not Found
          </h2>
          <p className="text-gray-500 mt-2">
            Sorry, you are trying to access a page that does not exist.
          </p>

          <div className="card-actions justify-center mt-6">
            <Link to="/" className="btn bg-gradient-to-r from-indigo-500 to-cyan-400">
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

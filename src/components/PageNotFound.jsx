import React from "react";

function PageNotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center p-8 bg-white shadow-xl rounded-lg border border-gray-300">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Oops! Page Not Found
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-6 inline-block bg-slate-100 rounded-full px-8 py-2 border-Default border-black hover:shadow-xl transition-shadow duration-200"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}

export default PageNotFound;
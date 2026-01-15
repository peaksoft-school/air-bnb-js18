export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-6xl font-semibold text-gray-800 mb-4">404</h1>

      <p className="text-lg text-gray-600 mb-2">Page not found</p>

      <p className="text-sm text-gray-500 max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>
    </div>
  );
};
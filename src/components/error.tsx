interface ErrorProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
}

const Error = ({ error }: ErrorProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] bg-white rounded-lg shadow-md p-8 mx-auto max-w-md gap-4 text-red-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-14 w-14 text-red-400 mb-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
        />
      </svg>
      <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
      <p className="text-center">{error}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        onClick={() => window.location.reload()}
      >
        Reload Page
      </button>
    </div>
  );
};

export default Error;

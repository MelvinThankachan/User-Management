import { Link } from "react-router-dom";

const PageNotFoundPage = () => {
  return (
    <div className="base justify-center">
      <div className="container flex flex-col items-center">
        <div className="flex flex-col gap-6 max-w-md text-center">
          <h2 className="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl md:text-3xl dark:text-gray-300">
            Sorry, we couldn't find this page.
          </p>
          <Link to="/" className="submit-button">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFoundPage;

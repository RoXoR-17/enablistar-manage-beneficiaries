import { Link } from "react-router-dom";

function NoMatchPage() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center pb-12">
      <h2 className="text-center mb-2 w-max text-lg md:text-2xl">
        Nothing to see here!
      </h2>
      <p className="text-sm md:text-lg text-center underline w-max hover:text-blue-500">
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default NoMatchPage;

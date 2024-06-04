import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col justify-center items-center pb-12">
      <h2 className="text-center mb-2 w-max text-lg md:text-2xl">
        Welcome User!
      </h2>
      <button
        onClick={() => navigate("/manage-beneficiaries")}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 me-3"
      >
        Manage Beneficiaries
      </button>
    </div>
  );
}

export default MainPage;

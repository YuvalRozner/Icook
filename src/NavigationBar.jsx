import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const NavigationBar = ({ title }) => {
  return (
    <div className="flex justify-between items-center p-3">
      <div className="flex-1"></div> {/* This div acts as a spacer */}
      <h2 className="text-6xl font-extrabold flex-1 justify-center text-center underline">
        {title}
      </h2>
      <div className="flex flex-1 justify-end">
        <Link
          to="/Icook/"
          className="bg-blue-400 hover:bg-blue-600 text-white font-bold text-2xl py-2 px-4 rounded mx-2 my-3"
        >
          Back
        </Link>

        <Link
          to="/Icook/"
          className="bg-blue-400 hover:bg-blue-600 text-white font-bold text-2xl py-2 px-4 rounded mx-2 my-3"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;

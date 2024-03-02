import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { useHistory } from "react-router-dom"; // Import useHistory from react-router-dom

const NavigationBar = ({ title }) => {
  const history = useHistory(); // Get the history object

  // Function to handle the back navigation
  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="flex justify-between items-center p-3">
      <div className="flex-1"></div> {/* This div acts as a spacer */}
      <h2 className="text-6xl font-extrabold flex-1 justify-center text-center underline">
        {title}
      </h2>
      <div className="flex flex-1 justify-end">
        <button
          onClick={handleBack}
          className="bg-blue-400 hover:bg-blue-600 text-white font-bold text-2xl py-2 px-4 rounded mx-2 my-3"
        >
          Back
        </button>

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

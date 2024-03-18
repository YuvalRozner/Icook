import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { useHistory } from "react-router-dom"; // Import useHistory from react-router-dom

const NavigationBar = ({ title }) => {
  const history = useHistory(); // Get the history object

  // Function to handle the back navigation
  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="bg-neutral-300 pb-2 md:pb-5 flex items-center justify-between ">
      <div className="flex mx-2 md:justify-center flex-1">
        <button
          onClick={handleBack}
          className="bg-blue-400 hover:bg-blue-600 text-white font-bold text-xl md:text-2xl py-1 md:py-2 px-2 md:px-4 rounded"
        >
          Back
        </button>
      </div>
      <h2 className="text-4xl md:text-6xl font-extrabold text-center underline flex-1">
        {title}
      </h2>
      <div className="flex justify-end mx-2 md:justify-center flex-1">
        <Link
          to="/"
          className="bg-blue-400 hover:bg-blue-600 text-white font-bold text-xl md:text-2xl py-1 md:py-2 px-2 md:px-4 rounded"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;

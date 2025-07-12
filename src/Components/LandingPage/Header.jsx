import { useNavigate } from "react-router-dom";
import logo from "../../assets/Images/Logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-green-50/50 border-b border-[hsla(60,100%,50%,0.3)]">
      <nav className="flex justify-between items-center px-6 py-4">
         
        <div className="ml-10">
          <img
            src={logo}
            alt="StudyLoop Logo"
            className="h-10 w-auto"
          />
        </div>

        <div className="flex items-center space-x-4 mr-16">
          <button className="text-[hsla(55,65%,81%,1)] font-semibold hover:text-yellow-600 font-5xl text-lg">
            Log In
          </button>

          <button
            onClick={() => navigate("/signup-desktop")}
            className="bg-[hsla(142,71%,45%,1)] text-white w-[117px] h-[40px] rounded-[16px] font-semibold shadow-[0_4px_6px_hsla(88,100%,33%,1)] flex items-center justify-center"
          >
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

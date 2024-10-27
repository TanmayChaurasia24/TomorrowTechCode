import { useNavigate } from "react-router-dom";

const Logoutpage = () => {
    const navigate = useNavigate();

    const handlelogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

  return (
    <div className="bg-neutral-950 h-[100vh] text-white flex justify-center items-center">
      <div className="border border-gray-400 flex justify-center items-center flex-col p-10 gap-4 rounded-lg">
        <div>Do You want to logout?</div>
        <div className="flex justify-center items-center gap-4">
          <button className="bg-blue-500 p-2 text-black rounded-md" onClick={handlelogout}>
            Log out
          </button>
          <a href="/" className="bg-blue-500 p-2 text-black rounded-md">
            cancel
          </a>
        </div>
      </div>
    </div>
  );
};

export default Logoutpage;

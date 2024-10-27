import { IoSearch } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { ThreeDCardDemo } from "../components/Jobcard";
import { FloatingDockDemo } from "../components/MenuBarHome";

const Jobposting = () => {
  return (
    <>
      <nav className="bg-neutral-950 text-white flex flex-wrap justify-between items-center h-auto p-5 fixed top-0 left-0 right-0 w-full z-50">
        <div className="logo font-bold text-2xl mb-4 lg:mb-0">Tomorrow Tech Code (TTC)</div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-5 w-full lg:w-auto">
          <div className="flex justify-center items-center gap-2 w-full lg:w-auto">
            <IoSearch color="white" size={25} />
            <input
              type="text"
              placeholder="Title or company"
              className="rounded-md p-2 w-full lg:w-[30vw] bg-gray-600 text-white border border-gray-400"
            />
          </div>
          <div className="flex justify-center items-center gap-2 w-full lg:w-auto">
            <CiLocationOn color="white" size={25} />
            <input
              type="text"
              placeholder="Location"
              className="rounded-md p-2 w-full lg:w-[20vw] bg-gray-600 text-white border border-gray-400"
            />
          </div>
        </div>
      </nav>

      <div className="bg-neutral-950 pt-[20vh] pb-5 px-4 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center h-auto">
        <ThreeDCardDemo
          post="Travel Blogger"
          company="Wanderlust Magazine"
          type="Freelance"
          stipend="$100/hr"
          location="India"
        />
        <ThreeDCardDemo
          post="Travel Blogger"
          company="Wanderlust Magazine"
          type="Freelance"
          stipend="$100/hr"
          location="India"
        />
        <ThreeDCardDemo
          post="Travel Blogger"
          company="Wanderlust Magazine"
          type="Freelance"
          stipend="$100/hr"
          location="India"
        />
        <ThreeDCardDemo
          post="Travel Blogger"
          company="Wanderlust Magazine"
          type="Freelance"
          stipend="$100/hr"
          location="India"
        />
        <ThreeDCardDemo
          post="Travel Blogger"
          company="Wanderlust Magazine"
          type="Freelance"
          stipend="$100/hr"
          location="India"
        />
        <ThreeDCardDemo
          post="Travel Blogger"
          company="Wanderlust Magazine"
          type="Freelance"
          stipend="$100/hr"
          location="India"
        />
        <ThreeDCardDemo
          post="Travel Blogger"
          company="Wanderlust Magazine"
          type="Freelance"
          stipend="$100/hr"
          location="India"
        />
      </div>

      <div className="fixed bottom-1 left-1/2 transform -translate-x-1/2 z-50">
        <FloatingDockDemo />
      </div>
    </>
  );
};

export default Jobposting;

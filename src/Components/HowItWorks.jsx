import image from "../assets/image/WhatsApp Image 2024-05-01 at 22.32.02_45979813.jpg";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div className="flex justify-center items-center gap-8 md:m-10 lg:md:m-20 flex-col-reverse lg:flex-row my-40">
       <div className="w-full lg:w-1/3">
                <img
                    className="rounded-full md:h-[450px] md:w-[450px] h-80 w-80 mx-auto "
                    src={image}
                    alt="Job Seeker"
                />
            </div>
      <div className="w-full md:ml-6 lg:w-1/2 max-w-[555px] px-6">
        <p className="border-l-4 border-primaryColor font-semibold pl-2 text-primaryColor ">
          How it works
        </p>
        <div className="my-4">
          <h1 className="font-bold text-4xl">Land your dream job in 4 easy steps</h1>
          <p className="text-gray-500">
            Your path to a new career opportunity is just a few clicks away
          </p>
        </div>
        <div className="space-y-5 mt-10">
          <div className="flex gap-5">
            <div className="w-14 h-14 flex justify-center items-center text-primaryColor text-3xl font-semibold border-primaryColor border-4 rounded-full">
              <p>1</p>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                Register and create a profile
              </h1>
              <p className="text-gray-500">
                Sign up and complete your profile to let the job hunt begin
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-14 h-14 flex justify-center items-center text-primaryColor text-3xl font-semibold border-primaryColor border-4 rounded-full">
              <p>2</p>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                Search for jobs
              </h1>
              <p className="text-gray-500">
                Use our search tools to find jobs that match your skills and preferences
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-14 h-14 flex justify-center items-center text-primaryColor text-3xl font-semibold border-primaryColor border-4 rounded-full">
              <p>3</p>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                Apply with ease
              </h1>
              <p className="text-gray-500">
                Send out applications to potential employers with just a few clicks
              </p>
            </div>
          </div>
          {/* <div className="flex gap-5">
            <div className="w-14 h-14 flex justify-center items-center text-primaryColor text-3xl font-semibold border-primaryColor border-4 rounded-full">
              <p>4</p>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                Get hired!
              </h1>
              <p className="text-gray-500">
                Start your new career by accepting a job offer and preparing for your first day
              </p>
            </div>
          </div> */}
        </div>
        <Link to="/jobs" className="flex justify-center items-center mt-4">
          <button className="w-36 h-16 border-2 border-sky-500  font-black rounded-full hover:text-white duration-300 relative group">
            <span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-sky-600 group-hover:bg-sky-300 group-hover:duration-500 -z-10"></span>
            Start Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HowItWorks;

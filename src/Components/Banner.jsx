import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div  className=" bannerdark flex   flex-col md:flex-row justify-center items-center rounded-br-[300px] h-[600px] gap-x-28 bg-cover bg-center">
            <div className="max-w-[500px]  p-4 space-y-7">
                <h1 className=" bannertext text-4xl lg:text-6xl font-bold  ">
                    Find Your Dream Job in Japan
                </h1>
                <p className="" >
                    Transform your career effortlessly with our dynamic job
                    portal – your key to smart, secure, and simplified job
                    hunting in Japan!
                </p>
                <Link to="/Internships">
                    <button className="btn btn-outline text-white font-bold mt-4">
                        GET STARTED
                    </button>
                </Link>
            </div>
            <div className="w-full lg:w-1/3">
                <img
                    className="rounded-full md:h-[500px] md:w-[500px] mx-auto h-64 w-64"
                    src="https://i.ibb.co/dQQ3nbS/pexels-santesson89-19651827-1.jpg"
                    alt="Job Seeker"
                />
            </div>
        </div>
    );
};

export default Banner;

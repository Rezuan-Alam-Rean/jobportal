import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="flex bg-sky-400 flex-col md:flex-row justify-center items-center rounded-br-[300px] h-[600px] gap-x-28 bg-cover bg-center">
            <div className="max-w-[500px] mt-10 p-4 space-y-7">
                <h1 className="text-4xl lg:text-6xl font-bold">
                    Find Your Dream Job in Japan
                </h1>
                <p>
                    Transform your career effortlessly with our dynamic job
                    portal – your key to smart, secure, and simplified job
                    hunting in Japan!
                </p>
                <Link to="/login">
                    <button className="btn btn-outline text-white font-bold mt-4">
                        GET STARTED
                    </button>
                </Link>
            </div>
            <div className="w-full lg:w-1/3">
                <img
                    className="rounded-full md:h-[450px] md:w-[550px] h-56 w-56"
                    src="https://motto-jp.com/media/wp-content/uploads/2021/06/AdobeStock_162464660.jpeg"
                    alt="Job Seeker"
                />
            </div>
        </div>
    );
};

export default Banner;

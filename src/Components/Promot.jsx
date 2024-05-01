import logo from "../assets/image/star-medal.svg";

const Promot = () => {
    return (
        <div>
             <div  className=" bannerdark flex   flex-col md:flex-row justify-center items-center  h-[600px] gap-x-28 bg-cover bg-center">
            <div className="max-w-[500px] mt-10 p-4 space-y-7">
                <h1 className=" bannertext text-4xl lg:text-6xl font-bold  ">
                  100 % trusted jobs in japan
                </h1>
                <p className="" >
                    Transform your career effortlessly with our dynamic job
                    portal – your key to smart, secure, and simplified job
                    hunting in Japan!
                </p>
              
            </div>
            <div className="w-full lg:w-1/3">
                <img
                    className="rounded-full md:h-[500px] md:w-[500px] h-56 w-56"
                    src={logo}
                    alt="Job Seeker"
                />
            </div>
        </div>
        </div>
    );
};

export default Promot;
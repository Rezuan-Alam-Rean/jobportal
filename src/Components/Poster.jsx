import imge from "../assets/image/japan.svg"
const Poster = () => {
    return (
        <div>
              <div  className=" bannerdark flex   flex-col md:flex-row justify-center items-center  h-[200px] gap-x-28 bg-cover bg-center">
            <div className="max-w-[500px] mt-10 p-4 space-y-7">
                <h1 className=" bannertext text-2xl lg:text-3xl font-bold  ">
                    Find Your Dream Job in Japan
                </h1>
               
               
            </div>
            <div className="w-full lg:w-1/3">
                <img
                    className="rounded-full md:h-[500px] md:w-[500px] h-56 w-56"
                    src={imge}
                    alt="Job Seeker"
                />
            </div>
        </div>
        </div>
    );
};

export default Poster;
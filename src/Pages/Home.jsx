import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import HowItWorks from "../Components/HowItWorks";

import HomeJobs from "../Components/Shared/HomeJobs";




const Home = () => {
    return (
      <div className=" ">
        <Banner/>
        <HomeJobs/>
        <HowItWorks/>
        <Contact/>
        
      </div>
    );
  };
  
export default Home;
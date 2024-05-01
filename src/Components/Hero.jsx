import imag1 from "../assets/image/WhatsApp Image 2024-05-01 at 22.30.13_3f174d2d.jpg";
// import imag2 from "../assets/image/WhatsApp Image 2024-05-01 at 22.30.13_74c3eb46.jpg";
import imag3 from "../assets/image/WhatsApp Image 2024-05-01 at 22.30.13_a4c0cf2d.jpg";
import imag4 from "../assets/image/WhatsApp Image 2024-05-01 at 22.32.01_cdc20ce0.jpg";
import imag5 from "../assets/image/WhatsApp Image 2024-05-01 at 22.32.02_45979813.jpg";

const Hero = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={imag1} className="w-full max-h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={imag5} className="w-full max-h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={imag3} className="w-full max-h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={imag4} className="w-full max-h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
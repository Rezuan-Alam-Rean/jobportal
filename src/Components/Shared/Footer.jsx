import logo from "../../assets/image/star-medal.svg";

const Footer = () => {
    return (
        <div className="">
            <footer className="footer p-10 mt-5  content">
                <aside>
                    <img className="w-32 h-16" src={logo} alt="logo" />
                    <p className="" >Find Your Dream Job.<br />Connecting job seekers and employers since 2023</p>
                </aside>
                <nav>
                    <header className="footer-title ">Services</header>
                    <a className="link  link-hover">Job Search</a>
                    <a className="link  link-hover">Resume Building</a>
                    <a className="link  link-hover">Interview Preparation</a>
                    <a className="link  link-hover">Career Advice</a>
                </nav>
                <nav>
                    <header className="footer-title ">Company</header>
                    <a className="link  link-hover">About Us</a>
                    <a className="link  link-hover">Contact</a>
                    <a className="link  link-hover">Blog</a>
                    <a className="link  link-hover">Social</a>
                </nav>
                <nav>
                    <header className="footer-title ">Legal</header>
                    <a className="link  link-hover">Terms of Use</a>
                    <a className="link  link-hover">Privacy Policy</a>
                    <a className="link  link-hover">Cookie Policy</a>
                    <a className="link  link-hover">Security</a>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-base-200 content">
                <aside>
                    <p className="" >© 2024 JobPortal Inc. All rights reserved.</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;

import { Link } from 'react-router-dom';

const SignUpBanner = () => {
    return (
        <div className="relative w-full">
            <img src="public/login-bg.png" className="w-full" />
            <div className="h-full flex flex-col justify-center left-0 top-0 absolute space-y-3 md:space-y-5  w-full md:w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className="flex flex-col gap-2">
                    <p className="text-white text-[12px] md:text-xl ml-10">Stay tuned with Explore-Eden.</p>
                    <h2 className="text-white text-[18px] md:text-2xl lg:text-5xl font-semibold ml-10">Sign up for our surprising deals and special offers.</h2>
                </div>
                <Link
                    to="/signup"
                    className="bg-[#AD88C6] text-[18px] text-white ml-10 py-3 rounded-sm text-center"
                >Register</Link>
            </div>
        </div>
    );
};

export default SignUpBanner;
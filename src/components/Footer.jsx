import { AiOutlineTwitter } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";

const Footer = () => {
    return (
        <footer className="bg-[#F6F6F6] pt-24 pb-8">
            {/* Subscribe block */}
            <div className="container mx-auto p-5">
                <div className="container mx-auto px-5">
                    <div className="bg-black rounded-2xl px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                        <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-tight">
                            STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="px-5 py-3 rounded-full w-full sm:w-72 outline-none"
                            />
                            <button className="bg-white cursor-pointer px-6 py-3 rounded-full font-semibold whitespace-nowrap">
                                Subscribe to Newsletter
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main footer */}
                <div className="container mx-auto px-5 mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
                        {/* Brand */}
                        <div className="md:col-span-1">
                            <h3 className="text-2xl font-bold mb-4 font-serif">SHOP.CO</h3>
                            <p className="text-sm text-gray-500 leading-relaxed mb-6">
                                We have clothes that suits your style and which you’re proud to wear.
                                From women to men.
                            </p>

                            <div className="flex gap-3">
                                <AiOutlineTwitter className="w-8 h-8 p-1.5 border border-gray-400 rounded-full" />
                                <TiSocialFacebook className="w-8 h-8 bg-black p-1 text-white rounded-full" />
                                <IoLogoInstagram className="w-8 h-8 p-1 border border-gray-400 rounded-full" />
                                <FaGithub className="w-8 h-8 p-2 border border-gray-400 rounded-full" />
                            </div>
                        </div>

                        {/* Links */}
                        <FooterColumn
                            title="COMPANY"
                            links={["About", "Features", "Works", "Career"]}
                        />
                        <FooterColumn
                            title="HELP"
                            links={[
                                "Customer Support",
                                "Delivery Details",
                                "Terms & Conditions",
                                "Privacy Policy",
                            ]}
                        />
                        <FooterColumn
                            title="FAQ"
                            links={["Account", "Manage Deliveries", "Orders", "Payments"]}
                        />
                        <FooterColumn
                            title="RESOURCES"
                            links={[
                                "Free eBooks",
                                "Development Tutorial",
                                "How to - Blog",
                                "Youtube Playlist",
                            ]}
                        />
                    </div>
                </div>

                {/* Bottom */}
                <div className="container mx-auto px-5 mt-16 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <span>Shop.co © 2000-2023, All Rights Reserved</span>

                    <div className="flex gap-2">
                        {["VISA", "MC", "PayPal", "ApplePay", "GPay"].map((item) => (
                            <div
                                key={item}
                                className="bg-gray-800 text-white px-3 py-1 rounded-md text-xs font-medium"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
           </div>
        </footer>
    );
};

const FooterColumn = ({ title, links }) => {
    return (
        <div>
            <h4 className="text-sm font-semibold tracking-wider mb-4">
                {title}
            </h4>
            <ul className="space-y-3">
                {links.map((link) => (
                    <li
                        key={link}
                        className="text-sm text-gray-500 cursor-pointer hover:text-black transition"
                    >
                        {link}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Footer;

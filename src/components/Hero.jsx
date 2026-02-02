// Hero.jsx
// картинку ты заменишь на свою локальную
import heroImage from "../img/hero.jpg";

const brands = [
    "VERSACE",
    "ZARA",
    "GUCCI",
    "PRADA",
    "Calvin Klein",
    "ALLO",
    "Miss",
    "MAN",
    "Nike"
];

const Hero = () => {
    return (
        <section className="bg-[#F2F0F1] overflow-hidden">
            {/* HERO CONTENT */}
            <div className="container mx-auto px-5 xl:px-[100px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

                    {/* LEFT */}
                    <div>
                        <h1 className="text-3xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-6">
                            FIND CLOTHES <br />
                            THAT MATCHES <br />
                            YOUR STYLE
                        </h1>

                        <p className="text-gray-500 max-w-md mb-8">
                            Browse through our diverse range of meticulously crafted garments,
                            designed to bring out your individuality and cater to your sense of style.
                        </p>

                        <button className="bg-black text-white px-8 py-3 rounded-full mb-10">
                            Shop Now
                        </button>

                        {/* STATS */}
                        <div className="flex flex-wrap gap-8 ">
                            <Stat value="200+" label="International Brands" />
                            <Stat value="2,000+" label="High-Quality Products" />
                            <Stat value="30,000+" label="Happy Customers" />
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative h-[535px] overflow-hidden">
                        <img
                            src={heroImage}
                            alt="Hero"
                            className="w-full max-w-[450px] overflow-hidden object-cover mx-auto"
                        />
                    </div>
                </div>
            </div>

            {/* BRANDS MARQUEE */}
            <div className="bg-black text-white py-6 overflow-hidden">
                <div
                    className="flex gap-16 px-10 w-max"
                    style={{
                        animation: "marquee 18s linear infinite",
                    }}
                >
                    {[...brands, ...brands].map((brand, i) => (
                        <span key={i} className="text-4xl font-semibold whitespace-nowrap">
                            {brand}
                        </span>
                    ))}
                </div>

                <style>
                    {`
      @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
    `}
                </style>
            </div>
        </section>
    );
};

const Stat = ({ value, label }) => {
    return (
        <div>
            <h3 className="text-2xl font-bold">{value}</h3>
            <p className="text-sm text-gray-500">{label}</p>
        </div>
    );
};

export default Hero;

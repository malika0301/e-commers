import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const sliderReviews = [
    {
        name: "Daniel R.",
        text: "Amazing quality and fast delivery. Totally worth it!",
        rating: 5,
    },
    {
        name: "Sophia L.",
        text: "Very stylish and comfortable. I wear it all the time.",
        rating: 4,
    },
    {
        name: "Mark T.",
        text: "Simple, clean, and well-made. Love the design. Totally worth it!",
        rating: 5,
    },
    {
        name: "Emma W.",
        text: "Fabric feels premium and fits perfectly. Very stylish and comfortable.",
        rating: 4,
    },
    {
        name: "Noah B.",
        text: "Minimalistic but powerful look. Big fan. Love the design.",
        rating: 5,
    },
];

const ReviewsSlider = () => {
    return (
            <div className="">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-[24px] font-semibold">OUR HAPPY COSTUMERS</h2>
                    <div className="flex gap-2">
                        <button className="review-prev w-8 h-8 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition">
                            <FaLongArrowAltLeft />
                        </button>
                        <button className="review-next w-8 h-8 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition">
                            <FaLongArrowAltRight />
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".review-prev",
                        nextEl: ".review-next",
                    }} n
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                >
                    {sliderReviews.map((review, i) => (
                        <SwiperSlide key={i}>
                            <div className="border border-gray-400 rounded-2xl p-6 h-full bg-white">
                                <div className="flex mb-3">
                                    {Array.from({ length: review.rating }).map((_, i) => (
                                        <span key={i} className="text-yellow-400">★</span>
                                    ))}
                                </div>

                                <h4 className="font-semibold mb-2">{review.name}</h4>

                                <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                                    "{review.text}"
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
    );
};

export default ReviewsSlider;

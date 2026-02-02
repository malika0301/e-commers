const reviews = [
    {
        name: "Samantha D.",
        text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable.",
        date: "Posted on August 14, 2023",
        rating: 5,
    },
    {
        name: "Alex M.",
        text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch.",
        date: "Posted on August 15, 2023",
        rating: 4,
    },
    {
        name: "Ethan R.",
        text: "This t-shirt is a must-have for anyone who appreciates good design.",
        date: "Posted on August 16, 2023",
        rating: 4,
    },
    {
        name: "Olivia P.",
        text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt nails it.",
        date: "Posted on August 17, 2023",
        rating: 5,
    },
    {
        name: "Liam K.",
        text: "A fusion of comfort and creativity. The fabric is soft and the design speaks volumes.",
        date: "Posted on August 18, 2023",
        rating: 5,
    },
    {
        name: "Ava H.",
        text: "I’m not just wearing a t-shirt; I’m wearing a piece of design philosophy.",
        date: "Posted on August 19, 2023",
        rating: 5,
    },
];

const ReviewsGrid = () => {
    return (
        <div>
            <div className="container mx-auto p-5 grid grid-cols-2 gap-6">
                {reviews.map((review, i) => (
                    <div
                        key={i}
                        className="border border-gray-400 rounded-2xl p-4 bg-white"
                    >
                        {/* Stars */}
                        <div className="flex mb-3">
                            {Array.from({ length: review.rating }).map((_, i) => (
                                <span key={i} className="text-yellow-400">★</span>
                            ))}
                        </div>

                        {/* Name */}
                        <div className="flex items-center gap-2 mb-3">
                            <h4 className="font-semibold">{review.name}</h4>
                            <span className="text-green-500 text-sm"></span>
                        </div>

                        {/* Text */}
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">
                            "{review.text}"
                        </p>

                        {/* Date */}
                        <span className="text-xs text-gray-400">
                            {review.date}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewsGrid;

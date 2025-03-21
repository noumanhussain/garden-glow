import React, { useState, useEffect } from "react";

const slides = [
    {
        id: 1,
        image: "/images/slider/slide1.jpg",
        title: "Best Flowers Seeds",
        subtitle: "in town",
        welcomeText: "WELCOME TO GARDEN GLOW",
        buttonText: "Shop Summer Flower Seeds",
        buttonLink: "/shop/summer-seeds",
    },
    {
        id: 2,
        image: "/images/slider/slide2.jpg",
        title: "Fresh Garden Plants",
        subtitle: "for your home",
        welcomeText: "DISCOVER NATURE",
        buttonText: "Explore Collection",
        buttonLink: "/shop/plants",
    },
    {
        id: 3,
        image: "/images/slider/slide3.jpg",
        title: "Premium Bulbs",
        subtitle: "for every season",
        welcomeText: "GROW WITH US",
        buttonText: "View Bulb Collection",
        buttonLink: "/shop/bulbs",
    },
    {
        id: 4,
        image: "/images/slider/slide4.jpg",
        title: "Organic Vegetable Seeds",
        subtitle: "grow your own food",
        welcomeText: "HEALTHY LIVING",
        buttonText: "Browse Vegetable Seeds",
        buttonLink: "/shop/vegetable-seeds",
    },
    {
        id: 5,
        image: "/images/slider/slide5.jpg",
        title: "Premium Plant Food",
        subtitle: "for healthy growth",
        welcomeText: "NURTURE YOUR GARDEN",
        buttonText: "Shop Plant Food",
        buttonLink: "/shop/plant-food",
    },
];

export default function HomeSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const goToPrevSlide = () => {
        setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
        );
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    return (
        <div className="relative h-[600px] overflow-hidden">
            {/* Slides */}
            <div className="relative h-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                            index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        />

                        {/* Content Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-20">
                            <div className="container mx-auto px-4 h-full flex items-center">
                                <div className="max-w-2xl text-white">
                                    <p className="text-sm font-medium tracking-wider mb-4">
                                        {slide.welcomeText}
                                    </p>
                                    <h1 className="text-6xl font-bold mb-2">
                                        {slide.title}
                                    </h1>
                                    <h2 className="text-4xl mb-8">
                                        {slide.subtitle}
                                    </h2>
                                    <a
                                        href={slide.buttonLink}
                                        className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md transition-colors duration-300"
                                    >
                                        {slide.buttonText}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={goToPrevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>
            <button
                onClick={goToNextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide
                                ? "bg-white scale-125"
                                : "bg-white bg-opacity-50 hover:bg-opacity-75"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

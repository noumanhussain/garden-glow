import React, { useState } from "react";
import { Link } from "@inertiajs/react";

const LatestProducts = () => {
    const [imageErrors, setImageErrors] = useState({});

    const products = [
        {
            id: 1,
            name: "Bee Green Aloe Squarrosa Vera Clumb",
            image: "/images/products/aloe-vera.jpg",
            rating: 5,
            price: 45.0,
        },
        {
            id: 2,
            name: "Advi Decorative Zamioculcas Zamiifolia Plant",
            image: "/images/products/zamioculcas.jpg",
            rating: 3,
            price: 44.0,
        },
        {
            id: 3,
            name: "Healthy Vibe Green Zamia Zamioculcas",
            image: "/images/products/zamia.jpg",
            rating: 5,
            price: 37.0,
        },
        {
            id: 4,
            name: "Alobtt Plants Mini Potted Artificial Plants",
            image: "/images/products/mini-potted.jpg",
            rating: 4,
            price: 39.0,
        },
    ];

    const handleImageError = (productId) => {
        setImageErrors((prev) => ({
            ...prev,
            [productId]: true,
        }));
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <span
                key={index}
                className={`text-xl ${
                    index < rating ? "text-yellow-400" : "text-gray-300"
                }`}
            >
                ★
            </span>
        ));
    };

    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h3 className="text-green-700 italic mb-2">New Products</h3>
                <h2 className="text-4xl font-serif">LATEST PRODUCTS</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        className="group"
                    >
                        <div className="bg-white shadow-sm rounded-lg transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
                            <div className="aspect-square mb-4 overflow-hidden rounded-t-lg relative bg-gray-100">
                                {!imageErrors[product.id] ? (
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                                        loading="lazy"
                                        onError={() =>
                                            handleImageError(product.id)
                                        }
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        <svg
                                            className="w-16 h-16"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-medium text-center mb-2 line-clamp-2 h-14">
                                    {product.name}
                                </h3>
                                <div className="flex justify-center mb-2">
                                    {renderStars(product.rating)}
                                </div>
                                <p className="text-green-700 font-semibold text-center text-lg">
                                    ${product.price.toFixed(2)}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default LatestProducts;

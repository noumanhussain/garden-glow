import React from "react";

const services = [
    {
        id: 1,
        icon: "/images/services/pick-plant.jpg",
        title: "PICK YOUR PLANT",
        description:
            "Choose from our wide selection of beautiful, healthy plants",
    },
    {
        id: 2,
        icon: "/images/services/pot-color.jpg",
        title: "CHOOSE A POT COLOR",
        description: "Select from our range of stylish pots in various colors",
    },
    {
        id: 3,
        icon: "/images/services/shipping.jpg",
        title: "HAVE IT SHIPPED",
        description: "Fast and secure delivery right to your doorstep",
    },
    {
        id: 4,
        icon: "/images/services/growing.jpg",
        title: "WATCH IT GROW",
        description: "Enjoy watching your plants thrive with proper care",
    },
];

export default function Services() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h3 className="text-green-600 text-lg font-medium italic mb-2">
                        What We Do
                    </h3>
                    <h2 className="text-4xl font-bold text-gray-900">
                        OUR SERVICES
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="flex flex-col items-center text-center group"
                        >
                            {/* Icon Circle */}
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-6 transform transition-transform duration-300 group-hover:scale-110">
                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

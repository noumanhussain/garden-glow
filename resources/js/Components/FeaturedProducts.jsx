import React from "react";

export default function FeaturedProducts() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Snake Plant Feature */}
                    <div className="bg-gray-50 rounded-lg overflow-hidden">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2">
                                <img
                                    src="/images/snake-plant.jpg"
                                    alt="Snake Plant"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 p-8">
                                <p className="text-green-600 text-sm font-medium mb-2">
                                    Farm Snake Plant
                                </p>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                    Greenery Nursery
                                    <br />
                                    Snake Plant
                                </h3>
                                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded text-sm font-medium transition-colors duration-300">
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Zamiifolia Feature */}
                    <div className="bg-gray-50 rounded-lg overflow-hidden">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2">
                                <img
                                    src="/images/zamiifolia.jpg"
                                    alt="Zamiifolia"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 p-8">
                                <p className="text-green-600 text-sm font-medium mb-2">
                                    Up To 25% Discount
                                </p>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                    Buy Zamioculcas
                                    <br />
                                    Zamiifolia
                                </h3>
                                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded text-sm font-medium transition-colors duration-300">
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

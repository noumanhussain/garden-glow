import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import HomeSlider from "@/Components/HomeSlider";
import Services from "@/Components/Services";
import LatestProducts from "@/Components/LatestProducts";

export default function Welcome() {
    return (
        <MainLayout>
            <HomeSlider />
            <Services />
            <LatestProducts />
            <div className="min-h-[500px] py-12">
                <div className="flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Welcome to Garden Glow
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Transform your outdoor space into a beautiful
                            paradise
                        </p>
                        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition duration-300">
                            Explore Our Services
                        </button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

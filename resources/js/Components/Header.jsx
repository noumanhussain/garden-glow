import React, { useState } from "react";
import { Link } from "@inertiajs/react";

export default function Header() {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleMouseEnter = (menu) => {
        setActiveDropdown(menu);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    const menuItems = {
        plants: [
            { name: "Indoor Plants", href: "/indoor-plants" },
            { name: "Outdoor Plants", href: "/outdoor-plants" },
            { name: "Flowering Plants", href: "/flowering-plants" },
            { name: "Tropical Plants", href: "/tropical-plants" },
        ],
        seeds: [
            { name: "Vegetable Seeds", href: "/vegetable-seeds" },
            { name: "Flower Seeds", href: "/flower-seeds" },
            { name: "Herb Seeds", href: "/herb-seeds" },
            { name: "Grass Seeds", href: "/grass-seeds" },
        ],
        flowerBulbs: [
            { name: "Spring Bulbs", href: "/spring-bulbs" },
            { name: "Summer Bulbs", href: "/summer-bulbs" },
            { name: "Fall Bulbs", href: "/fall-bulbs" },
            { name: "Winter Bulbs", href: "/winter-bulbs" },
        ],
        gardenCare: [
            { name: "Soil & Fertilizers", href: "/soil-fertilizers" },
            { name: "Plant Food", href: "/plant-food" },
            { name: "Pest Control", href: "/pest-control" },
            { name: "Garden Tools", href: "/garden-tools" },
        ],
        gardeningAccessories: [
            { name: "Pots & Planters", href: "/pots-planters" },
            { name: "Garden Decor", href: "/garden-decor" },
            { name: "Watering Tools", href: "/watering-tools" },
            { name: "Garden Furniture", href: "/garden-furniture" },
        ],
    };

    return (
        <header className="bg-white py-3 relative border-b">
            <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <img
                                src="/images/logo.png"
                                alt="Garden Glow"
                                className="h-12 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Navigation Links - Center */}
                    <div className="flex-1 flex justify-center space-x-4">
                        {/* PLANTS Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter("plants")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="text-gray-700 hover:text-green-600 px-2 py-2 text-xs font-medium flex items-center whitespace-nowrap">
                                PLANTS
                                <svg
                                    className="w-3 h-3 ml-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {activeDropdown === "plants" && (
                                <div className="absolute z-10 left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                                    {menuItems.plants.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* SEEDS Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter("seeds")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="text-gray-700 hover:text-green-600 px-2 py-2 text-xs font-medium flex items-center whitespace-nowrap">
                                SEEDS
                                <svg
                                    className="w-3 h-3 ml-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {activeDropdown === "seeds" && (
                                <div className="absolute z-10 left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                                    {menuItems.seeds.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* FLOWER BULBS Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter("flowerBulbs")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="text-gray-700 hover:text-green-600 px-2 py-2 text-xs font-medium flex items-center whitespace-nowrap">
                                FLOWER BULBS
                                <svg
                                    className="w-3 h-3 ml-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {activeDropdown === "flowerBulbs" && (
                                <div className="absolute z-10 left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                                    {menuItems.flowerBulbs.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* GARDEN CARE Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnter("gardenCare")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="text-gray-700 hover:text-green-600 px-2 py-2 text-xs font-medium flex items-center whitespace-nowrap">
                                GARDEN CARE
                                <svg
                                    className="w-3 h-3 ml-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {activeDropdown === "gardenCare" && (
                                <div className="absolute z-10 left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                                    {menuItems.gardenCare.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* GARDENING ACCESSORIES Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() =>
                                handleMouseEnter("gardeningAccessories")
                            }
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="text-gray-700 hover:text-green-600 px-2 py-2 text-xs font-medium flex items-center whitespace-nowrap">
                                GARDENING ACCESSORIES
                                <svg
                                    className="w-3 h-3 ml-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {activeDropdown === "gardeningAccessories" && (
                                <div className="absolute z-10 left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                                    {menuItems.gardeningAccessories.map(
                                        (item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50"
                                            >
                                                {item.name}
                                            </Link>
                                        )
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Static Links */}
                        <Link
                            href="/deals"
                            className="text-gray-700 hover:text-green-600 px-2 py-2 text-xs font-medium whitespace-nowrap"
                        >
                            DEALS
                        </Link>
                        <Link
                            href="/organic-goods"
                            className="text-gray-700 hover:text-green-600 px-2 py-2 text-xs font-medium whitespace-nowrap"
                        >
                            ORGANIC GOODS
                        </Link>
                        <Link
                            href="/order-info"
                            className="text-gray-700 hover:text-green-600 px-2 py-2 text-xs font-medium whitespace-nowrap"
                        >
                            ORDER INFO
                        </Link>
                    </div>

                    {/* Sign In Button - Right */}
                    <div>
                        <Link
                            href="/login"
                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-xs font-medium transition-colors duration-200 ease-in-out whitespace-nowrap"
                        >
                            Sign in
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

import React from "react";
import { Link } from "@inertiajs/react";

export default function Header() {
    return (
        <header className="bg-white shadow-lg">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link
                                href="/"
                                className="text-xl font-bold text-gray-800"
                            >
                                Garden Glow
                            </Link>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <Link
                                href="/"
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-gray-300"
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300"
                            >
                                About
                            </Link>
                            <Link
                                href="/services"
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300"
                            >
                                Services
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Right side buttons */}
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                            Get Started
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

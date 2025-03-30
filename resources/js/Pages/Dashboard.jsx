import React from "react";
import { Head, usePage } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";

export default function Dashboard() {
    const { auth } = usePage().props;
    console.log("Dashboard auth:", auth); // Debugging line

    if (!auth?.user) {
        return (
            <MainLayout>
                <Head title="Dashboard" />
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">Loading...</div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                                Welcome back, {auth.user.name}!
                            </h1>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Recent Orders */}
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h2 className="text-lg font-semibold text-gray-700 mb-4">
                                        Recent Orders
                                    </h2>
                                    <p className="text-gray-600">
                                        No orders yet.
                                    </p>
                                </div>

                                {/* Saved Plants */}
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h2 className="text-lg font-semibold text-gray-700 mb-4">
                                        Saved Plants
                                    </h2>
                                    <p className="text-gray-600">
                                        No saved plants yet.
                                    </p>
                                </div>

                                {/* Account Details */}
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h2 className="text-lg font-semibold text-gray-700 mb-4">
                                        Account Details
                                    </h2>
                                    <div className="space-y-2">
                                        <p className="text-gray-600">
                                            <span className="font-medium">
                                                Email:
                                            </span>{" "}
                                            {auth.user.email}
                                        </p>
                                        {auth.user.created_at && (
                                            <p className="text-gray-600">
                                                <span className="font-medium">
                                                    Member since:
                                                </span>{" "}
                                                {new Date(
                                                    auth.user.created_at
                                                ).toLocaleDateString()}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="mt-8">
                                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                                    Quick Actions
                                </h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                                        Browse Plants
                                    </button>
                                    <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                                        View Orders
                                    </button>
                                    <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                                        Edit Profile
                                    </button>
                                    <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                                        Contact Support
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

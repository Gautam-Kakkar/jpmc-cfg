import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const menuItems = [
        { name: 'Home', hasSubmenu: false },
        { name: 'About', hasSubmenu: false },
        { name: 'Pages', hasSubmenu: false },
        { name: 'Donation', hasSubmenu: false },
        { name: 'Contact', hasSubmenu: false },
    ];

    const NavItem = ({ item }) => {
        if (!item.hasSubmenu) {
            return (
                <a className="hover:text-orange-500" href="#">
                    {item.name}
                </a>
            );
        }

        return (
            <div className="group relative cursor-pointer flex items-center">
                {item.name}
                <i className="fas fa-chevron-down ml-1 text-xs"></i>
                <div className="absolute top-full left-0 mt-1 bg-[#1a202e] rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity text-xs py-2 w-28">
                    <a className="block px-4 py-1 hover:text-orange-500" href="#">
                        Submenu 1
                    </a>
                    <a className="block px-4 py-1 hover:text-orange-500" href="#">
                        Submenu 2
                    </a>
                </div>
            </div>
        );
    };

    const handleParentLoginSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    };

    return (
        <div
            className="bg-[#1a202e] text-white overflow-x-hidden min-h-screen"
            style={{ fontFamily: '"Poppins", sans-serif' }}
        >
            {/* Header */}
            <header className="flex justify-center items-center gap-8 px-6 md:px-12 py-4 relative z-20">
                <div className="relative w-[140px] h-[60px]"></div>
                <nav className="hidden md:flex space-x-6 text-sm font-semibold text-white">
                    {menuItems.map((item, index) => (
                        <NavItem key={index} item={item} />
                    ))}
                </nav>
                <div className="hidden md:flex items-center space-x-4"></div>
            </header>

            {/* Main Content */}
            <main className="relative overflow-hidden">
                <div className="flex flex-col md:flex-row items-center md:items-stretch max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
                    {/* Left Content */}
                    <div className="md:w-1/2 relative z-10">
                        <p className="text-[10px] text-[#ff5f00] font-semibold mb-2 tracking-wide">
                            <i className="fas fa-heart mr-1"></i>
                            Let's set the Milestone Together
                        </p>
                        <h1
                            className="text-white text-[2.5rem] md:text-[3rem] leading-[1.1] font-bold mb-4"
                            style={{ fontFamily: '"Baloo 2", cursive' }}
                        >
                            For The Child &
                            <br />
                            Cause You Care About
                        </h1>
                        <p className="text-xs md:text-sm text-white/80 max-w-md mb-8">
                            Lets make a real impactful change into a child's life. Your support can help us provide education, healthcare, and a brighter future for children in need.
                        </p>
                    </div>

                    {/* Right Content - Parent Login */}
                    <div className="md:w-1/2 relative flex justify-center items-center">
                        <form
                            className="bg-[#2d3748] p-8 rounded-lg shadow-lg w-full max-w-md text-white"
                            onSubmit={handleParentLoginSubmit}
                        >
                            <h2 className="text-2xl font-bold mb-6 text-[#ff6f00] text-center">
                                Parent Login
                            </h2>
                            <label className="block mb-2 text-sm font-semibold" htmlFor="parentMobile">
                                Mobile Number
                            </label>
                            <input
                                id="parentMobile"
                                name="parentMobile"
                                type="tel"
                                required
                                placeholder="Enter your Mobile Number"
                                className="w-full px-4 py-2 mb-6 rounded bg-[#1a202e] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <label className="block mb-2 text-sm font-semibold" htmlFor="parentPassword">
                                Password
                            </label>
                            <input
                                id="parentPassword"
                                name="parentPassword"
                                type="password"
                                required
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 mb-4 rounded bg-[#1a202e] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#ff5f00] to-[#ff6f00] py-2 rounded-full text-white font-semibold hover:brightness-110 transition"
                            >
                                Login
                            </button>
                            <Link to="/admin" className="block mt-4 text-sm text-center text-orange-400 hover:underline">
                                Are you an admin? Click here
                            </Link>
                            <Link to="/signup" className="block mt-2 text-sm text-center text-orange-400 hover:underline">
                                Signup as a Parent
                            </Link>
                        </form>
                    </div>
                </div>
            </main>

            {/* Visitor Upload Section */}
            <section className="bg-[#2d3748] text-white py-12 px-6 md:px-12">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-orange-400">Seen a child in need?</h2>
                    <p className="text-sm text-white/80 mb-8">
                        Upload a photo and a short message. Our NGO partners will review and take action.
                    </p>

                    <form
                        className="bg-[#1a202e] p-6 rounded-lg shadow-md"
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert('Image submitted for NGO review.');
                        }}
                    >
                        <div className="mb-4 text-left">
                            <label htmlFor="childImage" className="block mb-1 text-sm font-semibold">
                                Upload Image of the Child
                            </label>
                            <input
                                type="file"
                                id="childImage"
                                accept="image/*"
                                required
                                className="w-full px-4 py-2 rounded bg-[#2d3748] border border-gray-600 text-white"
                            />
                        </div>

                        {/* New phone number field */}
                        <div className="mb-4 text-left">
                            <label htmlFor="uploaderPhone" className="block mb-1 text-sm font-semibold">
                                Your Phone Number
                            </label>
                            <input
                                type="tel"
                                id="uploaderPhone"
                                name="uploaderPhone"
                                required
                                placeholder="Enter your phone number"
                                className="w-full px-4 py-2 rounded bg-[#2d3748] border border-gray-600 text-white"
                            />
                        </div>

                        <div className="mb-6 text-left">
                            <label htmlFor="message" className="block mb-1 text-sm font-semibold">
                                Additional Message (Optional)
                            </label>
                            <textarea
                                id="message"
                                rows="3"
                                placeholder="Write a short message..."
                                className="w-full px-4 py-2 rounded bg-[#2d3748] border border-gray-600 text-white"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-gradient-to-r from-[#ff5f00] to-[#ff6f00] px-6 py-2 rounded-full font-semibold hover:brightness-110 transition"
                        >
                            Submit to NGO
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Home;
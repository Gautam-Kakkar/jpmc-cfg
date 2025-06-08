    import React from 'react';
    import { Link, useNavigate } from 'react-router-dom';

    const Home = () => {
    const navigate = useNavigate();

    const menuItems = [
        { name: 'Home', hasSubmenu: false },
        { name: 'About', hasSubmenu: false },
        // { name: 'Pages', hasSubmenu: false },
        { name: 'Donation', hasSubmenu: false },
        { name: 'Contact', hasSubmenu: false },
    ];

    const NavItem = ({ item }) => {
        if (!item.hasSubmenu) {
        return (
            <a className="hover:text-[#ff5f00]" href="#">
            {item.name}
            </a>
        );
        }

        return (
        <div className="group relative cursor-pointer flex items-center">
            {item.name}
            <i className="fas fa-chevron-down ml-1 text-xs"></i>
            <div className="absolute top-full left-0 mt-1 bg-[#f9fafb] rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity text-xs py-2 w-28">
            <a className="block px-4 py-1 hover:text-[#ff5f00]" href="#">
                Submenu 1
            </a>
            <a className="block px-4 py-1 hover:text-[#ff5f00]" href="#">
                Submenu 2
            </a>
            </div>
        </div>
        );
    };

    const handleParentLoginSubmit = async (e) => {
        e.preventDefault();
        const phone = e.target.parentMobile.value;
        const password = e.target.parentPassword.value;

        try {
        const res = await fetch('http://localhost:5000/api/parents/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone, password }),
        });

        const data = await res.json();

        if (res.ok) {
            alert('Login successful!');
            navigate('/dashboard');
        } else {
            alert(data.message || 'Login failed');
        }
        } catch (error) {
        alert('Something went wrong. Please try again later.');
        }
    };

    return (
        <div
        className="bg-white text-[#1a202e] overflow-x-hidden min-h-screen"
        style={{ fontFamily: '"Poppins", sans-serif' }}
        >
        {/* Header */}
        <header className="flex justify-center items-center gap-8 px-6 md:px-12 py-4 relative z-20 bg-white shadow-sm">
            <div className="relative w-[140px] h-[60px]"></div>
            <nav className="hidden md:flex space-x-6 text-sm font-semibold">
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
                className="text-[#1a202e] text-[2.5rem] md:text-[3rem] leading-[1.1] font-bold mb-4"
                style={{ fontFamily: '"Baloo 2", cursive' }}
                >
                For The Child &<br />
                Cause You Care About
                </h1>
                <p className="text-xs md:text-sm text-[#1a202e]/80 max-w-md mb-8">
                Lets make a real impactful change into a child's life. Your support can help us provide education, healthcare, and a brighter future for children in need.
                </p>
            </div>

            {/* Right Content - Parent Login */}
            <div className="md:w-1/2 relative flex justify-center items-center">
                <form
                className="bg-[#f9fafb] p-8 rounded-lg shadow-lg w-full max-w-md text-[#1a202e] border"
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
                    className="w-full px-4 py-2 mb-6 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                    className="w-full px-4 py-2 mb-4 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#ff5f00] to-[#ff6f00] py-2 rounded-full text-white font-semibold hover:brightness-110 transition"
                >
                <Link to="/dashboard" className="block mt-4 text-sm text-center text-white-500 hover:underline">
                    Login
                </Link>
                </button>
                <Link to="/admin" className="block mt-4 text-sm text-center text-orange-500 hover:underline">
                    Are you an admin? Click here
                </Link>
                <Link to="/signup" className="block mt-2 text-sm text-center text-orange-500 hover:underline">
                    Signup as a Parent
                </Link>
                </form>
            </div>
            </div>
        </main>

        {/* Visitor Upload Section */}
        <section className="bg-[#f9fafb] text-[#1a202e] py-12 px-6 md:px-12 border-t">
            <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#ff5f00]">Seen a child in need?</h2>
            <p className="text-sm text-[#1a202e]/80 mb-8">
                Upload a photo and a short message. Our NGO partners will review and take action.
            </p>

            <form
                className="bg-white p-6 rounded-lg shadow-md border"
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
                    className="w-full px-4 py-2 rounded bg-[#f9fafb] border border-gray-300 text-[#1a202e]"
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
                    className="w-full px-4 py-2 rounded bg-[#f9fafb] border border-gray-300 text-[#1a202e]"
                ></textarea>
                </div>
                <div className="mb-6 text-left">
                <label htmlFor="landmark" className="block mb-1 text-sm font-semibold">
                    Nearby Landmark or Address
                </label>
                <textarea
                    id="landmark"
                    rows="1"
                    placeholder="Write a short message..."
                    className="w-full px-4 py-2 rounded bg-[#f9fafb] border border-gray-300 text-[#1a202e]"
                ></textarea>
                </div>
                <button
                type="submit"
                className="bg-gradient-to-r from-[#ff5f00] to-[#ff6f00] px-6 py-2 rounded-full font-semibold text-white hover:brightness-110 transition"
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

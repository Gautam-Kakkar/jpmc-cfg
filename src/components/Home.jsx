    import React from 'react';

    const Home = () => {
    const menuItems = [
        { name: 'Home', hasSubmenu: true },
        { name: 'About', hasSubmenu: true },
        { name: 'Pages', hasSubmenu: true },
        { name: 'Donation', hasSubmenu: true },
        { name: 'Event', hasSubmenu: true },
        { name: 'Blog', hasSubmenu: true },
        { name: 'Contact', hasSubmenu: false }
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

    return (
        <div className="bg-[#1a202e] text-white overflow-x-hidden min-h-screen" style={{ fontFamily: '"Poppins", sans-serif' }}>

        {/* Header */}
        <header className="flex items-center justify-between px-6 md:px-12 py-4 relative z-20">
            <div className="relative w-[140px] h-[60px]">
            <img 
                alt="Charitics logo with heart icon in orange and black text on white irregular shape background" 
                className="absolute top-0 left-0 w-full h-full object-contain" 
                height="60" 
                src="ummang/assests/logo.png" 
                width="140"
            />
            </div>
            
            <nav className="hidden md:flex space-x-6 text-sm font-semibold text-white">
            {menuItems.map((item, index) => (
                <NavItem key={index} item={item} />
            ))}
            </nav>
            
            <div className="hidden md:flex items-center space-x-4">
            <button 
                aria-label="Search" 
                className="text-white hover:text-orange-500 focus:outline-none"
            >
                <i className="fas fa-search"></i>
            </button>
            <button className="flex items-center bg-gradient-to-r from-[#ff5f00] to-[#ff6f00] rounded-full px-5 py-2 text-white text-sm font-semibold hover:brightness-110 transition">
                <i className="fas fa-angle-double-right mr-2"></i>
                Join With us
            </button>
            </div>
        </header>

        {/* Main Content */}
        <main className="relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center md:items-stretch max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
            <div className="md:w-1/2 relative z-10">
                <p className="text-[10px] text-[#ff5f00] font-semibold mb-2 tracking-wide">
                <i className="fas fa-heart mr-1"></i>
                Change The World Together
                </p>
                <h1 
                className="text-white text-[2.5rem] md:text-[3rem] leading-[1.1] font-bold mb-4" 
                style={{ lineHeight: 1.1, fontFamily: '"Baloo 2", cursive' }}
                >
                For The People &amp;
                <br />
                Cause You Care About
                </h1>
                <p className="text-xs md:text-sm text-white/80 max-w-md mb-8">
                It is a long established fact that a reader will be distracted lorem the readable content of a page when looking at layout the point lorem established fact that it is a long established
                </p>
                <div className="flex items-center space-x-4">
                <button className="flex items-center bg-gradient-to-r from-[#ff5f00] to-[#ff6f00] rounded-full px-5 py-2 text-white text-xs md:text-sm font-semibold hover:brightness-110 transition">
                    <i className="fas fa-angle-double-right mr-2"></i>
                    Make Donation
                </button>
                <div className="flex items-center -space-x-3">
                    <img 
                    alt="Profile image of a smiling man with short hair and beard" 
                    className="w-8 h-8 rounded-full border-2 border-white" 
                    height="32" 
                    src="https://storage.googleapis.com/a1aa/image/76e899ca-a7e8-4e0f-14a9-82ead58f8bf8.jpg" 
                    width="32"
                    />
                    <img 
                    alt="Profile image of a woman with long hair smiling" 
                    className="w-8 h-8 rounded-full border-2 border-white" 
                    height="32" 
                    src="https://storage.googleapis.com/a1aa/image/b16b884c-5c5c-4c78-0e41-2905e1d29ef1.jpg" 
                    width="32"
                    />
                    <img 
                    alt="Profile image of a man with glasses and short hair" 
                    className="w-8 h-8 rounded-full border-2 border-white" 
                    height="32" 
                    src="https://storage.googleapis.com/a1aa/image/225c6be7-9751-4df1-c417-75ff74c0a2f1.jpg" 
                    width="32"
                    />
                    <div 
                    className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r from-[#ff5f00] to-[#ff6f00] text-[10px] font-semibold flex items-center justify-center text-black" 
                    title="2 million active donors"
                    >
                    2.M
                    </div>
                </div>
                <span className="text-xs text-white/80 font-semibold">
                    Active donors
                </span>
                </div>
            </div>
            
            <div className="md:w-1/2 relative">
                <div 
                className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-[150px_150px_0_150px] overflow-hidden border-4 border-[#ff5f00]" 
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                >
                <img 
                    alt="Close-up portrait of a woman wearing an orange headscarf with a group of people in orange headscarves blurred in the background" 
                    className="w-full h-full object-cover" 
                    height="400" 
                    src="https://storage.googleapis.com/a1aa/image/2d7c9328-dd9d-4bf4-d871-765e05616cfc.jpg" 
                    width="400"
                />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#1a202e] to-transparent pointer-events-none">
                </div>
            </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-6 pb-12 opacity-20 pointer-events-none">
            <img 
                alt="Silhouette of a raised hand in dark purple" 
                className="w-10 h-15 object-contain" 
                height="60" 
                src="https://storage.googleapis.com/a1aa/image/3cc2dea0-fd8c-4883-501d-ff464df3a594.jpg" 
                width="40"
            />
            <img 
                alt="Silhouette of a raised hand in dark yellow" 
                className="w-10 h-15 object-contain" 
                height="60" 
                src="https://storage.googleapis.com/a1aa/image/d149b40a-42c9-4785-a103-caa7853179cc.jpg" 
                width="40"
            />
            <img 
                alt="Silhouette of a raised hand in dark red" 
                className="w-10 h-15 object-contain" 
                height="60" 
                src="https://storage.googleapis.com/a1aa/image/e0746537-4805-4991-a580-078bff979fd4.jpg" 
                width="40"
            />
            <img 
                alt="Silhouette of a raised hand in dark blue" 
                className="w-10 h-15 object-contain" 
                height="60" 
                src="https://storage.googleapis.com/a1aa/image/55560626-cf4c-442f-1d71-a0bc3e4bd776.jpg" 
                width="40"
            />
            </div>
        </main>
        </div>
    );
    };

    export default Home;
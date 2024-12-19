import React, { useState } from 'react';
import { Menu, Search, Home, Users, Hexagon, TrendingUp, History, Wallet, Bell, HelpCircle, Settings, Info } from 'lucide-react';
import { LineChart, Line, XAxis } from 'recharts';

const TradingDashboard = () => {
    const [activeTab, setActiveTab] = useState('NBST');
    const chartData = [
        { name: 'Mon', value: 0.35 },
        { name: 'Tue', value: 0.45 },
        { name: 'Wed', value: 0.40 },
        { name: 'Thu', value: 0.50 },
        { name: 'Fri', value: 0.62 },
        { name: 'Sat', value: 0.55 },
        { name: 'Sun', value: 0.58 }
    ];

    return (
        <div className="flex min-h-screen bg-[#171717]">
            {/* Sidebar */}
            <div className="w-64 bg-[#0A0A0A] p-4 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                    <Menu className="h-6 w-6 text-gray-400" />
                </div>

                <div className="relative mb-6">
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-[#171717] pl-10 pr-4 py-2 rounded-lg text-gray-400 focus:outline-none"
                    />
                </div>

                <nav className="space-y-2">
                    <NavItem icon={<Home />} text="Home" active />
                    <NavItem icon={<Users />} text="Organization" />
                    <NavItem icon={<Hexagon />} text="Assets" />
                    <NavItem icon={<TrendingUp />} text="Trade" />
                    <NavItem icon={<History />} text="History" />
                    <NavItem icon={<Wallet />} text="Wallet" />
                </nav>

                <div className="mt-auto space-y-2">
                    <NavItem icon={<Bell />} text="Notifications" badge="12" />
                    <NavItem icon={<HelpCircle />} text="Support" />
                    <NavItem icon={<Settings />} text="Settings" />

                    <div className="flex items-center p-2 mt-4">
                        <img src="/api/placeholder/40/40" alt="Profile" className="w-10 h-10 rounded-full" />
                        <div className="ml-3">
                            <p className="text-sm text-white">Brooklyn Simmons</p>
                            <p className="text-xs text-gray-500">brooklyn@simmons.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8">
                <header className="mb-8">
                    <h1 className="text-2xl text-white">
                        Hello, <span className="text-[#22C55E]">Brooklyn Simmons</span> 👋
                    </h1>
                    <p className="text-gray-400">Welcome to <span className="text-[#22C55E]">Spot trading</span>!</p>
                </header>

                <div className="grid grid-cols-3 gap-6">
                    {/* Market Overview */}
                    <div className="bg-[#0A0A0A] rounded-xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-white">Market Overview</h2>
                            <div className="flex space-x-2">
                                {['NBST', 'EFT', 'WPCT', 'RET', 'WET'].map((tab) => (
                                    <button
                                        key={tab}
                                        className={`px-2 py-1 text-sm rounded ${activeTab === tab ? 'text-white' : 'text-gray-500'
                                            }`}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="h-40">
                            <LineChart width={300} height={160} data={chartData}>
                                <XAxis dataKey="name" hide />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#22C55E"
                                    strokeWidth={2}
                                    dot={false}
                                />
                            </LineChart>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                            <span className="text-gray-400 text-sm">Get in depth charts in Trade</span>
                            <button className="bg-[#22C55E] px-4 py-1.5 rounded-lg text-white text-sm">
                                Trade
                            </button>
                        </div>
                    </div>

                    {/* Wallet Balance */}
                    <div className="bg-[#0A0A0A] rounded-xl p-6">
                        <h2 className="text-white mb-6">Wallet Balance</h2>
                        <div className="relative w-40 h-40 mx-auto mb-6">
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    fill="none"
                                    stroke="#22C55E"
                                    strokeWidth="10"
                                    strokeDasharray="283"
                                    strokeDashoffset="70"
                                />
                            </svg>
                        </div>

                        <div className="space-y-2">
                            <BalanceItem token="USDT" amount="300.58" color="#22C55E" />
                            <BalanceItem token="NBST" amount="270.72" color="#22C55E" />
                            <BalanceItem token="EFT" amount="203.04" color="#22C55E" />
                            <BalanceItem token="WET" amount="328.76" color="#22C55E" />
                        </div>

                        <button className="w-full bg-[#22C55E] py-2 rounded-lg text-white mt-4">
                            Manage Wallet
                        </button>
                    </div>

                    {/* Recent Posts */}
                    <div className="bg-[#0A0A0A] rounded-xl p-6">
                        <h2 className="text-white mb-4">In recent posts</h2>
                        <div className="bg-[#171717] rounded-xl p-4">
                            <div className="flex space-x-3">
                                <img src="/api/placeholder/48/48" alt="Carbon Cell" className="w-12 h-12 rounded-full" />
                                <div>
                                    <h3 className="text-white font-bold flex items-center">
                                        Carbon Cell
                                        <span className="ml-1 text-gray-400 text-sm">@carboncell</span>
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">
                                        Carbon Cell: Pioneering Financial Solutions for a Greener Future!
                                    </p>
                                </div>
                            </div>
                            <button className="w-full bg-[#22C55E] py-2 rounded-lg text-white mt-4">
                                Follow us on X
                            </button>
                        </div>
                    </div>
                </div>

                {/* Assets */}
                <div className="mt-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-white">Assets</h2>
                        <span className="text-gray-400">Today</span>
                    </div>

                    <div className="grid grid-cols-5 gap-4">
                        <AssetCard
                            symbol="NBST"
                            name="Nature Based Solution Token"
                            price="0.72"
                            change="+11.01"
                            color="green"
                        />
                        <AssetCard
                            symbol="EFT"
                            name="Energy Efficiency Token"
                            price="0.36"
                            change="+9.15"
                            color="green"
                        />
                        <AssetCard
                            symbol="WPCT"
                            name="Waste Management and Plastic Credits Token"
                            price="1.20"
                            change="+11.01"
                            color="green"
                        />
                        <AssetCard
                            symbol="RET"
                            name="Renewable Energy Token"
                            price="0.46"
                            change="-5.56"
                            color="yellow"
                        />
                        <AssetCard
                            symbol="WET"
                            name="Water Token"
                            price="0.48"
                            change="-1.48"
                            color="blue"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const NavItem = ({ icon, text, active, badge }) => (
    <div className={`flex items-center p-2 rounded-lg cursor-pointer ${active ? 'text-white bg-[#22C55E]' : 'text-gray-400 hover:bg-[#171717]'
        }`}>
        {React.cloneElement(icon, { size: 20 })}
        <span className="ml-3">{text}</span>
        {badge && (
            <span className="ml-auto bg-[#22C55E] px-2 py-0.5 rounded-full text-xs text-white">
                {badge}
            </span>
        )}
    </div>
);

const BalanceItem = ({ token, amount, color }) => (
    <div className="flex justify-between items-center">
        <span className="text-gray-400">{token}</span>
        <span className="text-white">${amount}</span>
    </div>
);

const AssetCard = ({ symbol, name, price, change, color }) => (
    <div className="bg-[#0A0A0A] p-4 rounded-xl">
        <div className="flex items-start space-x-3">
            <div className={`w-8 h-8 rounded-full bg-${color}-500 flex-shrink-0`} />
            <div>
                <div className="flex items-center">
                    <h3 className="text-white font-bold">{symbol}</h3>
                    <Info className="w-4 h-4 text-gray-400 ml-2" />
                </div>
                <p className="text-gray-400 text-xs mt-1">{name}</p>
            </div>
        </div>

        <div className="flex justify-between items-center mt-4">
            <div>
                <p className="text-white font-bold">{price}$</p>
                <p className={`text-sm ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                    }`}>
                    {change}%
                </p>
            </div>
            <button className={`px-4 py-1 rounded-lg bg-${color}-500 text-white text-sm`}>
                Trade
            </button>
        </div>
    </div>
);

export default TradingDashboard;
import React from 'react';

const Chats: React.FC = () => {
    const chats = [
        { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', time: '2:30 PM', unread: 2 },
        { id: 2, name: 'Jane Smith', lastMessage: 'Thanks for the help!', time: '1:15 PM', unread: 0 },
        { id: 3, name: 'Team Group', lastMessage: 'Meeting at 3 PM', time: '12:45 PM', unread: 5 },
    ];

    return (
        <div className="container mx-auto">
            {/* Page Header */}
            <div className="mb-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold">Chats</h1>
                        <p className="text-base-content/70 mt-1">Manage your conversations</p>
                    </div>
                    <button className="btn btn-primary">
                        <span className="mr-2">➕</span>
                        New Chat
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="stat bg-base-100 shadow rounded-lg">
                    <div className="stat-figure text-primary">
                        <span className="text-2xl">💬</span>
                    </div>
                    <div className="stat-title">Total Chats</div>
                    <div className="stat-value text-primary">25</div>
                    <div className="stat-desc">↗︎ 5 new today</div>
                </div>

                <div className="stat bg-base-100 shadow rounded-lg">
                    <div className="stat-figure text-secondary">
                        <span className="text-2xl">📨</span>
                    </div>
                    <div className="stat-title">Unread Messages</div>
                    <div className="stat-value text-secondary">12</div>
                    <div className="stat-desc">↗︎ 3 new</div>
                </div>

                <div className="stat bg-base-100 shadow rounded-lg">
                    <div className="stat-figure text-accent">
                        <span className="text-2xl">👥</span>
                    </div>
                    <div className="stat-title">Active Users</div>
                    <div className="stat-value text-accent">8</div>
                    <div className="stat-desc">online now</div>
                </div>
            </div>

            {/* Chat List */}
            <div className="card bg-base-100 shadow-xl">
                <div className="card-header">
                    <h2 className="card-title p-4">Recent Conversations</h2>
                </div>
                <div className="card-body p-0">
                    {chats.map((chat) => (
                        <div key={chat.id} className="flex items-center p-4 hover:bg-base-200 border-b border-base-300 cursor-pointer transition-colors">
                            <div className="avatar placeholder mr-3">
                                <div className="bg-neutral text-neutral-content rounded-full w-12">
                                    <span className="text-lg">{chat.name.charAt(0)}</span>
                                </div>
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-semibold truncate">{chat.name}</h3>
                                    <span className="text-sm text-base-content/70 whitespace-nowrap ml-2">{chat.time}</span>
                                </div>
                                <p className="text-base-content/70 truncate mt-1">{chat.lastMessage}</p>
                            </div>

                            {chat.unread > 0 && (
                                <div className="badge badge-primary ml-2">{chat.unread}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Chats;

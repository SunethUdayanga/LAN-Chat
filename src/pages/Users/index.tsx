import React from 'react';

const Users: React.FC = () => {
    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
        { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'Moderator', status: 'Inactive' },
        { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Active' },
    ];

    const getRoleBadgeClass = (role: string) => {
        switch (role) {
            case 'Admin': return 'badge-error';
            case 'Moderator': return 'badge-warning';
            default: return 'badge-info';
        }
    };

    const getStatusBadgeClass = (status: string) => {
        return status === 'Active' ? 'badge-success' : 'badge-ghost';
    };

    return (
        <div className="container mx-auto">
            {/* Page Header */}
            <div className="mb-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold">Users</h1>
                        <p className="text-base-content/70 mt-1">Manage system users and permissions</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="btn btn-outline">
                            <span className="mr-2">📤</span>
                            Export
                        </button>
                        <button className="btn btn-primary">
                            <span className="mr-2">➕</span>
                            Add User
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="stat bg-base-100 shadow rounded-lg">
                    <div className="stat-title">Total Users</div>
                    <div className="stat-value text-primary">127</div>
                    <div className="stat-desc">↗︎ 12 this month</div>
                </div>

                <div className="stat bg-base-100 shadow rounded-lg">
                    <div className="stat-title">Active Users</div>
                    <div className="stat-value text-success">89</div>
                    <div className="stat-desc">70% of total</div>
                </div>

                <div className="stat bg-base-100 shadow rounded-lg">
                    <div className="stat-title">Admins</div>
                    <div className="stat-value text-warning">5</div>
                    <div className="stat-desc">4% of total</div>
                </div>

                <div className="stat bg-base-100 shadow rounded-lg">
                    <div className="stat-title">New Today</div>
                    <div className="stat-value text-info">3</div>
                    <div className="stat-desc">↗︎ 2 more than yesterday</div>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="card bg-base-100 shadow-sm mb-6">
                <div className="card-body p-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="form-control flex-1">
                            <input
                                type="text"
                                placeholder="Search users..."
                                className="input input-bordered w-full"
                            />
                        </div>
                        <div className="flex gap-2">
                            <select className="select select-bordered">
                                <option>All Roles</option>
                                <option>Admin</option>
                                <option>Moderator</option>
                                <option>User</option>
                            </select>
                            <select className="select select-bordered">
                                <option>All Status</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Users Table */}
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body p-0">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id} className="hover">
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar placeholder">
                                                    <div className="bg-neutral text-neutral-content rounded-full w-10">
                                                        <span className="text-sm">{user.name.charAt(0)}</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{user.name}</div>
                                                    <div className="text-sm opacity-50">ID: {user.id}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{user.email}</td>
                                        <td>
                                            <span className={`badge ${getRoleBadgeClass(user.role)}`}>
                                                {user.role}
                                            </span>
                                        </td>
                                        <td>
                                            <span className={`badge ${getStatusBadgeClass(user.status)}`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="flex gap-2">
                                                <button className="btn btn-ghost btn-xs">Edit</button>
                                                <button className="btn btn-ghost btn-xs text-error">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
                <div className="join">
                    <button className="join-item btn">«</button>
                    <button className="join-item btn btn-active">1</button>
                    <button className="join-item btn">2</button>
                    <button className="join-item btn">3</button>
                    <button className="join-item btn">»</button>
                </div>
            </div>
        </div>
    );
};

export default Users;

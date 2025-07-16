import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Read = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const res = await axios.get("http://localhost:3008/users");
            setUsers(res.data)
        } catch (error) {
            console.error("Fetch Error", error)

        }
    }

    useEffect(() => {
        fetchUsers();

    }, [])

    const deleteUser = async (id) => {
        if (window.confirm("Are You Sure You Want To Delete This User")) {
            try {
                await axios.delete(`http://localhost:3008/users/${id}`);
                fetchUsers();

            } catch (error) {
                console.error("Delete Error:", error.message)
            }
        }
    }




    return (
        <div className="max-w-4xl mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4 text-center"> All Users</h2>
            <div className="overflow-x-auto">
                <table className="w-full table-auto border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Email</th>
                            <th className="px-4 py-2 border">Age</th>
                            <th className="px-4 py-2 border">Created At</th>
                            <th className="px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user) => (
                                <tr key={user._id}>
                                    <td className="px-4 py-2 border">{user.name}</td>
                                    <td className="px-4 py-2 border">{user.email}</td>
                                    <td className="px-4 py-2 border">{user.age}</td>
                                    <td className="px-4 py-2 border">{new Date(user.Record_time).toLocaleString()}</td>
                                    <td className="px-4 py-2 border text-center">
                                        <button
                                            onClick={() => deleteUser(user._id)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))

                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center py-4">No Users Found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>


        </div>
    )
}

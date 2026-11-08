import React from 'react';
import UserCard from './UserCard';

const getUsers = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    return res.json();
}
const TheLibrary = async () => {
    const users = await getUsers();
    
    return (
        <div>
            <h2>Users: {users.length}</h2>
            
                <div className="grid grid-cols-3 gap-4">
                    {users.map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            )
            {/* {users.map((user) => (
                <div key={user.id}>
                    <UserCard user={user} />
                </div>
            ))} */}
        </div>
    );
};

export default TheLibrary;
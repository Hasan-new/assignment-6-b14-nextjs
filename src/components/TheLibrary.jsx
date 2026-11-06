import React from 'react';
import UserCard from './UserCard';

const getUsers = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    return res.json();
}
const TheLibrary = async () => {
    const users = await getUsers();
    // const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    // const users = await res.json();
    // console.log(users);
    return (
        <div>
            <h2>Users: {users.length}</h2>
            
                <div>
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
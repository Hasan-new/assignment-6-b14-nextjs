import React from "react";

const UserCard = ({ user }) => {
  return (
    <div>
      <div className="card card-border bg-base-100 w-96 ">
        <div className="card-body">
          <h2 className="card-title">{user.name}</h2>
          <img src={user.image} alt='' className="w-full  " />
          <h5>{user.muscleGroups}</h5>
          <p>
            {user.description}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">User Detail</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

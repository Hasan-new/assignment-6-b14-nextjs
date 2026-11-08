import React from "react";

const UserCard = ({ user }) => {
  return (
    <div>
      <div className="card card-border bg-base-100 w-96">
        <div className="card-body">
          <img src={user.image} alt={user.name} className="w-full" />

          <div className="flex gap-2">
            {user.muscleGroups.map((muscle, index) => (
              <span
                key={index}
                className="bg-[#C2F800] text-black px-3 py-1 rounded-full text-xs font-bold uppercase"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h2 className="card-title">{user.name}</h2>

          <p className="text-sm text-slate-400">{user.equipment}</p>

          {/* Workout Information */}
          <div className="flex items-center justify-between">
            {/* Duration */}
            <div className="flex items-center gap-1">
              <span>◯</span>
              <span className="text-xs text-slate-400">
                {user.duration} min
              </span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1">
              <span>🔥</span>
              <span className="text-xs text-slate-400">
                {user.caloriesBurned} kcal
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1">
              <span>☆</span>
              <span className="text-xs text-slate-400">{user.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

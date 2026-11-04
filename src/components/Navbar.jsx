import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        {/* color #c2f800 
        font-size:12
        highlighted)
        */}
        <Link href={"/workout"}>Workout</Link>
      </li>
      <li>
        <Link href={"/my-plan"}>My Plan</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl" href={"/"}>
            Fit Logo
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        {/* <div className="navbar-end">
          <Link className="btn" href="/login">
            Login
          </Link>
        </div> */}

        <div className="navbar-end gap-2">
          <Link href="/my-plan" className="btn btn-outline btn-sm sm:btn-md">
            Plan
            <span className="badge badge-success badge-sm">0</span>
          </Link>

          <Link href="/my-plan" className="btn btn-success btn-sm sm:btn-md">
            Saved
            <span className="badge badge-base-100 badge-sm text-success">
              0
            </span>
          </Link>
        </div>


      </div>
    </div>
  );
};

export default Navbar;

// Chat Gpt Navbar

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";

// const Navbar = () => {
//   const pathname = usePathname();

//   const [planCount, setPlanCount] = useState(0);
//   const [savedCount, setSavedCount] = useState(0);

//   const navLinks = [
//     { name: "Workouts", href: "/workouts" },
//     { name: "My Plan", href: "/my-plan" },
//   ];

//   return (
//     <header className="sticky top-0 z-50 border-b border-base-300 bg-base-100">
//       <div className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//         {/* Left: Logo */}
//         <div className="navbar-start">
//           <Link
//             href="/"
//             className="text-2xl font-extrabold tracking-tight text-success"
//           >
//             Fit<span className="text-base-content">Flow</span>
//           </Link>
//         </div>

//         {/* Middle: Navigation */}
//         <div className="navbar-center hidden md:flex">
//           <ul className="menu menu-horizontal gap-2 px-1">
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <Link
//                   href={link.href}
//                   className={
//                     pathname === link.href
//                       ? "font-bold text-success"
//                       : "font-medium"
//                   }
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Right: Plan and Saved */}
//         <div className="navbar-end gap-2">
//           <Link
//             href="/my-plan"
//             className="btn btn-outline btn-sm sm:btn-md"
//           >
//             Plan
//             <span className="badge badge-success badge-sm">
//               {planCount}
//             </span>
//           </Link>

//           <Link
//             href="/saved"
//             className="btn btn-success btn-sm sm:btn-md"
//           >
//             Saved
//             <span className="badge badge-base-100 badge-sm text-success">
//               {savedCount}
//             </span>
//           </Link>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <div className="flex justify-center border-t border-base-300 md:hidden">
//         <ul className="menu menu-horizontal gap-4 px-2 py-2">
//           {navLinks.map((link) => (
//             <li key={link.href}>
//               <Link
//                 href={link.href}
//                 className={
//                   pathname === link.href
//                     ? "font-bold text-success"
//                     : "font-medium"
//                 }
//               >
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

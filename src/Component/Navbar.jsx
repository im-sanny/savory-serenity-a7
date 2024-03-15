import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className=" lg:flex justify-around items-center bg-base-100">
        <div className="">
          <h2 className="text-3xl font-bold">Savory Serenity</h2>
        </div>
        <div className="flex flex-col">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className=" flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 h-9 md:w-auto"
          />
          <div role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Avatar"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="hero h-[400px] rounded-xl  my-10"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(21, 11, 43, 0.90) 0%, rgba(21, 11, 43, 0.00) 100%), url(./src/assets/Rectangle1.png)",
          //   backgroundPosition: "0px -18.896px",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-content text-center text-white">
          <div className=" mx-auto">
            <h1 className="mb-5 text-4xl font-bold">
              Discover an exceptional cooking class <br /> tailored for you!
            </h1>
            <p className="mb-5">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ <br />
              coding problems to become an exceptionally well world-class
              Programmer.
            </p>
            <div className="flex justify-center gap-5">
              <button className="btn h-9 btn-sm outline-none bg-[#0BE58A] rounded-3xl">
                Explore Now
              </button>
              <button className="btn btn-sm h-9 btn-outline text-white rounded-full">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

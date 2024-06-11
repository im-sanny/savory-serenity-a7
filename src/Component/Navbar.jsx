import 'animate.css';

const Navbar = () => {
  return (
    <div>
      <div className=" lg:flex justify-around items-center bg-base-100">
        <div className="">
          <h2 className="text-3xl font-bold flex justify-center animate__animated animate__tada">Savory Serenity</h2>
        </div>
        <div className="flex justify-center">
          <ul className="menu menu-horizontal px-1">
            <li><a>Recipes</a></li>
            <li><a>Chefs</a></li>
            <li><a>Home</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <input type="text" placeholder="Search" className="input input-bordered w-24 h-9 md:w-auto"/>
          <div role="button" className="btn btn-ghost flex justify-center btn-circle avatar tooltip" data-tip="Profile">
            <div className="w-10 rounded-full bg-[#0BE58A] flex items-center">
            <img src="https://i.ibb.co/K5wbkxH/image.png" alt="image" border="0" />
            </div>
          </div>
        </div>
      </div>
    {/* banner */}
      <div
        className="hero lg:h-[400px] rounded-xl  my-10"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(21, 11, 43, 0.90) 0%, rgba(21, 11, 43, 0.00) 100%), url(https://i.ibb.co/Y2NtTwD/pexels-isabella-mendes-858508.jpg)",
            backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-content text-center text-white">
          <div className=" mx-auto">
            <h1 className="mb-5 text-2xl lg:text-4xl lg:w-[800px] font-bold">
              Discover an exceptional cooking class <br /> tailored for you!
            </h1>
            <div className="flex justify-center">
              <p className="mb-5 lg:w-[550px]">
                Explore personalized cooking classes designed just for you, offering an exceptional culinary journey. Uncover unique recipes and techniques with expert guidance.
              </p>
            </div>
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

import "./App.css";
import Cards from "./Component/Cards";
import Navbar from "./Component/Navbar";
import Table from "./Component/Table";

function App() {
  return (
    <>
      <div className="mx-32">
        <Navbar></Navbar>
        <div className="my-10 text-center ">
          <h2 className="text-4xl font-bold my-3">Our Recipes</h2>
          <div className=" flex justify-center">
            <h4 className="w-[900px]">
              Indulge in our exquisite recipe collection, meticulously crafted
              to tantalize your taste buds. From succulent steaks to decadent
              desserts, each dish promises a culinary journey that delights and
              satisfies every palate.
            </h4>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-7 space-y-4">
            <Cards></Cards>
            <Cards></Cards>
          </div>
          <div className="col-span-5">
            <Table></Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

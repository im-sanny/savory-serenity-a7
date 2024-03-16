import "./App.css";
import CardHeader from "./Component/CardHeader";
import CardIndex from "./Component/CardIndex";
import Navbar from "./Component/Navbar";
import Table from "./Component/Table";

function App() {
  
  return (
    <>
      <div className="mx-32">
        <Navbar></Navbar>
        <CardHeader></CardHeader>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-7 space-y-4">
            <CardIndex></CardIndex>
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

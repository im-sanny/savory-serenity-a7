import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import CardHeader from "./Component/CardHeader";
import CardIndex from "./Component/CardIndex";
import Navbar from "./Component/Navbar";
import Table from "./Component/Table";

function App() {
  const [card, setCard] = useState([]);

  const handleCourseSelect = (selectedCard) => {
    console.log(selectedCard);
    const alreadyExist = card.find(
      (c) => c.recipe_id === selectedCard.recipe_id
    );
    if (!alreadyExist) {
      setCard((prevCards) => [...prevCards, selectedCard]);
      toast.success("Item added successfully");
    } else {
      toast.warn("Item selected already");
    }
  };

  const handleDelete = (id) => {
    const newCard = card.filter((c) => c.recipe_id != id);
    setCard(newCard);
  };

  return (
    <>
      <div className=" mx-5 lg:mx-32">
        <Navbar></Navbar>
        <CardHeader></CardHeader>
        <div className="lg:grid grid-cols-12 gap-4">
          <div className="col-span-7 space-y-4">
            <CardIndex handleCourseSelect={handleCourseSelect}></CardIndex>
          </div>
          <div className="col-span-5">
            <Table card={card} handleDelete={handleDelete} />
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import CardHeader from "./Component/CardHeader";
import CardIndex from "./Component/CardIndex";
import Navbar from "./Component/Navbar";
import Table from "./Component/Table";

function App() {
  const [card, setCard] = useState([])
  // const handleCourseSelect = (card) => {
  //   console.log(card);
  //   const alreadyExist = card.find(c => c.id === card.id)
  //   if (!alreadyExist) setCard(c => [...c, card] );
  // }
  const handleCourseSelect = (selectedCard) => {
    console.log(selectedCard);
    const alreadyExist = card.find(c => c.recipe_id === selectedCard.id);
    if (!alreadyExist) setCard(prevCards => [...prevCards, selectedCard]);
}
  return (
    <>
      <div className="mx-32">
        <Navbar></Navbar>
        <CardHeader></CardHeader>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-7 space-y-4">
            <CardIndex handleCourseSelect={handleCourseSelect}></CardIndex>
          </div>
          <div className="col-span-5">
            <Table card={card}></Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

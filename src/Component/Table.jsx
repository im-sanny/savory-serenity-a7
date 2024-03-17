import { useState } from "react";

const Table = ({ card, handleDelete }) => {
  const [removed, setRemoved] = useState([]);

  const handlePrepare = (id) => {
    const removedItem = card.find((c) => c.recipe_id === id);
    setRemoved((prevRemoved) => [...prevRemoved, removedItem]);
    handleDelete(id);
  };

  return (
    <>
      <div className="table-sm rounded-xl table-zebra py-5 border">
        <div className="">
          <h1 className="text-2xl flex justify-center">
            Want to cook: {card.length}
          </h1>
        </div>
        <div className="divider mx-20"></div>
        <div className="overflow-x-auto">
          <table className="">
            {/* head */}
            <thead>
              <tr>
                <th>Item</th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody className="bg-base-200">
              {card.map((c, index) => (
                <tr key={c.id}>
                  <td>{index + 1}</td>
                  <td>{c.recipe_name}</td>
                  <td>{c.preparing_time}</td>
                  <td>{c.calories}</td>
                  <td>
                    <button
                      onClick={() => handlePrepare(c.recipe_id)}
                      className="btn btn-sm bg-[#0BE58A] rounded-full"
                    >
                      Prepare
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="divider"></div>
          <div className="my-5">
            <h1 className="text-2xl flex justify-center">
              Currently cooking: {removed.length}
            </h1>
          </div>
          <div className="divider mx-20 "></div>
          <table>
            {/* head */}
            <thead>
              <tr>
                <th>Item</th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {removed.map((c, index) => (
                <tr key={c.id}>
                  <td>{index + 1}</td>
                  <td>{c.recipe_name}</td>
                  <td>{c.preparing_time}</td>
                  <td>{c.calories}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="divider "></div>
          <div className="flex justify-start lg:justify-end ml-5 lg:mr-[72px]">
            Total time ={" "}
            {removed.reduce((p, c) => p + parseFloat(c.preparing_time), 0)} min
          </div>
          <br />
          <p className="flex justify-start lg:justify-end ml-5 lg:mr-3">
            Total Calories ={" "}
            {removed.reduce((p, c) => p + parseFloat(c.calories), 0)} calories
          </p>
        </div>
      </div>
    </>
  );
};

export default Table;

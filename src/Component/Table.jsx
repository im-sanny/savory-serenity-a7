const Table = ({ card }) => {
  return (
    <>
      <div className="table table-zebra py-5 border">
        <div className="">
          <h1 className="text-2xl flex justify-center">
            Want to cook: {card.length}
          </h1>
        </div>
        <div className="divider mx-20"></div>
        <div className="overflow-x-auto">
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
            <tbody className="bg-base-200">
              {card.map((c) => (
                <tr key={c}>
                  <th>{c.recipe_id}</th>
                  <td>{c.recipe_name}</td>
                  <td>{c.preparing_time}</td>
                  <td>{c.calories}</td>
                  <td>
                    {c.recipe_name && ( // Check if recipe_name is not empty
                      <button className="btn btn-sm rounded-full bg-[#0BE58A]">
                        Preparing
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="my-5">
            <h1 className="text-2xl flex justify-center">
              Currently cooking: 02
            </h1>
          </div>
          <div className="divider mx-20"></div>

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
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Chicken Caesar Salad</td>
                <td> 20 minutes</td>
                <td>400 calories</td>
                <td>
                  <button className="btn btn-sm rounded-full bg-[#0BE58A]">
                    Preparing
                  </button>
                </td>
              </tr>
              {/* row 2 */}
              <tr className=" rounded-full">
                <th>2</th>
                <td>Chicken Caesar Salad</td>
                <td>20 minutes</td>
                <td>400 calories</td>
                <td>
                  <button className="btn btn-sm rounded-full bg-[#0BE58A]">
                    Preparing
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="divider "></div>
          <div className="flex justify-end mr-10">
            {/* Total Time = {card.reduce((p , c) => p + c.preparing_time,0 )} */}
            Total time = {card.reduce((p, c) => p + parseFloat(c.preparing_time), 0)} min</div>
          <br />
          <p className="flex justify-end mr-10">
            Total Calories = {card.reduce((p, c) => p + parseFloat(c.calories), 0)} calories
          </p>
        </div>
      </div>
    </>
  );
};

export default Table;

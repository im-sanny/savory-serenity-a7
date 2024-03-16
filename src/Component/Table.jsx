const Table = () => {
  return (
    <>
      <div className="table table-zebra py-5 border">
        <div className="">
          <h1 className="text-2xl flex justify-center">Want to cook: 01</h1>
        </div>
        <div className="divider mx-20"></div>
        <div className="overflow-x-auto">
          <table>
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody className="bg-base-200">
              {/* row 1 */}
              <tr>
                <th>1</th>
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
                <th></th>
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
          <p className="flex justify-end mr-10">Total Time = 45 minutes</p>
          <br />
          <p className="flex justify-end mr-10">
            Total Calories = 1050 calories
          </p>
        </div>
      </div>
    </>
  );
};

export default Table;

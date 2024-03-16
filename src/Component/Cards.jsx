import { LuClock3 } from "react-icons/lu";
import { FaFire } from "react-icons/fa";

const Cards = ({ card, handleCourseSelect }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = card;
  return (
    <div>
      <div className="flex justify-between gap-4">
        <div className="card bg-base-100 border ">
          <figure className="p-4">
            <img
              src={recipe_image}
              className="rounded-xl min-w-full h-[200px]"
            />
          </figure>
          <div className=" p-4 ">
            <h2 className="card-title">{recipe_name}</h2>
            <p>{short_description}</p>
            <div className="divider"></div>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <div className="divider"></div>
            <div className="flex justify-between">
              <p className="flex items-center gap-3">
                <LuClock3 /> {preparing_time}
              </p>
              <p className="flex items-center gap-3">
                <FaFire /> {calories}
              </p>
            </div>
            <div className="card-actions">
              <button onClick={() => handleCourseSelect (card)} className="btn btn-sm rounded-full bg-[#0BE58A]">
                Want to cook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

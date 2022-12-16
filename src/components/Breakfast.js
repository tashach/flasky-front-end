import "./Breakfast.css";
import PropTypes from "prop-types";
import { useState } from "react";

const Breakfast = ({
  id,
  name,
  prepTime,
  rating,
  updateRating,
  deleteBreakfast,
}) => {
  const handleClick = () => {
    updateRating(id, rating + 1);
    console.log(`rating ${rating}`);
  };

  const [breakfastName, setBreakfastName] = useState(name);

  const handleChange = (event) => setBreakfastName(event.target.value);

  return (
    <div>
      <h2>{name}</h2>
      {/* <p>{description}</p> */}
      <p className="emphasizedText">Prep time: {prepTime} minutes</p>
      <p className="emphasizedText">Rating: {rating} ⭐️ </p>
      <p>Your {breakfastName} is delicious!</p>
      <form>
        <input onChange={handleChange} />
      </form>
      <button onClick={handleClick}>Change Rating</button>
      <button onClick={() => deleteBreakfast(id)}>Delete Breakfast</button>
    </div>
  );
};

Breakfast.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  prepTime: PropTypes.number.isRequired,
  updateRating: PropTypes.func.isRequired,
  deleteBreakfast: PropTypes.func.isRequired,
};

export default Breakfast;

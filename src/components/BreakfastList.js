import Breakfast from "./Breakfast";
import PropTypes from "prop-types";

const BreakfastList = (props) => {
  const breakfastData = props.breakfastData;
  const updateRating = props.updateRating;
  const deleteBreakfast = props.deleteBreakfast;

  const breakfastComponents = breakfastData.map((breakfast) => {
    return (
      <li key={breakfast.id}>
        <Breakfast
          key={breakfast.id}
          id={breakfast.id}
          name={breakfast.name}
          prepTime={breakfast.prep_time}
          rating={breakfast.rating}
          updateRating={updateRating}
          deleteBreakfast={deleteBreakfast}
        />
      </li>
    );
  });

  return <ul>{breakfastComponents}</ul>;
};

BreakfastList.propTypes = {
  breakfastData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      prep_time: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
  updateRating: PropTypes.func.isRequired,
  deleteBreakfast: PropTypes.func.isRequired,
};

export default BreakfastList;

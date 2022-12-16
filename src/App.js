import "./App.css";
import BreakfastList from "./components/BreakfastList";
import { useState, useEffect } from "react";
import axios from "axios";

// const INITIAL_BREAKFASTS = [
//   {
//     id: 1,
//     name: "Eggs Benedict",
//     description: "It's a lot of work but it's worth it",
//     prepTime: 60,
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: "French Toast",
//     description: "Delicious",
//     prepTime: 15,
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: "Plain Oatmeal",
//     description: "It's bland",
//     prepTime: 1,
//     rating: 2,
//   },
//   {
//     id: 4,
//     name: "Scrambled Eggs",
//     description: "A good standby",
//     prepTime: 4,
//     rating: 4,
//   },
// ];

function App() {
  const [breakfastData, setBreakfastData] = useState([]);

  const URL = "http://127.0.0.1:5000/breakfast";

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        // console.log(response);
        const breakfastAPICOPY = response.data.map((breakfast) => {
          return { ...breakfast };
        });
        setBreakfastData(breakfastAPICOPY);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateRating = (breakfastId, updatedRating) => {
    console.log("updateRating called");
    axios
      .patch(`${URL}/${breakfastId}/`)
      .then(() => {
        const newBreakfastData = breakfastData.map((breakfast) => {
          if (breakfast.id !== breakfastId) {
            return breakfast;
          } else {
            const newBreakfast = {
              ...breakfast /* need spread operator first */,
              rating: updatedRating,
            };
            return newBreakfast;
          }
        });
        setBreakfastData(newBreakfastData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const initialCopy = INITIAL_BREAKFASTS.map((breakfast) => {
  //   return { ...breakfast };
  // });

  // const [breakfastData, setBreakfastData] = useState(initialCopy);

  // const updateRating = (breakfastId, updatedRating) => {
  //   const newBreakfastData = breakfastData.map((breakfast) => {
  //     if (breakfast.id !== breakfastId) {
  //       return breakfast;
  //     } else {
  //       const newBreakfast = {
  //         ...breakfast /* need spread operator first */,
  //         rating: updatedRating,
  //       };
  //       return newBreakfast;
  //     }
  //   });
  //   setBreakfastData(newBreakfastData);
  // };

  const deleteBreakfast = (breakfastId) => {
    console.log("delete breakfast called");
    axios
      .delete(`${URL}/${breakfastId}`)
      .then(() => {
        const newBreakfastData = breakfastData.filter(
          (breakfast) => breakfast.id !== breakfastId
        );
        setBreakfastData(newBreakfastData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const name = "Cheetahs";

  return (
    <div>
      <h1>{name} Breakfast App</h1>
      <h2>Breakfast List 1</h2>
      <BreakfastList
        breakfastData={breakfastData}
        updateRating={updateRating}
        deleteBreakfast={deleteBreakfast}
      />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

// TODO Fetch the meals from firebase and map through the data to display meals!

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      let mealsArr = [];
      const response = await fetch(
        "https://react-test-project-7e7be-default-rtdb.firebaseio.com/meals.json"
      );
      const data = await response.json();

      // TODO iterate through an object with objects inside of it and push elements to an array and map through it!
      for (let i = 0; i < Object.keys(data).length; i++) {
        let mealObj = {
          key: `m${i + 1}`,
          id: `m${i + 1}`,
          name: data[`m${i + 1}`].name,
          description: data[`m${i + 1}`].description,
          price: data[`m${i + 1}`].price,
        };
        mealsArr.push(mealObj);
      }
      setMeals(mealsArr);
    };

    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

import React from 'react';
import { useMealsListContext } from './MealProvider'

const Counter = () => {

  const {meals} = useMealsListContext();

  return (
    <div>
      <h3>Total Meals today : {meals.length}</h3>
    </div>
  )
}

export default Counter
import React from 'react'
import { useMealsListContext } from './MealProvider'

const MealItems = () => {

  const {meals} = useMealsListContext();

  return (
    <div>
      <h1> Meal List</h1>
      {meals.map((meal,index) => (
        <h2 key={index}>{meal}</h2>
      ))}
    </div>
  )
}

export default MealItems
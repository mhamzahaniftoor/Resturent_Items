import React, { createContext, useContext, useState } from 'react'

const MealsContext = createContext();
const todaysMeal = ['Ovens','Ranges and ventilation','Food processors'];

const MealProvider = ({children}) => {
  const [meals,setMeal] = useState(todaysMeal);


  return (
    <MealsContext.Provider value={{meals}}>
      {children}
    </MealsContext.Provider>
  )
}
export const useMealsListContext = () => useContext(MealsContext);
export default MealProvider
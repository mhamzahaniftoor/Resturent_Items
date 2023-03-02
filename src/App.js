import Counter from "./component/Counter";
import MealItems from "./component/MealItems";
import MealProvider from "./component/MealProvider";


function App() {
  return (
    <div className="App">
      <MealProvider>
        <MealItems/>
        <Counter/>
      </MealProvider>
    </div>
  );
}

export default App;

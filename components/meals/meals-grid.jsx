import MealItem from './meal-item'
import calsses from './meals-grid.module.css'
export default function MealsGrid({meals}) {
  return (
    <ul className={calsses.meals}>
       {meals.map((meal) => (
        <li key={meal.id}><MealItem {...meal} /></li>
      ))}
    </ul>
   
  )
}

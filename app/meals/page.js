import { Suspense } from "react";
import MealsGrid from "@/components/meals/meal-grid";
import classes from "./page.module.css";
import Link from "next/link";
import { getMeals } from "@/lib/meals";

async function Meals(){
  const meals=await getMeals();
  return <MealsGrid meals={meals}/>
}
export default function MealsPage() {
  
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious<span className={classes.highlight}>Meals</span>
        </h1>
        <p>Choose your favorite</p>
        <p className={classes.cta}>
        <Link href="/meals/share">share</Link></p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching data...</p>}>
        <Meals />
        </Suspense> 
      </main>
    </>
  );
}

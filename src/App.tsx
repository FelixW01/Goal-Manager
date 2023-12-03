import CourseGoalList from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";
import "./app.css";
import { useState } from "react";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learn React + Typescript",
        description: "Learn it in depth!",
      };
      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A List of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        <CourseGoalList goals={goals} />
      </ul>
    </main>
  );
}

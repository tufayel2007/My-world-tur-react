import { Suspense } from "react";
import "./App.css";
import Countries from "./Country/Countries";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((res) => res.json());

function App() {
  return (
    <>
      <h1>React World Tur ....</h1>
      <Suspense fallback={<p className="center">DATA IS UP CAMING</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;

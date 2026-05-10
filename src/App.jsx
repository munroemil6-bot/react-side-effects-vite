import { useState, useEffect } from "react";

function App() {
  // Step 1: Create state variables
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);

  // Step 3: Function to fetch joke
  function fetchJoke() {
    setLoading(true);

    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.joke);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  // Step 2: Fetch joke when component loads
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app">
      <h1>Programming Jokes</h1>

      <p>{loading ? "Loading..." : joke}</p>

      <button onClick={fetchJoke}>
        Get a New Joke
      </button>
    </div>
  );
}

export default App;
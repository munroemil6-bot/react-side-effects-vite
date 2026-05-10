function App() {
  // Step 1: Create state variables for `joke` and `loading`
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);

  // Step 3: Define a function that fetches a programming joke from an API
  const fetchJoke = () => {
    setLoading(true);

    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.joke);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching joke:", error);
        setLoading(false);
      });
  };

  // Step 2: Use `useEffect` to call a function that fetches a joke when the component mounts
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app">
      <h1>Programming Jokes</h1>

      {/* Only ONE paragraph tag */}
      <p>{loading ? "Loading..." : joke}</p>

      {/* Only ONE button */}
      <button onClick={fetchJoke}>
        Get New Joke
      </button>
    </div>
  );
}

export default App;
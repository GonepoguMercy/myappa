function App() {
  return (
    <div>
      <nav>
        <h2>MyApp</h2>
        <a href="/">Home</a> |{" "}
        <a href="/">About</a> |{" "}
        <a href="/">Contact</a>
      </nav>

      <h1>MyApp Form</h1>

      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" />

        <br /><br />

        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />

        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
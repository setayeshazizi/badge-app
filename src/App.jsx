import Badge from "./components/Badge";

function App() {
  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Profile Page</h2>

      <Badge label="Name" value="Student" />
      <Badge label="Course" value="React" />
      <Badge label="Week" value="1" />
      <Badge label="Topic" value="Props & Components" />
    </div>
  );
}

export default App;
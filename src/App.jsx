import "./index.css";

function App() {
  return (
    <div className="container">
      <h1>Lab 12 - Case Study 4</h1>

      <h2>GitHub Pages + GitHub Actions</h2>

      <div className="card">
        <h3>CI/CD Deployment</h3>

        <p>
          This React application is automatically built
          and deployed using GitHub Actions.
        </p>
      </div>

      <div className="card">
        <h3>Deployment Flow</h3>

        <pre>{`Git Push
   ↓
GitHub Actions
   ↓
Install Dependencies
   ↓
npm run build
   ↓
Deploy to GitHub Pages`}</pre>
      </div>
    </div>
  );
}

export default App;
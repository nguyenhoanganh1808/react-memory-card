export default function Header({ score, bestScore }) {
  return (
    <header>
      <div className="header">
        <h1>Memory Card Game</h1>
        <p>
          Get points by clicking on an image but don&quot;t click on any more
          than once!
        </p>
      </div>
      <div>
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </header>
  );
}

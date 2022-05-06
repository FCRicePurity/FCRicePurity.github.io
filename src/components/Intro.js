export default function Intro({ finalScore, scoreRef }) {
  function roast(num) {
    if (num === 100) {
      return "Haven't touched a team yet.";
    }
    if (num > 85) {
      return "Foundations virgin.";
    }
    if (num > 70) {
      return "You've been on a team or two.";
    }
    if (num > 50) {
      return "You live for Foundations.";
    }
    if (num > 25) {
      return "Is getting this spicy allowed?";
    }
    return "Official Foundations whore.";
  }
  let score = null;
  if (finalScore !== null)
    score = "You scored " + finalScore + "! Rating: " + roast(finalScore);
  return (
    <section id="intro" className="container">
      <h1 className="display-1">The "Official" Foundations Purity Test</h1>
      <p className="fs-4 body">
        The Foundations Purity Test serves to catalogue the "true" Foundations
        experience here at UCLA. It is an opportunity for Foundations dancers to
        bond over shared experiences and track how Foundations Choreography has
        become embedded in their lives.
      </p>
      <p className="fs-4 body warning">
        Caution: This is not a bucket list. Completion of all items on this test
        will likely result in getting too lit.
      </p>
      <p className="fs-2 warning" ref={scoreRef}>
        {score}
      </p>
    </section>
  );
}

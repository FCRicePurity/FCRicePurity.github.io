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
      <img src="banner.PNG" className="img-fluid" id="banner" alt="..."></img>
      <p className="body">
        The <b>FC Purity Test</b> serves to catalogue the "true" UCLA
        Foundations experience. It is an opportunity for dancers to bond over
        shared experiences and see how Foundations Choreography has become
        embedded in their lives.
      </p>
      <p className="body warning">
        Caution: This is not a bucket list. Completion of all items on this test
        will likely result in getting too lit.
      </p>
      <p className="fs-2 warning" ref={scoreRef}>
        {score}
      </p>
    </section>
  );
}

let questionarray = [
  "POOPed?",
  "HOOPed?",
  "Been swiped before?",
  "Swiped someone?",
  "Been late to practice?",
  "Been late to a call time?",
  "Thrown shoes at choreographers?",
  "Learned house from Derek Zhang?",
  "Learned a piece from Genesis Garing?",
  "Sent a shoutout?",
  "Sent a thirsty shoutout?",
  "Receive a shoutout?",
  "Received a thirsty shoutout?",
  "Watched your group/casting videos?",
  "Wrote in the feedback form?",
  "Participated in a theme practice?",
  "Completed a secret buddy assignment?",
  "Got caught by your secret buddy?",
  "Participated in a joint team practice?",
  "Went to practice without eating?",
  "Forgot your water bottle for practice?",
  "Yelled “car” in the parking lot",
  "Practiced at Wooden for longer than 3 hours?",
  "Body rolled against the parking lot wall/floor?",
  "Forgot a teammate's name?",
  "Forgot choreography during groups/casting?",
  "Contributed to a team playlist?",
  "Gotten a sus nickname in the group chat?",
  "Went out of your way to get family points?",
  "Played a prank on someone on your team?",
  "Been photoshoot shopping with your team?",
  "Bought and returned a photoshoot outfit?",
  "Been to a social?",
  "Been to a joint social?",
  "Had Foundations FOMO?",
  "Prioritized dance before school/work?",
  "Went to a “study session” and didn't study?",
  "Broke something at a social?",
  "Went to an “ice cream” social?",
  "Thought an “ice cream” social meant real ice cream?",
  "Squished in a car?",
  "Been to Meat Love with your team?",
  "Been to BCD with your team?",
  "Been to Marugame with your team?",
  "Watched a sunrise with your team?",
  "Pulled an all-nighter with a teammate?",
  "Been to a rooftop with your team?",
  "Hosted a Foundations social?",
  "Received a noise complaint during a social?",
  "Had the landlord/police called on you?",
  "Had the landlord/police question you?",
  "Been on 1 Foundations team?",
  "Been on 2 Foundations team?",
  "Been on 3+ Foundations team?",
  "Been on 10 Foundations team? (Patrick Tran)",
  "Thought about becoming a captain?",
  "Thought about becoming a director?",
  "Thought about joining Admin LSHIP?",
  "Been on Dance LSHIP?",
  "Been on Admin LSHIP?",
  "Had a conversation with someone on Admin LSHIP?",
  "Wanted an Foundations LSHIP jacket?",
  "Watched old Foundations videos on Youtube?",
  "Considered doing a competitive team?",
  "Started dressing like a dancer?",
  "Used stoplight day for research purposes?",
  "Hung out with a Foundations member alone?",
  "Been on a date with a Foundations member?",
  "? (jk been in a couples piece?)",
  "Been in a relationship with a Foundations member?",
  "Had a crush on a Foundations member?",
  "Had a crush on a LSHIP member?",
  "Kissed a Foundations member?",
  "Made out with a Foundations member?",
  "Hooked up with a Foundations member?",
  "Participated in a Foundations Fundraiser?",
  "Have Foundations merch?",
  "Been to Foundations Office Hours?",
  "Been to a Foundations Workshop?",
  "Been to Wintensive?",
  "Participated in Foundations Choreo Showcase?",
  "Performed at Lot 7?",
  "Performed at Ackerman Grand Ballroom?",
  "Been given a poster/flowers/etc at showcase?",
  "Wore team gear the day after showcase?",
  "Found your bestie in Foundations?",
  "Found a family in Foundations?",
  "Simped about your team before the quarter ended?",
  "Wrote love notes last minute?",
  "Gave a lap dance?",
  "Received a lap dance?",
  "Cried because of Foundations?",
  "Participated in a team reunion after the quarter ended?",
  "Participated in a team trip after the quarter ended?",
  "Drank on the hill?",
  "Yakked at an “ice cream” social?",
  "Took a team shot?",
  "Took a family shot?",
  "Used marijuana with a teammate?",
  "Been kicked off an Foundations team?",
];

export default function Questions({ setNumChecked }) {
  let message = (
    <ol className="list-group list-group-numbered">
      {questionarray.map((question, index) => (
        <li
          key={index}
          className="list-group-item d-flex justify-content-start align-items-start bg-transparent border-0 fs-6"
        >
          <label htmlFor={index}>
            <input
              type="checkbox"
              id={index}
              onChange={(e) => {
                const checked = e.target.checked;
                if (checked) {
                  setNumChecked((prevNum) => prevNum - 1);
                } else {
                  setNumChecked((prevNum) => prevNum + 1);
                }
              }}
            ></input>
            {question}
          </label>
        </li>
      ))}
    </ol>
  );
  return message;
}

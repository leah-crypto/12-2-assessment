const goals = require("./db.json");
let globalId = 4;

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = [
      "You will come into a sum of money",
      "You will soon find true love",
      "You will have good luck in your work next week.",
    ];

    let randomIndex2 = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex2];

    res.status(200).send(randomFortune);
  },

  getAdvice: (req, res) => {
    const advice = [
      "Make sure you get 8 to 10 hours of sleep a day",
      "Eat the right amount of fruits and veggies",
      "Dont forget to call your loved ones",
    ];

    let randomIndex3 = Math.floor(Math.random() * advice.length);
    let randomAdvice = advice[randomIndex3];

    res.status(200).send(randomAdvice);
  },

  getLucky: (req, res) => {
    const luck = [
        "99, 20, 7, 88, 30",
        "102, 6, 35, 20, 53",
        "43, 86, 29, 14, 12",
    ];

    let randomIndex4 = Math.floor(Math.random() * luck.length);
    let randomNums = luck[randomIndex4];

    res.status(200).send(randomNums);
  },

  getGoal: (req, res) => {
    res.status(200).send(goals);
  },

  deleteGoal: (req, res) => {
    let { id } = req.params;
    let goalIndex = goals.findIndex((elem) => elem.id === +id);
    console.log("Goal Id: ", id);
    houses.splice(goalIndex, 1);
    res.status(200).send(goals);
  },

  updateGoal: (req, res) => {
    let { id } = req.params;
    let { type } = req.body;

    let goalIndex = goals.findIndex((elem) => elem.id === +id);

    let newGoal = goals[goalIndex];
    if (newGoal.date === 0 && type === "minus") {
      res.status(400).send("it cant go below 0");
    } else if (type === "plus") {
      newGoal.date += 10000;
      res.status(200).send(goals);
    } else if (type === "minus") {
      goal.date -= 10000;
      res.status(200).send(goals);
    } else {
      res.sendStatus(400);
    }
  },

  createGoal: (req, res) => {
    let { goal, date, imageURL } = req.body;

    let thisGoal = {
      id: globalId,
      goal,
      date,
      imageURL,
    };

    goals.push(thisGoal);

    res.status(200).send(goals);
    globalId++;
  },
};

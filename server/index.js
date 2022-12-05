const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
//const {getGoal, deleteGoal, createGoal, updateGoal} = require('./controller.js')

const app = express();

app.use(cors());

app.use(express.json());

let books = [];

const { getCompliment,
        getFortune,
        getAdvice,
        getLucky,
        getGoal,
        deleteGoal,
        createGoal,
        updateGoal
    } = require('./controller')

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
app.post('/book', (req, res) => {
    const book = req.body;

    //console.log(book);
    books.push(book);

    res.send('This book has been added to the database');
});
app.get(`/books`, (req, res) =>{
    res.json(books);
});
app.get(`/api/fortune`, getFortune);
app.get(`/api/compliment`, getCompliment);
app.get(`/api/advice`, getAdvice);
app.get(`/api/luck/`, getLucky);
app.get(`/api/goal`, getGoal);
app.delete(`/api/goal/:id`, deleteGoal);
app.put(`/api/goal/:id`, updateGoal);
app.post(`/api/goal`, createGoal);

app.listen(4000, () => console.log("Server running on 4000"));



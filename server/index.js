const express = require("express");
const cors = require("cors");
//const {getGoal, deleteGoal, createGoal, updateGoal} = require('./controller.js')

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment,
        getFortune,
        getAdvice,
        getGoal,
        deleteGoal,
        createGoal,
        updateGoal
    } = require('./controller')



app.get(`/api/fortune`, getFortune);
app.get(`/api/compliment`, getCompliment);
app.get(`/api/advice`, getAdvice);
app.get(`/api/goal`, getGoal);
app.delete(`/api/goal/:id`, deleteGoal);
app.put(`/api/goal/:id`, updateGoal);
app.post(`/api/goal`, createGoal);

app.listen(4000, () => console.log("Server running on 4000"));



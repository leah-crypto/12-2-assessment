const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton");
const adviceBtn = document.getElementById("adviceButton");
const goalContainer = document.querySelector('#goal-container')
const form = document.querySelector('form')
const luckyBtn = document.querySelector("luckyNumbersButton");

const baseURL = `http://localhost:4000/api/goal`

// const setEditModal = (author) => {
    
// }

// const deleteBook = (author) => {
    
// }

// const loadBooks = () => {
//     const xhttp = new XMLHttpRequest();

//     xhttp.open("GET", "http://localhost:3000/books", false);
//     xhttp.send();

//     const books = JSON.parse(xhttp.responseText);

//     for (let book of books) {
//         const x = `
//             <div class="col-4">
//                 <div class="card">
//                     <div class="card-body">
//                         <h5 class="card-title">${book.title}</h5>
//                         <h6 class="card-subtitle mb-2 text-muted">${book.isbn}</h6>

//                         <div>Author: ${book.author}</div>
//                         <div>Publisher: ${book.publisher}</div>
//                         <div>Number Of Pages: ${book.numOfPages}</div>

//                         <hr>

//                         <button type="button" class="btn btn-danger">Delete</button>
//                         <button types="button" class="btn btn-primary" data-toggle="modal"
//                             data-target="#editBookModal" onClick="setEditModal(${book.isbn})">
//                             Edit
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         `

//         document.getElementById('books').innerHTML = document.getElementById('books').innerHTML + x;
//     }
// }

// loadBooks();

const goalsCallback = ({ data: goals }) => displayGoals(goals)
const errCallback = err => console.log(err)

const getAllGoals = () => axios.get(baseURL).then(goalsCallback).catch(errCallback)
const createGoal = body => axios.post(baseURL, body).then(goalsCallback).catch(errCallback)
const deleteGoal = id => axios.delete(`${baseURL}/${id}`).then(goalsCallback).catch(errCallback)
const updateGoal = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(goalssCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let setGoal = document.querySelector('#goal')
    let date = document.querySelector('#date')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        goal: setGoal.value,
        date: date.value, 
        imageURL: imageURL.value
    }

    createGoal(bodyObj)

    setGoal.value = ''
    date.value = ''
    imageURL.value = ''
}

function createGoalCard(goal) {
    const goalCard = document.createElement('div')
    goalCard.classList.add('goal-card')

    goalCard.innerHTML = `<img alt='goal images' src=${goal.imageURL} class="goal-cover-image"/>
    <p class="date">${goal.date}</p>
    <div class="btns-container">
        <button onclick="updateGoal(${goal.id}, 'minus')">-</button>
        <p class="goal-date">$${goal.date}</p>
        <button onclick="updateGoal(${goal.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteGoal(${goal.id})">delete</button>
    `


    goalContainer.appendChild(goalCard)
}

function displayGoals(arr) {
    goalContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createGoalCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllGoals()

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res =>{
        const data = res.data;
        alert(data);
    });
};

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data2 = res.data;
            alert(data2);
    });
};

const getAdvice = () => {
    axios.get("http://localhost:4000/api/advice/")
    .then(res =>{
        const data3 = res.data;
        alert(data3);
    });
};

adviceBtn.addEventListener('click', getAdvice);
fortuneBtn.addEventListener('click', getFortune);
complimentBtn.addEventListener('click', getCompliment);
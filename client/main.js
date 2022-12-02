const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton");

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/");
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

fortuneButn.addEventListener('click', getFortune);
complimentBtn.addEventListener('click', getCompliment)
const btn = document.querySelector(".start");
const options = document.querySelectorAll(".select img");
let option = "";
let picked = false;
const gameSummary = {
    games: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}


const play = () => {
    let result = "";
    const options = ["papier", "kamień", "nożyce"];
    aiOption = options[Math.floor(Math.random() * 3)];
    document.querySelectorAll("span")[0].textContent = option;
    if (option) document.querySelectorAll("span")[1].textContent = aiOption;
    result = chooseWinner(option, aiOption);
    document.querySelectorAll("span")[2].textContent = result;
    if (result == "gracz") document.querySelectorAll("span")[2].style.color = "green";
    else if (result == "komputer") document.querySelectorAll("span")[2].style.color = "red";
    else document.querySelectorAll("span")[2].style.color = "#444";
    switch (result) {
        case "gracz":
            document.querySelector(".panel-right").querySelectorAll("span")[1].textContent = ++gameSummary.wins;
            document.querySelector(".panel-right").querySelectorAll("span")[0].textContent = ++gameSummary.games;
            break;
        case "komputer":
            document.querySelector(".panel-right").querySelectorAll("span")[2].textContent = ++gameSummary.losses;
            document.querySelector(".panel-right").querySelectorAll("span")[0].textContent = ++gameSummary.games;
            break;
        case "remis":
            document.querySelector(".panel-right").querySelectorAll("span")[3].textContent = ++gameSummary.draws;
            document.querySelector(".panel-right").querySelectorAll("span")[0].textContent = ++gameSummary.games;
            break;
        default:
            alert("Musisz wybrać jedną z opcji!");
    }

}

const chooseWinner = (playerChoice, aiChoice) => {
    if (playerChoice == "papier") {
        if (aiChoice == "papier") return "remis";
        else if (aiChoice == "kamień") return "gracz";
        else return "komputer";
    } else if (playerChoice == "kamień") {
        if (aiChoice == "papier") return "komputer";
        else if (aiChoice == "kamień") return "remis";
        else return "gracz";
    } else if (playerChoice == "nożyce") {
        if (aiChoice == "papier") return "gracz";
        else if (aiChoice == "kamień") return "komputer";
        else return "remis";
    } else {
        return null;
    }
}

const addBorder = e => { if (!picked) e.target.style.boxShadow = "0 0 0 3px yellow"; }

const deleteBorder = e => { if (!picked) e.target.style.boxShadow = "none"; }

const pickOption = e => {
    picked = true;
    options.forEach(option => option.style.boxShadow = "none");
    e.target.style.boxShadow = "0 0 0 3px yellow";
}

btn.addEventListener('click', play);

options.forEach(option => option.addEventListener('click', pickOption));
options.forEach(option => option.addEventListener('mouseover', addBorder));
options.forEach(option => option.addEventListener('mouseleave', deleteBorder));

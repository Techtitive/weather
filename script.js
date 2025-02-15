const info = document.querySelector(".info");
const form = document.querySelector(".form");
const enter = document.querySelector(".enter");
const submit = document.querySelector(".submit");
const apikey = "0f1898561d35d0f99a631e3daa549190";

form.addEventListener('submit' , event => {
        event.preventDefault();
        const city = enter.value;

        if(city){

        }
        else{
            disperror("Please Enter a city name");
        }
});

async function getweather(city){

};

function displayinfo(data){

};
function emoji(id){

};

function disperror(message) {
    const error = document.createElement("p");
    error.textContent = message;
    error.classList.add("error");

    info.textContent = "";
    info.style.display = "flex";
    info.appendChild(error);
};
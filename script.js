const info = document.querySelector(".info");
const form = document.querySelector(".form");
const enter = document.querySelector(".enter");
const submit = document.querySelector(".submit");
const apikey = "0f1898561d35d0f99a631e3daa549190";

form.addEventListener('submit' , async event => {
        event.preventDefault();
        const city = enter.value.toLowerCase();

        if(city){
            try{
                const data = await getweather(city);
                displayinfo(data)
            }
            catch(error){
                console.error(error);
                disperror(error);
            }

        }
        else{
            disperror("Please Enter a city name");
        }
});

async function getweather(city){
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const response = await fetch(apiurl);

    if(!response.ok){
        throw new Error(`Can't Find the city ${city}.`);
    }

    return await response.json();
};

async function displayinfo(data){
    console.log(data)
    const {name: city, main:{temp, humidity}, weather:[{description, icon}], wind: {speed}} = data;
    
    info.textContent = "";
    info.style.display = "flex";

    const citydisplay = document.createElement("h1");
    const tempdisplay = document.createElement("h1");
    const humiditydisplay = document.createElement("p");
    const windspeeddisplay = document.createElement("p");
    const descdisplay = document.createElement("p");
    const wethemoji = document.createElement("img");

    citydisplay.textContent = city;
    tempdisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humiditydisplay.textContent = `Humidity: ${humidity}`;
    windspeeddisplay.textContent = `Windspeed: ${speed}`;
    descdisplay.textContent = description;
    wethemoji.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    await new Promise((resolve, reject) => {
        wethemoji.onload = resolve;
        wethemoji.onerror = reject;
    });
   

    info.appendChild(citydisplay);
    info.appendChild(tempdisplay);
    info.appendChild(humiditydisplay);
    info.appendChild(windspeeddisplay);
    info.appendChild(descdisplay);
    info.appendChild(wethemoji);

    citydisplay.classList.add("name");
    tempdisplay.classList.add("temp");
    humiditydisplay.classList.add("humidity");
    windspeeddisplay.classList.add("windspeed");
    descdisplay.classList.add("desc");
    wethemoji.classList.add("emoji");
};

function emoji(icon){
    switch(true){
        case (id >= 200 && id < 300):
            return ""
        
    }
};

function disperror(message) {
    const error = document.createElement("p");
    error.textContent = message;
    error.classList.add("error");

    info.textContent = "";
    info.style.display = "flex";
    info.appendChild(error);
};

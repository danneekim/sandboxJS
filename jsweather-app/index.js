// https://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric&appid=4e5fa671fe207b3321b38c7adff5c870

let weather = {
  apiKey: "4e5fa671fe207b3321b38c7adff5c870",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q="
      + city 
      + "&units=metric&appid="
      + this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },

  displayWeather: function (data) {
    // console.log(data);
    const { name } = data;
    const {icon, description} = data.weather[0];
    const {temp, humidity } = data.main;
    const {speed} = data.wind;
    // console.log(name, icon, description, temp, humidity, speed);

    document.querySelector(".city").innerText="Weather in "+name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+".png";
    document.querySelector(".description").innerText=description;
    document.querySelector(".temp").innerText=temp+" °C";
    document.querySelector(".humidity").innerText=humidity+" %";
    document.querySelector(".wind").innerText="Wind Speed: "+speed+" km/h";
    // css
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = "url('https://source.unsplash.com/featured/?1600x900/?"+name+"')"
  },
  search: function(){
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
};

document.querySelector(".search button")
  .addEventListener("click", function(){
    weather.search();
});

document.querySelector(".search-bar")
  .addEventListener("keyup", function(event){
    if(event.key == "Enter") weather.search();
  })

weather.fetchWeather("New York");

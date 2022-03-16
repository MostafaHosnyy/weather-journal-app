/* Global Variables */
// Personal API Key for OpenWeatherMap API
const apiKey = "appid=da25a8c0764569e35d27fab945e78fc2&units=imperial";
let result = {};

//Return Endpoint Data and GET Route
const getData = async (url = "") => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    result.temp = data.main.temp;
  } catch (error) {
    result = {};
    result.date = newDate;
    console.log("get error", error);
    alert("ZipCode is Not Valid");
  }
};

// POST Route II : Client Side
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {"Content-Type": "application/json",},body:JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    return newData;} 
  catch (error) {console.log("post error", error);}
};

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = `${d.getMonth() + 1}.${d.getDate()}.${d.getFullYear()}`;
result.date = newDate;
// Naming HTML Inputs and Buttons
const zip = document.querySelector("#zip");
const feelings = document.querySelector("#feelings");
const generate = document.querySelector("#generate");
let userInput = {};

// Dynamic UI
const retrieveData = async () => {
  const request = await fetch("/test");
  try {
    const allData = await request.json();
    console.log(allData);

    document.getElementById("content").innerHTML = `you're feeling ${allData.content ?? "Undefined"} now.`;
    document.getElementById("temp").innerHTML = `Temperature: ${Math.round(allData.temp) || "_"} degree`;    
    document.getElementById("date").innerHTML = `Current date: ${allData.date}`;
  
  } catch (error) {
    console.log("retrieve from server", error);
  }
};
generate.addEventListener("click", async () => {
  result.content = feelings.value;
  const zipCode = zip.value;
  const baseURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&${apiKey}`;
  try {
    await getData(baseURL);
    postData("/all", result);
    retrieveData();
  } catch (error) {
    result = {};
    console.log(error);
  }
});

# Weather Journal App Project
# Development

## Project Environment Setup

- ### Node and Express Environment and installed in the project file `server.js`.

- ### Project Dependencies

  The `cors` package and the The `body-parser` package are installed in the project file `server.js`.

- ### Local Server

  Local server are running and producing feedback to the Command Line through a working callback function.

- ### API Credentials

  Create API credentials on OpenWeatherMap.com.

## APIs and Routes

- ### APP API Endpoint
  There is a JavaScript Object named `projectData` initiated in the file `server.js` to act as the app API endpoint.

- ### Integrating OpenWeatherMap API
  The personal API Key for OpenWeatherMap API is saved in a named `const` variable.

  `const apiKey = "appid=da25a8c0764569e35d27fab945e78fc2&units=imperial";`

  The API Key variable is passed as a parameter to `fetch()`.
  Data is successfully returned from the external API.

- ### POST Route
  - POST Route I: Server Side

    The server side function should create a new entry in the apps endpoint (the named JS object) consisting of the data received from the client side POST.

  - POST Route II: Client Side

    The client side function should take two arguments, the URL to make a POST to, and an object holding the data to POST.

## Dynamic UI
- ### Naming HTML Inputs and Buttons For Interaction
  - The `input` element with the `placeholder` property set to “enter zip code here” has an `id` of `zip`.

  - The `textarea` included in project HTML has an `id` of `feelings`.

  - The button included in project HTML has an `id` of `generate`.

- ### Assigning Element Properties Dynamically
  The div with the `id`, `entryHolder` has three child divs with the ids:

  - `date`
  - `temp`
  - `content`

- ### Event Listeners
  In the file `app.js`, Adds an event listener to an existing HTML button from DOM using Vanilla JS.
- ### Dynamically Update UI
  Sets the properties of existing HTML elements from the DOM using Vanilla JavaScript.

- # end Weather Journal App Project
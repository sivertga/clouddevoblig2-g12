var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://localhost:8080");
var json2xml = require("json2xml");

// The data we are sending

var data = {
  Data: {
    SOM: {
      Tab: [
        {
          Values: {
            Type: "Water Level Sensor",
            Location: "Hull",
            Leakage: randomBoolean(),
          },
        },
        {
          Values: {
            Type: "Temperature Sensor",
            Location: "Bottom of vessel",
          },
          Temperature: randomWaterTemp(0, 30),
          Unit: "Celcius",
        },
        {
          Values: {
            Type: "Smoke Sensor",
            Location: "Cockpit",
          },
          Smokelevel: randomAQI(0, 500),
          Unit: "AQI",
        },
      ],
    },
  },
};

var topic = "Smart Boat";

// A function to generate a random temperature number.
function randomWaterTemp(min, max) {
  var random_watertemp = Math.floor(Math.random() * (max - min + 1)) + min;
  return random_watertemp;
}

// A function to generate a random AQI number.
function randomAQI(min, max) {
  var random_AQI = Math.floor(Math.random() * (max - min)) + min;
  return random_AQI;
}

//A function to generate a random boolean (true or false)
function randomBoolean() {
  var random_boolean = Math.random() < 0.5;
  console.log(random_boolean);
  return random_boolean;
}

// Transforms our data from JSON to XML.
var message = json2xml(data);
client.on("connect", () => {
  setInterval(() => {
    client.publish(topic, message);
    console.log("message sent", message);
    randomBoolean();
    randomAQI();
    randomWaterTemp();
  }, 10000); //refreshes every 10th second.
});

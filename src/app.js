function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss [<small>]A[</small>]");

  let durbanElement = document.querySelector("#durban");
  let durbanDateElement = durbanElement.querySelector(".date");
  let durbanTimeElement = durbanElement.querySelector(".time");
  durbanDateElement.innerHTML = moment().format("MMMM Do YYYY");
  durbanTimeElement.innerHTML = moment()
    .tz("Africa/Durban")
    .format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);

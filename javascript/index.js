function updateTime() {
  //los angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = moment().format("MMMM D, YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
    `hh:mm:ss`
  )} <small>${losAngelesTime.format(`A`)}</small>`;

  //tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = moment().format("MMMM D, YYYY");
  tokyoTimeElement.innerHTML = `${tokyoTime.format(
    `hh:mm:ss`
  )} <small>${tokyoTime.format(`A`)}</small>`;

  //berlin
  let berlinElement = document.querySelector("#berlin");
  let berlinDateElement = berlinElement.querySelector(".date");
  let berlinTimeElement = berlinElement.querySelector(".time");
  let berlinTime = moment().tz("Europe/Berlin");
  berlinDateElement.innerHTML = moment().format("MMMM D, YYYY");
  berlinTimeElement.innerHTML = `${berlinTime.format(
    `hh:mm:ss`
  )} <small>${berlinTime.format(`A`)}</small>`;
}
updateTime();
setInterval(updateTime, 1000);

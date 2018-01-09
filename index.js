
const healthEl = document.getElementById("healthdata")

window.onload = () => {
  getHealthData()
}

// renderData = (data) => {
//   let healthdata = data.map((surveyline) => {
//     let question = surveyline["question"]
//     return `<li>${question}</li>`
// })
//   healthEl.innerHTML = `<ul>${healthdata.join("")}</ul>`
// }
//

getHealthData = () => {
  fetch('https://data.cityofnewyork.us/resource/hw9t-9zpc.json')
  .then(r => r.json())
  .then(healthdata => renderData3(healthdata))
}

renderData3 = (data) => {
  let healthdata = data.map((surveyline) => {
    let question = surveyline["question"]
    let prevalences = surveyline["prevalence"]
    return `<li>${question} ${prevalences}</li>`
})
  healthEl.innerHTML = `<ul>${healthdata.join("")}</ul>`
}

// renderData4 = (data) => {
//   // const questions = data["question"]
//   let healthdata = questions.map((surveyline) => {
//     let NoDoc =  surveyline.question == "No Personal Doctor"
//     let prevalence = surveyline.prevalence
//     return `<li>${NoDoc}</li>`
// })
//   healthEl.innerHTML = `<ul>${healthdata.join("")}</ul>`
// }

class App {
  constructor(){
    this.form = document.getElementById("health-form")
    this.options = document.getElementById("health-options")
    this.answer = document.getElementById("answer")
    this.form.onsubmit = (e) => {
      e.preventDefault()
      console.log("hi")
      this.handleSubmit()
    }
  }
}

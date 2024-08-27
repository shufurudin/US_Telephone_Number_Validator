const input = document.querySelector("#user-input")
const check_btn = document.querySelector("#check-btn")
const clear_btn = document.querySelector("#clear-btn")
const res = document.querySelector("#results-div")

const phoneChecker = () => {
  const validator = (input) => {
    const regex1 = /(?:\s|^)[1]?(?:\s|^)(\s|-)?([0-9][0-9][0-9])(\s|-)?([0-9][0-9][0-9])(\s|-)?([0-9][0-9][0-9][0-9])(?:\s|$)/
    const regex2 = /(?:\s|^)[1]?(?:\s|^)(\s|-)?(\([0-9][0-9][0-9]\))(\s|-)?([0-9][0-9][0-9])(\s|-)?([0-9][0-9][0-9][0-9])(?:\s|$)/

    const isInputOk = input.match(regex1) || input.match(regex2)

    isInputOk ?
      res.innerText = `Valid US number: ${input}` 
      :
      res.innerText = `Invalid US number: ${input}`
  }
  
  input.value !== "" ?
    validator(input.value)
    :
    alert("Please provide a phone number")
}

check_btn.onclick = phoneChecker
clear_btn.onclick = () => res.innerText = ""

document.addEventListener("keydown", (e) => e.key === "Enter" ? check_btn.click() : null)
const input = document.querySelector("#user-input")
const check_btn = document.querySelector("#check-btn")
const clear_btn = document.querySelector("#clear-btn")
const res = document.querySelector("#results-div")


const phoneChecker = () => {
  const validator = (input) => {
    const regex1 = /[1]?(\s|-)?([0-9][0-9][0-9])(\s|-)?([0-9][0-9][0-9])(\s|-)?([0-9][0-9][0-9][0-9])/
    const regex2 = /[1]?(\s|-)?(\([0-9][0-9][0-9]\))(\s|-)?([0-9][0-9][0-9])(\s|-)?([0-9][0-9][0-9][0-9])/

    const isInputOk = input.match(regex1)

    isInputOk ? res.value =`Valid US number: ${input.value}` : res.value = `Invalid US number: ${input.value}`
  }
  
  input.value !== "" ? validator(input.value) : alert("Please provide a phone number")
}

check_btn.onclick = phoneChecker
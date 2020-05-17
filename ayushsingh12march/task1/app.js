// The questions input box will have
let questions = [{
  qn: "Your First Name",
  placeholder: "First Name",
  type: "text"
}, {
  qn: "Your Second Name",
  placeholder: "Second Name",
  type: "text"
}, {
  qn: "Your mail id",
  placeholder: "mail id",
  type: "email"
}, {
  qn: "Date of joining",
  placeholder: "joining date",
  type: "date"
}, {
  qn: "Type a password",
  placeholder: "password",
  type: "password"
}]

// selecting required HTML objects
const label = document.querySelector('label')
const input = document.querySelector('#Form-input')
const button = document.querySelector('button')

//initial values and attributes before start
label.innerText = "Press Start to Enter"
input.style.display = "none"
input.value = "going to start"
button.innerText = "Start"

// the index of questions array
let pos = 0

// the input,label,button values are adjusted by this function
function modifyDOM(e) {
  if (pos >= questions.length) {
    label.innerText = `Welcome ${firstName} !`
    input.style.display = "none"
    button.style.display = "none"
    alert(`Submission completed! Welcome  ${firstName} `)
  }
  else {
    input.style.display = "block"
    label.innerText = questions[pos].qn
    input.type = questions[pos].type
    input.placeholder = questions[pos].placeholder
    input.setAttribute("required", "")
    button.innerText = pos == questions.length - 1 ? "submit" : "next"
    pos++
  }

}

const handleEvent = function (e) {
  //validations for inputs
  if (input.value) {
    //email validation
    if (input.type === "email") {                        // email is at pos=2 in the array but pos is incremented when it comes out of the fn
      var regexp = /\S+@\S+\.\S+/;
      if (!regexp.test(input.value.toLowerCase())) {
        alert("Enter valid email id")
        pos--;
      }
    }
    // storing the first Name
    if (input.placeholder === "First Name") {
      firstName = input.value
    }
    input.value = ""                                   // after receiving valid input , reseting the value
    modifyDOM()
  }
  else
    alert(`Please Enter ${questions[pos - 1].placeholder}`)
}

button.addEventListener('click', handleEvent)

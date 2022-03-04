function SwitchModeHelper(){
    const aux = document.querySelector("i")
    const body = document.querySelector("body")
    if(!body.classList.contains("darkStyle")) {
        aux.classList.replace("fa-moon","fa-sun")
        SwitchDarkMode(body)
    }
    else {
        SwitchLightMode(body)
        aux.classList.replace("fa-sun","fa-moon")
    }
}

function SwitchDarkMode(body){
    // const body = document.querySelector("body")
    body.classList.toggle("darkStyle")
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => SwitchDarkModeButton(button))
}
function SwitchDarkModeButton(button){
    button.classList.replace("btn-outline-dark","btn-outline-light")
}


function SwitchLightMode(body){
    // const body = document.querySelector("body")
    body.classList.remove("darkStyle")
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => SwitchLightModeButton(button))
}
function SwitchLightModeButton(button){
    button.classList.replace("btn-outline-light","btn-outline-dark")
}
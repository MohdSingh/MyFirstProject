const   fun =   ()  =>  {
    let arr =   ["red", "yellow",   "blue", "green",    "pink", "purple",   "white",    "brown",    "blue", "orange"]
    document.body.style.background   =   arr[parseInt(Math.random()*10)]
}

const   changeHandler   =   ()  =>  {
    console.log("here")
    let ele =   document.getElementById("enteredText")
    let input   =   document.getElementById("input")
    console.log(input.value)
    ele.innerHTML   =  input.value
}
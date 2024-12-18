let main = document.getElementById("main-content")

let div1 = document.createElement("div")
div1.className = "div1"
main.appendChild(div1)

let div2 = document.createElement("div")
div2.className = "div2"
div1.appendChild(div2)
div2.innerHTML = "1"

let paragrah = document.createElement("h2")
paragrah.className = "head1"
div1.appendChild(paragrah)
paragrah.innerHTML = "YOUR basic DETAILS"



const inputFields = [
    {
        name: 'username',
        placeholder: "Please type your name",
        type: "text"
    },
    {
        name: 'lastname',
        placeholder:'your lastname ',
        type: "text"
    },
    {
        name: 'Email',
        placeholder:'abc@gmail.com',
        type: "text"
    },
    {
        name: 'Skype username',
        placeholder:'@username skype',
        type: "text"
    },
    {
        name:"appointment for:",
        type:'select',
    }
]



inputFields.forEach((value) => {
    if (value.type === 'text') {
        let label =document.createElement("label")
        label.innerHTML=value.name
        let input=document.createElement("input")
       input.type=value.type
       input.id="card"
       input.placeholder=value.placeholder
       main.appendChild(label)
       main.appendChild(input) 
    }
    else if (value.type=== "select"){
        let select = document.createElement("label")
        select.for="country"
        main.appendChild(select)

    }
});

let main2 =document.getElementById("div")

let div4 = document.createElement("div")
div4.className = "div1"
main.appendChild(div4)

let div5 = document.createElement("div")
div5.className = "div2"
div4.appendChild(div5)
div5.innerHTML = "2"

let paragrah1 = document.createElement("h2")
paragrah1.className = "head1"
div4.appendChild(paragrah1)
paragrah1.innerHTML = "Appointment Details"




// let nameScreen1 = [
    //     "Appointment for:",
    //     "Appointment desciption:",
    //     "Date:",
    //     "Time:",
    //     "How long ? (Minutes)"
    // ]
    // nameScreen1.forEach((value) => {
        //     const card1 = document.createElement("p")
        //     card1.className = "card";
        //     card1.innerHTML = value
        //     main.appendChild(card1)
        
        //     document.createElement("label")
        
        
        // })
        
        
        
        // let nameScreen = [
        //     "NAME:",
        //     "Email:",
        //     "Contant Num:",
        //     "Skype username"
        // ]
        // let placeholderScreen = [
        //     "fullname:",
        //     "qwe@gmail.com:",
        //     "zip code:",
        //     "@username"
        // ]
        
        
        
        




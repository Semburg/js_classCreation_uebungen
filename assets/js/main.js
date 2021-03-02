console.log("test")

// 1_2 + 1_3

const nameUser = document.querySelector("#name")
const age = document.querySelector("#age")
const examGreen = document.querySelector("#exam_green")
const submit = document.getElementById("submit").addEventListener("click", write)
const myUl = document.querySelector("ul")

console.log("%c1_2 + 1_3", "color:yellow")
class Person{
    constructor(name, alter, pruefung = false){
        this.name = name;
        this.alter = alter;
        this.pruefung = pruefung;
    }
    info(){
        console.log(`${this.name}, ${this.alter} years old. ${this.pruefung}`)
        return `${this.name}, ${this.alter} years old.`
    }

    // write()
}

//todo  thinking about creating the method inside of class as direct method
//todo  pruefung not really initializible.. but colorized

function write(){
    let currentName = nameUser.value;
    let personAge = age.value;
    let person = new Person(currentName, personAge)
    console.log(person.info())
    let d = document.createElement("LI")
    d.textContent = person.info()
    if(examGreen.checked){
        d.style.color = "green"
        person.pruefung = true;

    } else {
        d.style.color = "red"
    }
    myUl.appendChild(d)
}

function showTime(){
    person1.info();
}
let person1 = new Person("Manuela", 18)
person1.info();




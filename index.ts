interface Person {
    fullname: string
    age: number
    email: string
    single?: boolean
}

let jd : Person = {
    fullname: "John Doe",
    age: 28,
    email: "jdoe@example.com",
    single: false
}

let jane : Person = {
    fullname: "Jane Smith",
    age: 30,
    email: "jane@example.com"
}

function showPerson(p) {
    console.log("Full Name: " + p.fullname)
    console.log("Age: " + p.age + " years old.")
    console.log("Email: " + p.email)
    console.log("Single: " + (p.single !== undefined ? p.single: "unknown"))
}

showPerson(jd)
showPerson(jane)
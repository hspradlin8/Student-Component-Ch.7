//1. Create a new project sub-directory in your workspace/javascript directory.
// 2.Paste the array of student objects above into your JavaScript file.
// 3.Copy the createStudentComponent function into your code.
// 4.Add the following styles to your CSS.
//5.Add a container article to your HTML.
//6.Iterate the array of students, and apply the correct style to the h1 depending
// on the score of the student being below 60, or above it.

const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

// for (const student of students) {
//     let studentComponent = ""
//     if (student.score >= 60) {
//         // studentComponent = ...
//     } else {
//         // studentComponent = ...
//     }
// }
// const createStudentComponent = (name, subject, info, score) => {
//     return `
        
//             <h1>${name}</h1>
//             <p>${subject}</p>
//             <p>${info}</p>
//             <p>${score}</p>
       
//     `
// }
const createStudentComponent = (name, subject, info, score) => {
    if (score >= 60) {
        theStudent = `
            <h1 class="passing">${name}</h1>
            <p>${subject}</p>
            <p>${info}</p>
            <p>${score}</p>
    `
    } else {
       theStudent = `
            <h1 class="failing">${name}</h1>
            <p>${subject}</p>
            <p>${info}</p>
            <p>${score}</p>
    `
    }
   return theStudent;
  }

const studentContainer = document.querySelector(".container")

for (let i = 0; i < students.length; i++) {
    const student = students[i]
    studentContainer.innerHTML += createStudentComponent(
        student.name,
        student.subject,
        student.info,
        student.score
    )
}

class Student{
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
        this.info = `${this.name} ---- ${this.grade}`;
    }

    study(){
        this.grade++;
        console.log("Good job!")
    }
}

let firstStudent = new Student("Antonia", "2");
let secondStudent = new Student("Georgi", "2");
console.log(firstStudent);
console.log(secondStudent);
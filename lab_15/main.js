function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}

let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};

console.log(propsCount(mentor));

//////////////////////////////
let student = {
    name: "Vadym",
    surName: "Porada",
    age: 17,
    year: 3,
    group: "КН-321"

};

function showProps(obj) {
    var props = Object.keys(obj);
    var val = Object.values(obj);
  
    console.log('Список властивостей об\'єкта:');
    console.log(props);
  
    console.log('Масив значень властивостей об\'єкта:');
    console.log(val);
}

showProps(student);


//////////////////////////////
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        console.log(this.name + this.surname);
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    showFullName(midleName) {
        super.showFullName();
        console.log(midleName);
    }

    showCourse() {
        let nowYear = new Date().getFullYear();
        let course = nowYear - this.year;

        console.log("Ви на " + course + " курсі");
    }
}

let stud = new Student("Vad", "Por", 2020);
console.log(stud.name + stud.surname + stud.year);
stud.showFullName("Yar");
stud.showCourse();


//////////////////////////////
class Worker {
    #experience = 1.2;

    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary() {
        console.log(this.dayRate * this.workingDays);
    }

    showSalaryWithExperience() {
        console.log(this.dayRate * this.workingDays * this.#experience);
    }

    get showExp() {
        return this.#experience;
    }

    set setExp(value) {
        this.#experience = value;
    }  
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.7;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.3;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();

let workers = [worker1, worker2, worker3];
workers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());

console.log("Sorted salary:");
workers.forEach((worker) => {
  console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`);
});

//////////////////////////////
const PI = 3.14;

class GeometricFigure {
    getArea() {
      return 0;
    }
  
    toString() {
      return Object.getPrototypeOf(this).constructor.name;
    }
}
  
class Triangle extends GeometricFigure {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    getArea() {
      return (this.base * this.height) / 2;
    }
}
  
class Square extends GeometricFigure {
    constructor(side) {
      super();
      this.side = side;
    }
  
    getArea() {
      return this.side * this.side;
    }
}
  
class Circle extends GeometricFigure {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    getArea() {
      return PI * Math.pow(this.radius, 2);
    }
}
  
function handleFigures(figures) {
    const totalArea = figures.reduce((sum, figure) => {
      const figureName = figure.toString();
      const area = figure.getArea();
      console.log(`Geometric figure: ${figureName} - area: ${area}`);
      return sum + area;
    }, 0);
  
    return totalArea;
}
  
const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));
  
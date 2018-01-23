var id = 1;


function Student(fName, lName, grade){
    this.id = id++;
    this.fName = fName;
    this.lName = lName;
    this.grade = grade;
}

function Teacher(fName, lName, subject){
    this.id = id++;
    this.fName = fName;
    this.lName = lName;
    this.subject = subject;
}

function Section(course, maxSize, seatsLeft){
    this.id = id++;
    this.course = course;
    this.maxSize = maxSize;
    this.seatsLeft = seatsLeft;
    this.students = [];
    this.teacher;
}

function Student(fName, lName, grade, id){
    this.firstName = fName;
    this.lastName = lName;
    this.grade = grade;
    this.id = id;
}

function Teacher(fName, lName, subject){
    this.firstName = fName;
    this.lastName = lName;
    this.subject = subject;
}

function Section(course, maxSize){
    this.course = course;
    this.maxSize = maxSize;
    this.teachers = [];
    //allSections.push(this);
    // this.students = [];
    // this.teacher = teacher;
    this.addTeacher = function(teacher){
        teachers.push(teacher);
    };
    // this.removeStudent = function(id){
    //
    // }
    //sectionSeatsRemaining()
}
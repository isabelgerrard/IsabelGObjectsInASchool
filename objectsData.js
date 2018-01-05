var allStudents = [];
var allTeachers = [];
var allSections = [];

allStudents.push(new Student('Isabel','Gerrard', 12, 1266447));
allStudents.push(new Student('Johnny','Smith', 9, 1266441));
allStudents.push(new Student('Matt','Alby', 10, 1266442));
allStudents.push(new Student('Lucas','Scherman', 11, 1266443));
allStudents.push(new Student('Leah','Kirsch', 12, 1266444));

allTeachers.push(new Teacher('Carol','Dorf', 'Math'));
allTeachers.push(new Teacher('Aaron','Glimme', 'Science'));
allTeachers.push(new Teacher('Matthew','Albinson','Science'));
allTeachers.push(new Teacher('Megan','Nasser', 'Social Studies'));
allTeachers.push(new Teacher('Keldon','Clegg', 'History'));
allTeachers.push(new Teacher('Carl','Rogers','English'));

allSections.push(new Section('IB Math SL2', 25));
allSections.push(new Section('AP Chemistry', 30));
allSections.push(new Section('IB SL Computer Science',30));
allSections.push(new Section('TOK', 25));
allSections.push(new Section('IB HL History', 35));
allSections.push(new Section('IB HL English', 25));

var allObjects =[allStudents, allTeachers, allSections];
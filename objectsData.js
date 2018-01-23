var allStudents = [];
var allTeachers = [];
var allSections = [];

allStudents.push(new Student('Isabel','Gerrard', 12));
allStudents.push(new Student('Johnny','Smith', 9));
allStudents.push(new Student('Ottavia','Martinet', 10));
allStudents.push(new Student('Isaac','Raya', 11));
allStudents.push(new Student('Leah','Kirsch', 12));

allTeachers.push(new Teacher('Carol','Dorf', 'Math'));
allTeachers.push(new Teacher('Aaron','Glimme', 'Science'));
allTeachers.push(new Teacher('Matthew','Albinson','Science'));
allTeachers.push(new Teacher('Megan','Nasser', 'Social Studies'));
allTeachers.push(new Teacher('Keldon','Clegg', 'History'));
allTeachers.push(new Teacher('Carl','Rogers','English'));

allSections.push(new Section('IB Math SL2', 25, 22));
allSections.push(new Section('AP Chemistry', 30, 30));
allSections.push(new Section('IB SL Computer Science', 30, 30));
allSections.push(new Section('TOK', 25, 25));
allSections.push(new Section('IB HL History', 35, 35));
allSections.push(new Section('IB HL English', 25, 25));

allSections[0].students.push(allStudents[0]);
allSections[0].students.push(allStudents[1]);
allSections[0].students.push(allStudents[2]);
allSections[0].teacher = allTeachers[0];
allSections[2].teacher = allTeachers[2];

var allObjects =[allStudents, allTeachers, allSections];
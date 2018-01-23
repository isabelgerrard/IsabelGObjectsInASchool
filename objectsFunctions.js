//top menu/ lists
function listItems(){
    console.log(allObjects);
    var chosen = document.getElementById("list").value;
    var itemsToList = allObjects[chosen];
    console.log(itemsToList);
    var result = "<table id='thingsListedTable' cellpadding=15>";

    //student
    if(chosen == 0) {
        result +="<tr>";
        result+="<td>" + "First" + "</td>";
        result+="<td>" + "Last" + "</td>";
        result+="<td>" + "Grade" + "</td>";

        result+="</tr>";
        for (var i = 0; i < itemsToList.length; i++) {
            result += "<tr>";

            result += "<td>" + itemsToList[i].fName + "</td>";
            result += "<td>" + itemsToList[i].lName + "</td>";
            result += "<td>" + itemsToList[i].grade + "</td>";

            result += "</tr>";
        }
    }
    //teacher
    if(chosen == 1) {
        result +="<tr>";
        result+="<td>" + "First" + "</td>";
        result+="<td>" + "Last" + "</td>";
        result+="<td>" + "Subject" + "</td>";

        result+="</tr>";
        for (var i = 0; i < itemsToList.length; i++) {
            result += "<tr>";

            result += "<td>" + itemsToList[i].fName + "</td>";
            result += "<td>" + itemsToList[i].lName + "</td>";
            result += "<td>" + itemsToList[i].subject + "</td>";

            result += "</tr>";
        }
    }

    //section
    if(chosen == 2) {
       result +="<tr>";
       result+="<td>" + "Course" + "</td>";
        result+="<td>" + "Max Size" + "</td>";
        result+="<td>" + "Seats Remaining" + "</td>";
        result+="<td>" + "Teacher" + "</td>";

        result+="</tr>";

        for (var i = 0; i < itemsToList.length; i++) {
            result += "<tr>";

            result += "<td>" + itemsToList[i].course + "</td>";
            result += "<td>" + itemsToList[i].maxSize + "</td>";
            result += "<td>" + itemsToList[i].seatsLeft + "</td>";

            if(itemsToList[i].teacher != null) {
                result += "<td>" + itemsToList[i].teacher.lName + "</td>";
            } else {
                result += "<td></td>";
            }
            result += "</tr>";
        }
    }

    result += "</table>"
    document.getElementById("thingsListed").innerHTML = result;
    document.getElementById("thingsListed").style.display = "block";
}
function listSections2(){
    console.log(allSections);
    var result = "<select id='sections2'>";
    for(var j=0; j<allSections.length; j++) {
        result += "<option value='" + allSections[j].id + "'>" + allSections[j].course +  "</option>";
    }
    result += "</select>";
    console.log(result);
    document.getElementById("sectionsListed2").innerHTML = result;
    document.getElementById("sectionsListed2").style.display = "block";
}
function listSecStudents(){
    var sectionId = document.getElementById("sections2").value;
    var sectionChosen = findSectionById(sectionId);
    console.log(sectionChosen);
    var result = "<table id='secListedTable2' cellpadding=15>";
    var studentsArray = sectionChosen.students;
    console.log(studentsArray);
    result += "<tr>";
    if(studentsArray.length>0){
        for(var i=0; i<studentsArray.length; i++) {
            result+= "<td>" + sectionChosen.students[i].fName + " " + sectionChosen.students[i].lName + "</td>";
        }
    } else {
        result+= "<td>" + "ERROR! No Students in this Section or no Section Selected. Add Students to Sections in Section menu below." + "</td>";
    }
    result += "</tr>";
    result += "</table>";
    document.getElementById("sectionInfoListed").innerHTML = result;
    document.getElementById("sectionInfoListed").style.display = "inline";
}
function hideItems(){
    document.getElementById("thingsListed").style.display = "none";
    document.getElementById("sectionInfoListed").style.display = "none";
    document.getElementById("searchStudentInterface").style.display = "none";
    document.getElementById("sectionsListed2").style.display = "none";
    document.getElementById("studentInfo").style.display = "none";
    document.getElementById("stuFirstName").value = "";
    document.getElementById("stuLastName").value = "";
}
function searchStu(){
    var stuFirstName = document.getElementById("stuFirstName").value;
    var stuLastName = document.getElementById("stuLastName").value;
    var studentCH = findStudentByName(stuFirstName, stuLastName);

    var result = "<table id='studentInfoListedTable' cellpadding=15>";
    result += "<tr>";
    for(var i=0; i<allSections.length; i++) {
        if(allSections[i].students.indexOf(studentCH) != -1){
            result+= "<td>" + allSections[i].course + "</td>";
        }
    }
    result += "</tr>";
    result += "</table>";
    document.getElementById("studentInfo").innerHTML = result;
    document.getElementById("studentInfo").style.display = "block";
}

//CREATE NEW MENU
function createNewStudent(){
    var fName = document.getElementById("studentFirstName").value;
    var lName = document.getElementById("studentLastName").value;
    var grade = document.getElementById("studentGrade").value;
    allStudents.push(new Student(fName, lName, grade));
}
function createNewTeacher(){
    var fname = document.getElementById("teacherFirstName").value;
    var lname = document.getElementById("teacherLastName").value;
    var subject = document.getElementById("teacherSubject").value;
    allTeachers.push(new Teacher(fname, lname, subject));

}
function createNewSection(){
    var course = document.getElementById("sectionCourse").value;
    var maxCount = document.getElementById("sectionMaxSize").value;
    allSections.push(new Section(course, maxCount));
}

//DISPLAYS
function displayStudentMenu(){
    document.getElementById("newTeacherInterface").style.display = "none";
    document.getElementById("newSectionInterface").style.display = "none";
    document.getElementById("newStudentInterface").style.display = "block";
}
function displayTeacherMenu(){
    document.getElementById("newStudentInterface").style.display = "none";
    document.getElementById("newSectionInterface").style.display = "none";
    document.getElementById("newTeacherInterface").style.display = "block";
}
function displaySectionMenu(){
    document.getElementById("newTeacherInterface").style.display = "none";
    document.getElementById("newStudentInterface").style.display = "none";
    document.getElementById("newSectionInterface").style.display = "block";
}
function hideAllAdds(){
    document.getElementById("newTeacherInterface").style.display = "none";
    document.getElementById("newStudentInterface").style.display = "none";
    document.getElementById("newSectionInterface").style.display = "none";
}

//SECTION MENU
//DISPLAYS
function displayTeacherToSectionMenu(){
    document.getElementById("studentToSectionInterface").style.display = "none";
    document.getElementById("removeStudentInterface").style.display = "none";
    document.getElementById("teacherToSectionInterface").style.display = "block";
}
function displayStudentToSectionMenu(){
    document.getElementById("teacherToSectionInterface").style.display = "none";
    document.getElementById("removeStudentInterface").style.display = "none";
    document.getElementById("studentToSectionInterface").style.display = "block";
}
function displayRemoveStudentSectionMenu(){
    document.getElementById("teacherToSectionInterface").style.display = "none";
    document.getElementById("studentToSectionInterface").style.display = "none";
    document.getElementById("removeStudentInterface").style.display = "block";
}
function displaySearchStudent(){
    document.getElementById("searchStudentInterface").style.display = "block";
}

//LIST FUNCTIONS
function listTeachers() {
    var result = "<select id='teachers'>";
    for (var j = 0; j < allTeachers.length; j++) {
        result += "<option value='" + allTeachers[j].id + "'>" + allTeachers[j].lName + "</option>";
    }
    result += "</select>";
    console.log(result);
    document.getElementById("teachersListed").innerHTML = result;
}
function listSections(){
    var result = "<select id='sections'>";
    for(var j=0; j<allSections.length; j++) {
        result += "<option value='" + allSections[j].id + "'>" + allSections[j].course +  "</option>";
    }
    result += "</select>";
    console.log(result);
    document.getElementById("sectionsListed").innerHTML = result;
}
function listSections3(){
    console.log(allSections);
    var result = "<select id='sections3'>";
    for(var j=0; j<allSections.length; j++) {
        result += "<option value='" + allSections[j].id + "'>" + allSections[j].course +  "</option>";
    }
    result += "</select>";
    console.log(result);
    document.getElementById("sectionsListed3").innerHTML = result;
}
function listSections4(){
    console.log(allSections);
    var result = "<select id='sections4'>";
    for(var j=0; j<allSections.length; j++) {
        result += "<option value='" + allSections[j].id + "'>" + allSections[j].course +  "</option>";
    }
    result += "</select>";
    console.log(result);
    document.getElementById("sectionsListed4").innerHTML = result;
}
function listStudents(){
    var result = "<select id='students'>";
    for(var j=0; j<allStudents.length; j++) {
        result += "<option value='" + allStudents[j].id + "'>" + allStudents[j].fName + " " + allStudents[j].lName +  "</option>";
    }
    result += "</select>";
    console.log(result);
    document.getElementById("studentsListed").innerHTML = result;
}
function listStudents2(){
    var result = "<select id='students2'>";
    var sectionId = document.getElementById("sections4").value;
    var sectionChosen = findSectionById(sectionId);
    var studentsArray = sectionChosen.students;
    console.log(studentsArray);

    for(var i=0; i<studentsArray.length; i++) {
        result+= "<option value='" + sectionChosen.students[i].id + "'>" + sectionChosen.students[i].fName + " " + sectionChosen.students[i].lName + "</option>";
    }
    result += "</select>";
    console.log(result);
    document.getElementById("studentsListed2").innerHTML = result;
}
function hideAllSecond(){
    document.getElementById("teacherToSectionInterface").style.display = "none";
    document.getElementById("studentToSectionInterface").style.display = "none";
    document.getElementById("removeStudentInterface").style.display = "none";
}

//ADD FUNCTIONS
function addTeacherToSection(){
    var sectionId = document.getElementById("sections").value;
    console.log(sectionId);
    var teacherId = document.getElementById("teachers").value;
    console.log(teacherId);

    var section = findSectionById(sectionId);
    console.log(section.course);
    var teacherCH = findTeacherById(teacherId);
    console.log(teacherCH.lName);

    section.teacher = teacherCH;
}
function addStudentToSection(){
    var sectionId = document.getElementById("sections3").value;
    console.log(sectionId);
    var studentId = document.getElementById("students").value;
    console.log(studentId);

    var section = findSectionById(sectionId);
    console.log(section.course);
    var studentCH = findStudentById(studentId);

    if(section.seatsLeft > 0 && section.students.indexOf(studentCH)==-1){
        section.students.push(studentCH);
        section.seatsLeft -= 1;
    }
}
function removeStudentFromSection(){
    var sectionId = document.getElementById("sections4").value;
    console.log(sectionId);
    var studentId = document.getElementById("students2").value;
    console.log(studentId);

    var sectionCH = findSectionById(sectionId);
    console.log(sectionCH.course);
    var studentPosition = findArrayValue(sectionCH, studentId);
    var studentsArray = sectionCH.students;

    studentsArray.splice(studentPosition, 1);
    console.log(section.students);
}

//Find By IDs functions
function findSectionById(sectionId){
    for(var i=0; i < allSections.length; i++){
        if(allSections[i].id == sectionId){
            return allSections[i];
        }
    }
}
function findTeacherById(teacherId){
    for(var i=0; i < allTeachers.length; i++){
        if(allTeachers[i].id == teacherId){
            return allTeachers[i];
        }
    }
}
function findStudentById(studentId){
    for(var i=0; i < allStudents.length; i++){
        if(allStudents[i].id == studentId){
            return allStudents[i];
        }
    }
}
function findArrayValue(section, studentId){
    for(var i=0; i<section.students.length; i++){
        if(section.students[i].id == studentId){
            return i;
        }
    }
}
function findStudentByName(first, last){
    for(var i =0;i<allStudents.length; i++){
        if(allStudents[i].fName == first && allStudents[i].lName == last){
            result = allStudents[i];
        }
    }
    // if(result == null){
    //     result = "Student does not exist. Create a new student below or try again. Be sure to capitalize."
    //     document.getElementById("studentInfo").innerHTML = result;
    //     document.getElementById("studentInfo").style.display = "block";
    // }
    return result;
}


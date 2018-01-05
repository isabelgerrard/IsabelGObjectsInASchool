function listItems(){
    console.log(allObjects);
    var chosen = document.getElementById("list").value;
    var itemsToList = allObjects[chosen];
    console.log(itemsToList);
    var result = "<table id='thingsListedTable' cellpadding=15>";

    for(var i=0; i<itemsToList.length; i++) {
        result += "<tr>";
        for(var key in itemsToList[i]){
            result+= "<td>" + itemsToList[i][key] + "</td>";
        }
        result += "</tr>";
    }
    result += "</table>"
    document.getElementById("thingsListed").innerHTML = result;
    document.getElementById("thingsListed").style.display = "block";
}

function listSectionInfo(){
    console.log(allObjects);
    var chosenSection = document.getElementById("selectSection").value;
    var section = allSections[chosenSection];
    var teachers = section[teachers];
    console.log(section);
    console.log(teachers);
    var result = "<table id='sectionInfoListedTable' cellpadding=15>";

    for(var i=0; i<teachers.length; i++) {
        result += "<tr>";
        for(var key in teachers[i]){
            result+= "<td>" + teachers[i][key] + "</td>";
        }
        result += "</tr>";
    }
    result += "</table>"
    document.getElementById("infoListed").innerHTML = result;
    document.getElementById("infoListed").style.display = "block";
}


//
// function listTeachersinSection(){
//     var chosenSection = document.getElementById("selectSection").value;
//     console.log(chosenSection);
//     var result = "<table id='teachersListedTable' cellpadding=15>";
//
//     for(var i=0; i<section.teachers.length; i++) {
//         result += "<tr>";
//         for(var teachers in chosenSection){
//             result+= "<td>" + chosenSection[i][teachers] + "</td>";
//         }
//         result += "</tr>";
//     }
//     result += "</table>"
//     document.getElementById("teachersListedinSection").innerHTML = result;
//     document.getElementById("teachersListedinSection").style.display =   "block";
// }

function hideItems(){
    document.getElementById("thingsListed").style.display = "none";
    document.getElementById("teachersListedinSection").style.display = "none";
}

//CREATE NEW MENU
function createNewStudent(){
    var fName = document.getElementById("studentFirstName").value;
    var lName = document.getElementById("studentLastName").value;
    var grade = document.getElementById("studentGrade").value;
    var id = document.getElementById("studentIDNumber").value;
    allStudents.push(new Student(fName, lName, grade, id));
}
function createNewTeacher(){
    var fname = document.getElementById("teacherFirstName").value;
    var lname = document.getElementById("teacherLastName").value;
    var subject = document.getElementById("teacherSubject").value;
    allTeachers.push(new Teacher(fname, lname, subject));

}
function createNewSection(){
    var course = document.getElementById("sectionCourse").value;
    var maxCount = document.getElementById("SectionMaxSize").value;
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

//LIST FUNCTIONS
function listTeachers(){
    console.log(allTeachers);
    var result = "<select id='teachers'>";

    for(var i=0; i<allTeachers.length; i++) {
        result += "<option value=" + i;
        for(var key in allTeachers[i]){
            result+= ">" + allTeachers[i][key] + "</option>";
            console.log(result);
        }
    }
    result += "</select>"
    document.getElementById("teachersListed").innerHTML = result;
}
function listSections(){
    console.log(allSections);
    var result = "<select id='sections'>";
    for(var j=0; j<allSections.length; j++) {
        result += "<option value=" + j;
        for(var key in allSections[j]){
            result+= ">" + allSections[j][key] + "</option>";
            console.log(result);
        }
    }
    result += "</select>";
    console.log(result);
    document.getElementById("sectionsListed").innerHTML = result;
}

// function listStudents(){



function hideAllSecond(){
    document.getElementById("teacherToSectionInterface").style.display = "none";
    document.getElementById("studentToSectionInterface").style.display = "none";
    document.getElementById("removeStudentInterface").style.display = "none";
}

//ADD FUNCTIONS
function addTeacherToSection(){
    var sectionChosen = document.getElementById("sectionsListed").value;
    var teacherChosen = document.getEemenyById("teachersListed").value;
    sectionChosen.addTeacher(teacherChosen);
}
//
// function removeStudentFromSection(student,section){
//
// }
//
// function addStudentToSection(){
//
// }
//



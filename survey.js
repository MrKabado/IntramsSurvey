// localStorage.clear();
function getData() {
    //STUDENTS INFO
    let lname = document.getElementById("lname");
    let fname = document.getElementById("fname");
    let mname = document.getElementById("mname");
    let gender = document.querySelector('input[name="gender"]:checked');
    let course = document.getElementById("course");
    let yrsec = document.getElementById("yr&sec");
    //1
    let ans1 = document.querySelector('input[name="YesNo1"]:checked');
    let ifno1 = document.getElementById("IfNo1");
    //2
    let ans2 = document.querySelector('input[name="YesNo2"]:checked');
    let ifno2 = document.getElementById("IfNo2");
    //3
    let intramsEvent = document.getElementById("intrams-event");
    let ifno3 = document.getElementById("IfNo3");
    //4
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let checkboxans = Array.from(checkboxes).map(checkbox => checkbox.value).join(', ');
    let ans4 = document.getElementById("joinevent");
    //5
    let ans5 = document.getElementById("addevent");

    
    //LOCAL STORAGE
    localStorage.setItem("LastName", lname.value);
    localStorage.setItem("FirstName", fname.value);
    localStorage.setItem("MiddleName", mname.value);
    localStorage.setItem("Gender", gender.value);
    localStorage.setItem("Course", course.value);
    localStorage.setItem("YearSection", yrsec.value);
    //LOCAL STORAGE 1
    localStorage.setItem("Answer1", ans1.value);
    localStorage.setItem("IfOthers1", ifno1.value);
    //LOCAL STORAGE 2
    localStorage.setItem("Answer2", ans2.value);
    localStorage.setItem("IfOthers2", ifno2.value);
    //LOCAL STORAGE 3
    localStorage.setItem("IntramsEvent", intramsEvent.value);
    localStorage.setItem("IfOthers3", ifno3.value);
    //LOCAL STORAGE 4
    localStorage.setItem("Checkanswer", checkboxans);
    localStorage.setItem("Answer4", ans4.value);
    //LOCAL STORAGE 5
    localStorage.setItem("Answer5", ans5.value);
        
        window.location.href = "response.html";
}

function displayData() {
    // DISPLAY STUDENTS INFO
    document.getElementById("lastname").innerText = localStorage.LastName;
    document.getElementById("firstname").innerText = localStorage.FirstName;
    document.getElementById("middlename").innerText = localStorage.MiddleName;
    document.getElementById("gender").innerText = localStorage.Gender;
    document.getElementById("user-course").innerText = localStorage.Course;
    document.getElementById("YrSec").innerText = localStorage.YearSection;

    // DISPLAY ANSWER TO QUESTION 1
    let answer1 = localStorage.Answer1;
    let ifOthers1 = localStorage.IfOthers1;

    document.getElementById("answer1").innerText = answer1;

    if (answer1 && answer1.toLowerCase() === "no" && ifOthers1) {
        document.getElementById("other1").innerText = ifOthers1;
    } else {
        document.getElementById("other1").style.display = "none"; // Hide the element if not needed
    }

    //DISPLAY ANSWER TO QUESTION 2
    let answer2 = localStorage.Answer2;
    let ifOthers2 = localStorage.IfOthers2;

    document.getElementById("answer2").innerText = answer2;

    if (answer2 && answer2.toLowerCase() === "no" && ifOthers2) {
        document.getElementById("other2").innerText = ifOthers2;
    } else {
        document.getElementById("other2").style.display = "none";
    }

    //DISPLAY ANSWER TO QUESTION 3
    let intramsEvent = localStorage.IntramsEvent;
    // let ifOther3 = localStorage.ifOthers3;

    document.getElementById("answer3").innerText = intramsEvent;
    if (localStorage.IfOthers3) {
    document.getElementById("others3").innerText ="Other: " + localStorage.IfOthers3;
    }

    //DISPLAY ANSWER TO QUESTION 4
    // let checkBoxAns = localStorage.Checkanswer;
    let answerCheckbox = localStorage.Checkanswer;
    let answer4 = localStorage.Answer4;

    document.getElementById("checkbox").innerText = answerCheckbox + ", ";
    if (answer4) {
    document.getElementById("answer4").innerText ="other:\n" + answer4;
    }
    //DISPLAY ANSWER TO QUESTION 5
    let answer5 = localStorage.Answer5;

    document.getElementById("answer5").innerText = answer5;



    

    

}
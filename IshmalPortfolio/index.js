//DECLARING VARIABLES
let nextbutton = document.getElementById('nextbutton');

var i = 1;

let currentform = document.getElementById('form1');
let nextform = document.getElementById('form2');

let currentstep = document.getElementById('step1');
let nextstep = document.getElementById('step2');

//IF 4 STEPS HAVE OCCURRED IN THE CONTACT FORM
let ChangeStep = () => {
  console.log("Heree");
  if(i>4){
    alert('Already filled the form');
    return;
  }

//DEPENDING ON THE NUMBER OF TIMES NEXT HAS BEEN CLICKED GET THE RESPECTIVE FORM
  if (i == 2){
//    console.log("hELlooo");

    currentform = document.getElementById('form2');
    nextform = document.getElementById('form3');

    currentstep = document.getElementById('step2');
    nextstep = document.getElementById('step3');
  }

  if (i == 3){
    console.log("hELlooo");
    currentform = document.getElementById('form3');
    nextform = document.getElementById('form4');

    currentstep = document.getElementById('step3');
    nextstep = document.getElementById('step4');
  }

  if(i==3){
    setTimeout(myFunction, 500)
  }
  currentform.style.display = "none";
  nextform.style.display = "block";

  currentstep.style.display = "none";
  nextstep.style.display = "block";

  i = i + 1;
  console.log(i);
}

//GIVE A POP UP WHEN FORM HAS BEEN SUBMITTED
function myFunction() {
  form4.innerText = "Thank you for reaching out!";
  alert('Ishmal will reach out to you soon!');
  setTimeout(myFunction2, 1000)
}
function myFunction2() {
  document.getElementById("myNav").style.width = "0%";
}

//CHANGE STEP UPON CLICK
nextbutton.addEventListener('click',ChangeStep)

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

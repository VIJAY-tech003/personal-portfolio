
// SHOW HIDE CONTENT

function toggleContent(){

let content=document.getElementById("extraContent");

if(content.style.display==="none"){
content.style.display="block";
}
else{
content.style.display="none";
}

}



// IMAGE SLIDER

let images=[

"https://media.istockphoto.com/id/1400093174/vector/inspirational-lettering-quote-for-prints-cards-posters.jpg?s=612x612&w=0&k=20&c=C1lo_sX1tNTtBGxCXlxLfp74I_V8sTn7OP4xphtVcqo=",

"https://thumbs.dreamstime.com/b/inspirational-quotes-make-each-day-your-masterpiece-187434807.jpg",

"https://images.unsplash.com/photo-1519389950473-47ba0277781c"

];

let index=0;

function nextImage(){

index++;

if(index>=images.length){

index=0;

}

document.getElementById("sliderImage").src=images[index];

}


function prevImage(){

index--;

if(index<0){

index=images.length-1;

}

document.getElementById("sliderImage").src=images[index];

}



// TODO LIST

function addTask(){

let input=document.getElementById("taskInput");

let task=input.value;

if(task===""){

alert("Enter a task");

return;

}

let li=document.createElement("li");

li.innerHTML=task+" <button onclick='removeTask(this)'>Delete</button>";

document.getElementById("taskList").appendChild(li);

input.value="";

}


function removeTask(button){

button.parentElement.remove();

}



// FORM VALIDATION

function validateForm(){

let name=document.getElementById("name").value;

let email=document.getElementById("email").value;

let message=document.getElementById("message").value;

if(name==="" || email==="" || message===""){

alert("Please fill all fields");

return false;

}

alert("Form submitted successfully!");

return true;

}



// DARK MODE

function toggleMode(){

document.body.classList.toggle("light-mode");

}
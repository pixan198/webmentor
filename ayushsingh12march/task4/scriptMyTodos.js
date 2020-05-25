//alert("connected");

var allToDo = document.getElementById("switch");
var li;
var addButton= document.querySelector("#add");
addButton.addEventListener("click",adding);


function adding(){
   // alert("hi");
var inputFromInput=document.querySelector("#inputText");
var labelInsert = document.createElement("label");
var inputInsert = document.createElement("input");
var spanInsert = document.createElement("span");
var breakLine = document.createElement("br");
spanInsert.className="bmd-switch-track";
//spanInsert.innerHTML ="::after";
if(inputFromInput.value ==='')
    alert("insert value");
else{
    labelInsert.innerHTML=inputFromInput.value;
    inputFromInput.value="";
}
inputInsert.type="checkbox";
inputInsert.name="toDo";
inputInsert.id = "toDo";

labelInsert.appendChild(inputInsert);
labelInsert.appendChild(spanInsert);

allToDo.insertBefore(labelInsert,allToDo.firstChild);
allToDo.insertBefore(breakLine,allToDo.childNodes[1]);
   
}


var removeButton= document.querySelector("#remove");
removeButton.addEventListener("click",removing);




function removing(){
    li=allToDo.children;
    
     console.log(li)
    // allToDo.removeChild(li[0]);
     //allToDo.removeChild(li[0]);
    //allToDo.removeChild(li[4]);
    for (let index = 0; index < li.length; index=index+2) {
        //console.log(li[index]);
        //allToDo.removeChild(li[index]);
        //console.log(li[index].children[0])
        
        // if(li[index].children[0].checked==true && li[index]){
        //     allToDo.removeChild(li[index]);
        // }
       while(li[index] && li[index].children[0].checked  )
       {
           allToDo.removeChild(li[index]);
           allToDo.removeChild(li[index]);
       }
        
    }
}



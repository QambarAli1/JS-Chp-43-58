// CHP 43 to 48

// Q1 starts here

// function link(){
//     alert("Thanks for visiting our websites");
// }






// Q2 starts here



// function thanks(){
//     alert("Thaks for purchasing phone from Us")
// }


// Q2 ends here







// Q3 starts here 



// function deletee1(){
//     var a = document.getElementById('row1');
//     a.style.display = 'none'
// }

// function deletee2(){
//     var a = document.getElementById('row2');
//     a.style.display = 'none'
// }

// function deletee3(){
//     var a = document.getElementById('row3');
//     a.style.display = 'none'
// }

// function deletee4(){
//     var a = document.getElementById('row4');
//     a.style.display = 'none'
// }

// function deletee5(){
//     var a = document.getElementById('row5');
//     a.style.display = 'none'
// }



// Q3 ends here 






// Q4 starts here 



// function after(){
//     var a = document.getElementById('img1');
//     a.src = ('images/oppo.jpg');
// }

// function before(){
//     var a = document.getElementById('img1');
//     a.src = ('images/infinix.jpg');
// }



// Q4 ends here 





// Q5 starts here 




// var i = 0;
// function inc(){
//      i += 1;
//      var a = document.getElementById('no')
//      a.innerHTML = i;
// }
// function dec(){
//     i -= 1;
//     var a = document.getElementById('no')
//     a.innerHTML = i;
// }




// Q5 ends here 








// CHP 49 to 52

// Q1 starts here 



// function getValues(){
//     var a = document.getElementById('fname').value;

//     var b = document.getElementById('lname').value;

//     var c = document.getElementById('email').value;

//     var d = document.getElementById('city').value;

//     var result = "<h3> RESULT </h3>" + "<br>" +
//                  'Name : ' + a  + ' ' + b +  '<br>' +  
//                  'Email : '+ c + '<br> ' +'City : '+ d;
//     document.getElementById('result').innerHTML = result;    
// }



// Q1 ends here 




// Q2 starts here 


// var a = "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.While it is most well - known as the scripting language for Web pages, many non - browserenvironments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.JavaScript is a prototype - based, multi - paradigm, single - threaded, dynamic language, supporting object - oriented, imperative, and declarative(e.g.functional programming) styles.Read more about JavaScript. This section is dedicated to the JavaScript language itself, and not the parts that are specific to Web pages or other host environments.For information about API specifics to Web pages, please see Web APIs and DOM."
// function readMore(){
//     var b = document.getElementById('js-para');
//     b.innerHTML = a.slice(0);
// }


// Q2 ends here 



// Q3 starts here 


// function add() {
//     var getTable = document.getElementById('table');
//     var getRollNo = document.getElementById('rollno');
//     var getClass = document.getElementById('class');
//     var getName = document.getElementById('name');
//     var createTr = document.createElement('tr');
//     createTr.setAttribute('class','info');

//     var td1 = document.createElement('td');
//     var td2 = document.createElement('td');
//     var td3 = document.createElement('td');
//     var txtNodeForTd1 = document.createTextNode(getRollNo.value);
//     var txtNodeForTd2 = document.createTextNode(getName.value);
//     var txtNodeForTd3 = document.createTextNode(getClass.value);
//     var setTd1 = td1.appendChild(txtNodeForTd1);
//     var setTd2 = td2.appendChild(txtNodeForTd2);
//     var setTd3 = td3.appendChild(txtNodeForTd3);
//     var apptr1 = createTr.appendChild(td1);
//     var apptr2 = createTr.appendChild(td2);
//     var apptr3 = createTr.appendChild(td3);
//     var dltBtn = document.createElement('button');
//     var dlttxt = document.createTextNode('Delete');
//     var appdlttxt = dltBtn.appendChild(dlttxt);
//     createTr.appendChild(dltBtn);
//     dltBtn.setAttribute('onclick','dlt(this)')
//     var appTr = getTable.appendChild(createTr);
//     getRollNo.value = '';
//     getClass.value = '';
//     getName.value = '';
    
// }

// function dlt(e){
//     e.parentNode.remove();
// }



// Q3 ends here 

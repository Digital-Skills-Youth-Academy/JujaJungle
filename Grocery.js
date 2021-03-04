const bagWeight = 5;
const itemsPerBag = 8; 
//var totalItems= ;
//var BagsUsed= totalItems / 8 ;
var plasticUsed//= bagWeight*;

var button= document.getElementById('newList');
button.addEventListener('click', draftList)


var button2= document.getElementById('typeList');
button2.addEventListener('click', toLists);
//Element.classList.add("");



var draftTwo = document.getElementById('listThree');
var draftList = document.getElementById('listTwo');
var draftThree = document.getElementById('listOne');

var newList = document.getElementById('typeList');

newList.style.display='none';


function toLists() {
    newList.style.display='none';
    draftTwo.style.display='block';
    draftThree.style.display='block';
    draftList.style.display='block';
    button.style.display='block';
    
}

function draftList() {
    console.log ('yeah its working!')
    
    draftList.style.display = 'none';
   
    draftTwo.style.display= 'none';

    draftThree.style.display= 'none';

    button.style.display='none';

    newList.style.display='block';
}
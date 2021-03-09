let ReadMoreButton = document.getElementById('arrow');
let RemainingArticle = document.getElementById('RemainingArticle');
let AdjustFlex = document.getElementById('article1');

ReadMoreButton.addEventListener('click', function () {
    //alert("clicked");
    if (RemainingArticle.classList == 'expandArticle') {
        RemainingArticle.classList.remove("expandArticle");
        AdjustFlex.classList.remove("expand");
        AdjustFlex.classList.add("post");
        RemainingArticle.classList.add("condense");
        ReadMoreButton.src = "arrowdown.png";
    }
    else {
        AdjustFlex.classList.remove("post");
        RemainingArticle.classList.remove("condense");
        AdjustFlex.classList.add("expand");
        RemainingArticle.classList.add("expandArticle");
        ReadMoreButton.src = "arrowup.png";
    }
})

var titles = [];
var titleInput = document.getElementById("title");
var messageBox = document.getElementById("display");
var nameInput = document.getElementById("name");
function Allow()
{
    if (!user.title.value.match(/[a-zA-Z]$/) && user.title.value !="")
    {
        user.title.value="";
        alert("Please Enter only alphabets");
    }
    window.location.reload()
}
function insert () {
    titles.push([nameInput.value,titleInput.value]);
    clearAndShow();
}
function clearAndShow ()
{
titleInput.value = "";
nameInput.value="";
messageBox.innerHTML = "";
var messages= '';
    for (var i = 0; i<titles.length; i++) {
        messages += '<div class="subheader">';
        messages += titles[i][0];
        messages += '</div>';
        messages += '<div class="body">';
        messages += titles[i][1];
        messages += '</div>';
    }
    messageBox.innerHTML = messages;
// AdjustFlex.style.height = AdjustFlex.style.height + "100px";
    
}

// -----------------------------------------------------------------------------------------------------------------------
//
//

// let ReadMoreButton2 = document.getElementById('arrow2');
// let RemainingArticle2 = document.getElementById('RemainingArticle2');
// let AdjustFlex2 = document.getElementById('article2');

// ReadMoreButton2.addEventListener('click', function () {
//     //alert("clicked");
//     if (RemainingArticle2.classList == 'expandArticle') {
//         RemainingArticle2.classList.remove("expandArticle");
//         AdjustFlex2.classList.remove("expand");
//         AdjustFlex2.classList.add("post");
//         RemainingArticle2.classList.add("condense");
//         ReadMoreButton2.src = "arrowdown.png";
//     }
//     else {
//         AdjustFlex2.classList.remove("post");
//         RemainingArticle2.classList.remove("condense");
//         AdjustFlex2.classList.add("expand");
//         RemainingArticle2.classList.add("expandArticle");
//         ReadMoreButton2.src = "arrowup.png";
//     }
// })


// var titles2 = [];
// var titleInput2 = document.getElementById("title2");
// var messageBox2 = document.getElementById("display2");
// var nameInput2 = document.getElementById("name2");
// function Allow()
// {
//     if (!user.title.value.match(/[a-zA-Z]$/) && user.title.value !="")
//     {
//         user.title.value="";
//         alert("Please Enter only alphabets");
//     }
//     window.location.reload()
// }
// function insert () {
//     titles2.push([nameInput2.value,titleInput2.value]);
//     clearAndShow();
// }
// function clearAndShow ()
// {
// titleInput2.value = "";
// nameInput2.value="";
// messageBox2.innerHTML = "";
// var messages= '';
//     for (var i = 0; i<titles2.length; i++) {
//         messages += '<div class="subheader">';
//         messages += titles2[i][0];
//         messages += '</div>';
//         messages += '<div class="body">';
//         messages += titles2[i][1];
//         messages += '</div>';
//     }
//     messageBox2.innerHTML = messages;
// // AdjustFlex.style.height = AdjustFlex.style.height + "100px";
    
// }



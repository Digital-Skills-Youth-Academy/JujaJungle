let ReadMoreButton = document.getElementById('arrow');
let RemainingArticle = document.getElementById('RemainingArticle');
let AdjustFlex = document.getElementById('article1');

ReadMoreButton.addEventListener('click', function() {
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


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
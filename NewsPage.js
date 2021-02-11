let ReadMoreButton = document.getElementById('arrow');
let RemainingArticle = document.getElementById('RemainingArticle');

ReadMoreButton.addEventListener('click', function() {
    //alert("clicked");
    if (RemainingArticle.style.display == 'block') {
        RemainingArticle.style.display = 'none';
        RemainingArticle.style.height = '0px';
    }
    else{
        RemainingArticle.style.display = 'block';
        RemainingArticle.style.height = '1000px';
    }
})
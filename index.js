
function openScroll(){
    var qHeadings = document.getElementsByClassName("arrow");
    var isScrollActive = false;
    for(let i = 0; i < qHeadings.length; i++){
        qHeadings[i].addEventListener("click", function(){
            if(isScrollActive){
                document.getElementsByClassName("questPara")[i].style.display = "none";
                qHeadings[i].style = "transform: rotate(0deg)";
            }else{
                document.getElementsByClassName("questPara")[i].style.display = "block";
                qHeadings[i].style = "transform: rotate(180deg)";
            }
            isScrollActive = !isScrollActive;
        })
    }
}
openScroll();
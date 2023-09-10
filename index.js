
function openScroll(){
    var qHeadings = document.getElementsByClassName("questHeading");
    var isScrollActive = false;
    for(let i = 0; i < qHeadings.length; i++){
        qHeadings[i].addEventListener("click", function(){
            if(isScrollActive){
                qHeadings[i].style.fontWeight = "400";
                document.getElementsByClassName("arrow")[i].style = "transform: rotate(0deg)";
                document.getElementsByClassName("questPara")[i].style.display = "none";
            }else{
                qHeadings[i].style.fontWeight = "700";
                document.getElementsByClassName("arrow")[i].style = "transform: rotate(180deg)";
                document.getElementsByClassName("questPara")[i].style.display = "block";
            }
            isScrollActive = !isScrollActive;
        })
    }
}
openScroll();
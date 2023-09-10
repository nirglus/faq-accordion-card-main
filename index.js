
function openScroll(){
    var qHeadings = document.getElementsByClassName("arrow");
    var isScrollActive = false;
    for(let i = 0; i < qHeadings.length; i++){
        qHeadings[i].addEventListener("click", function(){
            if(isScrollActive){
                document.getElementsByClassName("questHeading")[i].style.fontWeight = "400";
                qHeadings[i].style = "transform: rotate(0deg)";
                document.getElementsByClassName("questPara")[i].style.display = "none";
            }else{
                document.getElementsByClassName("questHeading")[i].style.fontWeight = "700";
                qHeadings[i].style = "transform: rotate(180deg)";
                document.getElementsByClassName("questPara")[i].style.display = "block";
            }
            isScrollActive = !isScrollActive;
        })
    }
}
openScroll();
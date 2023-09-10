
function openScroll(){
    var qHeadings = document.getElementsByClassName("arrow");
    var isScrollActive = false;
    for(let i = 0; i < qHeadings.length; i++){
        qHeadings[i].addEventListener("click", function(){
            if(isScrollActive){
                document.getElementsByClassName("questPara")[i].style.display = "none";
            }else{
                document.getElementsByClassName("questPara")[i].style.display = "block";
            }
            isScrollActive = !isScrollActive;
        })
    }
    
}
openScroll();
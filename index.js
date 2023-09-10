function openScroll(){
    var paraArr = [
        `You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.`,
        `No more than 2GB. All files in your account must fit your allotted storage space.`,
        `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
        `Yes! Send us a message and we’ll process your request no questions asked.`,
        `Chat and email support is available 24/7. Phone lines are open during normal business hours`
    ]
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
                document.getElementsByClassName("questPara")[i].innerHTML= paraArr[i];
            }
            isScrollActive = !isScrollActive;
        })
    }
}
openScroll();
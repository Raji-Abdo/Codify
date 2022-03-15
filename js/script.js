function ex2 (){
    if (document.getElementById("ex2").style.backgroundImage == 'url("../Images/h2.png")'){
        document.getElementById("ex2").style.backgroundImage = 'url(../Images/h2-result.png)'
        }
    else if(document.getElementById("ex2").style.backgroundImage == 'url("../Images/h2-result.png")'){
        document.getElementById("ex2").style.backgroundImage = 'url("../Images/h2.png")'
        };
}

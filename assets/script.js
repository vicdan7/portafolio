function selection(link){
    const options = document.querySelectorAll('#links a');
    options[0].className = "";
    options[1].className = "";
    options[2].className = "";
    options[3].className = "";
    options[4].className = "";
    link.className = "selector";

    let x = document.getElementById("nav");
    x.className = "";

}

function responsiveMenu(){
    let x = document.getElementById("nav");
    if(x.className === ""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

window.onscroll = function(){
    efectSkills()
};

function efectSkills(){
    const skills = document.getElementById("skills");
    const distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distance_skills >= 300){
        document.getElementById("html&css").classList.add("set-progress1");
        document.getElementById("js").classList.add("set-progress2");
        document.getElementById("react").classList.add("set-progress3");
        document.getElementById("git&github").classList.add("set-progress4");
        document.getElementById("node").classList.add("set-progress5");
    }

}
/*global classes*/
const levels = document.getElementsByClassName("ex");
const ids = [];

for(let i of levels){
    ids.push(i.id);
}

const makeClass = function(classId){
    let classData = classes[classId];
    return `
        <div style="position: relative; border-radius: 16px">
            <img width="208" height="210" src="img/animals/${classData["img"]}" style="float: right; padding: 16px;"></img>
            <img width="208" height="210" src="img/animals/seaweed.png" class="seaweed-img" style="padding: 0 16px; position: absolute; bottom: -24px; right: 0; z-index: 10;"></img>
            <h2>${classData["name"]}</h2>
                <p>${classData["age"]?"Ages " + classData["age"]:""}</p>
                <p style="font-family: 'Open-Sans', sans-serif; font-weight: 300;">${classData["descrip"]}</p>
            <h3>Prerequisites</h3>
                <ul>${classData["prereq"].map(a => "<li>" + a + "</li>").reduce((a,b) => a + b)}</ul>
            <h3>Skills Learned</h3>
                <ul style="z-index: 50;">${classData["skills"].map(a => "<li>" + a + "</li>").reduce((a,b) => a + b)}</ul>
        </div>
        `;
};

for(let i of ids){
    let menuElem = document.getElementById(i);
    menuElem.addEventListener("click", function(event){
        document.getElementById("exploreContent").innerHTML = makeClass(i);
    });
}
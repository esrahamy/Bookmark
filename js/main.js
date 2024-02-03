let supmit = document.getElementById("supmut-btn");
var Title = document.getElementById("site-name")
var Url = document.getElementById("site-url")
var closeBtn = document.getElementsByClassName("close-btn")
let allMarkerdWepsite = [];
///////////////////////////////////////////////////////
if (localStorage.getItem("sitMark") != null) {
    allMarkerdWepsite = JSON.parse(localStorage.getItem('sitMark'))
    savedbook(allMarkerdWepsite);
}
function unvalidMassgOf() {
    let fullLayer = document.querySelector(".full-layr ");

    let unvalidMasseg = document.getElementsByClassName("unvalid-masseg");
    unvalidMasseg[0].classList.replace("d-block", "d-none");
    fullLayer.classList.replace("d-block", "d-none")


}

closeBtn[0].addEventListener("click", unvalidMassgOf);
function cheackUrl(link) {
    let pattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return pattern.test(link);
}
function cheackName(name) {
    let pattern = /.{3,}/;
    return pattern.test(name)
}

function validForm(name, link) {
    return (cheackName(name) && cheackUrl(link));

}

function clare() {
    Title.value = ""
    Url.value = ""

}
supmit.addEventListener('click', markSide)
function showUnvalidMasseg() {
    let unvalidMasseg = document.getElementsByClassName("unvalid-masseg");
    let fullLayer = document.querySelector(".full-layr ");

    unvalidMasseg[0].classList.replace("d-none", "d-block");
    fullLayer.classList.replace("d-none", "d-block")
}
function markSide() {
    // console.log(Url.value, "url")
    // console.log(cheackUrl())
    // console.log(cheackName())
    if (validForm(Title.value, Url.value)) {
        let sitMark = {
            siteName: Title.value,
            siteUrl: Url.value,
        }
        allMarkerdWepsite.push(sitMark);
        localStorage.setItem('sitMark', JSON.stringify(allMarkerdWepsite));
        savedbook(allMarkerdWepsite);
        clare();
    }
    else showUnvalidMasseg();

}

function visitSite(index) {
    window.open(allMarkerdWepsite[index].siteUrl, '_blank');
}


function savedbook(saved) {
    document.getElementById("savedbook").innerHTML = ''
    saved.forEach((item, index) => {
        document.getElementById("savedbook").innerHTML +=
            `  <tr>
       <td>${index + 1}</td>
       <td>${item.siteName}</td>
       <td><button class="btn btn-success" data-index="${item}" onclick="visitSite(${index})"> <i class="fa-solid fa-eye pe-2"></i>Visit</button> </td>
       <td>
       <button  class="btn btn-danger"data-index="${item}"onclick="deleterecord(${index});" > <i class="fa-solid fa-trash-can pe-2"></i>Delete</button>
       </td> 
      </tr>`
    });

}

function deleterecord(index) {
    allMarkerdWepsite.splice(index, 1);

    localStorage.setItem('bookmark', JSON.stringify(allMarkerdWepsite));
    savedbook(allMarkerdWepsite);
}
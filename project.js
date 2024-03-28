function openSidebarCreate() {
    document.getElementById("sidebarCreate").style.width = "30%";
    document.getElementById("page").style.opacity = ".99";
    document.getElementById("overlay").style.display = "block";

}

function openSidebarView() {
    document.getElementById("sidebarView").style.width = "30%";
    document.getElementById("page").style.opacity = ".99";
    document.getElementById("overlay").style.display = "block";
}

function openSidebarEdit() {
    document.getElementById("sidebarEdit").style.width = "30%";
    document.getElementById("page").style.opacity = ".99";
    document.getElementById("overlay").style.display = "block";
}

function closeSidebarCreate() {
    document.getElementById("sidebarCreate").style.width = "0";
    document.getElementById("page").style.opacity = "1";
    document.getElementById("overlay").style.display = "none";
}

function closeSidebarView() {
    document.getElementById("sidebarView").style.width = "0";
    document.getElementById("page").style.opacity = "1";
    document.getElementById("overlay").style.display = "none";
}

function closeSidebarEdit() {
    document.getElementById("sidebarEdit").style.width = "0";
    document.getElementById("page").style.opacity = "1";
    document.getElementById("overlay").style.display = "none";
}

document.getElementById("btnOpenSidebarCreate").addEventListener("click", openSidebarCreate);
document.getElementById("btnOpenSidebarCreateEmpty").addEventListener("click", openSidebarCreate);    

document.getElementById("btnOpenSidebarViewMore").addEventListener("click", openSidebarView);
document.getElementById("btnOpenSidebarEdit").addEventListener("click", openSidebarEdit);
document.getElementById("btnOpenSidebarView").addEventListener("click", openSidebarView);

function filledOffers() {
    document.getElementById("withOffer").style.display = "block"
    document.getElementById("withoutOffer").style.display = "none"
}

function emptyOffers() {
    document.getElementById("withOffer").style.display = "none"
    document.getElementById("withoutOffer").style.display = "block"
    document.getElementById("sideBar").style.height = "100vh"
}






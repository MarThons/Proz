const linkPageMain = document.getElementById("page-main");

document.addEventListener("keyup", (e) => {
    if (e.code == "Space") {
        linkPageMain.click();
    }
})
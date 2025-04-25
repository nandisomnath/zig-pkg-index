
function getFullPath(url)  {
    let _path = window.location.pathname;
    let f = _path + url;
    return url;
    
}



function updateNavBar() {
    let index = document.getElementById("index");
    let home = document.getElementById("home");
    let about_me = document.getElementById("about_me");

    index.href = getFullPath()

}

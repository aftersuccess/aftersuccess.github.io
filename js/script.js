const sideNav = document.getElementById("js_SideNav");
const sideNavBackground = document.getElementById("js_SideNavBackground");

function OpenNav() {

    const container = document.querySelector('.container');

    if (container.clientWidth >= container.clientHeight) {
        sideNav.style.width = "300px";
    }
    else {
        sideNav.style.width = "250px";
    }

    sideNavBackground.style.display = 'block';

}

function CloseNav() {

    sideNav.style.width = "0";
    sideNavBackground.style.display = 'none';

}
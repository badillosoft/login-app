function login() {
    const code = document.getElementById("txt-code").value;

    hot_request(`login/${code}`, user => {
        console.log(user);
        alert("ACABE :D");
    }, err => {
        console.log(err);
        alert(err);
    });

}

let isMenuOpen = false;
let lock = false;

function toggle_menu() {
    if (lock) {
        return;
    }

    lock = true;

    const menu = document.getElementById("menu");

    if (isMenuOpen) {
        menu.className = "menu menu-close";

        setTimeout(() => {
            menu.className = "menu hide";
            lock = false;
            isMenuOpen = !isMenuOpen;
        }, 1000);
    } else {
        menu.className = "menu menu-open";

        setTimeout(() => {
            lock = false;
            isMenuOpen = !isMenuOpen;
        }, 1000);
    }
}

function hide_menu() {
    if (lock) {
        return;
    }

    lock = true;

    const menu = document.getElementById("menu");

    if (isMenuOpen) {
        menu.className = "menu menu-close";

        setTimeout(() => {
            menu.className = "menu hide";
            lock = false;
            isMenuOpen = false;
        }, 1000);
    }
}
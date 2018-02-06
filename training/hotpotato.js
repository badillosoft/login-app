function hot_login(username, password, success, error) {
    const req = new XMLHttpRequest();

    const url_base = "http://hotpotatoart.herokuapp.com/api";

    const url = `${url_base}/users/${username}/login?pw=${password}`;

    req.open("GET", url, true);

    req.onreadystatechange = () => {
        if (req.readyState === 4) {
            if (req.status === 200) {
                const user = JSON.parse(req.responseText);
                if (!user || !user.token) {
                    error(user);
                    return;
                }
                success(user);
            }
        }
    };

    req.send(null);
}
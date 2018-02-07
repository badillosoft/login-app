function hot_request(url, success, error) {
    const req = new XMLHttpRequest();

    const _url = `http://casino-proto.herokuapp.com/api/${url}`;

    console.log(`Accediendo a: ${_url}`);
    
    req.open("GET", _url, true);

    req.onloadend = () => {
        if (req.status === 404) {
            if (error) error("No se puede acceder");
            return;
        }
        
        if (req.status === 400) {
            if (error) error(req.responseText);
            return;
        }

        if (success) success(JSON.parse(req.responseText));
    };

    req.send(null);
}
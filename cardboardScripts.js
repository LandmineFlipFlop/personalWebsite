function header(relative) {
    if (relative === undefined) {
        relative = '';
    }
    let header = "<div id='navbar'> <a class='link' href='";
    header += relative;
    header += "index.html?dark=false'>Home</a> <a class='link' href='";
    header += relative;
    header += "portfolio.html?dark=false'>portfolio</a> <a class='link' href='";
    header += relative;
    header += "personalProjects/projectList.html?dark=false'>projects</a> <a class='link' href='";
    header += relative;
    header += "musings/directory.html?dark=false'>musings</a> <a class='link' href='";
    header += relative;
    header += "sideTracks.html?dark=false'>collection</a> <a class='link' href='";
    header += relative;
    header += "about.html?dark=false'>about</a> <a href='' onclick='swap()' id='mode'>dark mode</a> </div>";
    document.getElementById('navbar').innerHTML = header;
}

function param() {
    const url = new URL(window.location.href);
    const dark = url.searchParams.get("dark");

    if (dark === "true") {
        document.getElementById("dark").disabled = false;
        document.getElementById("light").disabled = true;

        document.getElementById("mode").innerText = 'light mode';
        link(true)
    } else {
        document.getElementById("light").disabled = false;
        document.getElementById("dark").disabled = true;

        document.getElementById("mode").innerText = 'dark mode';
        link(false)
    }
}

function swap() {
    const url = new URL(window.location.href);
    const params = url.searchParams;

    const dark = params.get("dark");
    if (dark !== "true") {
        params.set("dark", "true");
    } else {
        params.set("dark", "false");
    }

    history.pushState({}, "", url);
    param();
}

function link(dark) {
    document.querySelectorAll("a").forEach(link => {
        const url = new URL(link.href, window.location.href);

        url.searchParams.set("dark", String(dark));

        link.href = url.href;
    });
}
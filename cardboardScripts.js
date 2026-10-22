document.addEventListener('DOMContentLoaded', () => {
    header();
    param();
});

function header() {
    document.getElementById('navbar').innerHTML = `
        <a class="link" href="/index.html">Home</a>
        <a class="link" href="/portfolio.html">Portfolio</a>
        <a class="link" href="/personalProjects/projectList.html">Projects</a>
        <a class="link" href="/musings/directory.html">Musings</a>
        <a class="link" href="/sideTracks.html">Collection</a>
        <a class="link" href="/about.html">About</a>
        <a href="#" onclick="swap(); return false;" id="mode">Dark mode</a>
    `;
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
        params.delete("dark");
    }

    history.pushState({}, "", url);
    param();
}

function link(dark) {
    document.querySelectorAll("a").forEach(link => {
        const url = new URL(link.href, window.location.href);

        if (link.target !== "_blank") {

            if (dark) {
                url.searchParams.set("dark", "true");
            } else {
                url.searchParams.delete("dark");
            }

            link.href = url.href;

        }
    });
}
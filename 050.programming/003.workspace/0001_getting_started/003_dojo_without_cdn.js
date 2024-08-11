
function info() {
    document.getElementById("dojoVersion").innerHTML = "Loading...";

    document.getElementById("dojoVersion").innerHTML = " dojo toolkit version:"
        + dojo.version
        + ", major: " + dojo.version.major
        + ", minor:" + dojo.version.minor
        + ", patch: " + dojo.version.patch;

    console.log(dojo.version);
}

info();
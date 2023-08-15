function chall() {
    document.getElementById("hallway").classList.add("hidden")
    document.getElementById("outside").classList.remove("hidden")
    document.getElementById("livingroom").classList.remove("hidden")
    document.getElementById("kitchen").classList.add("hidden")
    document.getElementById("bathroom").classList.remove("hidden")
    document.getElementById("info").innerHTML = "Du er i en gang.";

}

function cout() {
    document.getElementById("hallway").classList.remove("hidden")
    document.getElementById("outside").classList.add("hidden")
    document.getElementById("livingroom").classList.add("hidden")
    document.getElementById("kitchen").classList.add("hidden")
    document.getElementById("bathroom").classList.add("hidden")
    document.getElementById("info").innerHTML = "Du er utenfor leiligheten.";
}

function ckit () {
    document.getElementById("hallway").classList.add("hidden")
    document.getElementById("outside").classList.add("hidden")
    document.getElementById("livingroom").classList.remove("hidden")
    document.getElementById("kitchen").classList.add("hidden")
    document.getElementById("bathroom").classList.add("hidden")
    document.getElementById("info").innerHTML = "Nom nom nom snacks ~";
}

function cliv () {
    document.getElementById("hallway").classList.remove("hidden")
    document.getElementById("outside").classList.add("hidden")
    document.getElementById("livingroom").classList.add("hidden")
    document.getElementById("kitchen").classList.remove("hidden")
    document.getElementById("bathroom").classList.remove("hidden")
    document.getElementById("info").innerHTML = "Du er nå i en fancy stue ~";
}

function cbath () {
    document.getElementById("hallway").classList.remove("hidden")
    document.getElementById("outside").classList.add("hidden")
    document.getElementById("livingroom").classList.add("hidden")
    document.getElementById("kitchen").classList.add("hidden")
    document.getElementById("bathroom").classList.add("hidden")
    document.getElementById("info").innerHTML = "Husk å skyll ned når du er ferdig.";
}

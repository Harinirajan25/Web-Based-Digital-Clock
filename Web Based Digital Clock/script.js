
let select = document.getElementById("select");
let hours = document.getElementById("hours");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let hp = document.getElementById("ap");

select.addEventListener("change", () => {


    if (select.value === "h12") {
        function ut() {
            let now = new Date();
            let h = now.getHours();
            hours.textContent = `${h % 12 || 12}`
            hours.style.textAlign = "center";
            min.textContent = now.getMinutes();
            min.style.textAlign = "center";
            sec.textContent = now.getSeconds();
            sec.style.textAlign = "center";
            if (h < 12) {
                hp.textContent = "AM"

            }
            else {
                hp.textContent = "PM"
            }
            hp.style.textAlign = "center";
        }
        setInterval(ut, 1000);
    }
    else if (select.value === "h24") {
        function u() {
            let now = new Date();

            hours.textContent = now.getHours();
            hours.style.textAlign = "center";
            min.textContent = now.getMinutes();
            min.style.textAlign = "center";
            sec.textContent = now.getSeconds();
            sec.style.textAlign = "center";

            if (now.getHours() < 12) {
                hp.textContent = "AM"

            }
            else {
                hp.textContent = "PM"
            }
            hp.style.textAlign = "center";
        }
        intervalId = setInterval(u, 1000);
    }
    else {
        hours.textContent = "";
        min.textContent = "";
        sec.textContent = "";
        hp.textContent = "";
    }
})
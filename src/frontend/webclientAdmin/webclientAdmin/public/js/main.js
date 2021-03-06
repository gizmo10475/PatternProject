/**
 * A function to wrap it all in.
 */
(function () {
    "use strict";

    // Används för att filtrera cyklar på stad under /admin/bikes
    document.querySelector("#bikeForm select")?.addEventListener("change", (event) => {
        if (event.target.value === "no_select") return;
        document.querySelector("#bikeForm")?.submit();
    });

    // Används för att markera en cykel som intagen för service under /admin/bikes
    document.querySelectorAll("button.maintenance").forEach((button) => {
        button.addEventListener("click", async (event) => {
            const bikeID = Number(event.target.dataset["bike"]);
            await fetch(`http://localhost:8080/api/bike/${bikeID}`, {
                method: "PUT",
                body: JSON.stringify({
                    warning: true,
                }),
                headers: {
                    Authorization: "Bearer 1|fEMkWDqEzE5zJv250nVx4cZwvHUbwR98fFTShUa6",
                    "Content-Type": "application/json",
                },
            });

            window.location.reload();
        });
    });

    document.querySelectorAll("button.no-maintenance").forEach((button) => {
        button.addEventListener("click", async (event) => {
            const bikeID = Number(event.target.dataset["bike"]);
            await fetch(`http://localhost:8080/api/bike/${bikeID}`, {
                method: "PUT",
                body: JSON.stringify({
                    warning: false,
                }),
                headers: {
                    Authorization: "Bearer 1|fEMkWDqEzE5zJv250nVx4cZwvHUbwR98fFTShUa6",
                    "Content-Type": "application/json",
                },
            });

            window.location.reload();
        });
    });

    document.querySelector("button#delAcc")?.addEventListener("click", async (event) => {
        const accID = Number(event.target.dataset["id"]);
        await fetch(`http://localhost:8080/api/customer/${accID}`, {
            method: "DELETE",
            headers: {
                Authorization: "Bearer 1|fEMkWDqEzE5zJv250nVx4cZwvHUbwR98fFTShUa6",
                "Content-Type": "application/json",
            },
        });
        window.location = "http://localhost:1336/admin/clients";
    });

    document.querySelector("button#moveToStation")?.addEventListener("click", async (event) => {
        const select = document.querySelector("button#moveToStation + select");
        select.classList.toggle("hide");
        if (event.target.textContent == "Flytta cykel till station") {
            event.target.textContent = "Bekräfta flytt";
        } else {
            event.target.textContent = "Flytta cykel till station";
            await fetch("http://localhost:8080/api/stations/moveBike", {
                method: "POST",
                body: JSON.stringify({
                    bike: select.dataset["bike"],
                    station: select.value,
                }),
                headers: {
                    Authorization: "Bearer 1|fEMkWDqEzE5zJv250nVx4cZwvHUbwR98fFTShUa6",
                    "Content-Type": "application/json",
                },
            });
            window.location.reload();
        }
    });

    console.log("All ready.");
})();

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

    console.log("All ready.");
})();

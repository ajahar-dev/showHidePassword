   const password = document.querySelector("#password");
        const hide = document.querySelector("#hide");
        const show = document.querySelector("#show");

        show.addEventListener("click", () => {
            password.type = "password";
            show.style.display = "none";
            hide.style.display = "block";
        })
        hide.addEventListener("click", () => {
            password.type = "text";
            hide.style.display = "none";
            show.style.display = "block";
        })
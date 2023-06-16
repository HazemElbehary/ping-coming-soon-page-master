let form = document.querySelector("form");
let inp = document.querySelector("input[type='text']");
let btn = document.querySelector("form div:last-child");
let emptyRegex = /^$/;
let EmailRegex = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/;

btn.addEventListener("click", function() {
    if (inp.value.match(emptyRegex)) {
        form.classList = "error";
        document.querySelector("form p").innerHTML = "The email field is empty.";
    } else if (!inp.value.match(EmailRegex)) {
        form.classList = "error";
        document.querySelector("form p").innerHTML = `*"Please provide a valid email address"*`;
    } else {
        form.className = "";
    }
})
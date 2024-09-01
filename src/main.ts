import { isEmailValid } from "./utils";

const emailInput1 = document.getElementById("email-input1") as HTMLInputElement;
const errorMsg1 = document.getElementById("error-msg1") as HTMLSpanElement;
const submitEmailBtn1 = document.getElementById(
    "submit-email1"
) as HTMLButtonElement;
const emailInput2 = document.getElementById("email-input2") as HTMLInputElement;
const errorMsg2 = document.getElementById("error-msg2") as HTMLSpanElement;
const submitEmailBtn2 = document.getElementById(
    "submit-email2"
) as HTMLButtonElement;

emailInput1.addEventListener("input", (event) => {
    const { value: email } = event.target as HTMLInputElement;
    console.log(email);
    if (email === "" || !email) return closeEmailErrorMsg1();
    const { success } = isEmailValid(email);
    if (!success) {
        showEmailErrorMsg1();
    } else {
        closeEmailErrorMsg1();
    }
});

submitEmailBtn1.addEventListener("click", () => {
    const mail = emailInput1.value;
    if (mail === "" || !mail) return;
    const { success } = isEmailValid(mail);
    if (!success) return;
    alert("submit successfully");
    emailInput1.value = "";
});

function showEmailErrorMsg1() {
    if (emailInput1.classList.contains("border-c_Very_Dark_Blue")) {
        emailInput1.classList.toggle("border-c_Very_Dark_Blue");
        emailInput1.classList.toggle("border-red-600");
    }
    errorMsg1.style.display = "block";
}
function closeEmailErrorMsg1() {
    if (emailInput1.classList.contains("border-red-600")) {
        emailInput1.classList.toggle("border-c_Very_Dark_Blue");
        emailInput1.classList.toggle("border-red-600");
    }

    errorMsg1.style.display = "none";
}



emailInput2.addEventListener("input", (event) => {
    const { value: email } = event.target as HTMLInputElement;
    console.log(email);
    if (email === "" || !email) return closeEmailErrorMsg2();
    const { success } = isEmailValid(email);
    if (!success) {
        showEmailErrorMsg2();
    } else {
        closeEmailErrorMsg2();
    }
});

submitEmailBtn2.addEventListener("click", () => {
    const mail = emailInput2.value;
    if (mail === "" || !mail) return;
    const { success } = isEmailValid(mail);
    if (!success) return;
    alert("submit successfully");
    emailInput2.value = "";
});

function showEmailErrorMsg2() {
    if (emailInput2.classList.contains("border-transparent")) {
        emailInput2.classList.toggle("border-transparent")
        emailInput2.classList.toggle("border-red-600")
    }
    errorMsg2.style.display = "block";
}
function closeEmailErrorMsg2() {
    if (emailInput2.classList.contains("border-red-600")) {
        emailInput2.classList.toggle("border-transparent")
        emailInput2.classList.toggle("border-red-600")
    }
    
    errorMsg2.style.display = "none";
}
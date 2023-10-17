
const generate = document.querySelector(`button`);
generate.addEventListener(`click`, function() {
    const userName = prompt (`Inserisci il tuo nome`);
    const userSurname = prompt (`Inserisci il tuo cognome`);
    const userColor = prompt (`Inserisci il tuo colore preferito`)

    console.log (userName + userSurname + userColor);

});

const randomNo = `21`;


const passwordTxt = document.getElementById("psw-gen");




document.getElementById("pwd-gen").value = userName + userSurname + userColor + randomNo;


const copy = document.getElementById("copy");
copy.addEventListener("click", () => {
  passwordTxt.select();
  document.execCommand("copy");
  alert("Password Copied");
});
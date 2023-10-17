
    const userName = prompt (`Inserisci il tuo nome`);
    const userSurname = prompt (`Inserisci il tuo cognome`);
    const userColor = prompt (`Inserisci il tuo colore preferito`)

    console.log (userName + userSurname + userColor);

    const randomNo = `21`;

document.getElementById("pwd-gen").value = userName + userSurname + userColor + randomNo;

// copy btn
function copyPassword() {
    var copyText = document.getElementById("pwd-gen");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
  }
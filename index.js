const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let pass1 = document.getElementById("passOutput1")
let pass2 = document.getElementById("passOutput2")
let pwNum = document.getElementById("pwNumber")
let snackEl = document.getElementById("snackbar");
let passwordlength = 15
let pw1forTheSnackBar = "password 1"
let pw2forTheSnackBar = "password 2"

password1 = ""
password2 = ""

function generatePasswords() {
    password1 = ""
    password2 = ""
    snackEl.className = snackEl.className.replace("show", "hide")
    for (let i = 0; i < passwordlength; i++) {
        let passwordFirst = Math.floor(Math.random() * characters.length)
        let passwordSecond = Math.floor(Math.random() * characters.length)
        password1 += characters[passwordFirst]
        password2 += characters[passwordSecond]
    }
    passOutput1.textContent = password1
    passOutput2.textContent = password2
}

//// DISPLAY PASSWORD ////
let element = document.getElementById('passOutput1');
element.addEventListener('click', function() {
  copyToClipboard(password1);
  snackbar(pw1forTheSnackBar)
});

let element2 = document.getElementById('passOutput2');
element2.addEventListener('click', function() {
  copyToClipboard(password2);
  snackbar(pw2forTheSnackBar)
});

//// COPY TO CLIPBOARD ////
function copyToClipboard(text) {
    const type = 'text/plain';
    const blob = new Blob([text], {type});
    const data = [new ClipboardItem({[type]: blob})];
    navigator.clipboard.write(data).then(function() {
      console.log('Copied to clipboard!');
    }, function() {
      console.log('Failed to copy to clipboard.');
    });
  }

//// SHOW SNACKBAR ////
//ref: https://www.w3schools.com/howto/howto_js_snackbar.asp
function snackbar(snackbarNeedsAPassword) {
  snackEl.className = "show";
  setTimeout(function(){ snackEl.className = snackEl.className.replace("show", ""); }, 3000);
  pwNum.textContent = snackbarNeedsAPassword
}

// limit it to 15 characters - done!!!
// make it a string - done!!!
// clear the boxes and replace the passwords with new ones if you click the button again! - done!!!! :D 
// copy on click! Done for one do for the other!
// toast! Looks like it can be done with html and css!!! YAY!! DONE!!
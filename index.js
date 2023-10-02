const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordlength = 15

password1 = ""
password2 = ""

function generatePasswords() {
    for (let i = 0; i < passwordlength; i++) {
        let passwordFirst = Math.floor(Math.random() * characters.length)
        let passwordSecond = Math.floor(Math.random() * characters.length)
        password1 += characters[passwordFirst]
        password2 += characters[passwordSecond]
    }
    console.log(password1,password2)
}


// limit it to 15 characters - done!!!
// make it a string - done!!!
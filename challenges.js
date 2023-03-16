const form_password_encryp = document.getElementById('form_password_encryp');
const password = document.querySelector('#password');

function removeSpace(password){
    const strRemoveSpace = password.replace(/ /g,'')
    return strRemoveSpace;
}

function reverseStr(string){
    return string.split("").reverse().join("")
}

function encrypPass(str){
    const arr = str.split("")
    const ress = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[1]){
            arr[1] = 'b'
        }
        if(arr[4]){
            arr[4] = '-909-'
        }
        ress.push(arr[i])
    }
    return ress.join("")
}

function updateVowels(str){
    let res = ""
    for(let i = 0; i<str.length; i++){
        res += String.fromCharCode(str[i].charCodeAt(0) + 1)
    }
    return res;
}

form_password_encryp.addEventListener('submit', function(e){
    e.preventDefault()
    const passwordVal = password.value;
    const removeSpacePass = removeSpace(passwordVal)
    const reverse = reverseStr(removeSpacePass);
    const encryp = encrypPass(removeSpacePass)
    const updateVow = updateVowels(removeSpacePass);
    console.log(removeSpacePass)
    console.log(reverse)
    console.log(encryp)
    console.log(updateVow)

})
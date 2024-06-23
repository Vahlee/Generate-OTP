const otpBox = document.getElementById ("Password");
const length = 6;
const number = "0123456789";
const otpChar = number;

function createOTP(){
    let password = '';
    password += number [Math.floor(Math.random()) * number.length];

    while (length > password.length) {
        password += otpChar [Math.floor(Math.random() * otpChar.length)];
    }
    otpBox.value = password;
    copyButton.addEventListener('click', function() {
        const text = otpBox.value;
        navigator.clipboard.writeText(text).then(function() {
            console.log('Text copied to clipboard successfully!');
        }).catch(function(error) {
            console.error('Error copying text to clipboard: ', error);
        });
    });

}
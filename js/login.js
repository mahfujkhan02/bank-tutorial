document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('Submit Button clicked');
    // step -2 get the email address inside the email input field


    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    // step-->3 : get password

    const passwordField = document.getElementById('ueser-password');
    const password = passwordField.value;
    // console.log(email,password);

    // step---->4 Verify email and password

    if(email === 'tanim@gmail.com'  && password === 'tania'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid User');
    }
})
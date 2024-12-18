/**
 * Gets the values of the user's first name, email and password from the registration form
 * and stores them in variables.
 *
 * @return {undefined} Does not return a value, but stores the values in variables.
 */
function signUpForLukabook() {
    let user = document.getElementById('FirstName').value
    let email = document.getElementById('Email').value
    let password = document.getElementById('password').value
    alert(`Create account on Lukabook? Name: ${user}, Username: ${email}`)
    if(confirm('Is this site open in "Lukabook" or "Website Browser" Android App?')) {
    window.AppInventor.setWebViewString(`SignUpForLukabookData:?username=:${user}&email=${email}&password=${password}`);
    alert(`Account Created`);
    } else {
     alert(`Account Not Created. Please open it in "Lukabook" or "Website Broswer" Android App`);
    }

}

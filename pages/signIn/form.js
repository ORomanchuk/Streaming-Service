function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    
    var object = {
        id: profile.getId(),
        name: profile.getName(),
        url: profile.getImageUrl(),
        email: profile.getEmail(),
    }

    localStorage.setItem('google', JSON.stringify(object));
    window.location.href = '../../index.html';
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}


let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");


confirmPassword.addEventListener("change", function () {
    if (confirmPassword.value != password.value) {
        confirmPassword.setCustomValidity("Введені паролі не співпадають");
        password.setCustomValidity("Введені паролі не співпадають");
    } else {
        confirmPassword.setCustomValidity("");
        password.setCustomValidity("");
        shoppingCard.style.zIndex = "0";
    }
})



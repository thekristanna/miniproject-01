// show & hide
function showHide() {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.getElementById('toggle');

    if (passwordInput.type == 'password') {
        passwordInput.setAttribute('type', 'text');
        toggleButton.classList.add('hide');
    } else {
        passwordInput.setAttribute('type', 'password');
        toggleButton.classList.remove('hide');
    }
}

// login
function handleLogin() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // credentials validation
    if (usernameInput.value == 'thekristanna' && passwordInput.value == '12345') {
        window.location.href = 'html/welcome.html';
    } else {
        alert('Invalid username or password');
    }
}
document.querySelector('.login').addEventListener('click', handleLogin);
const loginHandler = async (event) => {
    // prevents from automatic page refresh, removing data being entered in
    event.preventDefault();

    // these save the entries for email and passwor and assign them to variables\
    // change whats is targeted to Jays html form
    const email = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#login-pass').value.trim();

    // tests if an email and password were entered at all
    if (email && password) {
        // awaits and saves login response, formats to json
        const response = await fetch('/api/users/login', {
            method: 'POST', 
            body: JSON.stringify({ email, password}),
            headers: {'Content-Type': 'application/json'}
            }   
        );

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Login Failed :(');
        }
    }
};

// change whats is targeted to Jays html form
document.querySelector('.login-form').addEventListener('submit', loginHandler);

const newSignUpHandler = async (event) => {
    event.preventDefault();
    
    // added new username variable... we can delete if we need to for sign up page
    // change whats is targeted to Jays html form
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-pass').value.trim();
    const username = document.querySelector('#signup-user').value.trim();

    if (email && password && username) {
        const response = await fetch('/api/users' , {
            method: 'POST',
            body: JSON.stringify({email, password, username}),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Sign-up Failed :(')
        }
    };

}

// change whats is targeted to Jays html form
document.querySelector('.signup-form').addEventListener('submit', newSignUpHandler);

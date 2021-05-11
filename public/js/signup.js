const newSignUpHandler = async (event) => {
    event.preventDefault();
    
    // added new username variable... we can delete if we need to for sign up page
    const email = document.querySelector('#exampleInputEmail1').value.trim();
    const password = document.querySelector('#exampleInputPassword1').value.trim();
    // const username = document.querySelector('#signup-user').value.trim();

    // if (email && password && username) {
    if (email && password) {
        const response = await fetch('/api/users' , {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Sign-up Failed :(')
        }
    };

}

// On signup.html, adjust the <form></form> division to have an id or class of #signup-form or .signup-form
document.querySelector('#signup-form').addEventListener('submit', newSignUpHandler);

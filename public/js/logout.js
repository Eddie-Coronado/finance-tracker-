// necessary async for promise based fetch reponse to gather user json info
const logoutHandler = async () => {
    // creates fetch response to remove from active, logged in users
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Logout Failed :(')
    };
};

// adjust 'querySelector' to attach to Jays logout button
document.querySelector('#logout').addEventListener('click', logoutHandler);
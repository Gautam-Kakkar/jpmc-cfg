    const handleParentLoginSubmit = async (e) => {
    e.preventDefault();

    const phone = document.getElementById('parentMobile').value;
    const password = document.getElementById('parentPassword').value;

    const res = await fetch('http://localhost:5000/api/parents/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phone, password })
    });

    const data = await res.json();
    if (data.message === "Login successful") {
        alert("Login successful!");
        navigate('/dashboard'); // Make sure you have this route set up
    } else {
        alert(data.message);
    }
    };

export const login = (email, password) => {
    fetch("http://127.0.0.1:5000/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    })
        .then((response) => response.json())
        .then((data) => console.log(data))

}
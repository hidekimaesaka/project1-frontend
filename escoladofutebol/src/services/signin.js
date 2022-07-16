export const signin = (email, password, name, team) => {
    fetch("http://127.0.0.1:5000/user/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "email": email,
            "password": password,
            "name": name,
            "team": team

        })
    })
        .then((response) => response.json())
        .then((data) => console.log(data))

}
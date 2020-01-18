class userFetch{
    static createUser = (username, password) => {
        return fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "content-type":"application/json",
                "accept":"application/json"
            },
            body: JSON.stringify({
                username:username,
                password:password
            })
        })
        .then(r => r.json())
    }

    static getUsers = (username, password) => {
        return fetch("http://localhost:3000/users")
        .then(r => r.json())
    } 
}

export default userFetch
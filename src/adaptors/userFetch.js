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
    }
}

export default userFetch
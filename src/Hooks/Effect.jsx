import { useState } from "react";
import { useEffect } from "react";

function Effect() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
         .then(res => res.json())
         .then(data => setUsers(data))
    }, [])

    return (
        <>
            <div>
                {
                    users.map(
                        user => <h3 key={user.id} style={{textAlign:'center'}}>{user.id}. {user.name}</h3>
                    )
                }
            </div>
        </>
    )
}

export default Effect;
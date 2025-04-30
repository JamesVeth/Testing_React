

function UserGreeting(props) {

    if(props.isLoggedIn){

        return <h2>Welcome, {props.username}</h2>
        
    } else {

        return <h2>You are not logged in</h2>
        
    }
    
}

export default UserGreeting;



/* 

            <h1>{props.name}</h1>
            <h1>{props.children[0]}</h1>
            <h1>{props.children[1]}</h1>
            <h1>{props.children[1]}</h1>
            <h1>{props.children[1]}</h1>
            <h1>{props.children[1]}</h1>
            <h1>{props.children[1]}</h1>
            <h1>{props.children[1]}</h1>

*/
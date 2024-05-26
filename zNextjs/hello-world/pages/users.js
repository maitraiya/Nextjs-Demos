export default function Users ({users}) {
    return <div>
        <h1>Users :</h1>
        <ul>
            {users.map(user=>{
                // eslint-disable-next-line react/jsx-key
                return <li>{user.name}</li>
            })}
        </ul>
    </div>
}

export async function getStaticProps(){
    const response = await fetch('http://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return {
        props:{
            users: data
        }
    }
}
import Link from "next/link";

export default function Posts ({posts}) {
    return <div>
        <h1> Posts </h1>
        <ul>
            {posts && posts.map((post)=>{
                return <Link href={`/posts/${post.id}`} key = {post.id}>
                <li >
                    {post.title}
                </li>   
                </Link>             
            })}
        </ul>
    </div>
}

export async function getStaticProps() {
    const response = await fetch('http://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return {
        props:{
            posts: data
        },
        revalidate: 10
    }
}
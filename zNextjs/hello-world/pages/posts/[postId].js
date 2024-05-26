import { useRouter } from "next/router";

export default function Post ({postDetails}) {
    const router = useRouter();
    if(router.isFallback){
        return <h1>Loading...</h1>
    }
    return <div>
       {postDetails.body}
    </div>
}

export async function getStaticPaths(){
    const response = await fetch(`http://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    // const paths = data.map((post)=>{
    //     return  {
    //         params: {postId : `${post.id}`}
    //     }
    // })
    const paths = [
        // {
        //     params : {postId: '1'}
        // }
    ]
    return {
        paths, fallback:true
    }
}

export async function getStaticProps(context){
    const {params} =  context;
    const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();
    return {
        props:{
            postDetails: data
        },
        revalidate: 10
    }
}
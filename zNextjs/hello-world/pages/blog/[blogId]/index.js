import { useRouter } from 'next/router';
import Link from 'next/link';

export default function BlogDetails () {
    const router = useRouter();
    const blogId = router.query.blogId;
    return <div>
    <h1>Blog Details : {blogId} </h1>
    Click to check its reviews : 
    <ul>
        <li>
            <Link href={`/blog/${blogId}/review/1`}>
                Review 1
            </Link>
        </li>
        <li>
        <Link href={`/blog/${blogId}/review/2`}>
                Review 2
            </Link>
        </li>
    </ul>
    
    </div>
}
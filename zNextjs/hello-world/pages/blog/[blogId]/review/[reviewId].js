import { useRouter } from 'next/router';

export default function ReviewDetails () {
    const router = useRouter();
    const {blogId, reviewId} = router.query;
    return <div>
        <h1>Blog Details : {blogId}</h1>
        <h1>Review Details : {reviewId}</h1>
        </div>
}
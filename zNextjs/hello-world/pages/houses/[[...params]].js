import { useRouter } from 'next/router';

export default function Houses(){
    const router = useRouter();
    const {params = []} = router.query;
    return <h1>Viewing houses between range {params[0]} and {params[1]}</h1>
}
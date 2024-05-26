import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Blog () {
    const router = useRouter();
    useEffect(()=>{
        //routing programatically
        // router.push('/docs/1');
    })
    return <div>
        <Link href= '/blog/1'>
            <a>Blog 1</a>
        </Link>
        <Link href= '/blog/2'>
            <a>Blog 2</a>
        </Link>
    </div>
}
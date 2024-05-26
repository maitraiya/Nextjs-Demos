import Link from 'next/link';

function Home () {
    return <div>
        Home page

        <Link href='/blog'>
            <a>Blog Page</a>
        </Link>
        <Link href='/users'>
            <a>
                Users
            </a>
        </Link>
        </div>
}

export default Home;
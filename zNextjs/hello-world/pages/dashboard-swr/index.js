import useSWR from 'swr';

export async function fetcher(){
    const data = await fetch('http://localhost:4000/news');
    const news = await data.json();
    return news;

}
export default function DashboardSwr(){
    const {data, error} = useSWR('dashboard', fetcher);
    if(error) return <div>Error while loading</div>;
    if(!data) return <div>Loading...</div>
    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                {data.map(article =>{
                    return <li key={article.id}>{article.title} - {article.author}</li>
                })}
            </ul>
        </div>
    )
}
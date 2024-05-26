export default function News({news}){
    return <div>
        <h1>List of news</h1>
            <ul>
                {news && news.map(article =>{
                    return <li key={article.id}>{article.title} - {article.author}</li>
                })}
            </ul>
        </div>
}

export async function getServerSideProps(context){
    const data = await fetch('http://localhost:4000/news');
    const news = await data.json();
    const {req, res} = context;
    res.setHeader('Set-Cookie', '[name=maitraiya]')
    return {
        props: {news}
    }
}
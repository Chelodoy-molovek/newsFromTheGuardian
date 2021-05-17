
import React, { useEffect, useState } from "react"
import Search from "./Search"
import News from "./News"
import NextPajes from "./NextPages";


export default function App() {
    let [arrNew, setArr] = useState([]);
    let [query, setQuery] = useState('');
    let [pages, setPages] = useState(1);

    useEffect(() => {
        fetchNews();
    }, [query, pages]);

    const fetchNews = async () => {
        try {
            const res = await fetch(`https://content.guardianapis.com/search?page=${pages}&page-size=10&api-key=5468df68-301d-435b-a116-fbdcc7f28997&q=${encodeURIComponent(query)}`);
            const data = await res.json();
            setArr(data.response.results);
        } catch (err) {
            alert(err);
        }
    }
    function slamFunc(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        setQuery(data.get('input'))
    }
    function paginace() {
        setPages(1)
        setQuery('politics')
    }
    function sport() {
        setPages(1)
        setQuery('sport')
    }
    function economy() {
        setPages(1)
        setQuery('economy')
    }
    function next() {
        setPages(pages + 1)
    }
    function last() {
        if (pages > 1) {
            setPages(pages - 1)
        }
    }

    return (
        <div className="container">
            <h1>The Guarden</h1>
            <Search slam={slamFunc} />
            <News paginace={paginace} economy={economy} sport={sport} />
            <div className="news">
                {arrNew.map((arrNew) => <a key={arrNew.id} href={arrNew.webUrl}><br />{arrNew.webTitle}</a>)}
            </div>
            <NextPajes last={last} next={next} pages={pages} />
        </div>
    )
}
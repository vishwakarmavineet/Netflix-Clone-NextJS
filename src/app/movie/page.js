import React from 'react';
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css"

const Movie = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));



    const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b9b6bc6eb3mshb4ab8466ee4fe71p114956jsn7f1b255d1029',
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
      }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles || [];
    // console.log(main_data.jawSummary)
    console.log(data);
    

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                       {
                        main_data.map((curElem)=>{
                            return <MovieCard key={curElem.id} {...curElem}/>
                        })
                       }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movie;
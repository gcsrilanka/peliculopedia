import React from 'react'
import styles from './index.module.scss'

const HomePage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.movieSection}>
        <div className={styles.movieSectionHeader}>
          <h1>Weekly Top Rated Movies</h1>
          <button>See More</button>
        </div>
        <div className={styles.movieSectionBody}>
          <div className={styles.movieSectionBodyMovie}>
            <img loading='lazy' className={styles.movieSectionBodyMoviePoster} src='/assets/topRated/marvel.jpg' />
            <p className={styles.movieSectionBodyMovieTitle}>Captain Marvel</p>
            <div className={styles.movieSectionBodyMovieRating}>
              <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' fill='#FAC917' viewBox='0 0 24 24'><path d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z' /></svg>
              <label>7.1</label>
            </div>
          </div>
          <div className={styles.movieSectionBodyMovie}>
            <img loading='lazy' className={styles.movieSectionBodyMoviePoster} src='/assets/topRated/marvel.jpg' />
            <p className={styles.movieSectionBodyMovieTitle}>Captain Marvel</p>
            <div className={styles.movieSectionBodyMovieRating}>
              <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' fill='#FAC917' viewBox='0 0 24 24'><path d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z' /></svg>
              <label>8.1</label>
            </div>
          </div>
          <div className={styles.movieSectionBodyMovie}>
            <img loading='lazy' className={styles.movieSectionBodyMoviePoster} src='/assets/topRated/marvel.jpg' />
            <p className={styles.movieSectionBodyMovieTitle}>Captain Marvel</p>
            <div className={styles.movieSectionBodyMovieRating}>
              <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' fill='#FAC917' viewBox='0 0 24 24'><path d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z' /></svg>
              <label>7</label>
            </div>
          </div>
          <div className={styles.movieSectionBodyMovie}>
            <img loading='lazy' className={styles.movieSectionBodyMoviePoster} src='/assets/topRated/marvel.jpg' />
            <p className={styles.movieSectionBodyMovieTitle}>Captain Marvel</p>
            <div className={styles.movieSectionBodyMovieRating}>
              <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' fill='#FAC917' viewBox='0 0 24 24'><path d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z' /></svg>
              <label>9.3</label>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.movieSection}>
        <div className={styles.movieSectionHeader}>
          <h1>Weekly Top Rated Bollywood Movies</h1>
          <button>See More</button>
        </div>
        <div className={styles.movieSectionBody}>
          <div className={styles.movieSectionBodyMovie}>
            <img loading='lazy' className={styles.movieSectionBodyMoviePoster} src='/assets/topRated/damal.jpg' />
            <p className={styles.movieSectionBodyMovieTitle}>Total Dhamaal</p>
            <div className={styles.movieSectionBodyMovieRating}>
              <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' fill='#FAC917' viewBox='0 0 24 24'><path d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z' /></svg>
              <label>8.1</label>
            </div>
          </div>
          <div className={styles.movieSectionBodyMovie}>
            <img loading='lazy' className={styles.movieSectionBodyMoviePoster} src='/assets/topRated/damal.jpg' />
            <p className={styles.movieSectionBodyMovieTitle}>Total Dhamaal</p>
            <div className={styles.movieSectionBodyMovieRating}>
              <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' fill='#FAC917' viewBox='0 0 24 24'><path d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z' /></svg>
              <label>7.1</label>
            </div>
          </div>
          <div className={styles.movieSectionBodyMovie}>
            <img loading='lazy' className={styles.movieSectionBodyMoviePoster} src='/assets/topRated/damal.jpg' />
            <p className={styles.movieSectionBodyMovieTitle}>Total Dhamaal</p>
            <div className={styles.movieSectionBodyMovieRating}>
              <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' fill='#FAC917' viewBox='0 0 24 24'><path d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z' /></svg>
              <label>9.1</label>
            </div>
          </div>
          <div className={styles.movieSectionBodyMovie}>
            <img loading='lazy' className={styles.movieSectionBodyMoviePoster} src='/assets/topRated/damal.jpg' />
            <p className={styles.movieSectionBodyMovieTitle}>Total Dhamaal</p>
            <div className={styles.movieSectionBodyMovieRating}>
              <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' fill='#FAC917' viewBox='0 0 24 24'><path d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z' /></svg>
              <label>4.1</label>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage

import React from 'react'
import MovieCard from '../../components/MovieCard'
import styles from './styles.module.scss'

const HomePage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.movieSection}>
        <div className={styles.movieSectionHeader}>
          <h1>Weekly Top Rated Movies</h1>
          <button>See More</button>
        </div>
        <div className={styles.movieSectionBody}>
          <MovieCard
            title='Captain Marvel'
            posterUrl='/assets/topRated/marvel.jpg'
            rating='8.1'
            path='CaptainMarvel'
          />
          <MovieCard
            title='Captain Marvel'
            posterUrl='/assets/topRated/marvel.jpg'
            rating='8.1'
            path='CaptainMarvel'
          />
          <MovieCard
            title='Captain Marvel'
            posterUrl='/assets/topRated/marvel.jpg'
            rating='8.1'
            path='CaptainMarvel'
          />
          <MovieCard
            title='Captain Marvel'
            posterUrl='/assets/topRated/marvel.jpg'
            rating='8.1'
            path='captain-marvel'
          />
        </div>
      </div>
      <div className={styles.movieSection}>
        <div className={styles.movieSectionHeader}>
          <h1>Weekly Top Rated Bollywood Movies</h1>
          <button>See More</button>
        </div>
        <div className={styles.movieSectionBody}>
          <MovieCard
            title='Total Dhamaal'
            posterUrl='/assets/topRated/damal.jpg'
            rating='8.1'
            path='total-dhamaal'
          />
          <MovieCard
            title='Total Dhamaal'
            posterUrl='/assets/topRated/damal.jpg'
            rating='8.1'
            path='total-dhamaal'
          />
          <MovieCard
            title='Total Dhamaal'
            posterUrl='/assets/topRated/damal.jpg'
            rating='8.1'
            path='total-dhamaal'
          />
          <MovieCard
            title='Total Dhamaal'
            posterUrl='/assets/topRated/damal.jpg'
            rating='8.1'
            path='total-dhamaal'
          />
          <MovieCard
            title='Total Dhamaal'
            posterUrl='/assets/topRated/damal.jpg'
            rating='8.1'
            path='total-dhamaal'
          />
          <MovieCard
            title='Total Dhamaal'
            posterUrl='/assets/topRated/damal.jpg'
            rating='8.1'
            path='total-dhamaal'
          />
          <MovieCard
            title='Total Dhamaal'
            posterUrl='/assets/topRated/damal.jpg'
            rating='8.1'
            path='total-dhamaal'
          />
          <MovieCard
            title='Total Dhamaal'
            posterUrl='/assets/topRated/damal.jpg'
            rating='8.1'
            path='total-dhamaal'
          />
        </div>
      </div>
    </section>
  )
}

export default HomePage

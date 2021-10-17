import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

/**
 * Render a vertical Movie card with Title and Rating
 *
 * @param {object} props {title, posterUrl, rating, path}
 * @returns jsx
 */
const MovieCard = ({ title, posterUrl, rating, path }) => {
  return (
    <Link to={`movie/${path}`}>
      <div className={styles.movie}>
        <img loading='lazy' className={styles.moviePoster} src={posterUrl} />
        <p className={styles.movieTitle}>{title}</p>
        <div className={styles.movieRating}>
          <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' fill='#FAC917' viewBox='0 0 24 24'><path d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z' /></svg>
          <label>{rating}</label>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard

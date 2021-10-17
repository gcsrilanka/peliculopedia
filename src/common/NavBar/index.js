import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

/**
 * A Layout component
 *
 * @param {Object} props { children }
 * @returns
 */
const NavBarLayout = ({ children }) => {
  const [isFacetsOpen, setIsFacetsOpen] = useState(false)

  return (
    <section className={styles.container}>
      <section className={styles.header}>
        <div className={styles.hamburgerMenu}>
          <button className={styles.hamburgerMenuButton} data-active={isFacetsOpen.toString()} onClick={() => setIsFacetsOpen(!isFacetsOpen)} />
        </div>
        <Link to='/'>
          <svg width='57' height='50' viewBox='0 0 57 50' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M14.6295 23.3549L17.7393 22.6553C20.6458 22.0013 22.6926 20.943 23.8796 19.4801C25.0621 17.9969 25.4063 16.1577 24.9125 13.9626C24.4141 11.7471 23.4362 10.2481 21.9789 9.46555C20.5419 8.67843 18.5328 8.57524 15.9515 9.15598L11.6527 10.1231L14.6295 23.3549ZM34.3798 11.4803C35.4589 16.2771 34.7802 20.2842 32.3437 23.5016C29.9275 26.7144 25.9551 28.9428 20.4266 30.1866L16.3717 31.0988L19.9385 46.9526L10.4872 49.0789L0.459175 4.50552L14.697 1.3023C20.1036 0.0859419 24.4722 0.330949 27.803 2.03732C31.1495 3.71879 33.3417 6.86644 34.3798 11.4803Z' fill='#E9E00A' />
            <path d='M46.9315 33.8174L39.6033 31.7105L46.5075 1.9275L56.8991 4.91504L46.9315 33.8174ZM34.9984 41.5071C35.482 39.8252 36.298 38.6833 37.4465 38.0814C38.5951 37.4795 40.0303 37.426 41.7522 37.9211C43.414 38.3988 44.5688 39.2077 45.2166 40.3477C45.8843 41.4935 45.9822 42.8873 45.5101 44.5292C45.0554 46.1109 44.2351 47.2299 43.0493 47.8861C41.8692 48.5224 40.4583 48.6044 38.8165 48.1324C37.1346 47.6489 35.9598 46.8342 35.292 45.6885C34.63 44.5227 34.5322 43.1289 34.9984 41.5071Z' fill='#E9E00A' />
          </svg>
        </Link>
        <div className={styles.headerActions}>
          <input className={styles.headerActionsSearch} type='search' placeholder='Search any movie or Tv Show' />
          <ul className={styles.headerActionsList}>
            <li data-active='true'><Link to='Movies'> Movies</Link></li>
            <li><Link to='Tv'> Tv Shows</Link></li>
            <li><Link to='Watch'> Watch list</Link></li>
            <li><Link to='profile'> <img src='/assets/user.jpeg' /></Link></li>
          </ul>
        </div>
      </section>
      <section className={styles.body}>
        <nav className={styles.navBar} data-active={isFacetsOpen.toString()}>
          <ul className={styles.navBarProfile}>
            <li><Link to='profile'><img src='/assets/user.jpeg' /></Link></li>
            <li><Link to='movies'>Movies</Link></li>
            <li><Link to='tv-Shows'>Tv Shows</Link></li>
            <li><Link to='watch-list'>Watch List</Link></li>
          </ul>
          <ul className={styles.navBarCategories}>
            <li className={styles.navBarCategoriesList}>
              Genre
              <ul>
                <li><Link to='Action'>Action</Link></li>
                <li><Link to='Horror'>Horror</Link></li>
                <li><Link to='Comedy'>Comedy</Link></li>
                <li><Link to='Adventure'>Adventure</Link></li>
                <li><Link to='Drama'>Drama</Link></li>
              </ul>
            </li>
            <li className={styles.navBarCategoriesList}>
              Language
              <ul>
                <li><Link to='English'>English</Link></li>
                <li><Link to='Hindi'>Hindi</Link></li>
                <li><Link to='Tamil'>Tamil</Link></li>
                <li><Link to='Telugu'>Telugu</Link></li>
                <li><Link to='Marathi'>Marathi</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
        <section className={styles.content}>{children}</section>
        {/* We can create  a separate component for side bar, For now its hard coded */}
        <aside className={styles.sideBar}>
          <h1>New trailers</h1>
          <div className={styles.sideBarTrailers}>
            <img src='/assets/trailers/marvel.jpeg' />
            <p>Marvel Studios' Avengers: Endgame - Official Trailer </p>
          </div>
          <div className={styles.sideBarTrailers}>
            <img src='/assets/trailers/aladin.jpeg' />
            <p>Disney's Aladdin Official Trailer</p>
          </div>
          <div className={styles.sideBarTrailers}>
            <img src='/assets/trailers/marvel.jpeg' />
            <p>Marvel Studios' Avengers: Endgame - Official Trailer </p>
          </div>
          <div className={styles.sideBarTrailers}>
            <img src='/assets/trailers/aladin.jpeg' />
            <p>Disney's Aladdin Official Trailer</p>
          </div>
        </aside>
      </section>
    </section>
  )
}

export default NavBarLayout

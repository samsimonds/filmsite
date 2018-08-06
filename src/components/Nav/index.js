import React, { Component } from 'react'
import { Link } from '@reach/router'
import styles from './styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faPlayCircle)

export default class Nav extends Component {

  render() {

    const

      trailerLink = (
        <a
          className={ styles.trailerLink }
          href='https://vimeo.com/268940398'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div>
            <div>
              <FontAwesomeIcon icon='play-circle' />
              {` `}
              Watch the trailer
            </div>
          </div>
        </a>
      ),

      aboutLink = (
        <Link
          className={ styles.aboutLink }
          to='/about'
        >
          <div>
            About the film
          </div>
        </Link>
      ),

      communityLink = (
        <Link
          className={ styles.communityLink }
          to='/community'
        >
          <div>
            Community
          </div>
        </Link>
      ),

      individualImpactLink = (
        <Link
          className={ styles.individualImpactLink }
          to='/individual-impact'
        >
          <div>
            Individual impact
          </div>
        </Link>
      ),

      blogLink = (
        <a
        className={ styles.blogLink }
          href='#blog'
        >
          <div>
            News
          </div>
        </a>
      ),

      contactLink = (
        <a
          className={ styles.contactLink }
          href='mailto:info@fromavalleyoftalol.com'
        >
          <div>
            Contact
          </div>
        </a>
      )

    return (
      <nav className={ styles.nav }>

        <header>
          <h1>From a Valley of Talol</h1>
        </header>

        <div className={ styles.mobile }>
          { trailerLink }
          { communityLink }
          { individualImpactLink }
          { blogLink }
          { aboutLink }
          { contactLink }
        </div>

        <div className={ styles.tablet }>
          <div>
            { trailerLink }
            { communityLink }
          </div>
          <div>
            { individualImpactLink }
            { blogLink }
          </div>
          <div>
            { aboutLink }
            { contactLink }
          </div>
        </div>

        <div className={ styles.desktop }>
          <div>
            { trailerLink }
            <div>
              { communityLink }
              { individualImpactLink }
            </div>
          </div>
          <div>
            { aboutLink }
            <div>
              { blogLink }
              { contactLink }
            </div>
          </div>
        </div>

      </nav>
    )

  }

}
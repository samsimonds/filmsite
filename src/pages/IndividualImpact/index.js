import React, { Component } from 'react'
import { menuStyles, pageContainerStyle, sectionStyle, suggestions } from '../styles.css'
import { Link } from '@reach/router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

export default class IndividualImpact extends Component {
  render() {
    return (
      <div className={ pageContainerStyle }>
        <div>
      
        <Link
          className={ menuStyles }
          to='/'
        >
          <FontAwesomeIcon icon='bars' />
        </Link>

        <h1>Individual Impact</h1>

        <div className={ sectionStyle }>
          <div className={ suggestions }>

            <div>
              <h4>Suggested readings</h4>
              <ul>
                <li>Audre Lorde
                  <ul>
                    <li>I Am Your Sister</li>
                    <li>Sister Outsider</li>
                    <li>A Burst of Light</li>
                  </ul>
                </li>
                <li>Alfred Taiaiake
                  <ul>
                    <li>Peace, Power, and Righteousness</li>
                    <li>Wasáse</li>
                  </ul>
                </li>
                <li>Angela Davis
                  <ul>
                    <li>Freedom is a Constant Struggle</li>
                  </ul>
                </li>
                <li>Bell Hooks
                  <ul>
                    <li>All About Love</li>
                    <li>The Will to Change</li>
                  </ul>
                </li>
                <li>Jeremy M. Glick
                  <ul>
                    <li>The Black Radical Tragic</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h4>Suggested Films</h4>
              <ul>
                <li>Julie Dash
                  <ul>
                    <li>Daughters of the Dust</li>
                    <li>Praise House</li>
                  </ul>
                </li>
                <li>Haile Gerima
                  <ul>
                    <li>Bush Mama</li>
                    <li>Sankofa</li>
                  </ul>
                </li>
              </ul>
            </div>

          </div>
        </div>

        </div>
      </div>
    )
  }
}
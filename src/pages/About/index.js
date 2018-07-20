import React, { Component } from 'react'
import { menuStyles, pageContainerStyle, sectionStyle, grid, outdentedQuoteBody, outdentedQuoteAuthor, suggestions } from '../styles.css'
import { Link } from '@reach/router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)
 
export default class About extends Component {
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

          <h1>About the Film</h1>


          <img
            src={ require('assets/images/trailer.png') }
            alt='poster'
          />


          <div className={ sectionStyle }>
            <div className={ suggestions }>

              <div>
                <h4>Suggested readings:</h4>
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
                <h4>Suggested films:</h4>
                <ul>
                  <li>Daughters of the Dust</li>
                  <li>Praise House</li>
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


          <div className={ sectionStyle }>
            <h3>Behind the Name: <i>From a Valley of Talol</i></h3>
            <p>{ `Talol is not a town in Haiti, in fact, it has little to no connection to Haiti at all. Talol is one of the Salishan name given to the mountain contemporarily known as Mt. Rainier, in Washington. The name was given to the mountain by the indigenous people of the South Puget Sound.` }</p>
            <p>{ `There exists a story of how the mountain came to be, which resembles Lona’s journey out of the Haitian restevek system and into a community where love is possible.` }</p>
            <p>{ `As the story goes, there was a woman married to a man who was cheating on her with the woman’s sister. When the woman discovered this, she fled from the man, taking their baby and her belongings. The man was outraged. Infuriated, the man became what Americans have named Mt. Hood and erupted, threatening the lives of the woman and her child. The woman began dropping her belongings to lighten her load and flee quicker. Each hairpin she dropped become a peak turning into what we know as the Cascade Mountain Range. The food and dowry she dropped flourished into the diverse plant and animal life that is now home to the range. With each thing she dropped, life was given a new chance to thrive, and it all protected her from the fires of Mt. Hood. In the end, the woman became the mountain Talol.` }</p>
            <p>{ `The story gives us a perspective similar to Lona’s on the importance of healing and letting go in the process of realizing the possibilities of love.` }</p>
            <p>{ `We chose this story to represent the title of the film because we hope the audience is able to derive the film’s transnational relevance. We wanted to reference the ways in which American colonialism and influence has consistently worked to erase stories and narratives of love that exist within non-white communities.` }</p>
          </div>


          <div className={ sectionStyle }>
            <h3>Restevek Definition and Background</h3>
            <p>{ `Restevek is a Haitiain Creole word that combines the two Creole words, ‘rest,’ meaning to live, and ‘avek,’ meaning with. The origin of restevek is one founded in community. When a family did not have the resources to properly care for a child, that family would send their child to a relative or friend with the resources to send that child to school and to ensure the survival of that child.` }</p>
            <p>{ `Pressures of poverty has turned this system on its head, and what used to be a system of community and care among relatives and friends has become a system of child servitude. There are an estimated 300,000 restevek children in Haiti. Restevek children attend separate afternoon classes. They often cannot advance in school due to the work required of them at home. They often experience abuse and are treated as less than human, sleeping on a slate of cardboard or bundle of cloth on the floor rather than in a bed. Girls in restevek are often vulnerable to rape and sexual violence.` }</p>
          </div>


          <div className={ sectionStyle }>
            <h3>In the Making of From a Valley of Talol</h3>
            <p>{ `We struggled with how we wanted to tell the story of restevek in Haiti. From the start, we knew that we needed to contextualize the Haitian system of restevek outside of the existing narrative of Haiti as a “broken and impoverished nation.” We felt it necessary that restevek needed to be contextualized within the origins of Haiti’s poverty as a consequence of western powers interested in exploiting an already exploited nation. Similar to current narratives in America, the pressures of poverty and inaccessibility can have a detrimental effect on relationships and love. We were able to skim the surface of that conversation in From a Valley of Talol. ` }</p>
          </div>

  
          <div className={ sectionStyle }>
            <div className={ outdentedQuoteBody }>{ `We should not forget that the freedom you and I enjoy to-day; that the freedom that eight hundred thousand colored people enjoy in the British West Indies; the freedom that has come to the colored race the world over, is largely due to the brave stand taken by the black sons of Haiti ninety years ago. When they struck for freedom… they struck for the freedom of every black man in the world.` }</div>
            <div className={ outdentedQuoteAuthor }>Frederic Douglas</div>
          </div>


          <div className={ sectionStyle }>
            <h3>In the Making of From a Valley of Talol</h3>
            <p>{ `We struggled with how we wanted to tell the story of restevek in Haiti. From the start, we knew that we needed to contextualize the Haitian system of restevek outside of the existing narrative of Haiti as a “broken and impoverished nation.” We felt it necessary that restevek needed to be contextualized within the origins of Haiti’s poverty as a consequence of western powers interested in exploiting an already exploited nation. Similar to current narratives in America, the pressures of poverty and inaccessibility can have a detrimental effect on relationships and love. We were able to skim the surface of that conversation in From a Valley of Talol. ` }</p>
          </div>


          <div className={ sectionStyle }>
            <h3>Introducing the people in the film</h3>
            <div className={ grid }>

              <div className='grid-row'>
                <div className='grid-item'>
                  <h4>Lona Desir</h4>
                  <img alt='' src={ require('assets/images/lona-desir.png') } />
                  <div>{ `Lona Desir is 28 and has recently moved away from her own mother and stepfather where she has lived a complicated life of servitude and pain. It was only through that relationship with her parents, however, that she was able to pay for her education. She is now running a school in 135 where she works with kids going through similar experiences and builds the concept of education around accessibility and empowering children that otherwise may not be able to recognize their own humanity.` }</div>
                </div>
                <div className='grid-item'>
                  <h4>Jonas Marcelus</h4>
                  <img alt='' src={ require('assets/images/jonas-marcelus.png') } />
                  <div>{ `Jonas is 11 years old and in the 5th grade. After his mother died, he began life with his older sister as a restevek living in Delmas, Haiti.` }</div>
                </div>
              </div>

              <div className='grid-row'>
                <div className='grid-item'>
                  <h4>Pastor Robert Orientale</h4>
                  <img alt='' src={ require('assets/images/pastor-robert-orientale.png') } />
                  <div>{ `Robert Oriental, 135, has become a leader within his community as a pastor and mentor of children going through similar experiences that he went through as a restevek living with his brother. He has dedicated his life to teaching people how to love as a strategy to heal from past and present pain.` }</div>
                </div>
                <div className='grid-item'>
                  <h4>Sterline</h4>
                  <img alt='' src={ require('assets/images/sterline.png') } />
                  <div>{ `Sterline is 17 and in the 6th grade. Sterline’s mother abandoned Sterline to live with her grandmother. When her grandmother finally made contact with Sterline’s mother, Sterline’s mother sent Sterline to live with Sterline’s Dad’s sister. It was after arriving at her ‘aunt’s’ home that she realized the woman was not her aunt at all, just a friend of her mother’s. She hasn’t heard from or seen her mother since. She lives with her mother’s friend as a restevek in Delmas.` }</div>
                </div>
              </div>

            </div>
          </div>


          <div className={ sectionStyle }>
            <div className={ outdentedQuoteBody }>{ `Haiti [is] a symbol of black power and authority, not of desperate rebellion, and that is why it [can] inspire [and] terrify.` }</div>
            <div className={ outdentedQuoteAuthor }>Robin Blackburn</div>
          </div>


          <div className={ sectionStyle }>
            <h3>We wanted to leave the audience with two simple questions:</h3>
            <br/>
            <ul>
              <li>{ `How am I living a life that is actively contributing to situations like Lona’s, not just in Haiti, but domestically and internationally?` }</li>
              <li>{ `How could I live differently within my community to begin to validate the humanity of oppressed people world-wide?` }</li>
            </ul>
            <br/>
          </div>


        </div>
      </div>
    )
  }
}
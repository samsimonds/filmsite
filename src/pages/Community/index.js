import React, { Component } from 'react'
import { menuStyles, pageContainerStyle, sectionStyle } from '../styles.css'
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

        <h1>On Community</h1>

        <div className={ sectionStyle }>
          <p>{ `From a Valley of Talol expands the current conversation about the importance of building a foundation of love within communities, and in so doing, allowing for community members to grow spiritually while also healing from the pain that arises from past and present experiences. I would like to continue the conversation of community where Lona Desir and Robert Orientale left off in the film.` }</p>
          <p>{ `Community is one of those easily abstracted concepts without a concrete definition. Contemporary society has the ability to use community to radically transform world order. In her trilogy on love, Bell Hooks argues that love should not be used as a noun to describe a feeling, rather, it is a verb that humans who wish to experience love must always be in the act of doing` }<sup>1</sup>{ `.` }</p>
          <p>{ `Community is similar to love. When we think of contemporary communities in an American context, we tend to think about a few different models – a collective of people brought together by shared interests and place, a collective of people brought together by shared experiences and place, and a collective of people brought together by a shared mission and place` }<sup>2</sup>{ `. Many communities that fit within these models are incredibly sustainable and work to provide experiences that are rich, empowering, and healing. So, what is missing from these models of community?` }</p>
          <p>{ `We in America tend to forget about the significance of time, place, and identity when it comes to community. Time being historical and present stories that our people have experienced or perpetuated, place being the space that brings a community together, and identity being the interaction between time, place, and individual understandings of self. Communities that actively engage time, place, and identity, are becoming more and more common. Although productivity or survival may result from these communities in various ways, the motivation of these communities is founded within a common commitment to love.` }</p>
          <p>{ `There is a movement sweeping the globe that is actively reclaiming time and place within communities that exist to build harmony between self-identity, collective existence, and an understanding of the natural world’s impact on human thought and development. This movement is in large led by indigenous nations that are helping western culture realize that western science and western truth may not bring us to a solution for the damages of human existence that we face today` }<sup>3</sup>{ `.` }</p>
          <p>{ `In the aftermath of watching this film, we ask that viewers inspired to make a change in domestic and international narratives of oppression, slavery, and genocide, look into their own community instead of trying to address the global workings of giant systems that are largely out of our immediate control or comprehension. We are all able to build relationships of trust, love and knowledge within the communities that we call home. If we live on land that is historically native land, we can invite the indigenous nations that we have chosen to forget, or accept the invitations from indigenous peoples that already exist, and enter a conversation about the repercussions of our communities and how our communities can be less harmful in their existence.` }</p>
          <p style={{ display: 'inline' }}>{ `We have compiled a list of organizers and organizations that have a mission similar to ours. We have notified them of their presence on this platform and they are excited to field questions and interest in how this is achievable. ` }</p>
          <a
            href='http://localhost:3001/individual-impact'
            children={ `Click here to be directed to the Individual Impact page.` }
            style={{ display: 'inline', color: '#4b79d0', fontSize: `18px`, lineHeight: '23px' }}
          />
        </div>

        <div className='footenotes' />
          <cite>{`1. See All About Love, by Bell Hooks`}</cite>
          <cite>{`2. These models of community are based off of communities that are personal and face-to-face. It excludes online communities and platforms.`}</cite>
          <cite>{`3. See Peace, Power, and Righteousness, by Alfred Taiaiake`}</cite>
        </div>
      </div>
    )
  }
}
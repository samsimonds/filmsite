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

        <h1>Community Page</h1>

        <div className={ sectionStyle }>
          <h3>On Community</h3>
          <h4 style={{ textAlign: 'center' }}>By Sam Simonds</h4>
          <p>{ `From a Valley of Talol expands the current conversation about the importance of building a foundation of love within communities, and in so doing, allowing for community members to grow spiritually while also healing from the pain that arises from past and present experiences. I would like to continue the conversation of community where Lona Desir and Robert Orientale left off in the film.` }</p>
          <p>{ `Community is one of those easily abstracted concepts without a concrete definition. Contemporary society has the ability to use community to radically transform world order. In her trilogy on love, Bell Hooks argues that love should not be used as a noun to describe a feeling, rather, it is a verb that humans who wish to experience love must always be in the act of doing.` }</p>
          <p>{ `Community is similar to love. When we think of contemporary communities in an American context, we tend to think about a few different models – a collective of people brought together by shared interests and place, a collective of people brought together by shared experiences and place, and a collective of people brought together by a shared mission and place. Many communities that fit within these models are incredibly sustainable and work to provide experiences that are rich, empowering, and healing. So, what is missing from contemporary communities and what lacks in our definition of community?` }</p>
          <p>{ `We in America tend to forget about the significance of time and place when it comes to community. There are many communities that have the privilege to acknowledge time and place but choose not to. I am talking about majority white communities, co-ops, and communities built around a shared centrality of money. There are also communities that are brought together with the shared mission to survive in America; time and place are complicated within these communities and often these communities do not have the privilege to be able to consider time and place. I am talking about communities across racial identities struggling with poverty, education, and health.` }</p>
          <p>{ `There is a movement sweeping the globe that is actively reclaiming time and place within communities that exist to build harmony between self-identity, collective existence, and an understanding of the natural world’s impact on human thought and development. This movement is in large led by indigenous nations that are helping the west to realize that our science and our truth may not bring us to a solution for the damages of human existence that we face today3.` }</p>
          <p>{ `In the aftermath of watching this film, we ask that viewers inspired to make a change in domestic and international narratives of oppression, slavery, and genocide, look into their own community instead of trying to address the global workings of giant systems that are largely out of our immediate control and comprehension. We are all able to build relationships of trust, love and knowledge within the communities that we call home. If we live on land that is historically native land, we can invite the indigenous nations that we have chosen to forget, or accept the invitations from indigenous peoples that already exist, and enter a conversation about the repercussions of our communities and how our communities can be less harmful in their existence.` }</p>
          <p>{ `We have compiled a list of organizers and organizations that have a mission similar to ours. We have notified them of their presence on this platform and they are excited to field questions and interest in how this is achievable. Click here to be directed to the Individual Impact page.` }</p>
        </div>

        </div>
      </div>
    )
  }
}
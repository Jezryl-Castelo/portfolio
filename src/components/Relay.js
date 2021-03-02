import React from 'react';
import { CaseContainer, CenterImage} from '../styles';
import styled from 'styled-components';
//Images
import relay from '../img/relay_main.png';
import report from '../img/relay_report.png';
import design from '../img/relay_design.png';

const Relay = () => {
    return(
<CaseContainer>
    <h4>Relay</h4>
    <p>Relay is a customer support tool that allows the team to report issues. This is a personal project that I'm</p>
    
    <p>In my previous position, our team worked remotely and Slack was the key tool for communication. If an agent starts to see a recurring issue, they'll usually DM or post in the support channel to see if other agents are handling similar issues. Sadly, these issues get lost in the feed or are never seen because they are discussed in a direct message. </p>

    <p>In my previous position, our team worked remotely and Slack was the key tool for communication. If an agent starts to see a recurring issue, they'll usually DM or post in the support channel to see if other agents are handling similar issues. Sadly, these issues get lost in the feed or are never seen because they are discussed in a direct message.</p>

    <p>Here's a glimpse.</p>
    <RelayImages>
    <div className="images">
    <img src={relay} className="design-example" alt="screenshoot" />
    <img src={report}
    className="design-example"  alt="screenshoot" />
    </div>
    <img src={design}
    className="design-palette"  alt="screenshoot" />
    </RelayImages>
</CaseContainer>
    );
};

const RelayImages = styled(CenterImage)`
display: flex;
width: 100%;
padding: 1rem 0;
.images {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.design-example {
    width: 28rem;
    height: auto;
    padding: 1rem;
}
.design-palette {
    height: 20.8rem;
}
@media (max-width: 1199px) {
    .design-palette {
        width: 110%;
        height: auto;
    }
@media (max-width: 680px) {
    padding: 0;
    .design-example,
    .design-palette {
        width: 100%;
    }
  }
}
`;

export default Relay;

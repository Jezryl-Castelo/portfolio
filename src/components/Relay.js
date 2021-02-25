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
    <h5>Relay</h5>
    <p>Relay is a customer support tool that allows the team to report issues. This is a personal project that I'm</p>
    
    <p>In my previous position, our team worked remotely and Slack was the key tool for communication. If an agent starts to see a recurring issue, they'll usually DM or post in the support channel to see if other agents are handling similar issues. Sadly, these issues get lost in the feed or are never seen because they are discussed in a direct message. </p>

    <p>In my previous position, our team worked remotely and Slack was the key tool for communication. If an agent starts to see a recurring issue, they'll usually DM or post in the support channel to see if other agents are handling similar issues. Sadly, these issues get lost in the feed or are never seen because they are discussed in a direct message.</p>

    <p>Here's a glimpse.</p>
    <RelayImages>
    <img src={relay} alt="screenshoot" />
    <img src={report} alt="screenshoot" />
    <img src={design} alt="screenshoot" />
    </RelayImages>

</CaseContainer>
    );
};

const RelayImages = styled(CenterImage)`
img {
    height: 400px;
}`;

export default Relay;

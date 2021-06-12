import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>Welcome to<br/>My Web Developer Portfolio</SectionTitle>
<SectionText>
Shopify Developer whose experience is on the front-end web development. Exploring full-stack web development mainly the MERN stack and has an interest in Django framework.
</SectionText>
<Button onClick={()=> window.location="https://www.linkedin.com/in/jansoriano-233984192/"}>  Learn More
</Button>
  </LeftSection>
</Section>
);

export default Hero;
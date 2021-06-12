import React from 'react';
import { DiUnitySmall, DiReact, DiNodejsSmall } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech">
  <SectionDivider/>
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
  Shopify Developer whose experience is on the front-end web development. Exploring full-stack web development mainly the MERN stack and has an interest in Django framework.
  </SectionText>
  <List>
    <ListItem>
      <DiReact size="3rem"/>
      <ListContainer>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Shopify,
            ,React.js and
            Django
          </ListParagraph>
        </ListContainer>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiNodejsSmall size="3rem"/>
      <ListContainer>
        <ListContainer>
          <ListTitle>Backend-end</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Nodejs and databases
          </ListParagraph>
        </ListContainer>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiUnitySmall size="3rem"/>
      <ListContainer>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br/>
           tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListContainer>
    </ListItem>
  </List>
</Section>
);

export default Technologies;

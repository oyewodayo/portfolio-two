import React from 'react'
import styled
 from 'styled-components';
import { experiences } from '../../data/constant';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import ExperienceCard from '../Cards/ExperienceCard';
import president from "../../images/president-3.png"


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;
`;

const EventContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
const Title = styled.div`
  font-size: 52px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color:${({theme})=>theme.text_primary};

  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const TimeLineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

const ConferenceImage = styled.img`
  width: 600px;
  height: 600px;
`;

const Events = () => {
  return (
    <Container id="experience">
        <Wrapper>
            <Title className='pt-5 pb-5'>Events</Title>
            <EventContainer>
              <div style={{width:'550xpx',height:'550px'}}> <ConferenceImage src={president}></ConferenceImage>     </div>
              <TimeLineSection>
                <Timeline>
                      {experiences.map((experience,index)=>(
                      <TimelineItem>
                          <TimelineSeparator>
                              <TimelineDot variant='outlined' color='secondary'/>
                              {index !== experiences.length - 1 && <TimelineConnector/>}
                            
                          </TimelineSeparator>
                          
                          <TimelineContent sx={{py:"12px",px:"2px"}}>
                            
                              <ExperienceCard experience={experience} />
                          </TimelineContent>
                      </TimelineItem>
                      ))}
                </Timeline>
              </TimeLineSection>
            </EventContainer>
        </Wrapper>
    </Container>
  )
}

export default Events
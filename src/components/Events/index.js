import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constant'
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

const Title = styled.div`
  font-size: 52px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color:${({theme})=>theme.black};

  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc= styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color:${({theme})=>theme.text_secondary};
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
const EventsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  gap: 30px;

`;

const Skill = styled.div`
  width: 100%;
  max-width:500px;
  background-color: ${({theme})=>theme.card};
  border: 0.1px solid #854CE6 ;
  border-radius: 16px;
  padding: 18px 36px;
  @media screen and (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media screen and (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }

`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color:${({theme})=>theme.text_secondary};
  margin-bottom:12px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;

`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  font-size: 16px;
  color:${({theme})=>theme.text_primary+80};
  border-radius: 12px;
  border:1px solid ${({theme})=>theme.text_primary+80};
  padding: 12px 16px;
  font-weight: 400;
  @media screen and (max-width: 768px) {
   font-size: 14px;
    padding: 8px 12px;
  }
  @media screen and (max-width: 500px) {
    font-size: 14px;
    padding: 6px 8px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;


const AboutLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  font-size: 16px;
  height: 100%;
  width: 55%;
  background-color: ${({theme})=>theme.white};
  color:${({theme})=>theme.text_primary+80};
  border-radius: 12px;
  padding: 12px 16px;
  font-weight: 400;
  @media screen and (max-width: 768px) {
   font-size: 14px;
    padding: 8px 12px;
  }
  @media screen and (max-width: 500px) {
    font-size: 14px;
    padding: 6px 8px;
  }
`;
const AboutRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 45%;
  justify-content: center;
  font-size: 16px;
  color:${({theme})=>theme.text_primary+80};
  border-radius: 12px;
  font-weight: 400;
  @media screen and (max-width: 768px) {
   font-size: 14px;
    padding: 8px 12px;
  }
  @media screen and (max-width: 500px) {
    font-size: 14px;
    padding: 6px 8px;
  }
`;
const WorkItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  font-size: 16px;
  color:${({theme})=>theme.text_primary+80};
  border-radius: 12px;
  padding: 12px 16px;
  font-weight: 400;
  @media screen and (max-width: 768px) {
   font-size: 14px;
    padding: 8px 12px;
  }
  @media screen and (max-width: 500px) {
    font-size: 14px;
    padding: 6px 8px;
  }
`;
const WorkImage = styled.img`
  width: 100%;
  height: 550px;
`;



const Card = styled.div`
    width:650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;

    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }

    @media screen and (max-width: 768px) {
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    border:0.1px solid #306ee8;
    box-shadow: rgba(23,92,230,0.15) 0px 4px 24px;
`;




const Events = () => {
  return (
    <Container id="about">
      <Wrapper>
        
        <Title>About me</Title>

        <EventsContainer>
          {skills.map((item)=>(
            <Skill>             
              <SkillTitle>{item.title}</SkillTitle>
              <SkillList>
                {item.skills.map((skill)=>(
                  <SkillItem>
                    <SkillImage src={skill.image}></SkillImage>
                    {skill.name}
                  </SkillItem>
          ))}
              </SkillList>
            </Skill>
          ))}
        </EventsContainer>
      </Wrapper>
    </Container>
  )
}

export default Events
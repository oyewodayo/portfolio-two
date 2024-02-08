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
  color:${({theme})=>theme.text_secondary};
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  /* flex-wrap: wrap; */
  margin-top: 30px;
  justify-content: center;
  gap: 30px;

`;


const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;


const AboutLeft = styled.div`
  align-items: center;
  gap: 8px;
  justify-content: center;
  font-size: 16px;

  width: 55%;
  background-color: ${({theme})=>theme.white};
  color:${({theme})=>theme.text_primary+80};
  border-radius: 12px;
  padding: 50px 40px;
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

const WorkImage = styled.img`
  width: 100%;
  height: 600px;
`;
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 100%;
    padding: 0 6px;
    @media screen and (max-width: 640px){
        display: none;
    }
`;
const WorkWithUs = styled.div`
    background-color:${({theme})=>theme.white};
    color: ${({theme})=>theme.black};
    border: 1.8px solid ${({theme})=>theme.black};
    border-radius:100px;
   
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 15px 45px;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
   
    &:hover{
        background-color: ${({theme})=>theme.black};
        color: ${({theme})=>theme.white};
    }
    @media screen and (max-width: 640px) {
        font-size: 0.8rem;
    }
`;

const SocialContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 10px;
    
    padding: 0 6px;
    @media screen and (max-width: 640px){
      margin-left: 20px;
    }
`;
const SocialLink = styled.div`
    background-color:${({theme})=>theme.white};
    color: ${({theme})=>theme.black};
    width: 28%;
    border-radius:20px;   
    justify-content: center;
    align-items: center;
    display: flex;
    justify-self: flex-start;
    text-align: center;
    margin: 10px;
    padding: 23px 45px;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    &:hover{
        background-color: ${({theme})=>theme.primary};
        color: ${({theme})=>theme.white};
        cursor: pointer;
    }
    @media screen and (max-width: 640px) {
      padding: 23px 20px;
        font-size: 0.8rem;
        width: 41%;
        height: 50px;
        margin: 10px;
    }
`;


const About = () => {
  return (
    <Container id="about">
      <Wrapper>
        
        <Title>About me</Title>

          
        <AboutContainer>
          
            <AboutLeft>              
              <Desc>
              I am honored to share my journey with you as a real estate investor and philanthropist. Here, you will discover insights into my professional endeavors, philanthropic initiatives, and passion for making a positive impact in the world of real estate and beyond. Whether you are here to learn more about my investment philosophy, explore my portfolio of projects, or connect with me on matters of mutual interest, I am thrilled to have you join me on this journey.
              </Desc> 
              <ButtonContainer> 
                <WorkWithUs>MORE ABOUT ME</WorkWithUs>  
              </ButtonContainer>        
            </AboutLeft>

            <AboutRight>
              <WorkImage src={president}></WorkImage>                    
            </AboutRight>
        
        </AboutContainer>
      </Wrapper>
        <SocialContainer>
          <SocialLink> YEARS OF MENTORSHIP <br/>  12+</SocialLink>
          <SocialLink>MENTEES</SocialLink>
          <SocialLink>TRAINING HOUR</SocialLink>
         
        </SocialContainer>
    </Container>
  )
}

export default About
import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap';

const Wrapper = styled.div`
 

`;
const FooterContainer = styled.div`
    height: 400px;
    align-items: center;
    background-color: ${({theme})=>theme.purple};
    border-radius: 50px;   
    margin-bottom: 50px;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0 6px;
    
    @media screen and (max-width: 640px){
        display: none;
    }
`;
const WorkWithUs = styled.div`
    background-color:${({theme})=>theme.primary};
    color: ${({theme})=>theme.white};
    border: 1px solid ${({theme})=>theme.primary};
    border-radius:100px;
   
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 30px;
    padding: 15px 45px;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
   
    &:hover{
        background-color: ${({theme})=>theme.purple};
        color: ${({theme})=>theme.white};
    }
    @media screen and (max-width: 640px) {
        font-size: 0.8rem;
    }
`;

const Footer = () => {
  return (
    <div className='mx-auto'>
        
        <FooterContainer className='col-md-11 mx-auto'>
            <div className='text-center text-white pt-5' style={{fontWeight:'600',fontSize:'62px'}}>Let’s Build something amazing</div>
            <ButtonContainer>
                <WorkWithUs>MORE INSIGHT</WorkWithUs>  
            </ButtonContainer>
        </FooterContainer>

    </div>
  )
}

export default Footer
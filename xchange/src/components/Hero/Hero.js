import React { useState, useEffect } from 'react'
import { RightColumn, ConversionList, Features, GetStarted, Title, Video, LeftColumn, HeroSection } from './HeroStyles';
import { Button, Container, Text, Row } from '../../globalStyles'
import { AiOutlineRise } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion';
import rates from '../../data/rates.json'


const Hero = () => {
  return(
    <HeroSection>
      <Container>
        <Row justify='center'>
          <LeftColumn width="50%">
            <Title bold textColor>
              Cheapest currency<br />
              exchange Platform
            </Title>
            <Text>
              Transfer money or spend abroad cheaper and faster <br />
              than old-school banks, and receive <br />
              money around the world for free
            </Text>
            <Video width="70%" src="/videos/Hero.mp4" autoPlay muted loop />
            <Features>
              <div>
                <img src="./images/Lock.svg" alt="lock" />
              </div>
            </Features>
          </LeftColumn>
        </Row>
      </Container>
    </HeroSection>
  )
}

export default Hero

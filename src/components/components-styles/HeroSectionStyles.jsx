import colors from '../../helper-components/Color';
import fonts from '../../helper-components/Font';
import styled, { keyframes } from 'styled-components';
import heroImage from '../../assets/heroImage.png';

export const Hero = styled.section`
  height: 80vh;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;

  /* Pseudo-element for dimming effect */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Adjust the alpha value (0.5) for more or less dimming */
    z-index: 1; /* Ensure the overlay is above the background image but below the content */
  }

  /* Ensure content is above the dimming overlay */
  > * {
    position: relative;
    z-index: 2;
  }

   @media (max-width: 768px) {
    height: 60vh;
    padding: 20px;
  }
`;

const floatIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px); /* Adjust the value for the direction of the float */
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroContent = styled.div`
  z-index: 2;
  max-width: 800px;
  padding: 20px;
  color: ${colors.white};
  text-align: center;
  animation: ${floatIn} 1s ease-out forwards; /* Ensure final state is retained */

  /* Delay child elements for staggered animation */
  > * {
    opacity: 0; /* Start invisible */
    animation: ${floatIn} 1s ease-out forwards;
  }
`;

export const WelcomeTextHeader = styled.h1`
  font-family: ${fonts.mainFont};
  font-size: 36px;
  margin-bottom: 20px;
  animation-delay: 0.2s; /* Delayed animation start */
`;

export const WelcomeText = styled.p`
  font-family: ${fonts.mainFont};
  font-size: 14px;
  margin-top: -10px;
  animation-delay: 0.4s; /* Further delayed animation start */
`;

export const HeroButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
  animation-delay: 0.6s; /* Further delayed animation start */

   @media (max-width: 768px) {
    flex-direction: column; /* Stack buttons vertically on mobile */
    gap: 10px; /* Adjust spacing between buttons on mobile */
  }
`;

export const HeroProductsButton = styled.a`
  display: inline-block;
  padding: 8px 20px;
  font-family: ${fonts.mainFont};
  font-size: 16px;
  font-weight: bold;
  color: ${colors.footerBlack};
  background: linear-gradient(135deg, rgba(72, 209, 204, 0.3), rgba(255, 255, 255, 0.8));
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  animation-delay: 0.8s; /* Further delayed animation start */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background-color: ${colors.gray};
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

   @media (max-width: 768px) {
    padding: 7px 15px;
    font-size: 14px;
  }
`;
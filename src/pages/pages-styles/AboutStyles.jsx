import styled from 'styled-components';
import colors from '../.././helper-components/Color'
import fonts from '../../helper-components/Font';
import dimensions from '../../helper-components/Dimension';

export const PageHeaderOuterContainer = styled.div`
  background: linear-gradient(135deg, rgba(72, 209, 204, 0.3), rgba(255, 255, 255, 0.8));
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  box-sizing: border-box;
`;

export const PageHeader = styled.h2`
  color: ${colors.darkGray};
  font-family: ${fonts.mainFont};
  font-size: 32px;
  max-width: ${dimensions.pageDimension};
  margin: 0 auto;
  display: table;
  border-bottom: 2px solid ${colors.lightBlue};
  padding: 10px 10px 5px 10px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 28px;
    display: block; /* Forces the element (and border) to 100% width */
    margin: 0;
    width: 100%;
    padding: 10px 20px 8px 20px; 
  }
`;

export const BackgroundContainer = styled.div`
  background-color: ${colors.lightGray};
`;

export const AboutPageContainer = styled.div`
  font-family: ${fonts.mainFont};
  width: 100%;
  max-width: ${dimensions.pageDimension};
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  h2{
    border-left: 2px solid ${colors.lightBlue};
    padding-left: 10px;
    background-color: rgba(211, 211, 211, 0.1);
  }
`;

export const MissionVisionContainer = styled.div`
  display: flex;
  color: ${colors.darkGray};
  gap: 60px;
  margin-bottom: 20px;
  justify-content: space-between; /* Ensures spacing between the columns */

   @media (max-width: 768px) {
    gap: 10px;
    margin-bottom: 10px;
    flex-direction: column;
  }
`
export const MissionStatement = styled.div`
  flex: 1;
  line-height: 1.5;
  text-align: justify;
  color: ${colors.darkGray};
  hyphen: auto;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const VisionStatement = styled.div`
  flex: 1;
  line-height: 1.5;
  text-align: justify;
  color: ${colors.darkGray};
  hyphen: auto;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const WhoWeAreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${colors.darkGray};
  gap: 60px;
  margin-bottom: 20px;
  justify-content: space-between; /* Ensures spacing between the columns */

   @media (max-width: 768px) {
    gap: 10px;
    margin-bottom: 10px;
    flex-direction: column;
  }
`;

export const WhoWeAreText = styled.div`
  flex: 1; /* Takes up half the width of the container */
  text-align: justify;
  line-height: 1.5;
  hyphen: auto;

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;

export const CharlesTech = styled.div`
  flex: 1;
  text-align: justify;
  line-height: 1.5;
  hyphen: auto;

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`

export const StyledList = styled.ul`
  list-style: none;
  padding-left: 0;

  li {
    position: relative;
    padding-left: 25px;
    margin-bottom: 10px;

    &::before {
      content: '✔';
      color: ${colors.lightBlue};
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  @media (max-width: 768px) {
    li {
    &::before {
    color: ${colors.lightBlue};
    }
  }
}
`;

export const CharlesFeltContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${colors.darkGray};
  gap: 60px;
  margin-bottom: 40px;
  justify-content: space-between;

   @media (max-width: 768px) {
    margin-bottom: 60px;
    gap: 10px;
    flex-direction: column;
  }
`

export const CharlesFelt = styled.div`
  flex: 1;
  text-align: justify;
  line-height: 1.5;
  hyphen: auto;

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`

export const CharlesFeltVideo = styled.div`
  flex: 1;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  video {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;

  img {
  height: 200px;
  }
`;

export const CTASection = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, rgba(72, 209, 204, 0.3), rgba(255, 255, 255, 0.8));
  color: ${colors.darkGray};
  text-align: center;
  align-items: center;
  padding: 40px 20px;
  margin: 50px 0;
  margin-bottom: 20px;

  @media (max-width: 768px) {
   display: grid;
  }
`;

export const CTASectionLink = styled.a`
  color: ${colors.darkGray};
  text-decoration: none;
  position: relative;
  padding: 10px 0;
  text-align: center;
  transition: color 0.3s ease, border-color 0.3s ease;
  
  &:hover {
    color: ${colors.lightBlue};
    border-color: ${colors.lightBlue};
  }

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: ${colors.lightBlue};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

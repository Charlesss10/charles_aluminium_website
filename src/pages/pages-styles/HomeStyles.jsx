import styled from 'styled-components';
import colors from '../.././helper-components/Color'
import fonts from '../../helper-components/Font';
import dimensions from '../../helper-components/Dimension';

export const BackgroundContainer = styled.div`
  background-color: ${colors.lightGray};
`;

export const HomePageContainer = styled.div`
  font-family: ${fonts.mainFont};
  color: ${colors.darkGray};
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

export const IntroductionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  margin-bottom: 40px;
  justify-content: space-between; /* Ensures spacing between the columns */

   @media (max-width: 768px) {
    gap: 10px;
    flex-direction: column;
    align-items: left;
  }
`;

export const AboutUs = styled.div`
  flex: 1;
  text-align: justify;
  line-height: 1.5;
  hyphens: auto;

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;

export const MissionVisionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
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
  hyphens: auto;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const VisionStatement = styled.div`
  flex: 1;
  line-height: 1.5;
  text-align: justify;
  hyphens: auto;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  margin-bottom: 60px;
  text-align: justify;
  justify-content: space-between; /* Ensures spacing between the columns */

   @media (max-width: 768px) {
    gap: 10px;
    flex-direction: column;
    align-items: left;
  }
`

export const ProductGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

export const ProductItem = styled.div`
  position: relative;
  border: 1px solid #ddd;
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s;
  height: 400px;


  &:hover {
    transform: scale(1.05);
    background: none;

    img {
      opacity: 0.7;
    }
  }

  img {
    border-bottom: 1px solid #ddd;
    width: 100%;
    height: 350px;
    transition: opacity 0.3s ease;
  }

  h3 {
    margin: 10px 0;
    font-size: 1.1rem;
    color: ${colors.darkGray};
  }
`;

export const ProductLink = styled.a`
  text-decoration: none;
  position: relative;
  padding: 5px 0;
`

export const CharlesFeltVideo = styled.div`
  width: 100%;
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
`

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin-bottom: 20px;
  gap: 20px;
`;

export const ServiceItem = styled.div`
  overflow: hidden;

  img {
    width: 140px;
    height: 120px;
  }

  h3 {
    margin: -5px 0;
    font-size: 18px;
    padding: 15px;
  }
`;
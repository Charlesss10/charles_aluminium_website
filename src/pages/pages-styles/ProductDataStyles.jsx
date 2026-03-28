import styled from 'styled-components';
import colors from '../../helper-components/Color';
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

export const ProductPageContainer = styled.div`
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

export const ProductInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${colors.darkGray};
  margin-bottom: 40px;
  gap: 60px;
  justify-content: space-between; /* Ensures spacing between the columns */

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    align-items: left;
  }
`;

export const ProductDescription = styled.div`
  flex: 1;
  text-align: justify;
  line-height: 1.5;
  hyphen: auto;

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;

export const ProductImageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

   @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 350px;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

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

  @media (max-width: 768px) {
  margin-top: 20px;
  }
`

export const OtherProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 10px;
`;

export const OtherProductsItem = styled.div`
  position: relative;
  border: 1px solid #ddd;
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s;

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
    transition: opacity 0.3s ease;s
  }

  h3 {
    margin: 10px 0;
    font-size: 1.1rem;
    color: ${colors.darkGray};
  }
`;

export const OtherProductLink = styled.a`
  color: rgb(240, 240, 240);
  text-decoration: none;
  position: relative;
  padding: 5px 0;
`

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


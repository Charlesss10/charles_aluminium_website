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

export const ContactPageContainer = styled.div`
  font-family: ${fonts.mainFont};
  width: 100%;
  max-width: ${dimensions.pageDimension};
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  h1 {
    margin-top: 50px;
  }

  h2{
    border-left: 2px solid ${colors.lightBlue};
    padding-left: 10px;
    background-color: rgba(211, 211, 211, 0.1);
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  background-color: #f9f9f9;
`;

export const ContactDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 40px;
  margin: 50px 0;
  margin-bottom: 20px;
  
  .branch{
    background-color: #f9f9f9;
    padding: 20px;

    h2 {
    color: ${colors.darkGray};
    }

    p {
     line-height: 1.5;
     display: flex;
     margin: 10px 0;
     color: ${colors.gray};

     a {
     color: ${colors.gray};
     text-decoration: none;

      &:hover {
      color: ${colors.darkGray};
      }
     }
    }

    .reachOut{
    margin-top: 20px;
    }

    svg {
      margin-right: 10px;
      color: ${colors.gray};
    }
  };

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ContactFormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 40px;
  margin-bottom: 20px;

 .row {
    flex-wrap: wrap;
    margin-top: -15px;
    width: 100%;
    box-sizing: border-box;
  }

  .sendMessage {
    flex-wrap: wrap;

    button {
      display: inline-block;
      padding: 8px 20px;
      font-family: ${fonts.mainFont};
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
        display: block;
        width: 100%;
        padding: 7px 15px;
        font-size: 14px;
      }
    }
  }

  input,
  textarea {
    resize: none;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    font-family: ${fonts.mainFont};
  }

  .followUs{
    background-color: #f9f9f9;
    padding: 20px;
    margin-top: -50px;

    h2 {
      color: ${colors.darkGray};
    }

    a {
      margin-right: 20px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 20px;
      margin-top: 0;
      margin-bottom: 20px;
    }
  };

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
  }
`;
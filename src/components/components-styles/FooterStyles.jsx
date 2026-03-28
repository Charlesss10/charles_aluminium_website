import colors from '../../helper-components/Color';
import dimensions from '../../helper-components/Dimension';
import fonts from '../../helper-components/Font';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${colors.footerBlack};
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  & > .inner-footer {
    max-width: ${dimensions.pageDimension};
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-content: space-between;
  }
  
   @media (max-width: 768px) {
    height: auto;
  }
`;

export const NavLink = styled.a`
  color: ${colors.gray};
  text-decoration: none;

    &:hover {
      color: ${colors.white};
    }

    @media (max-width: 768px){
     display: block; 
     width: 100%;
    }
`;

export const FooterBox = styled.div`
  color: ${colors.gray};
  padding: 20px;

  &.head-office {
    display: flex;
    flex-direction: column;
    font-family: ${fonts.mainFont};

  }

  &.quick-links {
    display: flex;
    flex-direction: column;
    font-family: ${fonts.mainFont};


    div {
    margin-bottom: 10px;
    }
  }

  &.follow-us {
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      display: none; /* Hide social icons on mobile */
    }
  }

  .reachOut{
    h2 {
    color: ${colors.darkGray};
    }
      p {
        display: flex;
        margin: 10px 0;
        gap: 10px;
        color: ${colors.gray};

        a {
         color: ${colors.gray};
         text-decoration: none;

          &:hover {
          color: ${colors.white};
          }
        }
      }
  }
`;

export const FooterTitle = styled.h3`
  font-family: ${fonts.mainFont};
  font-size: 25px;
  margin: 20px 0;
  color: ${colors.lightGray};
  border-bottom: 1px solid ${colors.lightBlue};
  padding-bottom: 10px; /* Adds some spacing between the text and the line */
`;

export const SocialIcon = styled.a`
  text-decoration: none;
  color: ${colors.gray};
  text-decoration: none;

    &:hover {
      color: ${colors.white};
    }

  svg {
    margin: 0;
  }
`;

export const SocialIconContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

   @media (max-width: 768px) {
    display: none; /* Hide social icons on mobile */
  }
`;

export const FooterSignature = styled.div`
  text-align: center;
  color: ${colors.gray};
  font-family: ${fonts.mainFont};
  fontWeight: "bold";
  font-size: 14px;
  padding: 15px 0;
  background-color: rgba(0, 0, 0, 0.9);

  a {
    color: ${colors.gray}; // Link color
    text-decoration: none;

    &:hover {
      color: ${colors.white}; // Color on hover
    }
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 10px 0;
  }
`;
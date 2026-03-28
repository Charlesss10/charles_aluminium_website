import colors from '../../helper-components/Color';
import dimensions from '../../helper-components/Dimension';
import fonts from '../../helper-components/Font';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  font-family: ${fonts.mainFont};
  position: sticky;
  top: 0;
  background: ${colors.lightGray};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  & > .inner-header {
    max-width: ${dimensions.pageDimension};
    width: 100%;
    padding: 20px;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 0;
  padding: 20px;

  @media (max-width: 768px) {
  padding: 0;
  height: 40px;
  }
`;

export const LogoImage = styled.img`
  width: 120px;
  height: auto;
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative; /* To position the dropdown relative to this menu */

   @media (max-width: 768px) {
    display: none;
  }
`;

export const DropdownContainer = styled(NavMenu)`
  position: relative;
  
  &:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
  }
`;

export const NavLink = styled.a`
  display: block;
  text-decoration: none;
  color: ${({ 
// @ts-ignore
  $isactive }) => ($isactive ? colors.footerBlack : colors.gray)};
  font-size: 18px;
  font-weight: 500;
  position: relative;
  padding: 10px 0;
  margin-right: 40px;

  &:last-child {
    margin-right: 0;
  }

  &:hover,
  ${DropdownContainer}:hover & {
    color: ${colors.black};
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background-color: ${colors.lightBlue};
    left: 0;
    bottom: -5px;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%; /* Position it directly below the parent */
  background: ${colors.white};
  list-style: none;
  left: 0;
  margin: 0;
  padding: 0;
  width: 300px;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-top: 2px solid ${colors.lightBlue};
  opacity: 0;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  visibility: hidden; /* Hide the menu initially */

  ${DropdownContainer}:hover & {
    opacity: 1;
    visibility: visible;
  }

  ${NavLink} {
    font-size: 15px;
    font-weight: 500;
    padding: 15px 15px;
    margin-right: 0;
    
    &:hover{
      background: linear-gradient(135deg, rgba(72, 209, 204, 0.3), rgba(255, 255, 255, 0.8));
    }

    &:hover::after {
      width: 0;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileNavMenu = styled.div`
  position: fixed;
  top: 0;
  left: ${({ 
  // @ts-ignore
  $menuopen }) => ($menuopen ? '0' : '-300px')}; /* Hide or show sidebar */
  width: 300px;
  height: 100%;
  background: ${colors.white};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: ${({ 
  // @ts-ignore
  $menuopen }) => ($menuopen ? '1' : '0')};
  transform: ${({ 
  // @ts-ignore
  $menuopen }) => ($menuopen ? 'translateX(0)' : 'translateX(-10px)')};
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  list-style: none;
  border-top: 5px solid ${colors.lightBlue};
  z-index: 1001; /* Ensure sidebar is above other content */
  background: ${colors.lightGray};

  ${NavLink} {
    padding: 20px 15px;
    margin-right: 0;

    &:hover::after {
    width: 0;
    }
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  color: ${colors.gray};

  svg {
    width: 30px;
    height: auto;
  }

   @media (max-width: 768px) {
    display: block;
  }
`;

export const SocialIcon = styled.a`
  text-decoration: none;
  color: ${colors.darkGray};
  height: '100px';

  svg {
    margin: 0;
  }

    svg {
    height: 25px; // Adjust the height of the icon
  }

    &:hover {
    color: ${colors.gray};
  }
`;

export const SocialIconContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
  padding: 10px 20px;
`;
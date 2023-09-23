import { styled } from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
background: black;
height: 90px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.1rem;
position: sticky;
top: 0px;
z-index: 10;
text-transform: uppercase;
line-height: 0px;

@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1110px;
`

export const NavLogo = styled(LinkR)`
color: white;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
font-weight: bold;
text-decoration: none;

&:hover  {
    background-color: none;
    color: #fafafa;
}

@media screen and (max-width: 1024px) {
    font-size: 0rem;
}
@media screen and (max-width: 768px) {
    font-size: 0rem;
    margin: 24px;
}
`

export const BurgerIcon = styled.div`
display: none;

@media screen and (max-width: 900px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    height: 50px;
    transform:  translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
}

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    height: 50px;
    transform:  translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
}
`
// This is the navbar menu and allows navbar to be hidden on various devices 
export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
height: 64px;

@media screen and (max-width: 900px) {
    display: none;
}

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavItem = styled.li`
height: 80px;
`

// export const NavLinks = styled(LinkR)`
// color: white;
// display: flex;
// align-items: center;
// text-decoration: none;
// padding: 0 1.3rem;
// height: 100%;
// cursor: pointer;
// margin-top: 10px;


// &:hover  {
//     background-color: #DAA520;
//     color: black;
// }
// `

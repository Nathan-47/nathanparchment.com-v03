import {Nav, NavbarContainer, BurgerIcon, NavMenu, NavItem} from './navbarElements';


const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <BurgerIcon onClick={toggle}>
                </BurgerIcon>
                <NavMenu>
                    <NavItem>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    );
}

export default Navbar;
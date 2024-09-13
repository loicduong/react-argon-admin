import {
  Container,
  Navbar,
  NavbarBrand,
  UncontrolledCollapse,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink
} from "reactstrap"

export default function AuthNavbar() {
  const menuItems = [
    {to: '/', label: 'Dashboard', icon: 'ni ni-planet'},
    {to: '/auth/register', label: 'Register', icon: 'ni ni-circle-08'},
    {to: '/auth/login', label: 'Login', icon: 'ni ni-key-25'},
    {to: '/admin/user-profile', label: 'Profile', icon: 'ni ni-single-02'},
  ]

  return (
    <>
      <Navbar className="navbar-top navbar-horizontal navbar-dark" expand="md">
        <Container className="px-4">
          <NavbarBrand to="/" tag={Link}>
            <img
              alt="..."
              src={new URL("@/assets/img/brand/argon-react-white.png", import.meta.url).href}
            />
          </NavbarBrand>
          <button className="navbar-toggler" id="navbar-collapse-main">
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
            <div className="navbar-collapse-header d-md-none">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/">
                    <img
                      alt="..."
                      src={new URL("@/assets/img/brand/argon-react.png", import.meta.url).href}
                    />
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button className="navbar-toggler" id="navbar-collapse-main">
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto" navbar>
              {menuItems.map((item, index) => (
                <NavItem key={index}>
                  <NavLink className="nav-link-icon" to={item.to} tag={Link}>
                    <i className={item.icon} />
                    <span className="nav-link-inner--text">{item.label}</span>
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  )
}

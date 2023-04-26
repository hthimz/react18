import {
  createTheme,
  NextUIProvider,
  Text,
  Navbar,
  Button,
} from "@nextui-org/react";

const StickyHeader = () => (
  <Navbar isBordered variant="sticky">
    <Navbar.Brand>
      {/* <AcmeLogo />  Replace with your logo  */}
      <Text h3 b color="inherit">
        FinanceSher
      </Text>
    </Navbar.Brand>
    {/* <Navbar.Content hideIn="xs">
      <Navbar.Link href="#">Products</Navbar.Link>
      <Navbar.Link isActive href="#">
        Customers
      </Navbar.Link>
      <Navbar.Link href="#">About us</Navbar.Link>
      <Navbar.Link href="#">Vision</Navbar.Link>
    </Navbar.Content>
    <Navbar.Content>
      <Navbar.Link color="inherit" href="#">
        Login
      </Navbar.Link>
      <Navbar.Item>
        <Button auto flat as={Link} href="#">
          Sign Up
        </Button>
      </Navbar.Item>
    </Navbar.Content> */}
  </Navbar>
);

export default StickyHeader;

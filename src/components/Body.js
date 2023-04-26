import React from "react";
import {
  Text,
  Card,
  Row,
  Spacer,
  Grid,
  Image,
  Input,
  Dropdown,
  Container,
  Button,
  useInput,
  Loading,
  Popover,
} from "@nextui-org/react";
const FunctionalBody = () => {
  const [whatsappNumber, setWhatsappNumber] = React.useState("");
  const [typeOfBusiness, setTypeOfBusiness] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedFundRequirementRange, setSelectedFundRequirementRange] =
    React.useState(new Set(["Rs.25L - Rs.1Cr"]));

  const onSubmitHandler = () => {
    //send the api request to Google Sheet Server
    // good to have feature is once submitted the Modal event should come submitted succesfully and spinner
    // Should hide also can a single user submit multiple times ? i think yes ... he can share multiple validated rows

    // also try to hide the url from network calls
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      industry: typeOfBusiness,
      phone: whatsappNumber,
      range: selectedFundRequirementRange?.currentKey,
    });

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      mode: "no-cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached,
    };
    console.log("Byeee data", raw);
    fetch(
      "https://script.google.com/macros/s/AKfycbzTged7oQO1nqB-g1kYxHbi9tYJLnrg_7twUZbTbqGyYMg5ZtjTvy1n0a9a3FC-HvIQ/exec?action=addUser",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) =>{
        setIsOpen(true);
        setTimeout(() => {
        setIsOpen(false);
        },3000)
        setWhatsappNumber("");
        setTypeOfBusiness("");
        setSelectedFundRequirementRange("Rs.25L - Rs.1Cr");
        console.log("here the result is",result)})
      .catch((error) => console.log("error", error));
  };

  return (
    <Grid.Container gap={1} justify="center">
      <Grid xs={6}>
        <Image
          width={480}
          height={480}
          src="./hero1.png"
          alt="Default Web Image"
          objectFit="cover"
        />
      </Grid>
      <Grid xs={6}>
        <Container fluid>
          <Card css={{ $$cardColor: "$colors$default" }}>
            <Card.Body>
              <Row justify="center" align="center">
                <Text
                  css={{
                    textGradient: "45deg, $yellow600 -20%, $pink600 50%",
                    m: 0,
                  }}
                  h6
                  size={25}
                  color="white"
                >
                  Fill to get your finacial soltuions
                </Text>
              </Row>
            </Card.Body>
            <Spacer y={1} />
            <Card.Body>
              {/* <Row justify="start" align="center"> */}
              <Text
                css={{
                  textGradient: "45deg, $blue600 -20%, $pink600 50%",
                  m: 0,
                }}
                h6
                size={20}
                color="white"
              >
                Your whatsapp Number
              </Text>
              <Input
                color="primary"
                bordered
                placeholder="9876543210"
                type="number"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
              />
              {/* </Row> */}
            </Card.Body>

            <Card.Body>
              {/* <Row justify="start" align="center"> */}
              <Text
                h6
                size={20}
                color="white"
                css={{
                  textGradient: "45deg, $blue600 -20%, $pink600 50%",
                  m: 0,
                }}
              >
                Type Of Industry
              </Text>
              <Input
                clearable
                bordered
                placeholder="Food & Beverages"
                color="primary"
                value={typeOfBusiness}
                onChange={(e) => setTypeOfBusiness(e.target.value)}
              />
              {/* </Row> */}
            </Card.Body>

            <Card.Body>
              {/* <Row justify="start" align="center"> */}
              <Text
                h6
                size={20}
                color="white"
                css={{
                  textGradient: "45deg, $blue600 -20%, $pink600 50%",
                  m: 0,
                }}
              >
                Select Fund Requirement's Range
              </Text>
              <Dropdown>
                <Dropdown.Button
                  flat
                  color="secondary"
                  css={{ tt: "capitalize" }}
                >
                  {selectedFundRequirementRange}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Single selection actions"
                  color="primary"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedFundRequirementRange}
                  onSelectionChange={setSelectedFundRequirementRange}
                >
                  <Dropdown.Item key="Rs.0 - Rs.25L">
                    Rs.0 - Rs.25L
                  </Dropdown.Item>
                  <Dropdown.Item key="Rs.25L - Rs.1Cr">
                    Rs.25L - Rs.1Cr
                  </Dropdown.Item>
                  <Dropdown.Item key="Rs.1Cr - Rs.10Cr">
                    Rs.1Cr - Rs.10Cr
                  </Dropdown.Item>
                  <Dropdown.Item key="Rs.10Cr - Rs.50Cr">
                    Rs.10Cr - Rs.50Cr
                  </Dropdown.Item>
                  <Dropdown.Item key="Rs.50Cr - More">
                    Rs.50Cr - More
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* </Row> */}
            </Card.Body>
            <Row justify="center" align="center">
              <Card.Body>
                <Popover isOpen={isOpen} onOpenChange={setIsOpen} placement={"right-bottom"}>
                  <Popover.Trigger>
                    <Button
                      color="gradient"
                      auto
                      ghost
                      onClick={onSubmitHandler}
                    >
                      Check Elligibility
                      {/* <Loading color="currentColor" size="sm" /> will be used to add Loader */}
                    </Button>
                  </Popover.Trigger>

                  <Popover.Content>
                    <Text css={{ p: "$5" }}>
                      Submitted
                    </Text>
                  </Popover.Content>
                </Popover>
              </Card.Body>
            </Row>
          </Card>
        </Container>
      </Grid>
    </Grid.Container>
  );
};

export default FunctionalBody;

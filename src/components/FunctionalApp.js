import { Text, Row } from "@nextui-org/react";
import { Layout } from "./common/Layout";
import StickyHeader from "./StickyHeader";
import FunctionalBody from "./Body";

const FunctionalApp = () => (
  <>
    <Layout>
      <StickyHeader />
      <FunctionalBody />
      <Row justify="center" align="center">
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 100%",
          }}
          weight="bold"
        >
          Let's Finance Your Business
        </Text>
      </Row>
    </Layout>
  </>
);

export default FunctionalApp;

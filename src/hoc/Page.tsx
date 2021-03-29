import { Route } from "react-router";
import Header from "../components/Header/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import { Grid, GridItem } from "@chakra-ui/react";

function Page(props: any) {
  const { component: Component, ...rest } = props;
  console.log("render");
  
  return (
    <Route {...rest}>
      <Grid
        h="100vh"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
      >
        <GridItem rowSpan={1} colSpan={2} h="15vh" border="solid black 1px">
          <Header />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} h="125vh" w="15vw" borderRight="solid black 1px">
          <SideMenu />
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} h="125vh" w="85vw">
          <Component {...props} />
        </GridItem>
      </Grid>
    </Route>
  );
}

export default Page;

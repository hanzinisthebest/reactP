import { Center, Flex, Spacer, Text } from "@chakra-ui/react";
import "./App.css";
import AddTask from "./components/AddTask";
import Sort from "./components/Sort";
import Item from "./components/Item";
import ItemsList from "./components/ItemsList";
import { ItemProvider } from "./store/ItemContext";
function App() {
  return (
    <>
    <ItemProvider>
      <Text fontSize={"3rem"} align={"center"} m={10}>
        TODO LIST
      </Text>

      <Flex justify={"center"}>
        <AddTask />
        <Sort />
      </Flex>
      <ItemsList />
    </ItemProvider>
    </>
  );
}

export default App;

import {
  Box,
  Button,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Select,
} from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemContext from "../store/ItemContext";

function AddTask() {
  // const navigate = useNavigate()
  const { items, setItems } = useContext(ItemContext);
  const [itemTitle, setItemTitle] = useState("");
  const [itemType, setItemType] = useState("Incomplete");
  const [itemId,setItemId] = useState(0);
  const [isAdd,setIsAdd] = useState(false);

  const titleHandler = (e) => {
    setItemTitle(e.target.value);
  };

  const typeHandler = (e) => {
    setItemType(e.target.value);
  };

  const addHandler = () => {
    if (itemTitle.trim() === "") {
      alert("you got to enter a title");
      return;
    }
    setItemId(itemId+1);

    setItems((oldItems) => [
      ...oldItems,
      {
        id: itemId,
        title: itemTitle,
        type: itemType,
      },
    ]);
    setItemTitle("");
    setItemType("");
    setIsAdd(false);
  };
  const triggerHandler = ()=>{
    setIsAdd(true);
  }
  const cancelHandler = ()=>{
    setIsAdd(false);
  }

  return (
    <Box mr={300}>
      <Popover>
        <PopoverTrigger>
          <Button onClick={triggerHandler} bg={"blue"} color={"white"} w={"120px"} >
            Add Task
          </Button>
        </PopoverTrigger>
        {isAdd? <Portal>
  
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>Add TODO</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Input
                placeholder="title"
                size="md"
                onChange={titleHandler}
                value={itemTitle}
              />
              <br />
              <br />
              <Select placeholder="" onChange={typeHandler}>
                <option value="Incomplete">Incomplete</option>
                <option value="Completed">Completed</option>
              </Select>
              <br />
              <br />
            </PopoverBody>
            <PopoverFooter>
              <Button colorScheme="blue" onClick={addHandler}>
                Add Task
              </Button>
              <Button colorScheme="gray" onClick={cancelHandler}>Cancel</Button>
            </PopoverFooter>
          </PopoverContent>
        </Portal>:''}
      </Popover>
    </Box>
  );
}

export default AddTask;

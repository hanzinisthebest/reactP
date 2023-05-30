import React, { useContext, useState } from "react";
import { Box, Center, Checkbox, CheckboxGroup, Spacer,  Button,
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
  grid,
  IconButton, } from "@chakra-ui/react";
 import { IconName } from "react-icons/bi";
import { Card, CardHeader, CardBody, CardFooter,Text} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import ItemContext from "../store/ItemContext";
function Item(props) {
  const { deleteHandler} = useContext(ItemContext);
  const [title,setTitle] = useState(props.title);
  const [type,setType] = useState(props.type);
  const [editTitle,setEditTitle] = useState(props.title);
  const [editType,setEditType] = useState(props.type);
  const [isUpdate,setIsUpdate] = useState(false);

  const titleHandler= (e)=>{
    setEditTitle(e.target.value);
  }
  const typeHandler = (e)=>{
    setEditType(e.target.value);
  }
  const editHandler = ()=>{
    if(editTitle === title || editTitle.trim() === ''){
      alert("fix the title");
      return;
    }
    setTitle(editTitle);
    setIsUpdate(false);
  }
  const cancelEdit=()=>{
    setIsUpdate(false);
  }
  const openEdit = ()=>{
    setIsUpdate(true);
  }
  const checkHandler=()=>{

  }
  const deleteClick=()=>{
    deleteHandler(props.id);
  }
  return (
  <>
  <Center>
    <Card w={"800px"} p = {'5'}  >
      <Card w={'750px'} >
        <CardBody>
      <Button  onClick={checkHandler}> 
        <Checkbox   spacing='1rem' bg={"gray.200"}>
          <Text>{title}</Text>
        </Checkbox>
      </Button>
        <Button ml={520} mr={2} onClick={deleteClick}>
        <DeleteIcon/>    
        </Button>

    <Box display={"inline-block"}>
      <Popover>
        <PopoverTrigger>
          <Button bg={"gray.200"} color={"black"} w={"12px"} display={"inline-block"} onClick={openEdit}>
          <EditIcon/>
          </Button>
        </PopoverTrigger>
        {isUpdate? <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>Edit TODO</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Input placeholder="title" size="md" value={editTitle} onChange={titleHandler} />
              <br />
              <br />
              <Select placeholder="" value={editType} onChange={typeHandler}>
                <option value="Incomplete ">Incomplete</option>
                <option value="Completed">Completed</option>
              </Select>
              <br />
              <br />
            </PopoverBody>

            <PopoverFooter>
              <Button colorScheme="blue" onClick={editHandler} >Update Task</Button>
              <Button colorScheme="gray" onClick={cancelEdit}>Cancel</Button>
            </PopoverFooter>
          </PopoverContent>
        </Portal>:''}
      </Popover>
    </Box>
        </CardBody>
      </Card>
    </Card>
  </Center>
 
      
    </>
  );
}

export default Item;

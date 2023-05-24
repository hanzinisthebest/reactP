import { Box,Button,Input,Popover,PopoverArrow,PopoverBody,PopoverCloseButton,PopoverContent,PopoverFooter,PopoverHeader,PopoverTrigger,Portal, Select } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function AddTask() {
// const navigate = useNavigate()


  return (
    
   
<Box>
<Link to={'/example'}>
            <Button>example</Button>
        </Link>
<Popover>
  <PopoverTrigger>
    <Button color={'blue'}>Add Task</Button>
  </PopoverTrigger>
  <Portal>
    <PopoverContent>
      <PopoverArrow />
      <PopoverHeader>Add TODO</PopoverHeader>
      <PopoverCloseButton />
      <PopoverBody>
      <Input placeholder='title' size='md' />
      <br/>
      <br/>
      <Select placeholder=' select '>
  <option value='Complete'>Complete</option>
  <option value='Incomplete'>Incomplete</option>
</Select>      <br/>
      <br/>
      </PopoverBody>

      <PopoverFooter >  
        
              <Button colorScheme='blue'>Add Task</Button>
              <Button colorScheme='gray'>Cancel</Button>

</PopoverFooter>
    </PopoverContent>
  </Portal>
</Popover>
</Box>
 
  )
}

export default AddTask

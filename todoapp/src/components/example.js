import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Example = () => {
    return ( 
        <Box>
    <Text>
        hello
        </Text>
        <Link to={'/addTask'}>
            <Button>task app</Button>
        </Link>
        </Box>
         );
}
 
export default Example;
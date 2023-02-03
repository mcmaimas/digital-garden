import { FC } from "react";
import { } from '@mui/material';
import Notebook from './Notebook/Notebook';
import Tutorials from './Tutorials/Tutorials';
import Media from './Media/Media';

import Box from '../components/Box';


const Layout: FC<{}> = () => {

  return (
    <Box height="100vh" overflow="hidden" bgcolor="#EFE5d5" >
      <Box height="50%" display="flex">
        <Box width="50%" m={2}>
          <Tutorials />
        </Box>
        <Box width="50%" m={2}>
          <Media />
        </Box>
      </Box>
      {/* <Box height="50%"  display="flex">
        <Box width="50%" m={2}>
          <Notebook />
        </Box>
        <Box width="50%" m={2}>
          
        </Box>
      </Box> */}
      <Notebook />
    </Box>
  )
}

export default Layout;

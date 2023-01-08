import { FC } from "react";
import { Box } from '@mui/material';
import Notebook from './Notebook/Notebook';
import Media from './Media/Media';


const Layout: FC<{}> = () => {

  return (
    <Box component="div" height="100vh" overflow="hidden" bgcolor="#EFE5d5" display="flex">
      <Box width="50%" m={2} component="div">
        <Notebook />
      </Box>
      <Box width="50%" m={2} component="div">
        <Media />
      </Box>
    </Box>
  )

}

export default Layout;

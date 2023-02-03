import { FC } from "react";
import { Box, BoxProps } from '@mui/material';

const CustomBox: FC<BoxProps> = ({...props}) => {
  return <Box  {...props} component="div">
    {props.children}
  </Box>
}

export default CustomBox;
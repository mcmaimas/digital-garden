import { FC } from "react";
import { Box, Paper } from '@mui/material';

import TimerBlob from './Timer/TimerBlob';

const Media: FC<{}> = () => {

  return (
    <Box height="100%" component="div">
      <Paper style={{ height: "40%" }} >
        <TimerBlob />
      </Paper>
      <Box height="20%" component="div"></Box>
      <Paper style={{ height: "40%" }} >Music</Paper>
    </Box>
  )

}

export default Media;

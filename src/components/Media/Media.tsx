import { FC, useMemo, useState } from "react";
import { Paper } from '@mui/material';

import TimerBlob from './Timer/TimerBlob';
import Spotify from './Spotify/Spotify';
import Box from '../Box';

const Media: FC<{}> = () => {

  const [timeInput, setTimeInput] = useState(30);

  return (
    <Box height="100%" component="div">
      <Paper style={{ height: "50%" }} >
        <Box display="flex" height="100%">
          <Box width="50px">
            <Box>S</Box>
            <Box>T</Box>
          </Box>
          <Box flexGrow={1}>
            <TimerBlob time={timeInput} />
            {/* <Spotify /> */}
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

export default Media;

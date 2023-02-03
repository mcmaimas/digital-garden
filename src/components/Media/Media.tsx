import { FC, useMemo, useState } from "react";
import { Paper } from '@mui/material';
import Icon from '@mdi/react';
import { mdiSpotify, mdiTimer  } from '@mdi/js';


import TimerBlob from './Timer/TimerBlob';
import Spotify from './Spotify/Spotify';
import Box from '../Box';

const Media: FC<{}> = () => {

  const [timeInput, setTimeInput] = useState(30);

  return (
    <Box height="100%" component="div">
      <Paper style={{ height: "50%" }} >
        <Box display="flex" height="100%">
          <Box width="50px" border={1}>
            <Box display="flex" alignItems="center" justifyContent="center" height="50%">
              <Icon path={mdiSpotify} size={1} />
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" height="50%">
              <Icon path={mdiTimer } size={1} />
            </Box>
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

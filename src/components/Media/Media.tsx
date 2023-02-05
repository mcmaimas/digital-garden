import { FC, useMemo, useState } from "react";
import { CardActionArea, Paper } from '@mui/material';
import Icon from '@mdi/react';
import { mdiSpotify, mdiTimer  } from '@mdi/js';


import Timer from './Timer/Timer';
import Spotify from './Spotify/Spotify';
import Box from '../Box';

const Media: FC<{}> = () => {

  const [timeInput, setTimeInput] = useState(30);

  return (
    <Box height="100%" component="div">
      <Paper style={{ height: "50%" }} >
        <Box display="flex" height="100%">
          <Box width="50px" >
            <Box height="50%" >
            <CardActionArea style={{width: "100%", height: "100%"}}>
            <Box display="flex" alignItems="center" justifyContent="center" >
              <Icon path={mdiSpotify} size={1} />
              </Box>
              </CardActionArea>
            </Box>
            <Box height="50%">
            <CardActionArea style={{width: "100%", height: "100%"}}>
            <Box display="flex" alignItems="center" justifyContent="center" >
              <Icon path={mdiTimer} size={1} />
              </Box>
              </CardActionArea>
            </Box>
          </Box>
          <Box flexGrow={1}>
            
            
            <Timer />
            {/* <Spotify /> */}
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

export default Media;

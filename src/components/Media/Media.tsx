import { FC, useMemo, useState } from "react";
import { Box, Paper } from '@mui/material';

import TimerBlob from './Timer/TimerBlob';

const Media: FC<{}> = () => {

  const [timeInput, setTimeInput] = useState(30);
  

  return (
    <Box height="100%" component="div">
      <Paper style={{ height: "40%" }} >
      <input onChange={(e: any)=>setTimeInput(e.target.value)} />
        <TimerBlob time={timeInput}/>
      </Paper>
      
      
    </Box>
  )

}

export default Media;

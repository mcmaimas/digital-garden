import React, { FC, useMemo, useState } from "react";
import { Button, Paper } from '@mui/material';
import Box from '../../Box';
import { CardActionArea } from '@mui/material';

import TimerBlob from './TimerBlob';

const mockCardTitles = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6']

const Timer: FC<{}> = () => {

  const [timeInput, setTimeInput] = useState(30);

  const [reset, setReset] = useState<number>(0);

  

  const key = useMemo(() => {
    
  },[reset])

  return (
    <Box >
      
      <Button onClick={()=>setReset((prevReset) => prevReset + 1)}>
      Reset
      </Button>

      <TimerBlob time={timeInput} key={reset}/>
    </Box>
  )
}

export default Timer;

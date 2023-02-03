import React, { FC, useState } from "react";
import { Paper } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '../Box';
import { CardActionArea } from '@mui/material';
import ReactMarkdown from 'react-markdown'

const mockCardTitles = [ 'Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6' ]

const Notebook: FC<{}> = () => {
  const [card, selectCard] = useState<string>()
  

  return (

    <Box height="50%"  display="flex">
    <Box width="50%" m={2}>
    <Paper style={{ height: "100%" }} >
      <Box display="flex" flexWrap="wrap" overflow="hidden">
      {mockCardTitles.map((card) => <Card key={card} title={card} selectCard={selectCard}/> )}
      </Box>
    


</Paper>
    </Box>
    <Box width="50%" m={2}>
    <ReactMarkdown >
    This ~is not~ strikethrough, but ~~this is~~!
  </ReactMarkdown>
    </Box>
  </Box>

  )

}

export default Notebook;

const Card: FC<{title: string, selectCard: (card: string) => void}> = ({title, selectCard}) => {
  return (
    <div style={{padding: "8px"}}>
    <CardActionArea style={{ width:"200px"}} onClick={()=>selectCard(title)}>
    <Box width="200px" height="125px" display="flex" alignItems="center" justifyContent="center" border={1} borderRadius="8px">
      
      {title}
      
    </Box>
    </CardActionArea>
    </div>
  )
}

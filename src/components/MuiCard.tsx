import React from 'react'
import { Box  } from '@mui/system'
import { Button, CardActions, CardMedia, Typography } from '@mui/material'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'

export const MuiCard = () => {
  return (
    <Box width= '300px'>
        <Card>
            <CardMedia 
            component='img'
            height= '140px'
            image='https://unsplash.com/photos/random'
            alt= 'Unspalsh image'
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component= 'div'>
                    React
                </Typography>
                <Typography variant='body2' color= 'text.secondary'>
                React components implement a render() method that takes input data and returns what to display. 
                This example uses an XML-like syntax called JSX.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
            </CardActions>
        </Card>
    </Box>
  )
}

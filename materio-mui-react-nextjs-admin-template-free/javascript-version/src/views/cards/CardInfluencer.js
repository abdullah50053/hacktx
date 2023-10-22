// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

const CardInfluencer = ({name, description, tips, resources}) => {
  return (
    <Card>
      <CardHeader title={name} />
      <CardContent>
        <Typography variant='body2' sx={{ marginBottom: 3.25 }}>
          {description}
        </Typography>
        <Typography variant='body2'>
          {tips}
        </Typography>
        <Typography variant='body2'>
          {resources}
        </Typography>
      </CardContent>
      <CardActions className='card-action-dense'>
        <Button>Read More</Button>
      </CardActions>
    </Card>
  )
}

export default CardInfluencer

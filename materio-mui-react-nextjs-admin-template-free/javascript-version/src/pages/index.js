// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'
import CardInfluencer from 'src/views/cards/CardInfluencer'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

const Dashboard = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={12} md={12}>
        <Card>
          <CardHeader title="Depression" />
          <CardContent>
            <Typography variant='body1' sx={{ marginBottom: 3.25 }}>
              Depression is a mood disorder characterized by persistent feelings of sadness, hopelessness, and a loss of interest in daily activities.
            </Typography>
            <Typography variant='body1' sx={{ marginBottom: 3.25 }}>
              Seek professional help: If you or someone you know is experiencing symptoms of depression, consider consulting a mental health professional.
              Self-care: Prioritize self-care practices, including regular exercise, maintaining a balanced diet, and getting enough sleep.
              Support system: Reach out to friends and family for emotional support.
            </Typography>
            <Typography variant='body1'>
              <a href='https://www.nami.org/'>National Alliance on Mental Illness (NAMI)</a>
              <br></br>
              <a href="https://www.dbsalliance.org/">Depression and Bipolar Support Alliance (DBSA)</a>
            </Typography>
          </CardContent>
          <CardActions className='card-action-dense'>
            <Button>Read More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Card>
          <CardHeader title="Anxiety" />
          <CardContent>
            <Typography variant='body1' sx={{ marginBottom: 3.25 }}>
              Anxiety disorders involve excessive worry, fear, or nervousness that can interfere with daily life.
            </Typography>
            <Typography variant='body1' sx={{ marginBottom: 3.25 }}>
              Practice deep breathing and relaxation techniques to manage anxiety.
              Consider cognitive-behavioral therapy (CBT) to reframe negative thought patterns.
              Maintain a balanced lifestyle with reduced caffeine and alcohol intake.
            </Typography>
            <Typography variant='body1'>
              <a href='https://adaa.org/'>Anxiety and Depression Association of America (ADAA)</a>
              <br></br>
              <a href="https://www.calm.com/">Calm</a> and <a href="https://www.headspace.com/">Headspace for meditation and relaxation exercises.</a>
            </Typography>
          </CardContent>
          <CardActions className='card-action-dense'>
            <Button>Read More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Card>
          <CardHeader title="Stress" />
          <CardContent>
            <Typography variant='body1' sx={{ marginBottom: 3.25 }}>
              Stress is a natural response to challenging situations, but chronic stress can lead to mental and physical health issues.
            </Typography>
            <Typography variant='body1' sx={{ marginBottom: 3.25 }}>
              Practice stress-reduction techniques such as mindfulness and meditation.
              Organize tasks and set priorities for effective time management.
              Set healthy boundaries and avoid overcommitting.
            </Typography>
            <Typography variant='body1'>
              <a href='https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/stress-management/art-20044151'>Stress Management Tips</a>
              <br></br>
              <a href="https://www.apa.org/">American Psychological Association (APA)</a>
            </Typography>
          </CardContent>
          <CardActions className='card-action-dense'>
            <Button>Read More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Card>
          <CardHeader title="Eating Disorders" />
          <CardContent>
            <Typography variant='body1' sx={{ marginBottom: 3.25 }}>
              Eating disorders, such as anorexia and bulimia, involve unhealthy relationships with food and body image.
            </Typography>
            <Typography variant='body1' sx={{ marginBottom: 3.25 }}>
              Seek professional help: Early intervention is crucial. Consult a healthcare provider or therapist.
              Support groups: Consider joining support groups to connect with others facing similar challenges.
              Balanced eating: Focus on a balanced diet and regular meals to establish healthier eating habits.
            </Typography>
            <Typography variant='body1'>
              <a href='https://www.nationaleatingdisorders.org/'>National Eating Disorders Association (NEDA)</a>
              <br></br>
              <a href="https://www.eatingdisorderhope.com/">Eating Disorders Hope</a>
            </Typography>
          </CardContent>
          <CardActions className='card-action-dense'>
            <Button>Read More</Button>
          </CardActions>
        </Card>
      </Grid>


    </Grid>
  )
}

export default Dashboard

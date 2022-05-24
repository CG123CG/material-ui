import { useState } from 'react'

import {
  AppBar,
  Typography,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Checkbox,
  FormControlLabel,
  TextField
} from '@material-ui/core'

import { PhotoCamera, Wifi, Battery20, BatteryFull, PowerOff, DoneAll } from '@material-ui/icons'
//NOTE --  difference between the 2 imports 
//import WifiIcon from '@material-ui/icons/Wifi'

import useStyles from './styles'


const CheckboxExample = () => {
  const [checked, setChecked] = useState(true)
  return (
    <FormControlLabel
      //control property
      control={
        <div>
          <Checkbox
            checked={checked}
            name="checkedA"
            checkedIcon={<DoneAll />}
            icon={<PowerOff />}
            onChange={(e) => { setChecked(e.target.checked) }}
            color="secondary"
            //https://v4.mui.com/components/checkboxes/#accessibility
            inputProps={{ 'aria-label': 'secondary Checkbox' }}
          >
          </Checkbox>
        </div >
      }
      label="Learning Checkbox"
    />
  )
}

function App() {
  const classes = useStyles()

  const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8]



  return (
    <> {/* //React fragment */}
      {/* //https://v4.mui.com/components/css-baseline/ */}
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">AppBar Typography h6</Typography>
        </Toolbar>
      </AppBar>

      <main>

        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom> {/* //gutterBottom={true} */}
              Typography textPrimary
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Typography textSecondary Typography textSecondary Typography textSecondary
            </Typography>


            <div className={classes.buttons}>
              <Grid container spacing={2} justify="center">

              <Grid item>
                 <Typography className={classes.tableText}>
                   CHECK
                 </Typography>
                </Grid>

                <Grid item>
                  <Button variant="contained" color="primary">
                    contained Button
                  </Button>
                </Grid>

                <Grid item>
                  <Button variant="outlined" color="primary">
                    outlined Button
                  </Button>
                </Grid>

                <Grid item>
                  <Button variant="outlined" color="secondary" startIcon={<Wifi />}>
                    Button with Icon
                  </Button>
                </Grid>

                <Grid item>
                  <ButtonGroup variant="outlined" color="secondary">
                    <Button startIcon={<Battery20 />}>Battery20</Button>
                    <Button endIcon={<BatteryFull />}>BatteryFull</Button>
                  </ButtonGroup>
                </Grid>

              </Grid>
            </div>
          </Container>
        </div>

        <div>
          <Container maxWidth="sm">
            <Grid Container spacing={2} className={classes.textAndCheckbox}>
              <Grid item>
                <TextField
                  label="TextField"
                  variant="outlined"
                  color="secondary"
                  type="tel"
                  placeholder="enter mobile no"
                /* InputLabelProps={{
                  shrink: false,
                }} */
                />
              </Grid>
              <Grid item>
                <CheckboxExample />
              </Grid>
            </Grid>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}> {/* //Responsive Design for 3 device types */}
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="unsplash random image"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      Random Image
                    </Typography>
                    <Typography >
                      This is a Media Card
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">View image</Button>
                    <Button size="small" color="primary">Edit image</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <footer className="classes.footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Footer with color="textSecondary"
        </Typography>
      </footer>

    </>
  );
}

export default App;

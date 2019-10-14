import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from 'react-calendar';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import Toolbar from '@material-ui/core/Toolbar';
import yellow from '@material-ui/core/colors/yellow';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import lightBlue from '@material-ui/core/colors/lightBlue';
import amber from '@material-ui/core/colors/amber';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';




const useStyles = makeStyles(theme => ({
    palette: {
      primary: lightBlue,
      secondary: amber,
    },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  chip: {
    maxWidth: 100,
    padding: 200,
  },
  calendar: {
    maxWidth: 100
  }

}));

const handleDelete = () => {
  alert('Thanks for trying our protoype!');
};
const handleClick =() =>{
  alert('Thanks for trying our protoype!');
};


class App extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })


 
  render() {
    return (
      <div>
        
        <Grid item xs>

            <AppBar position="static">
            <Toolbar variant="dense"
            color = 'blue'>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                Boston Scientific Calendar Prototype
              </Typography>
            </Toolbar>
          </AppBar>
            <Container maxWidth = 'xs'>
            
            <Calendar
              onChange={this.onChange}
              value={this.state.date}
            />
             </Container>
            
            <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
            
            >
           
            
            
            <Paper>
            <Container>
            <Chip
            icon={<FaceIcon />}
            label="November 1st: Make sure you see the doctor"
            clickable
            color="primary"
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />}
          />
          </Container>
            </Paper>
            <Paper>
            <Chip
            label="October 23rd: Go for a run"
            color = 'secondary'
            onClick={handleClick}
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />}
          />
          
          </Paper>
          </Grid>

        </Grid>
      </div>
    
    );
  }
}

export default App;

import React from 'react'
import { Avatar, Grid, Paper, TextField, Typography } from '@material-ui/core'
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button'
import Link from "@material-ui/core/Typography"


const Login=()=>{
    const paperStyle={padding :20, height:'70vh', width:280,margin:'20px auto'}
    const avatarStyle={backgroundColor:'#0089ff'};
    const btnStyle={margin:'8px 0'}
    return(
       <Grid>]
           <Paper elevation={10} style={paperStyle}>
               <Grid align='center'>
               <Avatar style={avatarStyle}><LockOpenRoundedIcon/></Avatar>
                    <h2>Sign In</h2> 
               </Grid>
               <TextField label="Username" placeholder= "Enter username" fullWidth required/>
               <TextField label="Password" placeholder= "Enter Password" type="password" fullWidth required/>
               <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Remember Me"
      />

      <Button type="submit" color="primary"  variant="contained" style={btnStyle} fullWidth>Sign In</Button>
      <Typography> Do You have an account ?
        <Link href="/">Sign Up</Link>
    </Typography>
                   

           </Paper>
       </Grid>
    )
}

export default Login
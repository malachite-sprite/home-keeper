import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import IntervalSelector from '../components/interval-selector';
import CompletedSelector from '../components/completed-selector';

export default function NewChorePage() {
  return <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
              component={Link}
              to="/"
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          New Chore
        </Typography>
      </Toolbar>
    </AppBar>
    <FormControl>
    <TextField
      label="Description"
      variant="outlined"
      fullWidth
      margin="normal"
    />
    <Divider />
    <CompletedSelector />
    <Divider />
    <IntervalSelector />
    </FormControl>
  </Box>
}
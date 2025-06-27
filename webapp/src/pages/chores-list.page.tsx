import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

const chores = [
  { id: 1, description: 'Clean the kitchen', completed: false, subheading: 'due tomorrow' },
  { id: 2, description: 'Wash the dishes', completed: false, subheading: 'due Sunday' },
  { id: 3, description: 'Take out the trash', completed: true, subheading: 'done yesterday' },
];

export default function ChoresListPage() {
  return <Box sx={{ flexGrow: 1 }}>
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Chores
      </Typography>
    </Toolbar>
  </AppBar>
  <List>
    {chores.map((chore) => (
      <ListItem
        key={chore.id}
        secondaryAction={
        <IconButton edge="end" aria-label="edit">
          <EditIcon />
        </IconButton>
      }
      disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Checkbox edge="start" disableRipple checked={chore.completed} />
          </ListItemIcon>
          <ListItemText primary={chore.description} secondary={chore.subheading}   />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Fab color="primary" aria-label="add" component={Link} to="/new">
      <AddIcon />
    </Fab>
  </Box>
</Box>;
}
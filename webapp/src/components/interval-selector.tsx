import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';

export default function IntervalSelector() {
  return <>
    {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
      Repeats
    </InputLabel> */}
    <Autocomplete
      disablePortal
      options={['never', 'daily', 'weekly', 'monthly', 'yearly']}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Repeats" />}
    />
  </>
}
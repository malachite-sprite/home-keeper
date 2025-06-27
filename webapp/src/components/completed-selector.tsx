import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

export default function CompletedSelector() {
  return <>
    {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
    <RadioGroup
      // aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="not-completed"
      name="radio-buttons-group"
    >
      <FormControlLabel value="not-completed" control={<Radio />} label="I still need to do this" />
      <FormControlLabel value="completed" control={<Radio />} label="I already finished this" />
    </RadioGroup>
  </>
}
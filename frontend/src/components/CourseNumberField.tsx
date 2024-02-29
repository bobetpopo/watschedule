import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function CourseNumberField() {
    return (
        <Autocomplete
            disablePortal
            id="course-code-field"
            options={courseNumbers}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Numbers" />}
        />
    );
}

const courseNumbers = ['101', '102', '200', '225']
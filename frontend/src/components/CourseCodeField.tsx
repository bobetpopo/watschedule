import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function CourseCodeField() {
    return (
        <Autocomplete
            disablePortal
            id="course-code-field"
            options={courseCodes}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Codes" />}
        />
    );
}

const courseCodes = ['CS', 'MATH', 'CHEM', 'BIOL']
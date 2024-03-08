import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { createFilterOptions } from '@mui/material/Autocomplete';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useQuery, gql } from "@apollo/client";
import { useState, useMemo } from "react";

import './CourseSearchBar.css';

type CourseCode = {
    code: string;
}

type CourseCodesData = {
    course: CourseCode[];
}

type CourseSearchBarProps = {
    onAdd: (courseName: string, courseNumber: string) => void;
}

const COURSE_CODE_QUERY = gql`
    query Search_courses {
        course(distinct_on: code, where: { sections: { term_id: { _eq: 1241 } } }) {
            code
        }
    }
`

const getCourseParts = (code: string): string[] => {
    let numIndex = 0;
    for (let i = 0; i < code.length; i++) {
        if (code[i] >= '0' && code[i] <= '9') {
            numIndex = i;
            break;
        }
    }
    return [code.slice(0, numIndex).toUpperCase(), code.slice(numIndex).toUpperCase()];
}

const filterOptions = createFilterOptions({
    matchFrom: 'start',
});

export default function CourseSearchBar({ onAdd }: CourseSearchBarProps) {

    const { data, loading, error } = useQuery<CourseCodesData>(COURSE_CODE_QUERY);
    const [courseNameValue, setCourseNameValue] = useState('');
    const [courseNumberValue, setCourseNumberValue] = useState('');

    const courseMap = useMemo(() => {
        const map = new Map<string, string[]>();
        data?.course.forEach(obj => {
            const [courseName, courseNum] = getCourseParts(obj.code);
            if (map.has(courseName)) {
                map.get(courseName)?.push(courseNum);
            } else {
                map.set(courseName, [courseNum]);
            }
        })
        console.log(map);
        return map;
    }, [data]);

    const courseNames = useMemo(() => Array.from(courseMap.keys()), [courseMap]);
    let courseNumbers = courseMap.get(courseNameValue);
    if (!courseNumbers || !courseNameValue) {
        courseNumbers = [];
    }

    return (
        <div className="search-bar">
            <Autocomplete
                inputValue={courseNameValue}
                onInputChange={(event, newInputValue) => {
                    setCourseNameValue(newInputValue.toUpperCase());
                    setCourseNumberValue('');
                }}
                filterOptions={filterOptions}
                disablePortal
                id="course-code-field"
                size="small"
                freeSolo
                options={courseNames}
                sx={{ width: 300, mr: 1 }}
                renderInput={(params) => (
                    <TextField {...params} label="Course Code" placeholder="e.g. ECON" />
                )}
            />
            <Autocomplete
                inputValue={courseNumberValue}
                onInputChange={(event, newInputValue) => {
                    setCourseNumberValue(newInputValue.toUpperCase());
                }}
                disablePortal
                id="course-number-field"
                size="small"
                freeSolo
                options={courseNumbers}
                sx={{ width: 300, mr: 1 }}
                renderInput={(params) => (
                    <TextField {...params} label="Course Number" placeholder="e.g. 101" />
                )}
            />
            <Fab size="small" onClick={() => {
                setCourseNameValue('');
                setCourseNumberValue('')
                return onAdd(courseNameValue, courseNumberValue)
            }}>
                <AddIcon />
            </Fab>
        </div>
    )
}

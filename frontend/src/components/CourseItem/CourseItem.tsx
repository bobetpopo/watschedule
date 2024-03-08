import './CourseItem.css'
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

type CourseItemProps = {
    code: string;
    courseData: CourseSection[];
    onDelete: (code: string) => void;
}

export default function CourseItem({ code, courseData, onDelete }: CourseItemProps) {
    const [expanded, setExpanded] = useState(false);

    const expandContent = () => {
        console.log('expanded!');
    }

    return (
        <div className="course-item">
            <div className="top">
                {code.toUpperCase()} - {courseData[0].course.name}
                <div className="course-button-container">
                    <Tooltip title="Remove Course">
                        <IconButton onClick={() => onDelete(code)}>
                            <DeleteIcon sx={{ fontSize: '100%' }} />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Show Lectures">
                        <IconButton onClick={expandContent}>
                            <ExpandMoreIcon sx={{ fontSize: '100%' }} />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
            <div className="expandable">

            </div>
        </div>
    )
}
import CourseItem from "../CourseItem/CourseItem";
import './CourseList.css'

type CourseListProps = {
    sectionDict: SectionDict;
    onDelete: (code: string) => void;
}

export default function CourseList({ sectionDict, onDelete }: CourseListProps) {

    return (
        <div className="course-list">
            {Object.keys(sectionDict).length === 0 && <div id="guide-text">
                Your added courses will appear here.
            </div>}
            {Object.keys(sectionDict).map((key: string, i: number) => (
                <CourseItem key={i} code={key} courseData={sectionDict[key]} onDelete={onDelete} />
            ))}
        </div>
    )
}
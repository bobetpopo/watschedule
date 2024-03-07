import CourseItem from "../CourseItem";
import './CourseList.css'

type CourseListProps = {
    sectionDict: SectionDict;
}

export default function CourseList({ sectionDict }: CourseListProps) {

    return (
        <div className="course-list">
            {Object.keys(sectionDict).map((key: string) => (
                <CourseItem code={key} courseData={sectionDict[key]} />
            ))}
        </div>
    )
}
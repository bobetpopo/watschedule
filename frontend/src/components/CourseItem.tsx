type CourseItemProps = {
    code: string;
    courseData: CourseSection[];
}

export default function CourseItem({ code, courseData }: CourseItemProps) {

    return (
        <div className="course-item">
            <div className="top">{code}</div>
        </div>
    )
}
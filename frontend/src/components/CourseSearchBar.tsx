import CourseCodeField from "./CourseCodeField"
import CourseNumberField from "./CourseNumberField"

export default function CourseSearchBar() {
    return (
        <div className="search-bar">
            <CourseCodeField />
            <CourseNumberField />
        </div>
    )
}
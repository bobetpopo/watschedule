type CourseSection = {
    class_number: number;
    course_id: number;
    enrollment_capacity: number;
    enrollment_total: number;
    id: number;
    section_name: string;
    term_id: number
    course: {
        code: string;
        name: string;
    }
    meetings: {
        days: string[];
        end_date: string;
        end_seconds: number;
        is_tba: boolean;
        location: string;
        prof_id: number;
        section_id: number;
        start_date: string;
        start_seconds: number
    }
}

type SectionDict = {
    [key: string]: CourseSection[];
}
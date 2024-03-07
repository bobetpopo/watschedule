import CourseSearchBar from "../components/CourseSearchBar/CourseSearchBar"
import CourseList from "../components/CourseList/CourseList";
import { useState } from "react"
import axios from "axios";


const getQuery = (code: string, term: number = 1241) => {
    return `
        query Course_section {
            course_section(
                where: { course: { code: { _eq: "${code}" } }, term_id: { _eq: ${term} } }
            ) {
                class_number
                course_id
                enrollment_capacity
                enrollment_total
                id
                section_name
                term_id
                course {
                    code
                    name
                }
                meetings {
                    days
                    end_date
                    end_seconds
                    is_tba
                    location
                    prof_id
                    section_id
                    start_date
                    start_seconds
                }
            }
        }
    `
}


export default function Home() {
    const [sectionDict, setSectionDict] = useState<SectionDict>({});

    const onAdd = async (courseName: string, courseNumber: string) => {
        if (!courseName || !courseNumber) return;

        const code = courseName.toLowerCase() + courseNumber
        const query = getQuery(code);
        console.log(query)
        try {
            const response = await axios.post('https://uwflow.com/graphql', { query });
            setSectionDict(prev => (
                { ...prev, [code]: response.data.data.course_section }
            ))
        } catch (e) {
            console.log('Error fetching data:', e);
        }
    };

    return (
        <div className="container">
            <CourseSearchBar onAdd={onAdd} />
            <CourseList sectionDict={sectionDict} />
        </div>
    )
}
import { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'

interface CourseSection {
    id: number;
    classNumber: number;
    courseId: number;
    termId: number;
    enrollmentCapacity: number;
    enrollmentTotal: number;
    sectionName: string;
}

export default function CourseList() {

    const [courses, setCourses] = useState<CourseSection[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response: AxiosResponse<any[]> = await axios.get<any[]>('/api/courses')
                const transformedCourses = response.data.map(course => {
                    const transformedCourse: CourseSection = Object.keys(course).reduce((acc: any, key) => {
                        const camelKey = key.replace(/_([a-z])/g, (_match, letter) => letter.toUpperCase());
                        acc[camelKey] = course[key];
                        return acc;
                    }, {} as CourseSection);
                    return transformedCourse;
                });
                setCourses(transformedCourses);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching courses:', error)
            }
        }

        fetchCourses()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>Course List</h1>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>{course.sectionName}</li>
                    // Add other course properties to render as needed
                ))}
            </ul>
        </div>
    )
}
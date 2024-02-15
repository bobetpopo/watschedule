package com.bobetpopo.watschedule.model;


import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import org.springframework.data.annotation.Id;

@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public record CourseSection(
        @Id
        Integer id,
        Integer classNumber,
        Integer courseId,
        Integer termId,
        Integer enrollmentCapacity,
        Integer enrollmentTotal,
        String sectionName
) {
}

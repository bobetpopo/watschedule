package com.bobetpopo.watschedule.controller;

import com.bobetpopo.watschedule.model.CourseSection;
import com.bobetpopo.watschedule.service.CourseSectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.util.List;

@RestController
public class CourseSectionController {

    private CourseSectionService courseSectionService;

    @Autowired
    public CourseSectionController(CourseSectionService courseSectionService) {
        this.courseSectionService = courseSectionService;
    }

    @GetMapping("/api/courses")
    public Mono<List<CourseSection>> getCourses() {
        return courseSectionService.getCourseSections();
    }

}

package com.bobetpopo.watschedule.service;

import com.bobetpopo.watschedule.model.CourseSection;
import org.springframework.graphql.client.GraphQlClient;
import org.springframework.graphql.client.HttpGraphQlClient;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.List;

@Service
public class CourseSectionService {

    private final HttpGraphQlClient graphQlClient;

    public CourseSectionService() {
        WebClient client = WebClient.builder()
                .baseUrl("https://uwflow.com/graphql")
                .build();
        graphQlClient = HttpGraphQlClient.builder(client).build();
    }

    public Mono<List<CourseSection>> getCourseSections() {
        //language=GraphQL
        String document = """
        query Course_section {
            course_section(
                where: { course: { code: { _eq: "cs136" } }, term_id: { _eq: 1241 } }
            ) {
                class_number
                course_id
                enrollment_capacity
                enrollment_total
                id
                section_name
                term_id
            }
        }
        """;
        Mono<List<CourseSection>> course_section = graphQlClient.document(document)
                .retrieve("course_section")
                .toEntityList(CourseSection.class);

        return course_section;
    }

}

package com.alumni.controller;

import com.alumni.model.Blogs;
import com.alumni.service.BlogService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(BlogController.class)
@AutoConfigureMockMvc(addFilters = false)
public class BlogControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private BlogService blogService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void testGetAllBlogs() throws Exception {
        List<Blogs> mockBlogs = Arrays.asList(
                createMockBlog(1L, "First Blog", "This is the first blog", "Mathew", "tech,java", LocalDate.of(2024, 4, 1), 120, 10, 3),
                createMockBlog(2L, "Second Blog", "Second blog content", "Rishal", "spring,web", LocalDate.of(2024, 4, 2), 85, 7, 1)
        );

        when(blogService.getAllBlogs()).thenReturn(mockBlogs);

        mockMvc.perform(get("/api/blogs")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.size()").value(2))
                .andExpect(jsonPath("$[0].title").value("First Blog"))
                .andExpect(jsonPath("$[0].author").value("Mathew"))
                .andExpect(jsonPath("$[0].tags").value("tech,java"))
                .andExpect(jsonPath("$[0].views").value(120))
                .andExpect(jsonPath("$[1].title").value("Second Blog"))
                .andExpect(jsonPath("$[1].likes").value(7))
                .andExpect(jsonPath("$[1].comments").value(1));
    }

    private Blogs createMockBlog(Long id, String title, String content, String author, String tags,
                                 LocalDate date, int views, int likes, int comments) {
        Blogs blog = new Blogs();
        blog.setId(id);
        blog.setTitle(title);
        blog.setContent(content);
        blog.setAuthor(author);
        blog.setTags(tags);
        blog.setDate(date);
        blog.setViews(views);
        blog.setLikes(likes);
        blog.setComments(comments);
        return blog;
    }
}

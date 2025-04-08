package com.alumni.service;

import com.alumni.model.Blogs;
import com.alumni.repository.BlogRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

public class BlogServiceTest {

    @Mock
    private BlogRepository blogRepository;

    @InjectMocks
    private BlogService blogService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetAllBlogs() {
        // Arrange
        Blogs blog1 = createMockBlog(1L, "Test Blog 1", "Content 1", "Mathew", "tech", LocalDate.of(2024, 4, 1), 100, 5, 2);
        Blogs blog2 = createMockBlog(2L, "Test Blog 2", "Content 2", "Nivin", "spring", LocalDate.of(2024, 4, 2), 150, 8, 3);
        List<Blogs> mockBlogs = Arrays.asList(blog1, blog2);

        when(blogRepository.findAll()).thenReturn(mockBlogs);

        // Act
        List<Blogs> result = blogService.getAllBlogs();

        // Assert
        assertEquals(2, result.size());
        assertEquals("Test Blog 1", result.get(0).getTitle());
        assertEquals("Nivin", result.get(1).getAuthor());
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

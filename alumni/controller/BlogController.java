package com.alumni.controller;

import com.alumni.model.Blog;
import com.alumni.repository.BlogRepository;
import com.alumni.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/blogs")
@CrossOrigin(origins = "*") // Allows React to fetch data
public class BlogController {

    @Autowired
    private BlogRepository blogRepository;

    @GetMapping
    public ResponseEntity<?> getAllBlogs() {
        List<Blog> blogs = blogRepository.findAll();
        if (blogs.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No blogs found");
        }
        return ResponseEntity.ok(blogs);
    }
}

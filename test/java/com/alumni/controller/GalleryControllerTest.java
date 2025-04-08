package com.alumni.controller;

import com.alumni.model.Gallery;
import com.alumni.service.GalleryService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;

import static org.mockito.Mockito.when;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.times;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(GalleryController.class)
@AutoConfigureMockMvc(addFilters = false)
public class GalleryControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private GalleryService galleryService;

    @Test
    void testGetAllGalleryItems_ReturnsOkWithGalleryList() throws Exception {
        Gallery item1 = new Gallery();
        item1.setId(1L);
        item1.setTitle("Alumni Meet");
        item1.setCategory("Function");

        Gallery item2 = new Gallery();
        item2.setId(2L);
        item2.setTitle("Sports Day");
        item2.setCategory("Event");

        when(galleryService.getAllGalleryItems()).thenReturn(Arrays.asList(item1, item2));

        mockMvc.perform(get("/api/gallery")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.size()").value(2))
                .andExpect(jsonPath("$[0].title").value("Alumni Meet"))
                .andExpect(jsonPath("$[1].title").value("Sports Day"));

        verify(galleryService, times(1)).getAllGalleryItems();
    }
}

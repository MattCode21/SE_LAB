package com.alumni.service;

import com.alumni.model.Gallery;
import com.alumni.repository.GalleryRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class GalleryServiceTest {

    @Mock
    private GalleryRepository galleryRepository;

    @InjectMocks
    private GalleryService galleryService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllGalleryItems_ReturnsGalleryList() {
        // Arrange
        Gallery item1 = new Gallery();
        item1.setId(1L);
        item1.setTitle("Annual Day");
        item1.setCategory("Event");

        Gallery item2 = new Gallery();
        item2.setId(2L);
        item2.setTitle("Convocation");
        item2.setCategory("Ceremony");

        List<Gallery> galleryList = Arrays.asList(item1, item2);

        when(galleryRepository.findAll()).thenReturn(galleryList);

        // Act
        List<Gallery> result = galleryService.getAllGalleryItems();

        // Assert
        assertNotNull(result);
        assertEquals(2, result.size());
        assertEquals("Annual Day", result.get(0).getTitle());
        verify(galleryRepository, times(1)).findAll();
    }
}

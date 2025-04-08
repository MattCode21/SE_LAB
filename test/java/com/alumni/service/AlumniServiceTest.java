package com.alumni.service;

import com.alumni.model.Alumni;
import com.alumni.repository.AlumniRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class AlumniServiceTest {

    @Mock
    private AlumniRepository alumniRepository;

    @InjectMocks
    private AlumniService alumniService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    private Alumni createMockAlumni(Long id, String name) {
        Alumni alumni = new Alumni();
        alumni.setId(id);
        alumni.setName(name);
        alumni.setBatchYear("2021");
        alumni.setDepartment("CSE");
        alumni.setProgramme("BTech");
        alumni.setCompany("Google");
        alumni.setDesignation("SDE");
        alumni.setLocation("Bangalore");
        return alumni;
    }

    @Test
    public void testGetAllAlumni() {
        List<Alumni> mockList = Arrays.asList(
                createMockAlumni(1L, "Alice"),
                createMockAlumni(2L, "Bob")
        );

        when(alumniRepository.findAll()).thenReturn(mockList);

        List<Alumni> result = alumniService.getAllAlumni();

        assertEquals(2, result.size());
        assertEquals("Alice", result.get(0).getName());
        verify(alumniRepository, times(1)).findAll();
    }

    @Test
    public void testSaveAlumni() {
        Alumni mockAlumni = createMockAlumni(null, "Charlie");
        Alumni savedAlumni = createMockAlumni(3L, "Charlie");

        when(alumniRepository.save(mockAlumni)).thenReturn(savedAlumni);

        Alumni result = alumniService.saveAlumni(mockAlumni);

        assertNotNull(result.getId());
        assertEquals("Charlie", result.getName());

        ArgumentCaptor<Alumni> captor = ArgumentCaptor.forClass(Alumni.class);
        verify(alumniRepository).save(captor.capture());
        assertEquals("Charlie", captor.getValue().getName());
    }
}

package com.alumni.controller;

import com.alumni.model.LeaderboardModel;
import com.alumni.service.LeaderboardService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.mockito.Mockito.when;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.times;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@WebMvcTest(LeaderboardController.class)
@AutoConfigureMockMvc(addFilters = false)
public class LeaderboardControllerTest {

    @Test
    void testGetLeaderboard_ReturnsMockedData() {
        // Arrange
        LeaderboardService mockService = Mockito.mock(LeaderboardService.class);
        List<LeaderboardModel> mockLeaderboard = Arrays.asList(
                new LeaderboardModel("Charlie", 70),
                new LeaderboardModel("Dana", 95)
        );
        Mockito.when(mockService.getLeaderboard()).thenReturn(mockLeaderboard);

        LeaderboardController controller = new LeaderboardController();

        // Inject mockService via reflection
        try {
            java.lang.reflect.Field field = LeaderboardController.class.getDeclaredField("service");
            field.setAccessible(true);
            field.set(controller, mockService);
        } catch (Exception e) {
            throw new RuntimeException("Reflection injection failed", e);
        }

        // Act
        List<LeaderboardModel> result = controller.getLeaderboard();

        // Assert
        assertEquals(2, result.size());
        assertEquals("Charlie", result.get(0).getName());
        assertEquals(95, result.get(1).getPoints());
    }
}

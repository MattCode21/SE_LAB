package com.alumni.service;

import com.alumni.model.LeaderboardModel;
import com.alumni.repository.LeaderboardRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class LeaderboardServiceTest {

    @Test
    void testGetLeaderboard_ReturnsMockedData() {
        // Arrange
        LeaderboardRepository mockRepository = Mockito.mock(LeaderboardRepository.class);
        List<LeaderboardModel> mockData = Arrays.asList(
                new LeaderboardModel("Alice", 100),
                new LeaderboardModel("Bob", 80)
        );
        Mockito.when(mockRepository.getLeaderboardData()).thenReturn(mockData);

        // We inject mock via reflection since constructor uses 'new'
        LeaderboardService service = new LeaderboardService();

        // Inject mockRepository using reflection
        try {
            java.lang.reflect.Field field = LeaderboardService.class.getDeclaredField("repository");
            field.setAccessible(true);
            field.set(service, mockRepository);
        } catch (Exception e) {
            throw new RuntimeException("Reflection injection failed", e);
        }

        // Act
        List<LeaderboardModel> result = service.getLeaderboard();

        // Assert
        assertEquals(2, result.size());
        assertEquals("Alice", result.get(0).getName());
        assertEquals(100, result.get(0).getPoints());
    }
}

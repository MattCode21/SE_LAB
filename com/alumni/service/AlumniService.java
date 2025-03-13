package com.alumni.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import com.alumni.repository.AlumniRepository;
import com.alumni.model.Alumni;

@Service
public class AlumniService {

    @Autowired
    private AlumniRepository alumniRepository;

    public boolean isAlumni(String email) {
        return alumniRepository.findByEmail(email) != null;
    }
}

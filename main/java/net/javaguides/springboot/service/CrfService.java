package net.javaguides.springboot.service;

import java.util.List;

import org.springframework.stereotype.Service;

import net.javaguides.springboot.model.Crf;

@Service
public interface CrfService {
	
	Crf saveCrf(Crf crf);
	
	List<Crf> getAllCrfs();
	
	Crf getCrfById(long id);
	
	Crf updateCrf(Crf crf, long id);
	
	void deleteCrf(long id);
	
}

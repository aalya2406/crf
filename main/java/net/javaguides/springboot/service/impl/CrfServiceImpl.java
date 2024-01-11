package net.javaguides.springboot.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Crf;
import net.javaguides.springboot.repository.CrfRepository;
import net.javaguides.springboot.service.CrfService;

@Service
public class CrfServiceImpl implements CrfService{
	
	@Autowired
	CrfRepository crfRepository;

	public Crf saveCrf(Crf crf) {
		return crfRepository.save(crf);
	}

	public List<Crf> getAllCrfs() {
		return crfRepository.findAll();
	}

	@Override
	public Crf getCrfById(long id) {
		// TODO Auto-generated method stub
		return crfRepository.findById(id).orElseThrow(() -> 
		new ResourceNotFoundException("Crf", "Id", id));
	}

	@Override
	public Crf updateCrf(Crf crf, long id) {
		// TODO Auto-generated method stub
		
		Crf existingCrf = crfRepository.findById(id).orElseThrow( 
			() -> new ResourceNotFoundException("Crf", "Id", id));
		
		existingCrf.setChangeRequestId(crf.getChangeRequestId());
		existingCrf.setCategoryOfChange(crf.getCategoryOfChange());
		existingCrf.setTypeofChange(crf.getTypeofChange());
		existingCrf.setProblemStatement(crf.getProblemStatement());
		existingCrf.setRequesterDetails(crf.getRequesterDetails());
		existingCrf.setImplementerDetails(crf.getImplementerDetails());
		existingCrf.setDateOfChange(crf.getDateOfChange());
		existingCrf.setDescriptionOfProblem(crf.getDescriptionOfProblem());
		existingCrf.setSupportingInfoIfAny(crf.getSupportingInfoIfAny());
		existingCrf.setReasonAndJustification(crf.getReasonAndJustification());
		existingCrf.setAffectedAreas(crf.getAffectedAreas());
		existingCrf.setAlternateActionsIfAny(crf.getAlternateActionsIfAny());
		existingCrf.setPriorityToImplement(crf.getPriorityToImplement());
		existingCrf.setChangeImplementationPlan(crf.getChangeImplementationPlan());
		existingCrf.setApplicationTesting(crf.getApplicationTesting());
		existingCrf.setDateTimeOfImplementation(crf.getDateTimeOfImplementation());
		existingCrf.setRollbackPlan(crf.getRollbackPlan());
		existingCrf.setApprover1(crf.getApprover1());
		existingCrf.setApprover2(crf.getApprover2());
		existingCrf.setChangeClosureRemarkAndDate(crf.getChangeClosureRemarkAndDate());
		existingCrf.setChangeClosureApprover(crf.getChangeClosureApprover());
		crfRepository.save(existingCrf);
		
		return existingCrf;
	}

	@Override
	public void deleteCrf(long id) {
		// TODO Auto-generated method stub
		crfRepository.findById(id).orElseThrow(() ->
						new ResourceNotFoundException("Crf", "Id", id));
		crfRepository.deleteById(id);
		
	}
	
	

}

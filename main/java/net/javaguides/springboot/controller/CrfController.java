package net.javaguides.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.model.Crf;

import net.javaguides.springboot.service.CrfService;

@CrossOrigin()
@RestController
@RequestMapping("/api/crfs")
public class CrfController {

//	private CrfService crfService;

	@Autowired
	CrfService crfService;
	
	@PostMapping
	public ResponseEntity<Crf> saveCrf(@RequestBody Crf crf){
		System.out.println("Hi");
		return new ResponseEntity<Crf>(crfService.saveCrf(crf), HttpStatus.CREATED);
	}

	@GetMapping
	public List<Crf> getAllCrfs(){
		System.out.println("HI, I am get method");
		return crfService.getAllCrfs();
	}
	
	@GetMapping("{id}")
	public ResponseEntity<Crf> getCrfById(@PathVariable("id") long CrfId){
		return new ResponseEntity<Crf>(crfService.getCrfById(CrfId), HttpStatus.OK);
	}
	
	@PutMapping("{id}")
	public ResponseEntity<Crf> updateCrf(@PathVariable("id") long id
											, @RequestBody Crf crf){
		return new ResponseEntity<Crf>(crfService.updateCrf(crf, id), HttpStatus.OK);
		
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteCrf(@PathVariable("id") long id){
											
		crfService.deleteCrf(id);
		
		return new ResponseEntity<String>("Crf deleted successfully!",  HttpStatus.OK);
	}
	

	
}

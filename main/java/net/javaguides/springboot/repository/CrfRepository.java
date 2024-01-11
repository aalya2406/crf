package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.javaguides.springboot.model.Crf;


public interface CrfRepository extends JpaRepository<Crf, Long> {

}

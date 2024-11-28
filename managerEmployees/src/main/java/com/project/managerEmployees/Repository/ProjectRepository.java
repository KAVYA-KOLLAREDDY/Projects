package com.project.managerEmployees.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.managerEmployees.Entity.Project;

public interface ProjectRepository extends JpaRepository<Project,Integer>{
	
	
}
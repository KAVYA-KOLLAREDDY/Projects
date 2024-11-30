package com.project.managerEmployees.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.managerEmployees.Entity.Activity;

public interface ActivityRepository extends JpaRepository<Activity,Integer>{
	
}
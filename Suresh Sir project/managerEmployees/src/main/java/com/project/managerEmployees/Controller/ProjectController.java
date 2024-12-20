package com.project.managerEmployees.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.managerEmployees.Entity.Project;
import com.project.managerEmployees.Service.ProjectService;

@RestController
@RequestMapping("/projects")
@CrossOrigin("*")
public class ProjectController{
	
	@Autowired
	private ProjectService projectService;
	
	@GetMapping
	public List<Project> getProjectDetails(){
		return projectService.getAllProjects();	
	}
	
	@GetMapping("/{id}")
	public Project getProjectById(@PathVariable Integer id) {
		return projectService.getProjectById(id);
	}
	
	@PostMapping
	public List<Project> createProjects(@RequestBody Project project){
		return projectService.createProject(project);
	} 
	
	 @PutMapping("/{id}")
	 public Project updateProject(@PathVariable Integer id, @RequestBody Project updatedProject) {
	    return projectService.updateProject(id, updatedProject);
	 }
	
	@DeleteMapping("/{id}")
	public List<Project> deleteProjects(@PathVariable Integer id){
		return projectService.deleteProjectById(id);
	}
	
	
	
}
 
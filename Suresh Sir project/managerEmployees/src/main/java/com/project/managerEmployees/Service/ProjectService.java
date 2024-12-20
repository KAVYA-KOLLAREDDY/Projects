package com.project.managerEmployees.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.managerEmployees.Entity.Project;
import com.project.managerEmployees.Repository.ProjectRepository;

@Service
public class ProjectService{
	
	@Autowired
	private  ProjectRepository projectRepository;
	
	public List<Project> getAllProjects(){
		return projectRepository.findAll();
	}
	
	public Project getProjectById(Integer id) {
		return projectRepository.findById(id).orElse(null);
	}
	
	public List<Project> createProject(Project project) {
		projectRepository.save(project);
		return this.getAllProjects();
	}
	
	public Project updateProject(Integer id,Project projectDetails) {
		Project project = getProjectById(id);
		
		project.setProjectName(projectDetails.getProjectName());
		project.setClient(projectDetails.getClient());
		project.setTypeOfProject(projectDetails.getTypeOfProject());
		project.setSubmissionMethod(projectDetails.getSubmissionMethod());
		project.setStatus(projectDetails.getStatus());
		project.setActualEndDate(projectDetails.getActualEndDate());
		project.setActualStartDate(projectDetails.getActualStartDate());
		project.setPlannedEndDate(projectDetails.getPlannedEndDate());
		project.setPlannedStartDate(projectDetails.getPlannedStartDate());
		
		return projectRepository.save(project);
	}
	
	public List<Project> deleteProjectById(Integer id) {
		Project project= projectRepository.findById(id).orElse(null);
        if (project != null) {
            projectRepository.delete(project);
        }
        return projectRepository.findAll();
	}
	
	
}
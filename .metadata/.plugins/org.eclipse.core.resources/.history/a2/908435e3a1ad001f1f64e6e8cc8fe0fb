package com.project.managerEmployees.Entity;



import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Projects")
public class Project{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

    private String projectName;
    private String client;
    private String typeOfProject;
    private String submissionMethod;
    private String status;
    @Column(name = "plannedStartDate")
    private Date plannedStartDate;

    @Column(name = "actualStartDate")
    private Date actualStartDate;

    @Column(name = "plannedEndDate")
    private Date plannedEndDate;

    @Column(name = "actualEndDate")
    private Date actualEndDate;
    
	public Project() {
		
	}

	public Project(Integer id, String projectName, String client, String typeOfProject, String submissionMethod,
			String status, Date plannedStartDate, Date actualStartDate, Date plannedEndDate, Date actualEndDate) {
		super();
		this.id = id;
		this.projectName = projectName;
		this.client = client;
		this.typeOfProject = typeOfProject;
		this.submissionMethod = submissionMethod;
		this.status = status;
		this.plannedStartDate = plannedStartDate;
		this.actualStartDate = actualStartDate;
		this.plannedEndDate = plannedEndDate;
		this.actualEndDate = actualEndDate;
	}

	public Project(String projectName, String client, String typeOfProject, String submissionMethod, String status,
			Date plannedStartDate, Date actualStartDate, Date plannedEndDate, Date actualEndDate) {
		super();
		this.projectName = projectName;
		this.client = client;
		this.typeOfProject = typeOfProject;
		this.submissionMethod = submissionMethod;
		this.status = status;
		this.plannedStartDate = plannedStartDate;
		this.actualStartDate = actualStartDate;
		this.plannedEndDate = plannedEndDate;
		this.actualEndDate = actualEndDate;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getClient() {
		return client;
	}

	public void setClient(String client) {
		this.client = client;
	}

	public String getTypeOfProject() {
		return typeOfProject;
	}

	public void setTypeOfProject(String typeOfProject) {
		this.typeOfProject = typeOfProject;
	}

	public String getSubmissionMethod() {
		return submissionMethod;
	}

	public void setSubmissionMethod(String submissionMethod) {
		this.submissionMethod = submissionMethod;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getPlannedStartDate() {
		return plannedStartDate;
	}

	public void setPlannedStartDate(Date plannedStartDate) {
		this.plannedStartDate = plannedStartDate;
	}

	public Date getActualStartDate() {
		return actualStartDate;
	}

	public void setActualStartDate(Date actualStartDate) {
		this.actualStartDate = actualStartDate;
	}

	public Date getPlannedEndDate() {
		return plannedEndDate;
	}

	public void setPlannedEndDate(Date plannedEndDate) {
		this.plannedEndDate = plannedEndDate;
	}

	public Date getActualEndDate() {
		return actualEndDate;
	}

	public void setActualEndDate(Date actualEndDate) {
		this.actualEndDate = actualEndDate;
	}

	@Override
	public String toString() {
		return "Project [id=" + id + ", projectName=" + projectName + ", client=" + client + ", typeOfProject="
				+ typeOfProject + ", submissionMethod=" + submissionMethod + ", status=" + status
				+ ", plannedStartDate=" + plannedStartDate + ", actualStartDate=" + actualStartDate
				+ ", plannedEndDate=" + plannedEndDate + ", actualEndDate=" + actualEndDate + "]";
	}
	
	
	
}
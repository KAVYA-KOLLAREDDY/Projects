package com.project.managerEmployees.Entity;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Activity{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private Integer id;
	@Column(name="activityName")
	private String activityName;
	@Column(name="assignedTo")
	private String assignedTo;
	@Column(name="plannedStartDate")
	private Date plannedStartDate;
	@Column(name="plannedEndDate")
	private Date plannedEndDate;
	@Column(name="actualStartDate")
	private Date actualStartDate;
	@Column(name="actualEndDate")
	private Date actualEndDate;
	
	
	public Activity() {
		
	}


	public Activity(String activityName, String assignedTo, Date plannedStartDate, Date plannedEndDate,
			Date actualStartDate, Date actualEndDate) {
		super();
		this.activityName = activityName;
		this.assignedTo = assignedTo;
		this.plannedStartDate = plannedStartDate;
		this.plannedEndDate = plannedEndDate;
		this.actualStartDate = actualStartDate;
		this.actualEndDate = actualEndDate;
	}


	public Activity(Integer id, String activityName, String assignedTo, Date plannedStartDate, Date plannedEndDate,
			Date actualStartDate, Date actualEndDate) {
		super();
		this.id = id;
		this.activityName = activityName;
		this.assignedTo = assignedTo;
		this.plannedStartDate = plannedStartDate;
		this.plannedEndDate = plannedEndDate;
		this.actualStartDate = actualStartDate;
		this.actualEndDate = actualEndDate;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getActivityName() {
		return activityName;
	}


	public void setActivityName(String activityName) {
		this.activityName = activityName;
	}


	public String getAssignedTo() {
		return assignedTo;
	}


	public void setAssignedTo(String assignedTo) {
		this.assignedTo = assignedTo;
	}


	public Date getPlannedStartDate() {
		return plannedStartDate;
	}


	public void setPlannedStartDate(Date plannedStartDate) {
		this.plannedStartDate = plannedStartDate;
	}


	public Date getPlannedEndDate() {
		return plannedEndDate;
	}


	public void setPlannedEndDate(Date plannedEndDate) {
		this.plannedEndDate = plannedEndDate;
	}


	public Date getActualStartDate() {
		return actualStartDate;
	}


	public void setActualStartDate(Date actualStartDate) {
		this.actualStartDate = actualStartDate;
	}


	public Date getActualEndDate() {
		return actualEndDate;
	}


	public void setActualEndDate(Date actualEndDate) {
		this.actualEndDate = actualEndDate;
	}


	@Override
	public String toString() {
		return "Activity [id=" + id + ", activityName=" + activityName + ", assignedTo=" + assignedTo
				+ ", plannedStartDate=" + plannedStartDate + ", plannedEndDate=" + plannedEndDate + ", actualStartDate="
				+ actualStartDate + ", actualEndDate=" + actualEndDate + "]";
	}
	
	
	
	
}
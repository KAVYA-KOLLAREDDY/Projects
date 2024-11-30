package com.project.managerEmployees.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.managerEmployees.Entity.Activity;
import com.project.managerEmployees.Entity.Project;
import com.project.managerEmployees.Repository.ActivityRepository;

import jakarta.persistence.Entity;

@Service
public class ActivityService{
	
	@Autowired
	private ActivityRepository activityRepository;
	
	public List<Activity> getAllActivities(){
		return activityRepository.findAll();
	}
	
	public Activity getActivityById(Integer id) {
		return activityRepository.findById(id).orElse(null);
	}
	
	public List<Activity> createActivity(Activity activity) {
		activityRepository.save(activity);
		return this.getAllActivities();
	}
	
	public Activity updateActivity(Integer id,Activity activityDetails) {
		Activity activity = getActivityById(id);
		
		activity.setActivityName(activityDetails.getActivityName());
		activity.setAssignedTo(activityDetails.getAssignedTo());
		activity.setActualEndDate(activityDetails.getActualEndDate());
		activity.setActualStartDate(activityDetails.getActualStartDate());
		activity.setPlannedEndDate(activityDetails.getPlannedEndDate());
		activity.setPlannedStartDate(activityDetails.getPlannedStartDate());
		
		return activityRepository.save(activity);
	}
	
	public List<Activity> deleteActivityById(Integer id) {
		Activity activity= activityRepository.findById(id).orElse(null);
        if (activity != null) {
            activityRepository.delete(activity);
        }
        return activityRepository.findAll();
	}
}
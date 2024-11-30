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

import com.project.managerEmployees.Entity.Activity;
import com.project.managerEmployees.Service.ActivityService;

@RestController
@RequestMapping("/activity")
@CrossOrigin("*")
public class ActivityController{
	
	@Autowired
	private ActivityService activityService;
	
	@GetMapping
	public List<Activity> getActivityDetails(){
		return activityService.getAllActivities();	
	}
	
	@GetMapping("/{id}")
	public Activity getActivityById(@PathVariable Integer id) {
		return activityService.getActivityById(id);
	}
	
	@PostMapping
	public List<Activity> createActivity(@RequestBody Activity activity){
		return activityService.createActivity(activity);
	} 
	
	 @PutMapping("/{id}")
	 public Activity updateActivity(@PathVariable Integer id, @RequestBody Activity updatedActivity) {
	    return activityService.updateActivity(id, updatedActivity);
	 }
	
	@DeleteMapping("/{id}")
	public List<Activity> deleteActivity(@PathVariable Integer id){
		return activityService.deleteActivityById(id);
	}
	
	
	
}
 
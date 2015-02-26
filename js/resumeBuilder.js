var name = "Nail Ableyev";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend (formattedName, formattedRole);

var bio = {
	"name": "Nail Ableyev",
	"role": "Web Developer",
	"contacts": {
		"mobile": "+77778132903",
		"email": "nail.ableyev@gmail.com",
		"github": "Nail-Ableyev",
		"twitter": "@nailll",
		"location": "Petropavlovsk, Kazakhstan"
	},
	"welcomeMessage": "The way I am...",
	"skills": ["reliability", "empathy in communication", "stress managment"],
	"biopic": "images/me.jpg",
	"display": function(){
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedTw = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#header").append(formattedPic, formattedMessage);
		$("#header").append(HTMLskillsStart);
		for (var i=0; i<bio.skills.length; i++){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
		$("#topContacts").append(formattedMobile, formattedEmail, formattedGit, formattedTw, formattedLoc);
		$("#footerContacts").append(formattedMobile, formattedEmail, formattedGit, formattedTw, formattedLoc);
	}
};

bio.display();

var work = {
	"jobs" : [
		{
		"employer": "SPIE",
		"title" : "Language Instructor",
		"location" : "Basra",
		"dates": "2012-2015", 
		"description": "provide training for employees"
		},
		{
		"employer": "CTG",
		"title" : "Language Teacher",
		"location" : "Atyrau",
		"dates": "2011-2012", 
		"description": "provide training for employees"
		}
	],
	"display": function (){
		for (var i in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			var formattedEmp = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedWorkLoc = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			$(".work-entry:last").append(formattedEmp + formattedTitle, formattedDates, formattedWorkLoc, formattedDescription);
		}
	}
};

work.display();

var projects = {
	"projects": [
	{
		"title": "Mug challenge",
		"dates": "January 2015",
		"description": "replicate given web page",
		"images": ["images/project1_1.png", "images/project1_2.png"]
	},
	{
		"title": "Personal Stuff",
		"dates": "February 2015",
		"description": "create personal page",
		"images": ["images/project2_1.png", "images/project2_2.png"]
	}
	],
	"display": function(){
		for (var i in projects.projects){
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedProjectDescripton = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			$(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescripton);
			for (var a=0; a<projects.projects[i].images.length; a++){
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[a]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
};

projects.display();

var education = {
	"schools": [
	{
		"name": "NKSU",
		"location": "Petropavlovsk, Kazakhstan",
		"degree": "BLS",
		"majors": ["Foreign Languages"],
		"dates" : 2009,
		"url": "#"
	}
	],
	"onlineCourse":[
	{
		"title": "Front-End Web Developer",
		"school": "Udacity",
		"date": 2015,
		"url": "https://www.udacity.com"
	}
	],

	"display": function(){
		for (var i in education.schools){
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLoc = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors)
			$(".education-entry:last").append(formattedSchoolName + formattedDegree, formattedSchoolDates, formattedSchoolLoc, formattedMajor);			
		}

		$("#education").append(HTMLonlineClasses);

		for (var n in education.onlineCourse){
			$("#education").append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[n].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[n].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourse[n].date);
			var formattedonlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourse[n].url);
			$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool, formattedOnlineDates,formattedonlineUrl);
			$('.education-entry').last().find('a').attr("href", education.onlineCourse[n].url);
		}
		
	}
};

education.display();


//Appending Timesheet to the page. Source: http://semu.github.io/timesheet.js
$("#programming").append(HTMLprogrammingLanguages);

new Timesheet('timesheet', 2013, 2015, [
  ['05/2013', '12/2015', 'Started learning programming with Python.', 'lorem'],
  ['10/2013', '12/2015', 'Pygame modules', 'dolor'],
  ['03/2014', '12/2015', 'HTML and CSS', 'ipsum'],
  ['06/2014', '12/2015','JavaScript', 'lorem'],
  ['10/2014', '12/2015', 'jQuery Lib', 'dolor']
]);

$("#mapDiv").append(googleMap);
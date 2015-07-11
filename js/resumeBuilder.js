var bio = {
	"name" : "Thomas Kormylo",
	"role" : "Front-End Web Developer",
	"contacts": {
		"mobile": "(303) 555-5555",
		"email": "tkormylo@gmail.com",
		"github": "tkormylo",
		"twitter": "N/A",
		"location": "Boise, Idaho"
	},
	"welcomeMessage" : "Hi there! Welcome to my resume. Stay a while and listen.",
	"skills": [
		"Polite", "Professional", "Fun"
	],
	"bioPic": "https://s-media-cache-ak0.pinimg.com/736x/3d/7f/66/3d7f6697ce111037f518620a6a9faafd.jpg"
}

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedBioPic);


	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);

		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
	}
}

var work = {
	"jobs": [
		{
			"employer": "Computer Automation Systems, Inc.",
			"title": "Support Manager",
			"location": "Aurora, Colorado",
			"dates": "7 Years",
			"description": "Provide technical and business support for our clients."
		},
		{
			"employer": "Briggs Engineering",
			"title": "Civil Drafting Technician",
			"location": "Boise, Idaho",
			"dates": "3 Years",
			"description": "Use CAD software to design and draft sub-division related drawings."
		}
	]
}

work.display = function() {
	for(job in work.jobs) {
	// create new div for work experience
	$("#workExperience").append(HTMLworkStart);

	// concat employer and title
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	}
}

var projects = {
	"projects": [
		{
			"title": "toxiCALL(R) Convert Notes",
			"dates": "Summer 2012",
			"description": "Collect and convert data for the RADARS(R) project",
			"images": [
				"http://lorempixel.com/g/400/200/",
				"http://lorempixel.com/g/400/200/",
				"http://lorempixel.com/g/400/200/"
				]
		},
		{
			"title": "toxiCALL(R) Company Web Site Rewrite",
			"dates": "Spring 2015",
			"description": "Rewrite the entire toxiCALL(R) Company Web Site using modern development tools and technologies",
			"images": [
				"http://lorempixel.com/g/400/200/",
				"http://lorempixel.com/g/400/200/",
				"http://lorempixel.com/g/400/200/"
				]
		}
	]
}

projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

var education = {
	"schools": [
		{
			"name": "DeVry University",
			"location": "Chicago",
			"degree": "Bachelor of Science",
			"majors": ["Computer Information Systems"],
			"datesAttended": "2008-2012",
			"schoolURL": "http://www.devry.edu/",
			"onlineCourses": [
				{
					"title": "Physics",
					"school": "Devry University",
					"dates": "2010",
					"courseURL": "http://www.devry.edu/d/DVUO_UG_Courses.pdf"
				}
			]
		},
		{
			"name": "Microsoft",
			"location": "Seattle",
			"degree": ["Microsoft Certified Technologoy Specialist"],
			"majors": ["SQL Server 2008 Implementation and Maintenance"],
			"datesAttended": "2012",
			"schoolURL": "http://www.microsoft.com/",
			"onlineCourses": [
				{
					"title": "70-432",
					"school": "LearnNowOnline",
					"dates": "2012",
					"courseURL": "http://www.learnnowonline.com/"
				}
			]
		}
	]
}

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].datesAttended);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		if (education.schools[school].majors.length > 0) {
			for (major in education.schools[school].majors) {
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
				$(".education-entry:last").append(formattedMajor);
			}
		}

		if (education.schools[school].onlineCourses.length > 0) {
			$(".education-entry:last").append(HTMLonlineClasses);

			for(onlineCourse in education.schools[school].onlineCourses) {
				var formattedTitle = HTMLonlineTitle.replace("%data%", education.schools[school].onlineCourses[onlineCourse].title);
				$(".education-entry:last").append(formattedTitle);

				var formattedSchool = HTMLonlineSchool.replace("%data%", education.schools[school].onlineCourses[onlineCourse].school);
				$(".education-entry:last").append(formattedSchool);

				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.schools[school].onlineCourses[onlineCourse].dates);
				$(".education-entry:last").append(formattedOnlineDates);

				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.schools[school].onlineCourses[onlineCourse].courseURL);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
	}
}

bio.display();
work.display();
projects.display();
education.display();

//$(document).click(function(loc) {
//	var x = loc.pageX;
//	var y = loc.pageY;
//
//	logClicks(x, y);
//});

function inName(name) {
	name = name.trim().split(" ");
	console.log(bio.name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

// you want to see a map? here's a map.
$("#mapDiv").append(googleMap);
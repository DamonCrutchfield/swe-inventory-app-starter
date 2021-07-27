# Code Review I


** Add me to your repo danceoval **

## Roses

* Task organization and troubleshooting problems (Abdi)
* Collaboration, bouncing ideas, helping (James)
* Learning to be resourceful, teaching yourself (Damon)
* Everyone doing their part, sharing the work (Nate)

## Thorns

* Merge conflicts on git (Abdi + James + Damon  + Nate)

## Task Board + Project Planning

* Good job using taskboard, breaking big tasks down into bite-sized tasks
* Consider breaking down tasks, by User Stories (rather than horizontal Slices)

* User Story:
	* Single sentence, describing User interacting w/ feature
	* As an {X}, I want to {Y} by {Z}
	* e.g, "As a User, I want to see all Items, by clicking All Items in the Nav Bar"
		* Item Model in Sequelize
		* GET Items Route in Express
		* Nav Bar in template
		* AllItems Handlebars Template

* Nice Semantic Git Commit Messages
* 2 Parts:
	* Nature of commit (add, debug, docs, testing)
	* Description of what commit does
	* e.g,  "adds Item Model" , 'fixes column bug in handlebars template'

## API

* DRY up all items routes, lots of duplicate functionality
* Line 62 app.js isn't as RESTful as other routes

```
REpresentational
State 
Transfer

GET www.netflix.com/luckCage/5
```

* Lots of models, but not associations
	* Keep it simple, focus on models necessary for user story
	* and don't forget to add tests ;)
* Lets make sure models match the data we seed with


## Roapmap

* As a User, I want to see all items, by navigating to the main page
* As a User, I want to see an individual item, by clicking on it from the main page
	* Debug our Seed files, and ensure they match the routes
	* Update items/item handlebars to be about your items not sauces


Next
* As a User, I want to delete an item, by clicking an X on the individual item template
	* DELETE Item route in Express
	* Sequelize.destroy() in route
	* add Delete button to handlebars

* Two approaches:

	* 1 add a form in Handlebars
	```
	<form method="Delete">
		<button>X</button>
	</form>
	
	```
	* Use AJAX on the dom
	```
	let deleteButton = document.getElementById("delete");
	deleteButton.addEventListener('click', async (e) => {
		await fetch('/items', {method: Delete})
	})
	
	```

### Merge Conflicts :)

* Merge conflicts are normal, but undesirable
* A couple ways to mitigate:
	* Pull Parties
	1-2x a day, at set times, checkout main and pull
	* Feature-oriented branches
		* Much harder to have Merge Conflicts when working on different files/folders ;) 









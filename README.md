# Javascript Challenge: "Data visualisation"
 - Javascript solo 5-day project

#### Objectives: 
DOM manipulation     
AJAX/FETCH request     
Using Third-party libraries     
Problem-solving : design a logical solution to implement the expected result
Debugging using the console     
Understand the notion of "separation of concerns"     

#### The mission:
You work in the Multimedia department of one of the European Union institutions. This morning, Johnny Hasnoclew, your Project Manager, sends you on a mission: one of the in-house journalists has published a new article on the institution's website. The article in question is already integrated with an html / css / Javascript file.

He asks you to make it more rich, more interactive, more... sexy (The use of that specific adjective indicates that Johnny certainly worked in advertising before, the poor guy).

That's exactly what you're going to do, by adding two interactive data visualisation graphics using javascript. These graphs will be interactive in the sense that the user can manipulate the graph, such as filtering data, or reveal detailed data when the mouse hovers over it. You are free to design the interaction in your project.

##### 1. Inline data (data in the document)
In this html file, you will find two data tables. Use JavaScript to traverse the DOM to insert right above each of these tables a representation of its data in the form of an interactive graph.

If javascript is disabled, the graph does not appear. If javascript is enabled, the graph appears between the title and the table.

##### 2. Remote data, in real-time, via ajax
There are data sitting at this URL : https://canvasjs.com/services/data/datapoints.php

Retrieve the data via Ajax, and use it to insert a graph that refreshes every second, just below the main title (h1) of the article.

Don't hesitate to adapt the code provided in this tutorial: Live Updating Charts from JSON API & AJAX, but adapt it to this third-party library: chart.js or ToastUi-Chart, because this tutorial uses another (not-free) library (canvasJS).

#### Constraints:
You can't edit the html file.     
You have the choice of the type of graphics. Considers the most relevant based on the data and what story they can "tell".     
The choice of the javascript library is limited to the 2 libraries offered (there are many others, but these are references and are very popular).     

#### Thank you for reading. :european_post_office: 

![Data visualisation gif](./image/js-2.gif "Data visualisation gif")

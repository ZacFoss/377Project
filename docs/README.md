# 377Project
- Title of our project: Making PG, PG again!
- Description of our project: For our project we have decided to create a front end website where residents can choose the type of crime they are inquiring about, input a street number and street address in order to identify the amount of crimes occuring in that area. The website would then present them with the number of [x] crimes in that have occurred in that area. 
- The target browsers is any web browser that is able to be accessed through a computer.
- Link to User Manual: <link rel="user manual" type="markdown/md" href="docs/users.md"/>
- Link to Developer Manual:

--Developer Manual--

Our application does not have any installation because it is a web application. 
In order to run our application on a server you must first make sure you have Node.js installed on your computer.
Then open up your terminal and enter the commands "npm install" and then "npm start-watch". 
The application is now running on a server. Go to localhost:4000 in your internet browser and you will be able to use our application. 

We have not written any tests for our software. 
The api endpoint that we use for our GET request was https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?. 

We have a known bug where everytime that s user wants to do a second search with the application they need to refresh the page. 
Another known bug we have is that the max number of entries we were receiving from the database was 1000. 
The database has over 90,000 entries but for some reason it did not all come through with the JSON data. 
In the future we are going to end up tackling these bugs and then adding on a lot more functionality to the application. 
We would like the expand the data from Prince George's County to all of Maryland by gathering data from all the Police department databases. 
Other features we would love to have is more filtering options, such as dates. 
We also want to eventually overlay our data on a map so that the user can visualize the data better and utilize the application more effectively.
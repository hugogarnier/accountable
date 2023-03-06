### START THE PROJECT

-Run "yarn" to install dependencies.

-Download the expo go app on your phone.

-Run "npx expo start" and scan the QR code with the camera on your phone. 

-You will see the app opening on your phone in the expo go app.

### WHAT WE WANT TO BUILD

We want to display a list of all NFL teams with their names and logos and be able to search for a team by typing its name.

We will be using the ESPN API to get the team list.

### WHAT YOU NEED TO DO

1. Fetch the data using the getTeams request in api/getTeams.ts. Please Only use React API to fetch the data, not a third party library.

2. Clean up the data to create an array of NFL teams with the following two properties: shortDisplayName and logoHref. For the logoHref property, you should use the first element in the logos array of each team.
    
    The starting point is the response from the request, and the end result is an array of objects with the following format:
    
    {
       shortDisplayName: string;
       logoHref: string;
    }
    
3. Create a typescript type for that data.

4. sort teams alphabetically.

5. Display the data as a list of rows with the team name on the left and the logo on the right.

6. Add an input field at the top of the screen to filter the list. I want to only view teams whose names start with what I have entered.

7. Add an error message if the api call fails (you can test it by changing the URL string in getTeams).

8. Add a switch: If on, images should be shown, otherwise hide images in the list. Please use redux to store and change the switch state.
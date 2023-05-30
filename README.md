# Crime-Dectection
Detects crime near your area written in native react

Make sure you have the necessary dependencies installed (react-native-push-notification, react-native-maps, react-native-webview). Also, ensure you have set up the necessary configurations for Push Notifications in your React Native project.

First, make sure you have set up a React Native development environment and have the required dependencies installed. Then, create a new React Native project and navigate to the project directory.

In the project directory, install the required dependencies by running the following command: 

npm install react-native-push-notification react-native-maps react-native-webview 

each crime marker on the map includes a popup displaying a randomly generated crime type from a predefined list. The code also prompts the user whether they want to open  

Displaying crime details on the map markers.

Generating random crime types for each crime incident.

Providing an option to view the crime map in the web browser automatically.

after performing crime detection and sending notifications, a map is generated using the folium library. The map is centered around the specified location using the latitude and longitude provided by the user.

Markers are added to the map to represent police stations, hospitals, and crime incidents. Police stations are marked with blue shield icons, hospitals with green hospital icons, and crime incidents with red info-sign icons.

The resulting map is saved as an HTML file named "crime_map.html". You can open this file in a web browser to view the map with the markers indicating the locations of the nearest police stations, hospitals, and simulated crime incidents.

Make sure to install the folium library by running pip install folium before executing the code. Additionally, replace "YOUR_PUSHBULLET_API_KEY" 


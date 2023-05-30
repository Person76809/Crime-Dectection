import React, { useEffect } from 'react';

import { View, Text, Button } from 'react-native';

import PushNotification from 'react-native-push-notification';

import MapView, { Marker } from 'react-native-maps';

import WebView from 'react-native-webview';

const crimeTypes = ["Bank Burglary", "Gunfight", "Shooting", "Robbery", "Assault"];

const App = () => {

  const latitude = 0.0; // Replace with your default latitude

  const longitude = 0.0; // Replace with your default longitude

  const city = "Default City"; // Replace with your default city

  useEffect(() => {

    PushNotification.configure({

      onNotification: function (notification) {

        console.log(notification);

      },

    });

  }, []);

  const isCrimeNearby = () => {

    const crimeProbability = Math.random();

    if (crimeProbability < 0.1) {

      const crimeType = crimeTypes[Math.floor(Math.random() * crimeTypes.length)];

      const message = `There is a ${crimeType} happening in ${city} near the specified location!`;

      PushNotification.localNotification({

        title: 'Crime Alert',

        message: message,

      });

    }

  };

  const openMapInBrowser = () => {

    // Replace with your local development server URL or the hosted HTML file URL

    const mapUrl = 'http://localhost:8080/crime_map.html';

    // Open the map in a web browser using WebView

    PushNotification.localNotification({

      title: 'Crime Map',

      message: 'Opening the crime map in a web browser.',

    });

    // Render a WebView component to display the crime map

    return (

      <WebView source={{ uri: mapUrl }} style={{ flex: 1 }} />

    );

  };

  return (

    <View style={{ flex: 1 }}>

      <View style={{ flex: 1 }}>

        <Text>City/Area: {city}</Text>

        <Text>Latitude: {latitude}</Text>

        <Text>Longitude: {longitude}</Text>

        <Button title="Check for Crime" onPress={isCrimeNearby} />

      </View>

      <View style={{ flex: 2 }}>

        <MapView

          initialRegion={{

            latitude: latitude,

            longitude: longitude,

            latitudeDelta: 0.01,

            longitudeDelta: 0.01,

          }}

          style={{ flex: 1 }}

        >

          <Marker

            coordinate={{ latitude: latitude + 0.001, longitude: longitude + 0.001 }}

            pinColor="blue"

          />

          <Marker

            coordinate={{ latitude: latitude - 0.001, longitude: longitude - 0.001 }}

            pinColor="blue"

          />

          <Marker

            coordinate={{ latitude: latitude + 0.002, longitude: longitude - 0.002 }}

            pinColor="green"

          />

                    <Marker

            coordinate={{ latitude: latitude + 0.003, longitude: longitude + 0.003 }}

            pinColor="red"

          />

          <Marker

            coordinate={{ latitude: latitude - 0.003, longitude: longitude - 0.003 }}

            pinColor="red"

          />

        </MapView>

      </View>

    </View>

  );

};

export default App;

 

           




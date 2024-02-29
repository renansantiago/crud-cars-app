# React Native Cars

This is a test project using React Native to simulate a CRUD of cars and some cool RN functionality.

This project is using [Typescript](https://reactnative.dev/docs/typescript) as the main language, 
[Apollo GraphQL](https://www.apollographql.com/docs/react/integrations/react-native/) for API connection,
[Formik](https://formik.org/docs/guides/react-native) to handle the car creation and update form,
[Jest](https://jestjs.io/) for Unit Tests,
[Testing Library](https://github.com/callstack/react-native-testing-library) for components tests and
[Styled Components](https://styled-components.com/docs/basics) for components styling.

Running the App
---------------
1. Make sure you have the environment [properly set up](https://reactnative.dev/docs/environment-setup) to run the application.
2. Clone the repository and run in the terminal: ```npm install``` ou ```yarn```
3. Open the iOS folder and run in the terminal:  ```pod install``` (iOS only)
4. To run the app in the terminal:

### iOS (Simulator)
```npm run ios``` ou ```yarn ios```
### iOS (Device)
```npm run ios --device``` ou ```yarn ios --device```

### Android (Simulator or Device)
```npm run android``` ou ```yarn android```

Note: on Android simulator the host as "localhost" don't work so in order to make the local GraphQL connection to work on Android simulators you need to change the IP address in apolloClient.ts file to be your local address.

Running the app on an iPhone may require additional [configuration](https://reactnative.dev/docs/running-on-device).

5. To run unit tests, execute in the terminal: ```npm test``` or ```yarn test``` it should run both unit and components tests.

TODO
---------------
Most of the requirements were added, specially the ones related to functionality/animations but using only 3 fields to make it faster.

# Wolt frontend
Wolt Summer 2021 Internship frontend assignment

> In this assignment you get to follow in the footsteps of Wolt developers and create a Discovery page. Your task is to render data from discovery_page.json on the screen.

I completed this assignment using React with Typescript.

## How to run the code
After downloading the repo, install everything needed using
```
npm install
```
Then you can build and launch the site using
```
npm start
```

**Other commands**
```
npm run test
```
To run tests.
```
npm run lint
```
To run linter.

## How it works

1. App component passes the input discovery_page.json data to Header component and maps a RestaurantSection component for each item in the sections list.
2. Header renders links to the sections based on the input.
3. RestaurantSection creates a carousel and maps through the restaurants in the section creating a RestaurantComponent from each one and adding it as a slide to the carousel.
4. RestaurantCompnent renders the blurhash, name and online status from the input. It has a displayBlurhash prop for testing purposes which will disable the blurhash.

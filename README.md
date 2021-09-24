# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Pages

There are three pages in this app: `Home`, `Check Prime Number` and `Sum`.

## Routes

Routes are handled with `react-router-dom` package which serves <Home /> component when user navigates to '/'. If user navigates to '/sum' package serves <SumRoute /> component and when user go to '/checkprime' react renders <CheckPrimeRoute /> component. Otherwise, if none of the above routes are visited, user will be redirected to '/'.

## State Management

- State management has been handled by `React Redux` when user has requested if certain number is prime number or not from the backend. And the redux handles this state change. Visually user can see this in the modal that rendered with the response by the backend. Modal state has also been handled be redux.
- All the other states are more or less component based so these have been handled by `useState()` or `useReducer()` hooks.

## Custom Hooks

There are three custom hooks:
1. `useHttpClient` which makes the http request utilizing axios package. This hook returns `sendRequest()`, `error`, `clearError()` and `isLoading`.
2. `useInput` helps to dispatch a value on the input. Input type can be either `<textarea/>` or `input` depending on how developer has configured it. Hook returns the `value` that will be bound to the html element, `hasError` which helps to show the error message, `reset()` which resets the input, `isValid` which helps to define if form is submittable, `valueChangeHandler()` which actually changes the value of the html element `onChange`, `inputBlurHandler()` which helps to define if the user has touched the input.
3. `useTypedSelector` hook is there to select state from the `redux store` without Typescript needing to complain.

## Components

Components have been designed in a way that they are easy to configure outside of the component. Some of them have custom styles inside of them but these can be overwritten as well. `Backdrop` component has `portal` which means that anytime Backdrop component is rendered, it will be mounted on the `div` which has the id='backdrop-hook'. This can be found from the index.html file.


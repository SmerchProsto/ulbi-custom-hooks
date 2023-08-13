# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Hooks
The project implements such custom hooks as:
1. useInput - double binds, makes input manageable.
2. useHover - similar functionality to :hover in css, in addition, it allows you to track events when the mouse on the object has left it.
3. useScroll - using the observer api. Using this api, the effect of an endless tape is implemented.
4. useDebounce - stub for multiple requests. When searching on a site, a lot of requests are sent to the server when each character is written. This hook uses useCallback to delay calling the request eventually.
5. useRequest - a custom hook that processes a request from the server.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

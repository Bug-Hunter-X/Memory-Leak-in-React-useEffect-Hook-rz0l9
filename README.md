# React UseEffect Hook Memory Leak
This repository demonstrates a common error in React applications involving the `useEffect` hook and how to fix it.

## Problem
The `bug.js` file contains a component that uses `setInterval` within a `useEffect` hook to update a counter.  However, it fails to clear the interval in the cleanup function which leads to memory leaks.

## Solution
The `bugSolution.js` file shows the corrected code.  The key is calling `clearInterval` within the return function of the `useEffect` hook. This ensures that the interval is cleared when the component unmounts, preventing further updates and memory leaks.

## How to Run
1. Clone the repository.
2. Navigate to the directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to run the application.

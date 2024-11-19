# Angular Counter Component with LocalStorage Persistence

### Overview
This component is an Angular counter that integrates with NgRx for state management and uses localStorage to persist the counter's value across sessions. It ensures the state is saved when updated and restored on application load.

# Component: MyCounterComponent

## Purpose:

Display and manage a counter with increment, decrement, and reset actions.
Persist the counter value to localStorage.

# Key Features:

## Reactive State Management:
The component uses @ngrx/store for managing state in a predictable way.

## LocalStorage Persistence:
Saves the counter value to localStorage whenever it changes.
Restores the counter value from localStorage on app initialization.

# Reducer: counterReducer

## Purpose:
Define the logic for managing the counter state.
Load the initial state from localStorage during app initialization.

# Key Features:

## Initialize State:
The counter's initial value is read from localStorage. Defaults to 0 if no value exists.

## Handle Actions:
Responds to increment, decrement, and reset actions.


# Key Points to Note

## Subscription Management:
The MyCounterComponent subscribes to the NgRx store to track state changes.
To prevent memory leaks, the subscription is cleaned up in the ngOnDestroy lifecycle hook.

## LocalStorage Integration:

The localStorage API is used to persist the counter value:
Save: On each state change.
Restore: During app initialization via the reducer.

## Fallback Mechanism:

If localStorage does not have a value, the initial state defaults to 0.

# Expected Behavior

## Increment/Decrement/Reset:
Updates the counter value and persists it in localStorage.

## Page Reload:
On reload, the app restores the counter value from localStorage.

## No LocalStorage Value:
If no value exists in localStorage, the counter initializes to 0.

## Benefits
State Persistence: Counter state survives page reloads.
Scalability: Clean separation of concerns using NgRx.
User Experience: Improved continuity for users.

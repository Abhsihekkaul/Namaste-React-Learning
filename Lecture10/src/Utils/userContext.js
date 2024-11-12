// Benefits of useContext Hook:
// Avoid Prop Drilling:

// useContext allows you to pass data through the component tree without needing to pass props down manually at every level. This eliminates the need for prop drilling, making your code cleaner and easier to maintain.
// Simplify State Management:

// It is especially useful for global state management in your app. For instance, if you have a user authentication status, theme settings, or language preferences that need to be shared across multiple components, useContext simplifies accessing and updating that state.
// Improves Code Readability:

// By centralizing state management into context, your components become more focused on their specific functionality rather than managing props passed down multiple levels.
// Easier Testing:

// Testing components becomes easier since you can mock the context directly instead of dealing with deeply nested props.

import { createContext } from "react";

const userContext = createContext({
    user : {
        name : "Dummy Name",
        email : "dummy@gmail.com",
    }
})

export default userContext;
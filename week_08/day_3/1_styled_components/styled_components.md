# Styled Components


__Lesson Duration: 60 minutes__

### Learning Objectives

- What a Styled Component is
- Be able to install and use the styled-components library
- Understand the main features we can access when using a Styled Component.



## Introduction

In this lesson we're going to learn how to use the Styled Components library which gives us the functionality of CSS-in-JS support. CSS-in-JS is just as it sounds, it’s writing our CSS directly into our javascript files for the components we’re making. 


## Why would you use this?

One of the trickiest problems a developer faces while working on applications is choosing CSS selector names. As an application grows and multiple files are created, trying to keep consistent naming conventions while avoiding overwriting CSS selectors used elsewhere becomes more difficult due to them all living in the global namespace. Another issue that can occur is when we want to change something in an already existing CSS selector. We’d need to search the entire application to make sure it wouldn’t impact a different part of the site.

Using the styled-components library in our React application will allow us to create an html element and attach the styling to it in the same file. The elements we create will also be scoped to their component, meaning we can be confident about which element is going to change when we modify the CSS.

## Setup

Hand out the start point and do the usual npm install and talk through it briefly. 

It’s an app that makes a request to the SpaceX API for the first launch using the `launchId` variable. 
Clicking the buttons increases or decreases the `launchId` by 1 (with guards to stop it going outside the available range).
It then fetches the launch data from the api and displays it in a component below. 

We've setup our app to use small reusable components, seperating out the header and buttons into their own small components. We've also got a helper object in its own file in utilities, which contains our colour scheme for the app. This has been imported anywhere we're going to need it in this lesson.

Once they've seen the basic layout, this is a screenshot of what we’re working towards...

![Image of final website layout](images/finished_webpage_layout.png)


## Installing styled-components

After the normal process of `npm install` and `npm start` to make sure it’s setup and working properly, we’ll need to stop the app running and install the styled-components library.

```terminal
npm install styled-components
```

## Creating a Styled-Component

Now that our setup is done and our app is up and running, lets start by creating a styled component to replace the `<h1>` element in our `Header`.
  
The first thing we'll need to do is import the library to give us access to it.

  ```js
//Header.js

import React from "react";
import styled from 'styled-components'; // NEW
import colors from '../utilities/cssColors'



const Header = ({text}) => {
    return ( 
      <h1>{text}</h1>
    );
}
 
export default Header;

```

Now that we've got access to it, we can use this to create any HTML element as a styled component. This is done by calling the function that has the same name as the HTML element we want to create. 

It is important we define our styled component outside of the render method. If we don't it will be recreated on every single render pass meaning it will block caching and can slow down the rendering speed.

Another important note for this process, we call these functions in a different way to normal. Because we're passing in a Tagged Template Literal, we use backticks ` `` ` instead of brackets `()`. 

Tagged templates are a more advanced concept, but more information can be found on the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)



Now that we know what we need, lets create our styled `h1` and store it in a variable called `Title`.

```js
//Header.js

import React from "react";
import styled from 'styled-components';
import colors from '../utilities/cssColors'



const Title = styled.h1`` // NEW


const Header = ({text}) => {


...

```

Lets give this styled component it's first bit of CSS and start using it on our page so we can see the changes. The whitespace doesn't matter for the template literal, but the semicolon between each CSS command is important. 


```js
//Header.js

import React from "react";
import styled from 'styled-components';
import colors from '../utilities/cssColors'


//UPDATED styled h1
const Title = styled.h1` 
  text-align: center;
`

const Header = ({text}) => {
    return ( 
      <Title>{text}</Title> //UPDATED
    );
}
 
export default Header;

```

We should now see our `<h1>` with added styling in our app. Lets add a bit more styling to it to change the the font size, and adjust the margin and padding sizes. 

We'll also change the font and background colours using the values from the colors object we've imported from utilities. Because our styled component is using a template literal, we can input these values using the normal syntax of `${}`.

```js
//Header.js

const Title = styled.h1`
  text-align: center; 
  font-size: 1.5em;
  color: ${colors.white}
  background-color: ${colors.darkBlue}
  margin: 0;
  padding: 1em
`

```

## Passing in props

Lets move to our `Button` component and update it to use a styled button with some extra functionality. We're going to see how we can define and pass in props to our styled button allowing us to choose the background colour for them. Lets get a basic layout of a button created and implemented.

```js
//Button.js

import React from "react";
import styled from 'styled-components'; //NEW
import colors from '../utilities/cssColors'


//NEW styled button
const StyledButton = styled.button`    
  font-size: 1em;
  padding: 1em;
  margin: .5em;
  border: 2px solid ${colors.grey};
`

const Button = ({onClick, text}) => {
  return ( 
    <StyledButton onClick={onClick}> {text} </StyledButton> //Updated
   );
}
 
export default Button;

```

Lets see how we can now set up our styled component to be dynamic and either accept a colour of our choice by passing it in as a prop, or use a default colour if we don't pass one in.

First lets pass a background into our `Button` component.

```js
//LaunchSelector.js

const LaunchSelector = ({launchIncrease, launchDecrease}) => {

  return (
    <div>
      <Button onClick={launchDecrease} text={"Previous Launch"} />
      <Button background={colors.paleRed} onClick={launchIncrease} text={"Next Launch"} /> //UPDATED
    </div>
  )

```

We need to update our `Button` component to have a background prop. We'll then pass this into our `StyledButton` component as the a prop named `backgroundColor`.


```js
//Button.js

const Button = ({onClick, text, background}) => { //UPDATED
  return ( 
    <StyledButton onClick={onClick} backgroundColor={background}> {text} </StyledButton> //UPDATED
   );
}

```

In order to access the props that are passed into our styled component, we need to add a callback into our CSS rule. Similar to what we've done to get the colours added in, we just need to add `${}` inside our Tagged Template and write our callback to access the prop.


Our function is going to check if colour has been passed in as a props, if it has we'll use it or if it hasn't we'll use a default colour instead.


```js
//Button.js

const StyledButton = styled.button`
  font-size: 1em;
  padding: 1em;
  margin: .5em;
  border: 2px solid ${colors.grey};
  background: ${(props) => props.backgroundColor || colors.paleBlue}; //UPDATED
  `
  ```
  Just like other functions, we can destructure our prop as well. 

  ```js
  //Button.js

const StyledButton = styled.button`
...

  background: ${({backgroundColor}) => backgroundColor || colors.paleBlue}; //UPDATED
  `
  ```

The last change we're going to make to our button, will let us see the use of a CSS psudoclass with styled components. 

We're going to add a hover effect to the buttons, which will change the background and font colours. To do this, we add `&:hover` followed by some curly brackets. Inside the brackets we add any css changes we want to happen on a hover

```js
//Button.js

const StyledButton = styled.button`
  font-size: 1em;
  padding: 1em;
  margin: .5em;
  border: 2px solid ${colors.grey};
  background: ${(props) => props.backgroundColor || colors.paleBlue};
  &:hover {               //UPDATED
    background-color: ${colors.darkBlue};
    color: ${colors.paleBlue};   
  };                      
  `
  ```


Now that our buttons have some styling, let's use a some flexbox and adjust the layout of our buttons. To do this we're going to create a styled `<div>` as a container for our buttons inside `LaunchSelector`.

```js
//LaunchSelector.js
import React from 'react';
import styled from 'styled-components'; //NEW
import colors from '../utilities/cssColors'
import Button from './Button';

const ButtonContainer = styled.div` //NEW
  display: flex;
  background: ${colors.midBlue};
  justify-content: space-evenly;
`

const LaunchSelector = ({launchIncrease, launchDecrease}) => {

  return (
    <ButtonContainer>  //UPDATED
      <Button onClick={launchDecrease} text={"Previous Launch"} />
      <Button background={colors.paleRed} onClick={launchIncrease} text={"Next Launch"} />
    </ButtonContainer> //UPDATED

```

## Extending Styles

There might be some situations where we want to create two components that are very similar but with some minor differences. To achieve this we can use a built in constructor function that comes from the styled-components library.

We use it by calling the function and passing in the styled component we've already made. This will return to us a clone of it that we can modify as needed without interfering with the original.

Lets move to `LaunchDetails` and update our `<p>` tags to be a styled `Paragraph`. 

```js
//LaunchDetails
import React from 'react';
import styled from 'styled-components';   //NEW
import colors from '../utilities/cssColors';

const Paragraph = styled.p`   //NEW
  margin: 0;
  padding: 1em;
  background-color: ${colors.grey};
  color: ${colors.darkBlue};
`
const LaunchDetails = ({launch}) => {

  if (!launch){
    return <p>Loading...</p>
  }

  return (
    <>
      <h3>{launch.mission_name}</h3>
      <Paragraph>Flight Number: {launch.flight_number}</Paragraph>    //UPDATED
      <Paragraph>Year: {launch.launch_year}</Paragraph>   //UPDATED
      <Paragraph>Rocket: {launch.rocket.rocket_name}</Paragraph>   //UPDATED
      <Paragraph>Details of launch: {launch.details}</Paragraph>    //UPDATED
    </>
  )

```

We're nearly there. It looks like there's just one more part we need to refeactor and that's our `<h3>`.

We want it to be very similar to the `Paragraph` componet we've already created, with a few additions and a change. Lets use the constructor to copy the `Paragraph` and make a bigger version of it.

```js
//LaunchDetails

...
const BigParagraph = styled(Paragraph)`   //NEW
  font-size: 1.5em;
  padding: .5em;
  border-bottom: 1px solid ${colors.darkBlue};
`

const LaunchDetails = ({launch}) => {

  if (!launch){
    return <p>Loading...</p>
  }

  return (
    <>
      <BigParagraph>{launch.mission_name}</BigParagraph>    //UPDATED
      <Paragraph>Flight Number: {launch.flight_number}</Paragraph>

...
```

## Conclusion
In this lesson we've learned how to add styled components to our React applications to give us basic HTML elemnts with css already applied. This is being achived by pulling in the styled compnents library and following the rules it lays out. 

One of the most important things we've seen is invoking our functions using the tagged template literal syntax. This involves calling our function using ` `` ` and passing in a string of the CSS rules we want.

One last important note is that we can still use the traditional imported CSS stylesheet files that we've seen and used before, but enhancing it where we need to by creating a styled component.

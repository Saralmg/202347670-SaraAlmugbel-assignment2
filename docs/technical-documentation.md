
# Technical Documentation – Assignment 2

**Student:** Sara Almugbel  
**Student ID:** 202347670  
**Course Project:** Interactive Personal Portfolio

## 1. Project Overview

Assignment 2 extends my personal portfolio website
from Assignment 1 by adding JavaScript interactivity,
dynamic content, and improved user feedback.

The website includes three main sections:
- About Me
- Project Ideas
- Contact

## 2. Technologies Used

### HTML5
Provides the website structure, including navigation,
sections, project cards, buttons, and the contact form.

### CSS3
Controls the appearance, layout, responsive design,
hover effects, and dark/light themes.

### JavaScript
Handles user interactions, project filtering,
theme switching, and form validation.

### localStorage
Stores the user's selected theme in the browser.

## 3. Interactive Features

### 3.1 Dark and Light Mode

The theme button allows users to switch between
dark and light appearances.

JavaScript uses `classList.toggle("dark")` to add
or remove the dark class from the body element.

CSS variables define the colors for each theme.

The selected preference is saved using
`localStorage.setItem()` and restored when the
website is opened again.

If browser storage is unavailable, the theme
button can still change the current appearance.

### 3.2 Dynamic Project Filtering

The Projects section includes three buttons:
All, Productivity, and Campus.

Each project card contains a `data-category`
attribute identifying its category.

JavaScript reads the selected filter using
`dataset.filter` and compares it with each
card's category.

Nonmatching cards are hidden using the
HTML `hidden` property.

The website also displays a message indicating
the number of visible projects.

### 3.3 Contact Form Validation

The contact form contains three fields:
- Name
- Email
- Message

JavaScript listens for the form's submit event.

`preventDefault()` prevents the browser from
submitting the form and refreshing the page.

The program checks whether all fields contain
text and whether the email matches a basic
email-format pattern.

If the input is invalid, an error message appears.

If the input is valid, a confirmation message
appears and the fields are cleared.

The form is a client-side demonstration and
does not transmit messages to a server.

## 4. Animations and Transitions

CSS transitions improve the user experience.

Examples include:
- Button hover effects
- Project card hover effects
- Smooth theme color transitions
- Smooth navigation scrolling

The website also respects the user's
reduced-motion preference.

## 5. Error Handling and User Feedback

The application provides feedback through:

- Messages for empty form fields
- Messages for invalid email addresses
- Confirmation after successful validation
- Project filtering status messages
- An empty-state message when no projects match
- Console warnings if localStorage is unavailable

## 6. Responsive Design

The website uses CSS Grid and Flexbox.

A media query adjusts the layout for smaller
screens by displaying project cards in one column.

Navigation elements can wrap to fit the
available screen width.

## 7. Testing

The following functional tests were completed:

| Test | Expected Result | Result |
|---|---|---|
| Dark mode | Switch to dark theme | Passed |
| Light mode | Return to light theme | Passed |
| Productivity filter | Show Smart Study Planner | Passed |
| Campus filter | Show Campus Connect | Passed |
| All filter | Show both projects | Passed |
| Empty form | Display required-fields error | Passed |
| Invalid email | Display email error | Passed |
| Valid form | Display confirmation | Passed |
| Navigation | Scroll to selected section | Passed |

## 8. Limitations

- The contact form does not send real emails.
- The portfolio currently displays two project ideas.
- Project information is stored directly in HTML.
- The website does not require a backend server.

## 9. Future Improvements

Possible improvements include:
- Adding completed software projects
- Implementing project search
- Connecting the contact form to a backend
- Adding more interactive portfolio sections

## 10. Conclusion

This assignment demonstrates the integration of
HTML, CSS, and JavaScript to create a responsive,
interactive personal portfolio.

The main technical concepts include DOM manipulation,
event handling, localStorage, input validation,
CSS transitions, and user feedback.

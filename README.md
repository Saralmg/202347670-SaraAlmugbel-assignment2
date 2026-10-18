
# Personal Portfolio Website – Assignment 2

**Student:** Sara Almugbel  
**Student ID:** 202347670  
**University:** King Fahd University of Petroleum & Minerals (KFUPM)

## Project Description

This project is an improved version of my personal portfolio website
developed for Assignment 1.

The purpose of Assignment 2 is to enhance the website by adding
interactive features using JavaScript, improving user experience,
and implementing modern web development techniques.

The website introduces me as a Software Engineering student,
presents my project ideas, and includes an interactive contact form.

## Technologies Used

- HTML5 – Website structure
- CSS3 – Styling, layout, responsiveness, and animations
- JavaScript – Interactive features and form validation
- localStorage – Saving the user's preferred theme
- Git and GitHub – Version control and repository hosting
- ChatGPT – AI-assisted development and debugging

## Interactive Features

### 1. Dark and Light Mode

Users can switch between dark and light themes.

The selected theme is stored using JavaScript localStorage,
allowing the website to remember the user's preference
when the page is refreshed.

### 2. Dynamic Project Filtering

The Projects section includes three filter buttons:

- All
- Productivity
- Campus

JavaScript dynamically displays the relevant project cards
based on the selected category.

A status message informs the user how many projects are displayed.

### 3. Contact Form Validation

The contact form accepts a name, email, and message.

JavaScript checks that:
- All fields are completed.
- The email address has a valid basic format.

The website displays clear success or error messages.

The form is a demonstration and does not send real emails.

### 4. Animations and Transitions

The website includes:
- Smooth scrolling between sections
- Hover effects on project cards
- Button hover animations
- Smooth color transitions when changing themes

### 5. Responsive Design

CSS media queries and flexible layouts help the website
adapt to different screen sizes, including mobile devices.

## Project Structure

```text
202347670-SaraAlmugbel-assignment2/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── README.md
└── .gitignore
```

## How to Run the Website Locally

1. Download or clone this repository.
2. Open the project folder in Visual Studio Code.
3. Locate the index.html file.
4. Open index.html in a web browser such as Safari or Chrome.
5. Interact with the project filters, theme button, and contact form.

No additional packages or installations are required.

## Testing

The following features were manually tested:

- Dark/light theme switching
- Theme preference persistence after refreshing
- Project filtering by category
- Contact form validation
- Error and success messages
- Navigation between website sections

## AI Assistance

ChatGPT was used to support the development process,
including JavaScript feature suggestions, code explanations,
CSS improvements, and debugging guidance.

AI-generated suggestions were reviewed and tested during
development.

For more information, see:
[AI Usage Report](docs/ai-usage-report.md)

## Technical Documentation

Detailed technical explanations are available in:
[Technical Documentation](docs/technical-documentation.md)

## Future Improvements

Potential improvements include:
- Adding more completed projects
- Connecting the contact form to a backend service
- Adding project search functionality
- Deploying the portfolio using GitHub Pages

## Author

Sara Almugbel  
Software Engineering Student – KFUPM

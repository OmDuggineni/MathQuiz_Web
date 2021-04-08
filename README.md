This is the source code for [MathQuiz!](https://mathquiz.tk/), the web port of my first Android app, which I created during 7th grade. It's written entirely using Javascript and HTML, uses Google's [Material Components for the Web](https://material.io/develop/web) framework for styling, and is hosted on GitHub Pages.

**NOTE:** This app uses Google Analytics to track the number of site visitors, but doesn't show any ads, keep any data, etc. If you want to fork this project, make sure to remove all Google Analytics code or replace it with your own. If you want to opt out of Google Analytics-based tracking, use the Google Analytics [opt-out extension](https://tools.google.com/dlpage/gaoptout) by Google.

# Features
- Asks the user questions about math questions, configurable between Addition, Integer Subtraction, Subtraction (with only positive numbers and results), and Multiplication
- Comes preconfigured with a timer of 10 seconds per question, customizable on the app's main screen
- Gives the user a score depending on how many questions they get right before missing a question or running out of time, awards 5 points per question
- Is an entirely static application, doesn't require any server-based deployment (**NOTE:** If you want to run the app locally, use a static web server such as the nodejs [http-server](https://www.npmjs.com/package/http-server) module)
- Is a [Progressive Web App](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Developer_guide/Installing) and therefore can be installed from the browser on Android, iOS, Windows, MacOS, or any desktop Linux distribution using either Chrome, Firefox (Android only), Microsoft Edge, Safari (using "Add to Home Screen" on iOS only), Opera Mobile, UC Browser, or Samsung Internet.

# License
This web app (all HTML/JavaScript/CSS/JSON/XML code) is free software, released under the terms of the Apache License. See the file LICENSE for more info.
However, images (icons, etc.) are licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

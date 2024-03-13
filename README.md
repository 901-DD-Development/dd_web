# Diamond Development Website Repository

This is a general guide to the repository, last updated on **March 11, 2024**

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/901-DD-Development/dd_web

2. Install Dependencies:

    ```bash
    cd DD_WEB
    npm install

## Guide to each file

This might end up being outdated, will update occasionally.

**dist**: this folder contains the outputted CSS from tailwind, this one is used when the build is created. Any styles you put in style.css will be automatically converted.

**feedback_log**: this folder contains records of feedback from each major change, all feedback is given from the team.

**fonts**: this folder contains the fonts for our website.

**images**: this folder contains the images for our website.

**.gitignore**: this file contains files that we want to ignore before pushing our changes.

**index.html**: this file is the core of the website, this is the web page its-self.

**info.md**: this file contains general useful information about the site.

**package files**: don't touch these, unless you know what you're doing.

**script.js**:this is for adding functionality for our site.

**style.css**: this file is the original css file, any styles not applied through tailwind is applied here. (be careful of styles overlapping or canceling each-other out.)

**tailwind.config.js**: this file is the settings for tailwind, you can add custom colors, fonts, themes and more. Don't touch if you don't know what you're doing.

## Tech stack

HTML, CSS, JavaScript, Tailwind, DaisyUI
# currencyConverter

Currency Converter is a Progressive Web App (PWA) that allows users to convert currency values both online and offline. This application is designed to work smoothly across various devices and even when there's no internet connection, thanks to service workers and caching mechanisms.

Table of Contents
Features
Technology Stack
Setup and Installation
How to Use
Contributing
License
Features
Convert currency values on the fly.
Works offline using a service worker to cache essential resources.
Simple and intuitive user interface.
Customizable conversion rates.
Responsive design for use on desktop and mobile devices.
Technology Stack
HTML, CSS, JavaScript: Core technologies used to build the user interface.
Service Workers: For offline support and caching.
Bootstrap: Framework for responsive design.
LocalStorage: To store user-defined conversion rates.
Setup and Installation
Clone the Repository:
bash
Copy code
git clone https://github.com/your-username/currency-converter-pwa.git
Open the Project:
Open the cloned repository in your favorite code editor.
Start a Local Server:
You can use a simple server like Live Server in VSCode or Python's built-in HTTP server to run the project locally.
bash
Copy code
cd currency-converter-pwa
python -m http.server
Open in a Browser:
Open a web browser and navigate to http://localhost:8000/ (or the corresponding port used by your local server).
How to Use
Enter the conversion rate for the currency pair you want to convert.
Input the amount in the source currency field.
The converted amount will automatically update in the target currency field.
Works offline if you have visited the page at least once while online.
Contributing
Contributions are welcome! If you would like to contribute, please follow these steps:

Fork the repository.
Create a new branch for your changes.
Make your changes and commit them with descriptive messages.
Push to your branch.
Create a Pull Request and describe the changes you've made.
License
This project is licensed under the MIT License. Feel free to use, modify, and distribute the code according to the license terms.


# CSV_Upload
CSV_Upload is a user-friendly web application designed for uploading and parsing CSV files. Developed using Node.js and Express, it offers a straightforward interface to facilitate seamless management of CSV data.

- Git Repository link: https://github.com/websiteonsite/CSV-Upload-IN-Nodejs
- Video link: 
- Hosted URL: https://csv-upload-d92y.onrender.com/

## Installation
To install CSV_Upload, please follow these steps:

Clone this repository using the following command:
```
$ git clone (https://github.com/websiteonsite/CSV-Upload-IN-Nodejs)
```
Install the required dependencies using the following command:
```
$ npm install 
```
Start the application using the following command:
```
$ npm start 
```
Open the application in your web browser by visiting the following URL:
```
$ http://localhost:8000 
```

## Features
* CSV file upload: Users can upload CSV files with a simple web form.
* CSV parsing: The application parses the CSV data and displays it in a table.
* Searching: Users can search data in the table.

## Screenshots
User View of Homepage

* Homepage

  <img width="937" alt="Screenshot 2023-07-13 192334" src="https://github.com/websiteonsite/Habit-Tracker/assets/130152473/46d39920-9d17-451a-8a5c-d51995b6e2dd">
   
* Uploaded csv files : Tabular display

<img width="889" alt="Screenshot 2023-07-13 192524" src="https://github.com/websiteonsite/CSV-Upload-IN-Nodejs/assets/130152473/b089e1fa-2113-402b-80f7-8a04ad42d4a6">

* Csv File View Page

  <img width="924" alt="Screenshot 2023-07-13 192605" src="https://github.com/websiteonsite/CSV-Upload-IN-Nodejs/assets/130152473/efa1a44b-ddbc-4114-bda8-db960f6b2ed4">


## Folder Structure
```
CSV_Upload/
|── |assets/
│   |      ├── css/
│   │      |     ├── styles.css
│   |      ├── js/
│   |            ├── script.js
│   ├── uploads/
│   ├── index.html
|   |
├── routes/
│   ├── csvRoutes.js
|   |
├── controllers/
│   ├── csvController.js
|   |
├── models/
│   ├── csvModel.js
|   |
├── .gitignore
├── package.json
├── README.md


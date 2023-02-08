### Weather App Backend structure  

#### Description

Backend API for P2(weather app) folder structure

app  (application)  
    - config  (as it says)  
    - controller  (handle request and response)  
    - middleware  (filter request and response and return status code) (eg:login)  
    - routes  (entry point of application)  
    - services  (business logic)  
    - validation  (validate request)  
    - model  (connect to DB)  

loaders  (init the application)  
    - express.js  (framework init)  
    - index.js  (entry point for loaders)  
    - mongoose.js  (db)  

.gitignore  (files do not commit to git)  
index.js  (entry)  
package.json (package management)  

-----------------
#### Flow of app
-----------------
init workflow  
index.js -> loaders/index.js -> express.js -> mongoose.js  

api
loaders/express.js -> routes -> middleware(not all api endpoint need) -> validation -> controller -> services -> model  
---------------------------------------------------------------------------------------------
(config can be used anyway in the application)  


To test our project, run npm install in the terminal open in the project folder.
If it goes as intended, it should install everything you will need. After its installed,open three terminals.
First run node broker.js in one terminal
Node sub.js in number 2
And node pub.js in the third. Do it in the correct order!!

This will start sending data through the system, and the data will be stored in the Database. New data is beeing submitted every 10th second. 

You are free to use your own DB, just switch the url variable to your mongodb link. If wanted, you can also rename the database name and collection name on line 18.

To start the main app, use npm start, as it should be a script in the package.json file. 
Write localhost:4000 in your browser, or you could go to the heroku app. (Currently failed to push to heroku due to H10 error?). 
Here you should see the messages from the IoT database in a table. 




If you get an validation error while working on MQTT comment out '\node_modules\jsonschema\lib\validator.js'
line number 109-111'. 

The code looks like this:

            if((typeof schema !== 'boolean' && typeof schema !==
            'object') || schema === null){ throw new
            SchemaError('Expected `schema` to be an object or
            boolean');
            }

This should fix your validation error. 


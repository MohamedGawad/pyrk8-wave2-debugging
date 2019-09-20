/*
Copyright 2019 Dave Weilert

Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
and associated documentation files (the "Software"), to deal in the Software without restriction, 
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial 
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//------------------------------------------------------------------------------
// Software version
//------------------------------------------------------------------------------
var softwareVersion = '1.0.0';
var myname = 'JazzyPodA';

//------------------------------------------------------------------------------
// Require statements
//------------------------------------------------------------------------------
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var commandLineArgs = require('command-line-args');
var commandLineUsage = require('command-line-usage');
var chalk = require('chalk');
var request = require('request');
var uuidV4 = require('uuid/v4');

var random = uuidV4();
var ZAN = 'Jazzy';
var ZNS = 'black';
var app_name = 'Unknown';
var app_namespace = 'Unknown';
var url_collector = 'Unknown';
var url_instructor = 'Unknown';
var url_data = 'Unknown';
var role = 'u';
var count = 0;
var icount = 0;
var aCnt = 0;
var dCnt = 0;
var port = 9000;
var firstTime = true;

//------------------------------------------------------------------------------
// Application variables
//------------------------------------------------------------------------------
var options;
var optionDefinitions = [{
        name: 'port',
        alias: 'p',
        type: Number,
        defaultOption: 4100
    },
    {
        name: 'help',
        alias: 'h'
    },
    {
        name: 'role',
        alias: 'r'
    }
];

var bb = chalk.green;
var CLLR_TITLE = chalk.bold.underline(myname);
var CLLR_VERSION = chalk.bold.underline('Version: ' + softwareVersion );

// Do not change the spacing of the following VPK_HEADER, and 
// do not delete the single tick mark
var CLLR_HEADER = `
${bb('-----------------------------------------------------------------')}
 ${bb(CLLR_TITLE)}
 ${bb(CLLR_VERSION)}                  
${bb('-----------------------------------------------------------------')}              
  `
//Do not delete the single tick mark above


//------------------------------------------------------------------------------
// process start parameters if provided
//------------------------------------------------------------------------------
options = commandLineArgs(optionDefinitions)

// -help used
if (typeof options.help !== 'undefined') {
    help();
    process.exit(0);
}

// -r used
if (typeof options.role !== 'undefined' && options.role !== null) {
    role = options.role;
    role = role.toUpperCase();
    if (role === 'A' || role === 'B') {
        console.log(new Date().toLocaleString() + ' :: jazz098iu - Valid role provided, found: ' + role);
    } else {
        console.log(new Date().toLocaleString() + ' :: jazz099e - Invalid role defined.  Valid values are: a or b, found: '+ role);
        process.exit(-1);
    }
}

// -p used
if (typeof options.port !== 'undefined' && options.port !== null) {
    port = options.port;
    if (port < 1 || port > 65535) {
        console.log(new Date().toLocaleString() + ' :: jazz099e - Invalid port number defined.  Valid range is 1 - 65535.');
        process.exit(-1);
    }
}



//------------------------------------------------------------------------------
// Define routes / urls
//------------------------------------------------------------------------------


app.get('/', function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Server ' + role + ' is ready\n');
});

app.get('/data', function(req, res) {
    if (role === 'B') {
        dCnt++;
        console.log(new Date().toLocaleString() + ' :: jazz037i - Count of data requests received: ' + dCnt);
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Alfa, Brovo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, Xray, Yankee, Zulu\n');
    } 
    if (role === 'A') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Server ' + role + ' not defined as a data server');
    } 
});
  
//------------------------------------------------------------------------------
// start all 
//------------------------------------------------------------------------------
function startAll() {
    statMessages = [];
    splash();
    getVars();
    console.log(new Date().toLocaleString() + ' :: jazz007i - Jazzy Server started, port: ' + port);
    server.listen(port);
    role = role.toUpperCase();

    if (role === 'A') {
       startAsking();
    } else {
        console.log(new Date().toLocaleString() + ' :: jazz017i - Jazzy Server is data server and waiting for data request');
    }
}

//------------------------------------------------------------------------------
// Command line startup and help
//------------------------------------------------------------------------------
function help() {
    var usage = commandLineUsage([{
            content: CLLR_HEADER,
            raw: true,
        },
        {
            header: 'Options',
            optionList: optionDefinitions
        }
    ]);
    console.log(usage);
}

function splash() {
    var adv = commandLineUsage([{
        content: CLLR_HEADER,
        raw: true,
    }]);
    console.log(adv);
}

//------------------------------------------------------------------------------
// Get the environment variables
//------------------------------------------------------------------------------

function getVars() {
    // print and get environment variables
    //console.log(new Date().toLocaleString() + ' :: ' + 'jazz002i - Local environment variables:')
    //console.log(JSON.stringify(process.env,null,4));

    let localVars = process.env;

    // namespace - this should be a color, if missing set to balck
    if (typeof localVars.APP_NAMESPACE !== 'undefined') {
        app_namespace = localVars.APP_NAMESPACE;
    } else {
        app_namespace = ZNS;
    }
    console.log(new Date().toLocaleString() + ' :: ' + 'jazz003i - Environment APP_NAMESPACE: ' + app_namespace);

    // app - should be the name of the pod, else generate random value
    if (typeof localVars.APP_NAME !== 'undefined') {
        app_name = localVars.APP_NAME;
    } else {
        app_name = ZNS + '-' + ZAN + '-' + random;
    }
    console.log(new Date().toLocaleString() + ' :: jazz004i - Environment APP_NAME: Using random key = ' + app_name);

    // url of where the data is being sent, if missing send to local host
    if (typeof localVars.COLLECTOR_CONFIG !== 'undefined') {
        url_collector = localVars.COLLECTOR_CONFIG;
    } else {
        url_collector = 'http://localhost:3000';
    }
    console.log(new Date().toLocaleString() + ' :: jazz005i - Environment COLLECTOR_CONFIG: ' + url_collector);
    
	// url of where the data is being sent to instructor, if missing send to local host
	if (typeof localVars.INSTRUCTOR_CONFIG !== 'undefined') {
    	url_instructor = localVars.INSTRUCTOR_CONFIG;
	} else {
    	url_instructor = 'http://localhost:4200';
	}
	console.log(new Date().toLocaleString() + ' :: jazz006i - Environment INSTRUCTOR_CONFIG: ' + url_instructor);       

	// role of the service, if missing default to 'a'
	if (typeof localVars.POD_ROLE !== 'undefined') {
        if (role === 'u') {
    	    role = localVars.POD_ROLE;
        }
	} else {
    	if (role === 'u') {
            role = 'A';
        }
	}
	console.log(new Date().toLocaleString() + ' :: jazz007i - Environment POD_ROLE: ' + role);    

	// data url to ask for data
	if (typeof localVars.DATA_URL!== 'undefined') {
    	url_data = localVars.DATA_URL;
	} else {
    	url_data = 'http://localhost:4100';
	}
	console.log(new Date().toLocaleString() + ' :: jazz007i - Environment DATA_URL: ' + url_data);    


}

//------------------------------------------------------------------------------
// Tell the collector server we are here
//------------------------------------------------------------------------------
// 
function informStudent(url, callback) {
    let uri = url + '/status/' + app_namespace + '/' + app_name;
    let options = {
        uri : uri,
        method : 'GET'
    }; 
    var res = '';
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res = body;
        } else {
            console.log(new Date().toLocaleString() + ' :: jazz011e - Error telling student count: ' + count + ' message: ' + error );
        }
        callback(res);
    });
}

function tellStudent() {
    count++;
    informStudent(url_collector, function(resp){
        if (resp.startsWith('Got') ) {
	        console.log(new Date().toLocaleString() + ' :: jazz007i - Student count: ' + count + ' for : /'+ app_namespace + '/' + app_name);
        }
    });
}

// tell the collector server we are here
function informInstructor(url, callback) {
    let uri = url + '/status/' + app_namespace + '/' + app_name;
    let options = {
        uri : uri,
        method : 'GET'
    }; 
    var res = '';
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res = body;
        } else {
        	console.log(new Date().toLocaleString() + ' :: jazz022e - Error telling instructor count: ' + icount + ' message: ' + error);
        }
        callback(res);
    });
}

function tellInstructor() {
	icount++;
    informInstructor(url_instructor, function(resp){
        if (resp.startsWith('Got') ) {
            icount++;
            console.log(new Date().toLocaleString() + ' :: jazz010i - Instructor count: ' + icount + ' for /'+ app_namespace + '/' + app_name);
        }
    });
}

function success() {
    // time interval loop
    let startInformStudent = setInterval(tellStudent, 5000);
    console.log(new Date().toLocaleString() + ' :: jazz011i - Initial reporting to student');
    tellStudent();
    // time interval loop
    let startInformInstructor = setInterval(tellInstructor, 15000);
    console.log(new Date().toLocaleString() + ' :: jazz012i - Initial reporting to instructor');
    tellInstructor();
    
}

function startAsking() {
    // time interval loop
    let startAskForData = setInterval(askForData, 15000);
    console.log(new Date().toLocaleString() + ' :: jazz014i - Start asking data server');
    askForData();
}

function askForData() {
    askServerForData(url_data, function(resp){
        if (resp.startsWith('<!DOCTYPE html>') || resp.startsWith('Alfa') ) {
	        console.log(new Date().toLocaleString() + ' :: jazz047i - Got data from server');
            if (firstTime) {
                success();
                firstTime = false;
            }
        } else {
            console.log(resp)
        }
    });
}

// ask data server for information
function askServerForData(url, callback) {
    aCnt++;
    //let uri = url + '/data';
    let uri = url;
    let options = {
        uri : uri,
        method : 'GET'
    }; 
    var res = '';
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res = body;
        } else {
        	console.log(new Date().toLocaleString() + ' :: jazz032e - Error asking data server count: ' + aCnt + ' message: ' + error );
        }
        callback(res);
    });
}


//------------------------------------------------------------------------------
// begin processing 
//------------------------------------------------------------------------------
console.log(new Date().toLocaleString() + ' :: jazz900i - Starting HTTP server');
startAll();

//------------------------------------------------------------------------------
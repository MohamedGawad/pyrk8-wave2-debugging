----
## Configuration


Two configuration files are used with this application.  These files define runtime parameters for the Instructor and Student roles.  Separate files are used for each role.  File names are:

#### Configuration file names

Instructor: __configInsturctor.json__   
Student:    __configStudent.json__ 


#### Configuration parameters
| Parameter | Description | Default if not provided |
| :--- | :--- | :--- | :--- |
| enablePrint | Controls if the menu option __Print course to PDF__ is shown | false |
| instructorCloud | url for instructor if application is launched inside of container | http://dashboard.default | 
| instructorLocal | url for instructor if application is launched outside of container | http://localhost:4200 | 
| language | Default user interface language | english |
| softwareVerison | Version of software | 0.0.1 |

#### Example configuration file

```
{
    "enablePrint"    : true,
    "instructorCloud": "http://dashboard.default",
    "instructorLocal": "http://localhost:4200",
    "language"       : "english",
    "softwareVersion": "2.0.0"
}
```


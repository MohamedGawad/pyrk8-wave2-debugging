

#### Parameters

Collector course content requires parameters that provide configuration and runtime information.  The following table provides an overview of the parameters and a brief description.  

`NOTICE: All keywords start and end with colon ":". These colons are REQUIRED.`  


When defining the parameter use one or more spaces the separate the parameter key from the parameter value. 

| Parameter | Description | Default |
| :--- | :--- | :--- |
| :course_desc:| A brief course description that will be shown in the __Courses__ tab UI when a course is selected from the drop down. | Learning provided by IBM |
| :course_title: | A brief course title that is shown in the __Courses__ tab UI drop down.  This title is what is selected to show the course description. | Student course |
| :course_max: | A numeric value that defines the maximum number of Completed Work items shown in the __Statistics__ tab of the UI. | 10 |
| :course_auto: | Controls if the course is using auto completion reporting.  Valid values are: yes (or) no | no |
| :course&#95;auto&#95;links: | If using automated completion (parameter :course_auto: = yes) this parameter defines how to track completion events.  Detail information for configuring this parameter is discussed later in this document.| n/a |
| :button1_label: | A text value that defines the key value that needs to be used in the markdown #### (h4) course segment (refer to red 1 in above __Course content (markdown)__ ).  This value is used in the drop down list of the __Course work__ tab in the UI. | Question |
|:button1_color: | A hex value, with leading # that defines the background color for the A section of the course (see red A in above __Course content (rendered)__) | #e6f2ff |
|:button1_size: | A numeric value that defines the length of the display area.  | 500 | 
| :button2_label: | A text value that defines the key value that needs to be used in the markdown #### (h4) course segment (refer to red 2 in above __Course content (markdown)__ ).  This text value is also used for "Button 2" in the __Class work__ UI tab. | Hint |
| :button2_delay: | A numeric value that defines the number of milliseconds to delay the displaying of "Button 2". | 0 |
|:button2_color: | A hex value, with leading # that defines the background color for the B section of the course (see red B in above __Course content (rendered)__) | #e6ffe6 |
|:button2_size: | A numeric value that defines the length of the display area.  | 100 | 
| :button3_label: | A text value that defines the key value that needs to be used in the markdown #### (h4) course segment (refer to red 3 in above __Course content (markdown)__ ).  This text value is also used for "Button 3" in the __Class work__ UI tab. | Answer |
| :button3_delay: | A numeric value that defines the number of milliseconds to delay the displaying of "Button 3". | 0 | 
|:button3_color: | A hex value, with leading # that defines the background color for the B section of the course (see red B in above __Course content (rendered)__) | #ffe6b3 |
|:button3_size: | A numeric value that defines the length of the display area.  | 500 | 
| :infotab: | Provides the ability to define the content that will be shown on the __Information__ tab of the UI.  Details and examples of this parameter are provide later in this document. | n/a |
| :section: | Required to define the content that will be shown in display area 1, 2, or 3 of the __Cousre work__ tab. of the UI.  The value followinf the parameter must mathch one of the values defined for the *button?_label* parameters. | n/a |


<br>

```


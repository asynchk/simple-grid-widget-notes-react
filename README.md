**Grid Widget Note** is a simple one-page web app. It enables users to write notes and customize the layout and sizes of notes in a grid layout.

[Online Demo](http://grid-widget-notes.s3-website-ap-southeast-1.amazonaws.com/)

![Home Page](https://s3-ap-southeast-1.amazonaws.com/grid-widget-notes/images/home_page1.png)


# Requirement Specification
## User Requirement
Grid Widget Note is a simple one-page web app. It enables users to write notes and customize the layout and sizes of notes in a grid layout.
It consists of two major components, first, an Input form and second, a widget grid display area. 

Firstly, an input panel is provided for the user to make a new note. It is toggled on and off with the "Add New Note" button. The input field consists of a "Title" field and a "Note Content" field. The notes are displayed in a grid of fixed width. Apart from inputting the two fields, users can clear the content with a Reset button and, after finishing writing, submit and save the content with the Submit button.

Secondly, to provide flexibility and customization, it is possible to let users drag and change the arrangement of notes in the grid.  Each note widget can also be resized into based on the grid layout. To do the dragging, User can just click and hold the note with the pointer and move the note around. To execute the resizing, the user can click and hold a resize icon on a widget and the widget will be resized into defined grid sizes.

The notes are saved automatically in the user's browser so that they can retrieve the created notes when revisiting the website.

## Technical Requirement

### Component Analysis
In terms of Software process models, component-Based software engineering (CBSE) is adopted because many modules are available online open-sourced. The ReactJS framework has provided us with a well-established framework and a wide variety of ready-to-use component-based libraries developed by the community.

After analysis of the user requirement, some open sources libraries are identified to be used:

* React Framework - A javascript based  UI framework. It enabled the component-based development
* Semantic-UI - The UI library providing required components, such as button and input field
* React-Grid-Layout - The library for grid layout.

## Functionality
After component analysis, the requirement is consolidated and listed detailed as below:

The number refers to the functions to be created.

### On Loading Page (1)
Get all notes stored in the LocalStorage and Update the notes content and the widget grid layout in the current states.
The initial input form is hidden, and an “Add New Note" button and the Note Widget Grid is shown. Note Widgets are displayed in the grid if there are any.

### Writing a Note (2)
* Add New Note Button:
    * **(2.1)** The Input fields is toggled displayed with a click of the “Add New Note" button. After that, an additional “Reset" and “Submit" button are displayed.
    * On pressing the Add New Note content once more, the input form is toggled hidden. The actions are repeatable that the Input form is toggle on and off by the button.
* Input Form
    * The “Title" and “Note Content" input field is shown and enable users to input a string literals. The inputs boxes are multiple lines of text fields with no number of lines limit. 
* Reset and Submit Button
    * **(2.2)** Reset button clears the content of the Input Form
    * Submit Button trigger the submission of a note, of which the functionality will be explained in the next part.

    
### Submission of A Note (3)
* On pressing the “Submit" button, the note content is appended and save into the Local Storage. The notes widget content is retrieved again from the local storage, and the current states are updated and trigger the rendering of updated note content in the Note Widget Grid.

### Note Widget
A single note widget displays the note title and notes content. It also consists of a Resize Icon and Delete Icon for the **Resizing** and **Deletion of A Note** functions which will be explained in later this part.

### Display of Note Content in Note Widget Grid
Note Widget Grid is a fixed width container.
The grid has a fixed number of columns of 6 columns in a grid of 1200 px. Each column has a width of 200px. Each row has a height of 80px. There is a fixed padding space between each widget.

The notes content is displayed in the Widget Grid according to the coordinates and sized specified and stored in the application states.

The note widgets are aligned at the top of the Widget Grid. In other words, there is an upward gravity in the grid, if there are no other widgets on top of a widget, the widget will be pushed at the top of the grid layout.

### 4. Interaction with Note Widget Grid (4)
* Dragging and Relocation
    * on Pressing and dragging the displayed area of a Note Widget, the widget can be moved and placed within the grid. The new layout of all widgets will be saved immediately in the LocalStorage and the application states are updated accordingly.
* Resizing
    * On Pressing and dragging the **Drag Icon**, the widget will be resized according to the defined grid layout.  The new sizings of all widgets will be saved immediately in the LocalStorage and the application states are updated accordingly.

###  Deletion of A Note (5)
On pressing the **Delete Icon**,  the note content and layout will be deleted from the LocalStorage and at the same time the application states will be updated, the widget grid will display the updated layout and content.


# Design And Implementation 

For the sake of easy management of business logic and state control, the states are monitored and functions are created at the single entry file App.js, and are passed to the children components.

The home page component is responsibile for the presentation. It gets all the states and declared functions in App.js as props; It calls other childrens and passes different data and props if necessary.

With the aids of the React UI frameworkds and the React Lifecycles functions, the children components will be rendered based on the passing props. Thanks to the open source libraries provided, a lot of functionalities have been available.


## Functions
To fulfill the requirements as described above, The following functions will be declared at the App.js:

* (1) initialiseData
* (2.1)  toggleInputMode
* (2.2) onReset
* (3) onSubmit
* (4) onLayoutChange
* (5) onClickDelete

The notes and gridLayout are stored in the local states in App.js and browser's LocalStorage provided by HTML5.

## Componenents
The application are developed into different decouple comonents. Parameters are passed as props into the components.

### Button Group
Input mode off
<br>
![Button group](https://s3-ap-southeast-1.amazonaws.com/grid-widget-notes/images/button_group_1.png)
<br>
Input mode on
<br>
![Button group](https://s3-ap-southeast-1.amazonaws.com/grid-widget-notes/images/button_group.png)
<br>

| Property | Props Type | Required | Default Value  | description |
| ------------- |:-------------:| :-----:| :-------: | --- |
| inputMode |	bool	| -	 | false	| is toggled on and off to display the Input fields and Reset/Submit Buttons|
| onReset	| func	| yes | 	-	| passed from App.js|
| onSubmit | func	| yes	| -	 | passed from App.js |
| onToggleInputMode |	func |	yes |	-	| passed from App.js|

### Input Field

![Input field](https://s3-ap-southeast-1.amazonaws.com/grid-widget-notes/images/input_field.png)

| Property | Props Type | Required | Default Value  | description |
| ------------- |:-------------:| :-----:| :-------: | --- |
| id      | string | - | - | |
| title      | string | - | - | |
| placeholder | string | - | "Try adding some content" | |


### Note Widget


| Property | Props Type | Required | Default Value  | description |
| ------------- |:-------------:| :-----:| :-------: | --- |
|title	|string	| -	| 'Untitled'	|
|value	| string	| -	|'Empty Notes'	|
|id | number |	yes	 | -	|
| onClickDelete |	function	| -	 | -	|

### Grid Layout

| Property | Props Type | Required | Default Value  | description |
| ------------- |:-------------:| :-----:| :-------: | --- |
| notes	| object	| - |	{}	|
| gridLayout	| array |	- |	[]	|
| onLayoutChange	| function |	-	| -	 |
| onClickDelete	| function |	-	| -	 |


### Home Page


![home page](https://s3-ap-southeast-1.amazonaws.com/grid-widget-notes/images/home_page.png)

| Property | Props Type | Required | Default Value  | description |
| ------------- |:-------------:| :-----:| :-------: | --- |
|inputMode|	bool|	yes|	-	|
|toggleInputMode	| function |	yes	|-	|
|notes|	object|	yes|	-|	
|gridLayout|	array	|yes|	-	|
|onSubmit|	function	|yes	|-	|
|onReset	| function	|yes	|-	|
|onLayoutChange|	function |	yes	|-	|
|onClickDelete|	function |	yes	|-	|


# Usage
## Installation
Please make sure node and npm are installed fisrt, and run the commands at the project root directory.

### `npm install`
Install the packages

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


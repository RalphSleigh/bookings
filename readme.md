#  Woodcraft Bookings

This is a web-based bookings system for woodcraft events. Not finished, many todos.

Written in javascipt using Express/React/Redux. Currently stores data in a sqlite DB in the project directory.

Currently perfecting it for district events before adding features for larger ones.

Next to add: 
 * Fees/payment tracker
 * Validation on user facing forms
 * Make booking deadline do something
 * Sort SSL/spin up demo instance 
 * Unit tests.. 

Will contain bugs. Also possibly weird issues due to being developed on windows.


In General: 

 * components that end in page are rendered as children of App
 * props with an InitalCaptial are Immutable structures and toJS()ed in the render of a xPage component.

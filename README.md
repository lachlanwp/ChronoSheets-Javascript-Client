# the_chrono_sheets_api

TheChronoSheetsApi - JavaScript client for the_chrono_sheets_api
<div style='font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 5 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  </p>  <p>      First Steps:       <ol>          <li>Make sure you've <a href='/HomeV2/App/sign-up'>signed up to ChronoSheets</a> to get yourself a user account</li>          <li>Confirm your account by following the link sent to your email address.  This will activate your account</li>          <li>Use your username and password to obtain an Auth Token by using the DoLogin method inside the UserProfile section below.  Use the Auth Token as an argument to the other methods</li>          <li>Try different methods in the API Playground to learn about the API</li>          <li>If you're stuck, try the full getting started guide on the <a href='/Home/ApiDocs'>API Toolkit</a> page.</li>      </ol>  </p>  <p>      Further Steps:       <ul>          <li>Create a mobile app (iOS, Android or Windows) using one of the ChronoSheets Mobile SDKs</li>          <li>Create a custom integration with your app using one of the ChronoSheets API Client Libraries.</li>      </ul>      Read more about the API Toolkit on the <a href='/Home/ApiDocs'>API Toolkit</a> page.  </p></div>
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: v1
- Package version: v1
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install the_chrono_sheets_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your the_chrono_sheets_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('the_chrono_sheets_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var TheChronoSheetsApi = require('the_chrono_sheets_api');

var api = new TheChronoSheetsApi.AggregateJobTasksApi()

var xChronosheetsAuth = "xChronosheetsAuth_example"; // {String} The ChronoSheets Auth Token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.aggregateJobTasksGetAggregateJobTasks(xChronosheetsAuth, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://www.chronosheets.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TheChronoSheetsApi.AggregateJobTasksApi* | [**aggregateJobTasksGetAggregateJobTasks**](docs/AggregateJobTasksApi.md#aggregateJobTasksGetAggregateJobTasks) | **GET** /api/AggregateJobTasks/GetAggregateJobTasks | Get jobs and tasks information, aggregated.    Requires the &#39;SubmitTimesheets&#39; or &#39;ManageJobsAndTask&#39; permissions.
*TheChronoSheetsApi.ClientsApi* | [**clientsCreateClient**](docs/ClientsApi.md#clientsCreateClient) | **PUT** /api/Clients/CreateClient | Create a client.    Requires the &#39;ManageClientsAndProjects&#39; permission.
*TheChronoSheetsApi.ClientsApi* | [**clientsGetClient**](docs/ClientsApi.md#clientsGetClient) | **GET** /api/Clients/GetClient | Get a particular client.    Requires the &#39;ManageClientsAndProjects&#39; or &#39;ManageJobsAndTask&#39; permissions.
*TheChronoSheetsApi.ClientsApi* | [**clientsGetClients**](docs/ClientsApi.md#clientsGetClients) | **GET** /api/Clients/GetClients | Get a collection of clients that are under your organisation.    Requires the &#39;ManageClientsAndProjects&#39; or &#39;ManageJobsAndTask&#39; permissions.
*TheChronoSheetsApi.ClientsApi* | [**clientsUpdateClient**](docs/ClientsApi.md#clientsUpdateClient) | **POST** /api/Clients/UpdateClient | Update a client.    Requires the &#39;ManageClientsAndProjects&#39; permission.
*TheChronoSheetsApi.FleetApi* | [**fleetCreateVehicle**](docs/FleetApi.md#fleetCreateVehicle) | **PUT** /api/Fleet/CreateVehicle | Create a vehicle.    Requires the &#39;ManageFleet&#39; permission.
*TheChronoSheetsApi.FleetApi* | [**fleetGetVehicleById**](docs/FleetApi.md#fleetGetVehicleById) | **GET** /api/Fleet/GetVehicleById | Get a particular vehicle.  Does not require any special permission.
*TheChronoSheetsApi.FleetApi* | [**fleetGetVehicles**](docs/FleetApi.md#fleetGetVehicles) | **GET** /api/Fleet/GetVehicles | Get a collection of vehicles that are under your organisation.    Does not require any special permission.
*TheChronoSheetsApi.FleetApi* | [**fleetUpdateVehicle**](docs/FleetApi.md#fleetUpdateVehicle) | **POST** /api/Fleet/UpdateVehicle | Update a vehicle.    Requires the &#39;ManageFleet&#39; permission.
*TheChronoSheetsApi.JobCodesApi* | [**jobCodesCreateJobCode**](docs/JobCodesApi.md#jobCodesCreateJobCode) | **PUT** /api/JobCodes/CreateJobCode | Create a job code.    Requires the &#39;ManageJobsAndTask&#39; permission.
*TheChronoSheetsApi.JobCodesApi* | [**jobCodesDeleteJobCode**](docs/JobCodesApi.md#jobCodesDeleteJobCode) | **DELETE** /api/JobCodes/DeleteJobCode | Delete a job code.    Requires the &#39;ManageJobsAndTask&#39; permission.
*TheChronoSheetsApi.JobCodesApi* | [**jobCodesGetJobCodeById**](docs/JobCodesApi.md#jobCodesGetJobCodeById) | **GET** /api/JobCodes/GetJobCodeById | Get a particular job code by job code id.    Requires &#39;SubmitTimesheets&#39; or &#39;ManageJobsAndTasks&#39; permissions.
*TheChronoSheetsApi.JobCodesApi* | [**jobCodesGetJobCodes**](docs/JobCodesApi.md#jobCodesGetJobCodes) | **GET** /api/JobCodes/GetJobCodes | Get job codes for your organisation.    Requires &#39;SubmitTimesheets&#39; or &#39;ManageJobsAndTasks&#39; permissions.
*TheChronoSheetsApi.JobCodesApi* | [**jobCodesUpdateJobCode**](docs/JobCodesApi.md#jobCodesUpdateJobCode) | **POST** /api/JobCodes/UpdateJobCode | Update a job code.    Requires the &#39;ManageJobsAndTask&#39; permission.
*TheChronoSheetsApi.OrganisationApi* | [**organisationGetOrganisation**](docs/OrganisationApi.md#organisationGetOrganisation) | **GET** /api/Organisation/GetOrganisation | Get your organisation.    Requires &#39;OrganisationAdmin&#39; permission.
*TheChronoSheetsApi.OrganisationApi* | [**organisationUpdateOrganisation**](docs/OrganisationApi.md#organisationUpdateOrganisation) | **POST** /api/Organisation/UpdateOrganisation | Update an organisation.    Requires &#39;OrganisationAdmin&#39; permission.
*TheChronoSheetsApi.OrganisationGroupUsersApi* | [**organisationGroupUsersGetOrganisationGroupUsers**](docs/OrganisationGroupUsersApi.md#organisationGroupUsersGetOrganisationGroupUsers) | **GET** /api/OrganisationGroupUsers/GetOrganisationGroupUsers | Get a collection of organisation group users that belong to an organisation group.    Requires the &#39;ManageOrganisationGroups&#39; or &#39;ManageOrganisationUsers&#39; permissions.
*TheChronoSheetsApi.OrganisationGroupUsersApi* | [**organisationGroupUsersUpdateOrganisationGroupUsers**](docs/OrganisationGroupUsersApi.md#organisationGroupUsersUpdateOrganisationGroupUsers) | **POST** /api/OrganisationGroupUsers/UpdateOrganisationGroupUsers | Set the users who belong to an organisation group.    Requires the &#39;ManageOrganisationGroups&#39; permissions.
*TheChronoSheetsApi.OrganisationGroupsApi* | [**organisationGroupsCreateOrganisationGroup**](docs/OrganisationGroupsApi.md#organisationGroupsCreateOrganisationGroup) | **PUT** /api/OrganisationGroups/CreateOrganisationGroup | Create an organisation group.    Requires the &#39;ManageOrganisationGroups&#39; permissions.
*TheChronoSheetsApi.OrganisationGroupsApi* | [**organisationGroupsGetOrganisationGroup**](docs/OrganisationGroupsApi.md#organisationGroupsGetOrganisationGroup) | **GET** /api/OrganisationGroups/GetOrganisationGroup | Get a particular organisation group.    Requires the &#39;ManageOrganisationGroups&#39;, &#39;ManageJobsAndTask&#39;, &#39;ManageClientsAndProjects&#39; or &#39;ManageOrganisationUsers&#39; permissions.
*TheChronoSheetsApi.OrganisationGroupsApi* | [**organisationGroupsGetOrganisationGroups**](docs/OrganisationGroupsApi.md#organisationGroupsGetOrganisationGroups) | **GET** /api/OrganisationGroups/GetOrganisationGroups | Get a collection of organisation groups that are under your organisation.    Requires the &#39;ManageOrganisationGroups&#39;, &#39;ManageJobsAndTask&#39;, &#39;ManageClientsAndProjects&#39; or &#39;ManageOrganisationUsers&#39; permissions.
*TheChronoSheetsApi.OrganisationGroupsApi* | [**organisationGroupsGetOrganisationGroupsForJob**](docs/OrganisationGroupsApi.md#organisationGroupsGetOrganisationGroupsForJob) | **GET** /api/OrganisationGroups/GetOrganisationGroupsForJob | Get org groups for a particular job.    Requires the &#39;ManageOrganisationGroups&#39;, &#39;ManageJobsAndTask&#39;, &#39;ManageClientsAndProjects&#39; or &#39;ManageOrganisationUsers&#39; permissions.
*TheChronoSheetsApi.OrganisationGroupsApi* | [**organisationGroupsGetOrganisationGroupsForVehicle**](docs/OrganisationGroupsApi.md#organisationGroupsGetOrganisationGroupsForVehicle) | **GET** /api/OrganisationGroups/GetOrganisationGroupsForVehicle | Get org groups for a particular vehicle.    Requires the &#39;ManageOrganisationGroups&#39;, &#39;ManageFleet&#39; or &#39;ManageOrganisationUsers&#39; permissions.
*TheChronoSheetsApi.OrganisationGroupsApi* | [**organisationGroupsUpdateOrganisationGroup**](docs/OrganisationGroupsApi.md#organisationGroupsUpdateOrganisationGroup) | **POST** /api/OrganisationGroups/UpdateOrganisationGroup | Update an organisation group.    Requires the &#39;ManageOrganisationGroups&#39; permissions.
*TheChronoSheetsApi.ProjectsApi* | [**projectsCreateProject**](docs/ProjectsApi.md#projectsCreateProject) | **PUT** /api/Projects/CreateProject | Create a project.    Requires the &#39;ManageClientsAndProjects&#39; permission.
*TheChronoSheetsApi.ProjectsApi* | [**projectsGetProjectById**](docs/ProjectsApi.md#projectsGetProjectById) | **GET** /api/Projects/GetProjectById | Get a project by its Id.    Requires the &#39;ManageClientsAndProjects&#39; or &#39;ManageJobsAndTask&#39; permissions.
*TheChronoSheetsApi.ProjectsApi* | [**projectsGetProjectsForClient**](docs/ProjectsApi.md#projectsGetProjectsForClient) | **GET** /api/Projects/GetProjectsForClient | Get projects for a particular client.    Requires the &#39;ManageClientsAndProjects&#39; or &#39;ManageJobsAndTask&#39; permissions.
*TheChronoSheetsApi.ProjectsApi* | [**projectsUpdateProject**](docs/ProjectsApi.md#projectsUpdateProject) | **POST** /api/Projects/UpdateProject | Update a project.    Requires the &#39;ManageClientsAndProjects&#39; permission.
*TheChronoSheetsApi.ReportsApi* | [**reportsGetAllChartsDataAdmin**](docs/ReportsApi.md#reportsGetAllChartsDataAdmin) | **GET** /api/Reports/GetAllChartsDataAdmin | Get Consolidated Admin Reports Data (Jobs, Tasks, Clients and Projects).  These are the organisation wide reports, with data from potentially all employees.    Requires the &#39;ReportAdmin&#39; permission.
*TheChronoSheetsApi.ReportsApi* | [**reportsGetAllChartsDataUser**](docs/ReportsApi.md#reportsGetAllChartsDataUser) | **GET** /api/Reports/GetAllChartsDataUser | Get Consolidated User Reports Data (Jobs, Tasks, Clients and Projects).  These are the user&#39;s own reports.    Requires the &#39;ViewOwnReports&#39; permission.
*TheChronoSheetsApi.ReportsApi* | [**reportsGetOrgTripById**](docs/ReportsApi.md#reportsGetOrgTripById) | **GET** /api/Reports/GetOrgTripById | Get trip by Id, for reporting purposes.    Requires the &#39;ReportAdmin&#39; permission.
*TheChronoSheetsApi.ReportsApi* | [**reportsGetOrganisationTimesheetFileAttachments**](docs/ReportsApi.md#reportsGetOrganisationTimesheetFileAttachments) | **GET** /api/Reports/GetOrganisationTimesheetFileAttachments | Reports on Organisation timesheet file attachments (files uploaded and attached to timesheet records.    Requires the &#39;ReportAdmin&#39; permission.
*TheChronoSheetsApi.ReportsApi* | [**reportsGetOrganisationTrips**](docs/ReportsApi.md#reportsGetOrganisationTrips) | **GET** /api/Reports/GetOrganisationTrips | Reports on Organisation trips (GPS tracking from whole organisation).    Requires the &#39;ReportAdmin&#39; permission.
*TheChronoSheetsApi.ReportsApi* | [**reportsGetRawDataAdmin**](docs/ReportsApi.md#reportsGetRawDataAdmin) | **GET** /api/Reports/GetRawDataAdmin | Get Timesheets Raw Data.  This data details each timesheet record.  These are the organisation wide timesheet records, with data from potentially all employees.    Requires the &#39;ReportAdmin&#39; permission.
*TheChronoSheetsApi.ReportsApi* | [**reportsProjectCostingsAdmin**](docs/ReportsApi.md#reportsProjectCostingsAdmin) | **GET** /api/Reports/ProjectCostingsAdmin | Gets project cost estimations VS actual cost for date range and users.    Requires the &#39;ReportAdmin&#39; permission.
*TheChronoSheetsApi.ReportsApi* | [**reportsUserJobsOverTime**](docs/ReportsApi.md#reportsUserJobsOverTime) | **GET** /api/Reports/UserJobsOverTime | Timeseries jobs data for the logged in user.    Requires the &#39;ViewOwnReports&#39; or &#39;SubmitTimesheets&#39;.
*TheChronoSheetsApi.TasksApi* | [**tasksCreateTask**](docs/TasksApi.md#tasksCreateTask) | **PUT** /api/Tasks/CreateTask | Create a task.    Requires the &#39;ManageJobsAndTask&#39; permission.
*TheChronoSheetsApi.TasksApi* | [**tasksDeleteTask**](docs/TasksApi.md#tasksDeleteTask) | **DELETE** /api/Tasks/DeleteTask | Delete a task.    Requires the &#39;ManageJobsAndTask&#39; permission.
*TheChronoSheetsApi.TasksApi* | [**tasksGetTaskById**](docs/TasksApi.md#tasksGetTaskById) | **GET** /api/Tasks/GetTaskById | Get a particular task by Id.   Requires the &#39;SubmitTimesheets&#39; or &#39;ManageJobsAndTask&#39; permissions.
*TheChronoSheetsApi.TasksApi* | [**tasksGetTasks**](docs/TasksApi.md#tasksGetTasks) | **GET** /api/Tasks/GetTasks | Get tasks in your organisation.   Requires the &#39;SubmitTimesheets&#39; or &#39;ManageJobsAndTask&#39; permissions.
*TheChronoSheetsApi.TasksApi* | [**tasksGetTasksForJob**](docs/TasksApi.md#tasksGetTasksForJob) | **GET** /api/Tasks/GetTasksForJob | Get a collection of tasks for a particular Job, specified by JobId.    Requires the &#39;SubmitTimesheets&#39; or &#39;ManageJobsAndTask&#39; permissions.
*TheChronoSheetsApi.TasksApi* | [**tasksUpdateTask**](docs/TasksApi.md#tasksUpdateTask) | **POST** /api/Tasks/UpdateTask | Update a task.    Requires the &#39;ManageJobsAndTask&#39; permission.
*TheChronoSheetsApi.TimesheetsApi* | [**timesheetsCreateSingleTimesheet**](docs/TimesheetsApi.md#timesheetsCreateSingleTimesheet) | **PUT** /api/Timesheets/CreateSingleTimesheet | Inserts a single timesheet record.    Requires the &#39;SubmitTimesheets&#39; permission.
*TheChronoSheetsApi.TimesheetsApi* | [**timesheetsDeleteTimesheet**](docs/TimesheetsApi.md#timesheetsDeleteTimesheet) | **DELETE** /api/Timesheets/DeleteTimesheet | Delete a timesheet.    Requires the &#39;SubmitTimesheets&#39; permission.
*TheChronoSheetsApi.TimesheetsApi* | [**timesheetsGetTimesheets**](docs/TimesheetsApi.md#timesheetsGetTimesheets) | **GET** /api/Timesheets/GetTimesheets | Get timesheets between start and end dates.  Note: the date range cannot exceed 24 hours.  This method is generally used to get timesheets for a particular day.    Requires the &#39;SubmitTimesheets&#39; permission.
*TheChronoSheetsApi.TimesheetsApi* | [**timesheetsUpdateTimesheets**](docs/TimesheetsApi.md#timesheetsUpdateTimesheets) | **POST** /api/Timesheets/UpdateTimesheets | Batch update timesheets.    Requires the &#39;SubmitTimesheets&#39; permission.
*TheChronoSheetsApi.TripsApi* | [**tripsCreateTrip**](docs/TripsApi.md#tripsCreateTrip) | **POST** /api/Trips/CreateTrip | Create a new trip.  Important: create a timesheet record before calling this, passing in the new timesheet record id as a reference.    Requires the &#39;SubmitTimesheets&#39; permission.
*TheChronoSheetsApi.TripsApi* | [**tripsGetMyTripById**](docs/TripsApi.md#tripsGetMyTripById) | **GET** /api/Trips/GetMyTripById | Get trip by Id.    Requires the &#39;ViewMyTrips&#39; permission.
*TheChronoSheetsApi.TripsApi* | [**tripsGetMyTrips**](docs/TripsApi.md#tripsGetMyTrips) | **GET** /api/Trips/GetMyTrips | Get my trips.  Get the GPS trips you&#39;ve recorded and submitted.    Requires the &#39;ViewMyTrips&#39; permission.
*TheChronoSheetsApi.UserJobFavouritesApi* | [**userJobFavouritesCreateJobFavourite**](docs/UserJobFavouritesApi.md#userJobFavouritesCreateJobFavourite) | **PUT** /api/UserJobFavourites/CreateJobFavourite | Create a job favourite.    Requires the &#39;SubmitTimesheets&#39; permission.
*TheChronoSheetsApi.UserJobFavouritesApi* | [**userJobFavouritesDeleteJobFavourite**](docs/UserJobFavouritesApi.md#userJobFavouritesDeleteJobFavourite) | **DELETE** /api/UserJobFavourites/DeleteJobFavourite | Delete a job favourite.    Requires the &#39;SubmitTimesheets&#39; permission.
*TheChronoSheetsApi.UserJobFavouritesApi* | [**userJobFavouritesGetJobFavourites**](docs/UserJobFavouritesApi.md#userJobFavouritesGetJobFavourites) | **GET** /api/UserJobFavourites/GetJobFavourites | Get your job favourites.    Requires the &#39;SubmitTimesheets&#39; permission.
*TheChronoSheetsApi.UserPayRatesApi* | [**userPayRatesCreatePayRate**](docs/UserPayRatesApi.md#userPayRatesCreatePayRate) | **PUT** /api/UserPayRates/CreatePayRate | Create a new pay rate for a particular user, archiving the previous pay rate.    Requires the &#39;ManageOrganisationUsers&#39; permission.
*TheChronoSheetsApi.UserPayRatesApi* | [**userPayRatesGetPayRates**](docs/UserPayRatesApi.md#userPayRatesGetPayRates) | **GET** /api/UserPayRates/GetPayRates | Get a collection of pay rates for a particular user, specified by user id.    Requires the &#39;ManageOrganisationUsers&#39; permission.
*TheChronoSheetsApi.UserProfileApi* | [**userProfileDoLogin**](docs/UserProfileApi.md#userProfileDoLogin) | **POST** /api/UserProfile/DoLogin | Login to your ChronoSheets account and obtain an Auth Token which you can use for other ChronoSheets API methods.    Does not require any special permissions.
*TheChronoSheetsApi.UserProfileApi* | [**userProfileDoLogout**](docs/UserProfileApi.md#userProfileDoLogout) | **DELETE** /api/UserProfile/DoLogout | Logout of your ChronoSheets account.  This method ends and deletes your active session.    Does not require any special permissions.
*TheChronoSheetsApi.UserProfileApi* | [**userProfileGetMyProfile**](docs/UserProfileApi.md#userProfileGetMyProfile) | **GET** /api/UserProfile/GetMyProfile | Get your own profile.  Use this method to obtain detailed information about your ChronoSheets user profile.    Does not require any special permissions.
*TheChronoSheetsApi.UserProfileApi* | [**userProfileKeepSessionAlive**](docs/UserProfileApi.md#userProfileKeepSessionAlive) | **GET** /api/UserProfile/KeepSessionAlive | Keep a session alive.  Use this method to keep a session active.  You could use this to &#39;ping&#39; ChronoSheets every &#39;x&#39; minutes to make sure your Auth Token will keep working.    Does not require any special permissions.
*TheChronoSheetsApi.UserProfileApi* | [**userProfileUpdateMyProfile**](docs/UserProfileApi.md#userProfileUpdateMyProfile) | **POST** /api/UserProfile/UpdateMyProfile | Update your own profile.  Use this method to update your profile information or update/change your password.    Does not require any special permissions.
*TheChronoSheetsApi.UsersApi* | [**usersCreateTimesheetUser**](docs/UsersApi.md#usersCreateTimesheetUser) | **PUT** /api/Users/CreateTimesheetUser | Create a user account in your organisation.  Requires the &#39;ManageOrganisationUsers&#39; permission.
*TheChronoSheetsApi.UsersApi* | [**usersGetTimesheetUser**](docs/UsersApi.md#usersGetTimesheetUser) | **GET** /api/Users/GetTimesheetUser | Get a particular user in your organisation.  Requires the &#39;ManageOrganisationUsers&#39; or &#39;ManageOrganisationGroups&#39; permissions.
*TheChronoSheetsApi.UsersApi* | [**usersGetTimesheetUsers**](docs/UsersApi.md#usersGetTimesheetUsers) | **GET** /api/Users/GetTimesheetUsers | Get users accounts in your organisation.  Requires the &#39;ManageOrganisationUsers&#39; or &#39;ManageOrganisationGroups&#39; permissions.
*TheChronoSheetsApi.UsersApi* | [**usersUpdateTimesheetUser**](docs/UsersApi.md#usersUpdateTimesheetUser) | **POST** /api/Users/UpdateTimesheetUser | Update a user account.  Requires the &#39;ManageOrganisationUsers&#39; permission.
*TheChronoSheetsApi.UsualHoursApi* | [**usualHoursGetUsualHours**](docs/UsualHoursApi.md#usualHoursGetUsualHours) | **GET** /api/UsualHours/GetUsualHours | Get usual hours (rostered hours) for an employee.  Requires the &#39;ManageOrganisationUsers&#39; or &#39;ManageOrganisationUsers&#39; permissions.
*TheChronoSheetsApi.UsualHoursApi* | [**usualHoursSetUsualHours**](docs/UsualHoursApi.md#usualHoursSetUsualHours) | **POST** /api/UsualHours/SetUsualHours | Set usual hours (rostered hours) for an employee.  Requires the &#39;ManageOrganisationUsers&#39; or &#39;ManageOrganisationUsers&#39; permissions.


## Documentation for Models

 - [TheChronoSheetsApi.CSAggregateJobCode](docs/CSAggregateJobCode.md)
 - [TheChronoSheetsApi.CSAggregateJobTask](docs/CSAggregateJobTask.md)
 - [TheChronoSheetsApi.CSApiResponseBoolean](docs/CSApiResponseBoolean.md)
 - [TheChronoSheetsApi.CSApiResponseClient](docs/CSApiResponseClient.md)
 - [TheChronoSheetsApi.CSApiResponseCombinedReportsData](docs/CSApiResponseCombinedReportsData.md)
 - [TheChronoSheetsApi.CSApiResponseDoLoginResponse](docs/CSApiResponseDoLoginResponse.md)
 - [TheChronoSheetsApi.CSApiResponseFleetVehicle](docs/CSApiResponseFleetVehicle.md)
 - [TheChronoSheetsApi.CSApiResponseForPaginatedListOrgReportTimesheetFileAttachment](docs/CSApiResponseForPaginatedListOrgReportTimesheetFileAttachment.md)
 - [TheChronoSheetsApi.CSApiResponseForPaginatedListOrgReportTrip](docs/CSApiResponseForPaginatedListOrgReportTrip.md)
 - [TheChronoSheetsApi.CSApiResponseForPaginatedListRawReportItem](docs/CSApiResponseForPaginatedListRawReportItem.md)
 - [TheChronoSheetsApi.CSApiResponseForPaginatedListTrip](docs/CSApiResponseForPaginatedListTrip.md)
 - [TheChronoSheetsApi.CSApiResponseInsertUserResponse](docs/CSApiResponseInsertUserResponse.md)
 - [TheChronoSheetsApi.CSApiResponseInt32](docs/CSApiResponseInt32.md)
 - [TheChronoSheetsApi.CSApiResponseJobCode](docs/CSApiResponseJobCode.md)
 - [TheChronoSheetsApi.CSApiResponseListAggregateJobCode](docs/CSApiResponseListAggregateJobCode.md)
 - [TheChronoSheetsApi.CSApiResponseListClient](docs/CSApiResponseListClient.md)
 - [TheChronoSheetsApi.CSApiResponseListFleetVehicle](docs/CSApiResponseListFleetVehicle.md)
 - [TheChronoSheetsApi.CSApiResponseListInt32](docs/CSApiResponseListInt32.md)
 - [TheChronoSheetsApi.CSApiResponseListJobCode](docs/CSApiResponseListJobCode.md)
 - [TheChronoSheetsApi.CSApiResponseListJobSeriesReportItem](docs/CSApiResponseListJobSeriesReportItem.md)
 - [TheChronoSheetsApi.CSApiResponseListOrganisationGroup](docs/CSApiResponseListOrganisationGroup.md)
 - [TheChronoSheetsApi.CSApiResponseListProject](docs/CSApiResponseListProject.md)
 - [TheChronoSheetsApi.CSApiResponseListProjectCostingReportItem](docs/CSApiResponseListProjectCostingReportItem.md)
 - [TheChronoSheetsApi.CSApiResponseListTimesheet](docs/CSApiResponseListTimesheet.md)
 - [TheChronoSheetsApi.CSApiResponseListTimesheetTask](docs/CSApiResponseListTimesheetTask.md)
 - [TheChronoSheetsApi.CSApiResponseListUserForManagement](docs/CSApiResponseListUserForManagement.md)
 - [TheChronoSheetsApi.CSApiResponseListUserHourlyRate](docs/CSApiResponseListUserHourlyRate.md)
 - [TheChronoSheetsApi.CSApiResponseListUserJobFavourite](docs/CSApiResponseListUserJobFavourite.md)
 - [TheChronoSheetsApi.CSApiResponseListUsualHoursDay](docs/CSApiResponseListUsualHoursDay.md)
 - [TheChronoSheetsApi.CSApiResponseOrganisation](docs/CSApiResponseOrganisation.md)
 - [TheChronoSheetsApi.CSApiResponseOrganisationGroup](docs/CSApiResponseOrganisationGroup.md)
 - [TheChronoSheetsApi.CSApiResponseProject](docs/CSApiResponseProject.md)
 - [TheChronoSheetsApi.CSApiResponseTimesheetTask](docs/CSApiResponseTimesheetTask.md)
 - [TheChronoSheetsApi.CSApiResponseTrip](docs/CSApiResponseTrip.md)
 - [TheChronoSheetsApi.CSApiResponseUpdateOrganisationResponse](docs/CSApiResponseUpdateOrganisationResponse.md)
 - [TheChronoSheetsApi.CSApiResponseUpdateProfileResponse](docs/CSApiResponseUpdateProfileResponse.md)
 - [TheChronoSheetsApi.CSApiResponseUpdateUserResponse](docs/CSApiResponseUpdateUserResponse.md)
 - [TheChronoSheetsApi.CSApiResponseUserForManagement](docs/CSApiResponseUserForManagement.md)
 - [TheChronoSheetsApi.CSApiResponseUserProfile](docs/CSApiResponseUserProfile.md)
 - [TheChronoSheetsApi.CSBatchUpdateTimesheetRequest](docs/CSBatchUpdateTimesheetRequest.md)
 - [TheChronoSheetsApi.CSClient](docs/CSClient.md)
 - [TheChronoSheetsApi.CSClientSeriesReportItem](docs/CSClientSeriesReportItem.md)
 - [TheChronoSheetsApi.CSClientSideUser](docs/CSClientSideUser.md)
 - [TheChronoSheetsApi.CSClientTotalsReportItem](docs/CSClientTotalsReportItem.md)
 - [TheChronoSheetsApi.CSCombinedReportsData](docs/CSCombinedReportsData.md)
 - [TheChronoSheetsApi.CSCreateTripRequest](docs/CSCreateTripRequest.md)
 - [TheChronoSheetsApi.CSDoLoginRequest](docs/CSDoLoginRequest.md)
 - [TheChronoSheetsApi.CSDoLoginResponse](docs/CSDoLoginResponse.md)
 - [TheChronoSheetsApi.CSFleetVehicle](docs/CSFleetVehicle.md)
 - [TheChronoSheetsApi.CSInsertClientRequest](docs/CSInsertClientRequest.md)
 - [TheChronoSheetsApi.CSInsertJobCodeRequest](docs/CSInsertJobCodeRequest.md)
 - [TheChronoSheetsApi.CSInsertOrganisationGroupRequest](docs/CSInsertOrganisationGroupRequest.md)
 - [TheChronoSheetsApi.CSInsertProjectRequest](docs/CSInsertProjectRequest.md)
 - [TheChronoSheetsApi.CSInsertTaskRequest](docs/CSInsertTaskRequest.md)
 - [TheChronoSheetsApi.CSInsertUserHourlyRateRequest](docs/CSInsertUserHourlyRateRequest.md)
 - [TheChronoSheetsApi.CSInsertUserJobFavouriteRequest](docs/CSInsertUserJobFavouriteRequest.md)
 - [TheChronoSheetsApi.CSInsertUserRequest](docs/CSInsertUserRequest.md)
 - [TheChronoSheetsApi.CSInsertUserResponse](docs/CSInsertUserResponse.md)
 - [TheChronoSheetsApi.CSInsertVehicleRequest](docs/CSInsertVehicleRequest.md)
 - [TheChronoSheetsApi.CSJobCode](docs/CSJobCode.md)
 - [TheChronoSheetsApi.CSJobSeriesReportItem](docs/CSJobSeriesReportItem.md)
 - [TheChronoSheetsApi.CSJobTotalsReportItem](docs/CSJobTotalsReportItem.md)
 - [TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment](docs/CSOrgReportTimesheetFileAttachment.md)
 - [TheChronoSheetsApi.CSOrgReportTrip](docs/CSOrgReportTrip.md)
 - [TheChronoSheetsApi.CSOrganisation](docs/CSOrganisation.md)
 - [TheChronoSheetsApi.CSOrganisationGroup](docs/CSOrganisationGroup.md)
 - [TheChronoSheetsApi.CSProject](docs/CSProject.md)
 - [TheChronoSheetsApi.CSProjectCostingReportItem](docs/CSProjectCostingReportItem.md)
 - [TheChronoSheetsApi.CSProjectSeriesReportItem](docs/CSProjectSeriesReportItem.md)
 - [TheChronoSheetsApi.CSProjectTotalsReportItem](docs/CSProjectTotalsReportItem.md)
 - [TheChronoSheetsApi.CSRawReportItem](docs/CSRawReportItem.md)
 - [TheChronoSheetsApi.CSSaveClientRequest](docs/CSSaveClientRequest.md)
 - [TheChronoSheetsApi.CSSaveOrganisationGroupRequest](docs/CSSaveOrganisationGroupRequest.md)
 - [TheChronoSheetsApi.CSSaveVehicleRequest](docs/CSSaveVehicleRequest.md)
 - [TheChronoSheetsApi.CSSetOrganisationGroupUsersRequest](docs/CSSetOrganisationGroupUsersRequest.md)
 - [TheChronoSheetsApi.CSSetUsualHoursRequest](docs/CSSetUsualHoursRequest.md)
 - [TheChronoSheetsApi.CSTaskSeriesReportItem](docs/CSTaskSeriesReportItem.md)
 - [TheChronoSheetsApi.CSTaskTotalsReportItem](docs/CSTaskTotalsReportItem.md)
 - [TheChronoSheetsApi.CSTimeSlot](docs/CSTimeSlot.md)
 - [TheChronoSheetsApi.CSTimesheet](docs/CSTimesheet.md)
 - [TheChronoSheetsApi.CSTimesheetTask](docs/CSTimesheetTask.md)
 - [TheChronoSheetsApi.CSTrip](docs/CSTrip.md)
 - [TheChronoSheetsApi.CSTripCoordinate](docs/CSTripCoordinate.md)
 - [TheChronoSheetsApi.CSUpdateJobCodeRequest](docs/CSUpdateJobCodeRequest.md)
 - [TheChronoSheetsApi.CSUpdateMyProfileRequest](docs/CSUpdateMyProfileRequest.md)
 - [TheChronoSheetsApi.CSUpdateOrganisationRequest](docs/CSUpdateOrganisationRequest.md)
 - [TheChronoSheetsApi.CSUpdateOrganisationResponse](docs/CSUpdateOrganisationResponse.md)
 - [TheChronoSheetsApi.CSUpdateProfileResponse](docs/CSUpdateProfileResponse.md)
 - [TheChronoSheetsApi.CSUpdateProjectRequest](docs/CSUpdateProjectRequest.md)
 - [TheChronoSheetsApi.CSUpdateTaskRequest](docs/CSUpdateTaskRequest.md)
 - [TheChronoSheetsApi.CSUpdateUserRequest](docs/CSUpdateUserRequest.md)
 - [TheChronoSheetsApi.CSUpdateUserResponse](docs/CSUpdateUserResponse.md)
 - [TheChronoSheetsApi.CSUserForManagement](docs/CSUserForManagement.md)
 - [TheChronoSheetsApi.CSUserHourlyRate](docs/CSUserHourlyRate.md)
 - [TheChronoSheetsApi.CSUserJobFavourite](docs/CSUserJobFavourite.md)
 - [TheChronoSheetsApi.CSUserProfile](docs/CSUserProfile.md)
 - [TheChronoSheetsApi.CSUsualHoursDay](docs/CSUsualHoursDay.md)


## Documentation for Authorization


### x-chronosheets-auth

- **Type**: API key
- **API key parameter name**: x-chronosheets-auth
- **Location**: HTTP header


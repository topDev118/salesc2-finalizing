<?php

Route::get('/configtest', function(){
    dd(env("MAIL_USERNAME"), env(""), env(""));
});

Route::get('/login', 'Auth\LoginController@index');

Route::get('/verify/{token}', 'Controller@verify');

Route::get('export', 'ExcelController@export');

Route::post('/logout', 'Auth\LoginController@logout')->name('logout');

Route :: get('/demorequest', [
    'uses' => 'RequestDemoController@create'
]);
Route :: post('/demorequest', [
    'uses' => 'RequestDemoController@store',
    'as' => 'request.store'
]);
Route::get('/invite/accept/{token}', 'Auth\RegisterController@accepted')->name("invite");
Route::post('/invite/accept/{token}', 'Auth\RegisterController@profilecomplete');
Route::get('/team_member/accept/{id}', 'Auth\RegisterController@member_accepted')->name("team_member");
Route::post('/team_member/accept/{id}', 'Auth\RegisterController@member_profilecomplete');
Auth::routes();

Route::get('/', function () {
    return view('frontend.home');
});
Route::get('/home', function () {
    return view('frontend.home');
});
Route::get('/about-us', 'AboutUsController@index');
Route::get('/contact-us', 'ContactUsController@index');
Route::get('/privacy-policy', 'PrivacyPolicyController@index');

Route::get('/thankyou', 'ThankYouController@index')->name('thankyou');
Route::get('/welcome', 'WelcomeController@index')->name('welcomesales');



Route::group( [ 'prefix' => 'dashboard'  ,   'middleware' => 'auth'], function(){
    Route::middleware('emailverified')->group( function(){
        Route :: get('/', 'DashboardController@index');
        Route :: get('/mark/task_member/{id}', 'DashboardController@Mark_GetTaskMember');
        Route :: get('/mark/task/{id}', 'DashboardController@Mark_GetTask');
        Route :: get('/team', 'TeamController@index');       
        Route :: get('/team/{event}', 'TeamController@getTeamDetail');
        Route :: post('/team/update', 'TeamController@update');
        Route :: get('/accounts', 'AccountsController@index');
        Route :: get('/accounts/{accounts}', 'AccountsController@getAccountDetail');
        Route :: get('/services', 'ServicesController@index')->middleware('role:1,2');
        Route :: get('services/{service}', 'ServicesController@getServiceDetail');
        Route :: get('/team', 'TeamController@index')->middleware('role:1,2');
        Route :: get('/accounts', 'AccountsController@index')->middleware('role:1,2');
        Route :: get('/tasks', 'TasksController@index');
        Route :: get('/calendar', 'CalendarController@index');
        Route :: get('/calendar/search', 'CalendarController@calendar_search')->name('calendar.search');
        Route :: get('/calendar/{event}', 'CalendarController@getEventDetail');
        Route :: get('/tasks/{task}', 'TasksController@getTaskDetail');
        Route :: post('/tasks/eventsave', 'TasksController@postTaskUpdate');
        Route :: get('/map', 'MapController@index');
        Route :: get('/map/task/{id}', 'MapController@Mark_GetTask');
        Route :: get('/map/task_member/{id}', 'MapController@Mark_GetTaskMember');
    
        Route :: get('/reporting', 'ReportingController@index');
    });
    
});


 
Route::group( [ 'prefix' => 'admin'  ,   'middleware' => 'admin', 'namespace' => 'admin'], function(){
    
    Route:: get('/dashboard', 'AdminController@index')->name('dashboard');
    Route:: resource('/userrole', 'UserRoleController', [
        'name'=>[
            'index'=>'userrole',
            'create'=>'userrole.create',
            'edit' => 'userrole.edit'
            ]
            ]);
    Route:: get('/invite', 'InviteController@invite')->name('invite');
    Route:: resource('/tasks', 'TasksController', [
        'name'=>[
            'index'=>'tasks',
            'create'=>'tasks.create',
            'edit' => 'tasks.edit',
            'destroy' => 'tasks.destroy'
            ]
            ]);
    
    Route:: post('/sendemail', 'InviteController@sendemail')->name('admin.sendemail');

    Route:: get('/schedule', 'ScheduleController@index')->name('schedule');
    Route:: get('/report', 'ReportController@index')->name('report');
    
    Route:: get('/notification/all', 'NotificationController@show_all')->name('admin.notifi_all');

    Route:: get('/changepassword', 'ChangePasswordController@index')->name('changepassword');
    Route:: post('/changepassword', 'ChangePasswordController@postCredentials');

    Route :: get('/schedule/search', 'ScheduleController@schedule_search')->name('schedule.search');
    Route :: get('/schedule/{event}', 'ScheduleController@getEventDetail');


});

Route :: post('add-teammember', 'TeamController@store');
Route :: post('update-teammember', 'TeamController@update');
Route :: post('update-account', 'AccountsController@update');
Route :: post('update-service', 'ServicesController@update');
Route :: post('calendar', 'CalendarController@addEvent')->name('events.add');
Route :: post('add-task', 'TasksController@addTask')->name('task.add');
Route :: post('update-task', 'TasksController@postTaskUpdate');
Route :: post('add-account', 'AccountsController@addAccount');
Route :: post('add-service', 'ServicesController@addService');
Route :: post('delete-team', 'TeamController@removeTeam');
Route :: post('delete-service', 'ServicesController@removeService');
Route :: post('delete-account', 'AccountsController@removeAccount');
Route :: post('delete-task', 'TasksController@removeTask');
Route :: get('delete-invite/{id}', 'admin\InviteController@removeInvite')->name('delete.invite');
Route :: get('delete-notification/{id}', 'admin\NotificationController@remove')->name('delete.notification');
Route :: get('remove-task/{id}', 'admin\TasksController@destroy')->name('tasks.remove');





Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

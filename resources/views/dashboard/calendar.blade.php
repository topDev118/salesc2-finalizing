@extends('layouts.calendarLayout')
@section('content')
<div class="clearfix">&nbsp;</div>   
<div class="container">
    <div class="panel panel-primary" style="margin-top:160px; color: #fff;background-color: #2e488a;border-color: #2e488a;">
        <div class="panel-heading" style="color: #fff;background-color: #2e488a;border-color: #fff;">Salesc2 Schedule</div>
        <div class="panel-body" style="padding:0px!important;">
            @if ($errors->any())
            <div class="alert alert-danger">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
          @endif
    <form method="post" id="newModalForm" action="{{ route('events.add')}}" class="needs-validation">
            @csrf
            
            <div class="form-group">
              <label class="col-md-1" >Customer</label>
              <div class="col-md-2 col-sm-4">
                  <select class="form-control" id="customer_add_task" name="customer" >  
                    <option value="" disabled selected>Select Customer</option>              
                    @foreach($customer as $cus)
                      <option>{{$cus->customer}}</option>
                    @endforeach              
                  </select>
                <p></p>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-1" >Department</label>
              <div class="col-md-2 col-sm-4">
                  <select class="form-control" id="department_add_task" name="department" >   
                    <option value="" disabled selected>Select department</option>                 
                    @foreach($department as $dep)
                      <option>{{$dep->department}}</option>
                    @endforeach              
                  </select>
                <p></p>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-1" >Service</label>
              <div class="col-md-2 col-sm-4">
                  <select class="form-control" id="service_add_task" name="service" >
                    <option value="" disabled selected>Select Service</option>                    
                    @foreach($service as $ser)
                      <option>{{$ser->service}}</option>
                    @endforeach              
                </select>
                <p></p>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-1" >&nbsp;&nbsp;&nbsp;&nbsp;Task</label>
              <div class="col-md-2 col-sm-4">
                <select class="form-control" id="task_add_task" name="task" >
                    <option value="" disabled selected>Select Task</option>                    
                    @foreach($task as $tas)
                      <option>{{$tas->task}}</option>
                    @endforeach              
                </select>
                <p></p>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-1" >Device Type</label>
              <div class="col-md-2 col-sm-4">
                <select class="form-control" id="device_type_add_task" name="device_type" >
                    <option value="" disabled selected>Select Device Type</option>                    
                    @foreach($device_type as $dev)
                      <option>{{$dev->device_type}}</option>
                    @endforeach              
                </select>
                <p></p>
              </div>
            </div>
           
            <div class="form-group">
              <label class="col-md-1" >Start Time</label>
              <div class="col-md-2 col-sm-4">
                <input type="datetime-local" class="form-control" id="time_add_task" name="start_time" required />
                <p></p>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-1" >End Time</label>
              <div class="col-md-2 col-sm-4">
                <input type="datetime-local" class="form-control" id="completion_date_add_task" name="end_time" required />
                <p></p>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-1">Assigned Sales Rep</label>
              <div class="col-md-2 col-sm-4">
                <select class="form-control" id="assigned_sales_rep_add_task" name="assigned_sales_rep" >
                  <option value="" disabled selected>Select Assigned Sales Rep</option>  
                  <option>{{Auth::user()->name}}</option>  
                  @foreach($name as $rep)
                  <option>{{$rep->name}}</option>
                  @endforeach
                </select>
                <p></p>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-1" >Status</label>
              <div class="col-md-2 col-sm-4">
                <select name="status" id="task-status" class="form-control" >
                  <option value="Unassigned">Unassigned</option>
                  <option value="Inprogress">Inprogress</option>
                  <option value="Complete">Complete</option>
                  <option value="Canceled">Canceled</option>
                  <option value="Incomplete">Incomplete</option>                
                </select><p></p>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-1" >Notes</label>
              <div class="col-md-2 col-sm-4">
                <input type="text" class="form-control" id="notes_add_task" name="notes"  />
                <p></p>
              </div>
            </div>
            <div class="col-md-2 col-sm-4">
            <button type="submit" class="btn calendar-btn" style="padding:3px!important;" id="btnAddTask"><b>Add Task</b></button>
            </div>
        </div>
        
    </div>
</form>
    <div class="container">
            <div class="row">
                <form action="{{ route('calendar.search') }}" method="get" class="search-form">
                    <div class="col-md-3 col-sm-8">                    
                        <input style="padding: 10px 22px;" type="text" placeholder="Search.." name="search">
                        <button type="submit"><i class="fa fa-search fa-lg" aria-hidden="true"></i></button>                     
                    </div>
        
                    <div class="col-md-2 col-sm-4">
                            <div class="form-group">
                                <div class="rail-select">
                                    <div class="select-side"><i style="top: 20px;" class="glyphicon glyphicon-menu-down black"></i></div>                                    
                                        <select class="form-control" name="customer">   
                                                <option value="" disabled selected>Choose Customer</option>                                 
                                            @foreach($customer as $cus)
                                                <option value="{{$cus->customer}}">{{$cus->customer}}</option>
                                            @endforeach
                                        </select>
                                </div>
                            </div>
                    </div>
            
                    <div class="col-md-2 col-sm-4">
                            <div class="form-group">
                                <div class="rail-select">
                                    <div class="select-side"><i style="top: 20px;" class="glyphicon glyphicon-menu-down black"></i></div>                                    
                                        <select class="form-control" name="type"> 
                                             <option value="" disabled selected>Choose Territory</option>                           
                                            @foreach($team_members as $team_men)
                                                <option value="{{$team_men->territory}}">{{$team_men->territory}}</option>
                                            @endforeach
                                        </select>
                                </div>
                            </div>
                    </div>
                    <div class="col-md-2 col-sm-4">
                            <div class="form-group">
                                <div class="rail-select">
                                    <div class="select-side"><i style="top: 20px;" class="glyphicon glyphicon-menu-down black"></i></div>                                    
                                        <select class="form-control" name="assigned_sales_rep"> 
                                             <option value="" disabled selected>Choose Sales Rep</option>                           
                                            @foreach($name as $rep)
                                                <option value="{{$rep->name}}">{{$rep->name}}</option>
                                            @endforeach
                                        </select>
                                </div>
                            </div>
                    </div>
                    <div class="col-md-2 col-sm-4">
                            <div class="form-group">
                                <div class="rail-select form-control">
                                    <div class="select-side"></div>                                    
                                        <input type="date" style="margin-top: 5px;width: 100%;font-size:15px;" name="date1"/>
                                </div>
                            </div>
                    </div>
                </form>
            </div>
    <div class="container">
        <div class="col-md-12">
            {!! $calendar->calendar() !!}
            {!! $calendar->script() !!}</div>
    </div>

</div>

<div class="modal fade" id="eventModal" tabindex="-1" role="dialog" aria-labelledby="eventModal" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-sales modal-width">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel">Task</h4>
            </div>
            <div class="modal-body">
                <div class="row table-responsive">
                <table class="table" style="color:white!important;">
                    <tbody>
                        <tr>
                          <th scope="col">Customer</th>
                          <td><strong id="modal_task_customer"></strong></td>
                        </tr>
                        <tr>
                            <th scope="col">Department</th>
                            <td><strong id="modal_task_department"></strong></td>
                        </tr>
                        <tr>
                            <th scope="col">Service</th>                            
                            <td><strong id="modal_task_service"></strong></td>
                        </tr>
                        <tr>
                            <th scope="col">Task</th>
                            <td><strong id="modal_task_task"></strong></td>
                        </tr>
                        <tr>
                            <th scope="col">Device Type</th>
                            <td><strong id="modal_task_device_type"></strong></td>
                        </tr>
                        <tr>
                            <th scope='col'>Start Time</th>
                            <td><strong id="modal_task_start_time"></strong></td>
                        </tr>
                        <tr>
                            <th scope='col'>End Time</th>
                            <td><strong id="modal_task_end_time"></strong></td>
                        </tr>
                        <tr>
                            <th scope='col'>Assigned Sales Rep</th>
                            <td><strong id="modal_task_assigned_sales_rep"></strong></td>
                        </tr>
                        <tr>
                            <th scope='col'>Status</th>
                            <td><strong id="modal_task_status"></strong></td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="table-btn" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

@endsection
<script>
    function calendarEventClickHandler(event) {
     // console.log(event)
        $.get("/dashboard/calendar/" + event.id, function(res) {
          //alert(event.id);
            $("#modal_task_customer").html(res.customer)  
            $("#modal_task_department").html(res.department)
            $("#modal_task_service").html(res.service)
            $("#modal_task_task").html(res.task)
            $("#modal_task_device_type").html(res.device_type)
            $("#modal_task_start_time").html(res.start_time)
            $("#modal_task_end_time").html(res.end_time)
            $("#modal_task_assigned_sales_rep").html(res.assigned_sales_rep)
            $("#modal_task_status").html(res.status)
            $("#eventModal").modal("show");
        })
    }
</script>
<script>
dayRender: function(date, cell) {
                var today = $.fullCalendar.moment();
                var end = $.fullCalendar.moment().add(7, 'days');
                if (date.get('date') == today.get('date')) {
                    cell.css("background", "#e8e8e8");
     }
}
</script>

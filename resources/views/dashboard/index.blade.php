@extends('layouts.calendarLayout')
@section('content')
<div class="clearfix">&nbsp;</div>
<section class="" style="margin-top:200px;">
    <div class="container">
        <div class="row customer-dashboard">
            <div class="col-sm-5" style="color:black;font-family:'sans-serif';">
                <div class="dashboard-table">&nbsp;&nbsp;&nbsp;TASK<a class="dashboard-table" href="{{URL::asset('dashboard/tasks')}}"><i class="dashboard-zoom-icon glyphicon glyphicon-fullscreen blinking"></i></a></div>
                <div class="dashboard dashboard-task table_responsive table-responsive">
                 <div class="col-md-auto">
                    <table id = "datatable" class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th class="text-black ">Customer</th>
                                <th class="text-black ">Service</th>
                                <th class="text-black ">Start Time</th>
                                <th class="text-black ">End Time</th>
                                <th class="text-black ">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($schedule as $value)
                            <tr>
                                <td style="font-size:12px;">{{$value->customer}}</th>
                                <td style="font-size:12px;">{{$value->service}}</td>
                                <td style="font-size:12px;">{{$value->start_time}}</td>
                                <td style="font-size:12px;">{{$value->end_time}}</td>
                                @if($value->status =='Complete')
                                <td style="font-size:15px;" class="col complete-blinking"><b>{{$value->status}}</td>
                                @elseif($value->status =='Incomplete')
                                <td style="font-size:15px;" class="col incomplete-blinking"><b>{{$value->status}}</td>
                                @elseif($value->status =='Canceled')
                                <td style="font-size:15px;" class="col canceled-blinking"><b>{{$value->status}}</td>
                                @elseif($value->status =='Inprogress')
                                <td style="font-size:15px;" class="col inprogress-blinking"><b>{{$value->status}}</td>
                                @elseif($value->status =='Unassigned')
                                <td style="font-size:15px;" class="col text-black"><b>{{$value->status}}</td>

                                @endif
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
                </div>

                <div class="dashboard dashboard-schedule">
                    <div class="dashboard-table">&nbsp;&nbsp;&nbsp;SCHEDULE<a class="dashboard-table" href="{{URL::asset('dashboard/calendar')}}"><i class="dashboard-zoom-icon glyphicon glyphicon-fullscreen blinking"></i></a></div>

                    {!! $calendar->calendar() !!}
                    {!! $calendar->script() !!}
                </div>

                <div class="dashboard report">
                    <div class="dashboard-table">&nbsp;&nbsp;&nbsp;REPORT<a class="dashboard-table" href="{{URL::asset('dashboard/reporting')}}"><i class="dashboard-zoom-icon glyphicon glyphicon-fullscreen blinking"></i></a></div>
                    <table class="table table-striped table-bordered" style="height:220px;">
                        <tbody>
                            <tr>
                                <td class="text-center" style="font-size:30px;font-weight:600;">
                                    <h4 class="text-light" style="font-size:16px;">SALES REP</h4>
                                    <span class="empty-space">{{$assigned_rep_sales_count}}</span>
                                </td>
                                <td class="text-center" style="font-size:30px;font-weight:600;">
                                    <h4 class="text-black" style="font-size:16px";>TOTAL TASK</h4>
                                    <span class="empty-space text-black">{{$total_tasks}}</span>
                                </td>
                                <td class="text-center" style="font-size:30px;font-weight:600;">
                                    <h4 class="complete-blinking" style="font-size:16px;">COMPLETED TASK</h4>
                                    <span class="empty-space complete-blinking">{{$complete_tasks}}</span>
                                </td>

                            </tr>
                            <tr>
                                <td class="text-center" style="font-size:30px;font-weight:600;">
                                    <h4 class="inprogress-blinking" style="font-size:16px;">IN PROGRESS</h4>
                                    <span class="empty-space inprogress-blinking">{{$inprogress_tasks}}</span>
                                </td>
                                <td class="text-center" style="font-size:30px;font-weight:600;">
                                    <h4 class="canceled-blinking" style="font-size:16px;">CANCELED</h4>
                                    <span class="empty-space canceled-blinking">{{$canceled_tasks}}</span>
                                </td>
                                <td class="text-center" style="font-size:30px;font-weight:600;">
                                    <h4 class="incomplete-binking" style="font-size:16px;">INCOMPLETED TASK</h4>
                                    <span class="empty-space incomplete-binking">{{$incomplete_tasks}}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-sm-7 dashboard-map">{!! $map['html'] !!}</div>
        </div>
    </div>


    <div class="modal fade" id="eventModal" tabindex="-1" role="dialog" aria-labelledby="eventModal" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-sales modal_width">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="myModalLabel">Task</h4>
                </div>
                <div class="modal-body table-responsive">
                    <table class="table" style="color:white!important;">
                            <tbody>
                                    <tr>
                                       <th>Customer</th>
                                       <td><strong id="modal_task_customer"></strong></td>
                                    </tr>
                                    <tr>
                                       <th>Department</th>
                                       <td><strong id="modal_task_department"></strong></td>
                                   </tr>
                                   <tr>
                                       <th>Service</th>   
                                       <td><strong id="modal_task_service"></strong></td>                         
                                   </tr>
                                   <tr>
                                       <th>Task</th>
                                       <td><strong id="modal_task_task"></strong></td>
                                   </tr>
                                   <tr>
                                       <th>Device Type</th>
                                       <td><strong id="modal_task_device_type"></strong></td>

                                   </tr>
                                   <tr>
                                       <th>Start Time</th>
                                       <td><strong id="modal_task_start_time"></strong></td>
                                   </tr>
                                   <tr>
                                       <th>End Time</th>
                                       <td><strong id="modal_task_end_time"></strong></td>
                                   </tr>
                                   <tr>
                                       <th>Assigned Sales Rep</th>
                                       <td><strong id="modal_task_assigned_sales_rep"></strong></td>
                                   </tr>
                                   <tr>
                                       <th>Status</th>
                                       <td><strong id="modal_task_status"></strong></td>
                                   </tr>                                 
                                   
                               </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="table-btn" style="border:1px solid;" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

</section>
<!-- Map Modal -->
<div id="markerDetailModal" class="modal fade" role="dialog">
    <div class="modal-dialog" style="width:100%" ;>

        <!-- Modal content-->
        <div class="modal-sales">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Task Details in <b>{{$location}}</b></h4>
            </div>
            <div class="modal-body">
                <p>Some text in the modal.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>

    </div>
</div>
@endsection
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
<script>
    $(document).ready(function() {
         $('#datatable').DataTable({
          
        }); 
    //     $('#datatable').excelTableFilter({
    //     columnSelector: '.apply-filter',    
    //     sort: true,                         
    //     search: true,                        
    //     captions: Object                    
    // });
});

</script>
<script>
    function calendarEventClickHandler(event) {

        $.get("/dashboard/calendar/" + event.id, function(res) {
            $("#modal_task_customer").html(res.customer)
            $("#modal_task_service").html(res.service)
            $("#modal_task_department").html(res.department)
            $("#modal_task_task").html(res.task)
            $("#modal_task_device_type").html(res.device_type)
            $("#modal_task_start_time").html(res.start_time)
            $("#modal_task_end_time").html(res.end_time)
            $("#modal_task_assigned_sales_rep").html(res.assigned_sales_rep)
            $("#modal_task_status").html(res.status)
            $("#eventModal").modal("show");
        })
    }
    function showTasksofMember(id) {
        $.get('/dashboard/map/task/' + id, function(result) {
            console.log(result);
            $("#markerDetailModal .modal-body").html(result)
            $("#markerDetailModal").modal('show')
        })
        console.log(id)
    }
    function showTasksofMember_member(id) {
        $.get('/dashboard/map/task_member/' + id, function(result) {
            console.log(result);
            $("#markerDetailModal .modal-body").html(result)
            $("#markerDetailModal").modal('show')
        })
        console.log(id)
    }
</script>
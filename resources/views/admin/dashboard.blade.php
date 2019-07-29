@extends('layouts.adminLayout')

@section('content')

      
        <div class="container-fluid">
          <!-- /#page-content-wrapper -->
          <div class="sales-d-flex" style="padding:10px;">
            <div class="card admin-box">
                    <a href="{{URL::asset('admin/tasks')}}" style="text-decoration:none;">
                    <div class="card-body text-center text-primary border border-primary shadow-lg rounded">
                        <h4>Total<br> Tasks</h4>
                        <h1>{{$total_tasks}}</h1>
                    </div>
                    </a>
            </div>
            <div class="card admin-box">
                    <a href="{{URL::asset('admin/tasks')}}" style="text-decoration:none;">
                    <div class="card-body text-center text-info border border-info shadow-lg rounded">
                        <h4>Ongoing<br> Tasks</h4>
                    <h1>{{$ongoing_tasks}}</h1>
                    </div>
                    </a>
            </div>
            <div class="card admin-box">
                    <a href="{{URL::asset('admin/tasks')}}" style="text-decoration:none;">
                    <div class="card-body text-center text-success border border-success shadow-lg rounded">
                        <h4>Completed<br> Tasks</h4>
                        <h1>{{$complete_tasks}}</h1>
                    </div>
                    </a>
            </div>
            <div class="card admin-box">
                    <a href="{{URL::asset('admin/tasks')}}" style="text-decoration:none;">
                    <div class="card-body text-center text-secondary border border-secondary shadow-lg rounded">
                        <h4>Canceled<br> Tasks</h4>
                        <h1>{{$canceled_tasks}}</h1>
                    </div>
                    </a>
            </div>
            <div class="card admin-box">
                    <a href="{{URL::asset('admin/tasks')}}" style="text-decoration:none;">
                    <div class="card-body text-center text-warning border border-warning shadow-lg rounded">
                        <h4>Incompleted<br> Tasks</h4>
                        <h1>{{$incomplete_tasks}}</h1>
                    </div>
                    </a>
            </div>
            <div class="card admin-box">
                    <a href="{{URL::asset('admin/tasks')}}" style="text-decoration:none;">
                    <div class="card-body text-center text-danger border border-danger shadow-lg rounded">
                        <h4>Unassinged<br> Tasks</h4>
                        <h1>{{$unassigned_tasks}}</h1>
                    </div>
                    </a>
            </div>
          </div>
          <div class="container sales-d-flex shadow-lg rounded" style="padding:10px;">
                <div class="col-md-6" style="border:1px solid #2e488a;">
                        {!! $calendar->calendar() !!}
                        {!! $calendar->script() !!}
                </div>

                <div class="col-md-6" style="border:1px solid #2e488a;">
                     {!! $map['html'] !!}
                </div>
            </div>
     
        </div>
        <div class="modal fade" id="eventModal" tabindex="-1" role="dialog" aria-labelledby="eventModal" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-width">
                    <div class="modal-sales">
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
                                {{-- <thead>
                                    <tr style="color:white;border-top:1px solid;">
                                        <th scope="col">Customer</th>
                                        <th scope="col">Department</th>
                                        <th scope="col">Service</th>                            
                                        <th scope="col">Task</th>
                                        <th scope="col">Device Type</th>
                                        <th scope='col'>Start Time</th>
                                        <th scope='col'>End Time</th>
                                        <th scope='col'>Assigned Sales Rep</th>
                                        <th scope='col'>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="color:white;border-bottom:1px solid;">
                                        <td><strong id="modal_task_customer"></strong></td>
                                        <td><strong id="modal_task_department"></strong></td>
                                        <td><strong id="modal_task_service"></strong></td>
                                        <td><strong id="modal_task_task"></strong></td>
                                        <td><strong id="modal_task_device_type"></strong></td>
                                        <td><strong id="modal_task_start_time"></strong></td>
                                        <td><strong id="modal_task_end_time"></strong></td>
                                        <td><strong id="modal_task_assigned_sales_rep"></strong></td>
                                        <td><strong id="modal_task_status"></strong></td>
                                    </tr>
                                </tbody> --}}
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
    
            $.get("/dashboard/calendar/" + event.id, function(res) {
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
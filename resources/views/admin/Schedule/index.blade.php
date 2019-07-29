@extends('layouts.adminLayout')
@section('content')

        <div class="container-fluid">
                    <div class="container" style="margin-top:20px;">
                            <div class="row">
                                <form action="{{ route('schedule.search') }}" method="get" class="search-form calendar-filtering">
                                    <div class="col-md-3 col-sm-8 d-flex">                    
                                        <input style="padding: 10px 22px;" type="text" placeholder="Search.." name="search">
                                        <button type="submit"><i class="fa fa-search fa-lg" aria-hidden="true"></i></button>                     
                                    </div>
                        
                                    <div class="col-md-2 col-sm-4 ">
                                            <div class="form-group">
                                                <div class="rail-select">
                                                    <div class="select-side"><i style="top: 20px;" class="glyphicon glyphicon-menu-down black"></i></div>                                    
                                                        <select class="form-control" name="customer">   
                                                                <option value="" disabled selected>Customer</option>                                 
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
                                                        <select class="form-control" name="service">   
                                                                <option value="" disabled selected>Service</option>                                 
                                                            @foreach($service as $ser)
                                                                <option value="{{$ser->service}}">{{$ser->service}}</option>
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
                                                             <option value="" disabled selected>Task</option>                           
                                                            @foreach($task as $typ)
                                                                <option value="{{$typ->task}}">{{$typ->task}}</option>
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
                                                             <option value="" disabled selected>Sales Rep</option>                           
                                                            @foreach($name as $rep)
                                                                <option value="{{$rep->name}}">{{$rep->name}}</option>
                                                            @endforeach
                                                        </select>
                                                </div>
                                            </div>
                                    </div>
                                    <div class="col-md-2 col-sm-4">
                                            <div class="form-group">
                                                <div class="rail-select">
                                                    <div class="select-side"></div>                                    
                                                        <input type="date" name="date1" class="form-control"/>
                                                </div>
                                            </div>
                                    </div>
                                </form>
                            </div>
                    <div class="container">&nbsp;</div>
                    <div class="container">
                        <div class="col-md-12">
                            
                            {!! $calendar->calendar() !!}
                            {!! $calendar->script() !!}
                        </div>
                    </div>
                
                </div>
                
                <div class="modal fade" id="eventModal" tabindex="-1" role="dialog" aria-labelledby="eventModal" aria-hidden="true">
                        <div class="modal-dialog modal-lg modal-width" >
                            <div class="modal-sales">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    <h4 class="modal-title" id="myModalLabel">Task</h4>
                                </div>
                                <div class="modal-body">
                                    <div class="row table-responsive">
                                        <table class="table text-white">
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
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="table-btn" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                
@endsection
@section('script')
    <script>
        function calendarEventClickHandler(event) {
    
            $.get("/admin/schedule/" + event.id, function(res) {
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


@endsection
@extends('layouts.adminLayout')

@section('content')

      
    <div class="container-fluid" style="float:none;">
            <div class="card mb-8 modal-width" style="margin:auto;background-color:#2e488a;color:white;">
                <div class="card-header border-success"><h4><b>{{Auth::user()->name}}</b>'s task</h4></div>
                    <div class="card-body text-white">
                            <table class="table" style="color:white!important;">
                                    <tbody>
                                        <tr>
                                          <th style="width:30%;">Task ID</th>
                                            <td>{{$tasks->id}}</td>
                                        </tr>
                                        <tr>
                                          <th style="width:30%;">Task's team manager ID</th>
                                            <td>{{$tasks->team_manager_id}}</td>
                                        </tr>
                                        <tr>
                                          <th style="width:30%;">Customer</th>
                                            <td>{{$tasks->customer}}</td>
                                        </tr>
                                        <tr>
                                          <th style="width:30%;">Department</th>
                                            <td>{{$tasks->department}}</td>
                                        </tr>
                                        <tr>
                                          <th style="width:30%;">Service</th>
                                            <td>{{$tasks->service}}</td>
                                        </tr>
                                        <tr>
                                          <th style="width:30%;">Department</th>
                                            <td>{{$tasks->department}}</td>
                                        </tr>
                                        <tr>
                                          <th style="width:30%;">Task</th>
                                            <td>{{$tasks->task}}</td>
                                        </tr>
                                        <tr>
                                          <th style="width:30%;">Device Type</th>
                                            <td>{{$tasks->device_type}}</td>
                                        </tr>
                                        <tr>
                                          <th style="width:30%;">Start time</th>
                                            <td>{{$tasks->device_type}}</td>
                                        </tr>
                                        <tr>
                                          <th style="width:30%;">End time</th>
                                            <td>{{$tasks->end_time}}</td>
                                        </tr>
                                        <tr>
                                          <th style="width:30%;">Assigned Sales Rep</th>
                                            <td>{{$tasks->assigned_sales_rep}}</td>
                                        </tr>
                                        <tr>
                                          <th style="width:30%;">Status</th>
                                            <td>{{$tasks->status}}</td>
                                        </tr>
                                        <tr>
                                          <th style="width:30%;">Notes</th>
                                            <td>{{$tasks->notes}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                    </div>
                <div class="card-footer bg-transparent"><a style="color:white!important" href="{{URL::asset('admin/tasks')}}">View All Tasks</a></div>
            </div>
    </div>
@endsection
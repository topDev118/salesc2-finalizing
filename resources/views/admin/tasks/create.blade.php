@extends('layouts.adminLayout')

@section('content')

      
    <div class="container-fluid">
        <div class="card uper">
            <div class="card-header">
                    @if ($errors->any())
                        <div class="alert alert-danger">
                            <ul>
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                     @endif
              <form method="post" action="{{route('tasks.store')}}">
                    <div class="form-group d-flex">
                        @csrf
                        <div class="col-md-6 col-sm-3">
                            <label for="name">Customer</label>
                                <select class="form-control" id="admin_task_customer" name="customer" > 
                                <option value="" disabled selected>Select Customer</option>               
                                    @foreach($customer as $cus)
                                        <option>{{$cus}}</option>
                                    @endforeach              
                                </select>
                                
                        </div>   
                        <div class="col-md-6 col-sm-3">
                        <label for="quantity">Department</label>
                            <select class="form-control" id="admin_task_division" name="department" >
                            <option value="" disabled selected>Select Department</option>                
                                @foreach($department as $dep)
                                    <option >{{$dep}}</option>
                                @endforeach              
                            </select>
                        </div>
                    </div>
                    <div class="form-group d-flex">
                        <div class="col-md-6 col-sm-3">
                        <label for="quantity">Service</label>
                            <select class="form-control" id="admin_task_service" name="service" > 
                            <option value="" disabled selected>Select Service</option>              
                                @foreach($service as $ser)
                                    <option >{{$ser}}</option>
                                @endforeach              
                            </select>
                        </div>
                         <div class="col-md-6 col-sm-3">
                        <label for="quantity">Task</label>
                            <select class="form-control" id="admin_task_task" name="task" >
                            <option value="" disabled selected>Select Task</option>                
                                @foreach($tasks as $tas)
                                    <option >{{$tas}}</option>
                                @endforeach              
                            </select>
                        </div>
                    </div>
                    <div class="form-group d-flex">
                        <div class="col-md-6 col-sm-3">
                        <label for="quantity">Device Type</label>
                        <select class="form-control" id="admin_task_device_type" name="device_type" >
                        <option value="" disabled selected>Select Device Type</option>                
                            @foreach($device_type as $dev)
                            <option >{{$dev}}</option>
                            @endforeach              
                        </select>
                        </div>
                        <div class="col-md-6 col-sm-3">
                                <label for="quantity">Assigned Sales Rep</label>
                                <select class="form-control" id="admin_task_assigned_sales_rep" name="assigned_sales_rep" >
                                <option value="" disabled selected>Select Sales Rep</option>
                                    @foreach($assigned_sales_rep as $rep)
                                    <option >{{$rep}}</option>
                                    @endforeach
                                </select>
                            </div>
                    </div>
                    <div class="form-group d-flex">
                    
                        <div class="col-md-6 col-sm-3">
                            <label for="quantity">Start Time</label>
                            <input type="datetime-local" class="form-control" id="admin_task_start_time" name="start_time"  required/>
                        </div>
                    
                        <div class="col-md-6 col-sm-3">
                            <label for="quantity">End Time</label>
                            <input type="datetime-local" value="" class="form-control" id="admin_task_end_time" name="end_time"  required/>
                        </div>
                        
                    </div>
                    <div class="form-group d-flex">
                        <div class="col-md-6 col-sm-3">
                            <label for="quantity">Status</label>
                            <select name="status" id="admin_task_status" name="status" class="form-control">
                                <option value="Unassigned">
                                    <div class="text-black">Unassigned</div>
                                </option>
                                <option value="Inprogress">
                                <div class="inprogress-blinking">Inprogress</div>
                                </option>
                                <option value="Complete">
                                <div class="complete-blinking">Complete</div>
                                </option>
                                <option value="Canceled">
                                <div class="canceled-blinking">Canceled</div>
                                </option>
                                <option value="Incomplete">
                                <div class="incomplete-blinking">Incomplete</div>
                                </option>
                            </select>
                        </div>
                        
                        <div class="col-md-6 col-sm-3">
                            <label for="quantity">Notes</label>
                            <input type="text" class="form-control" name="notes"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-md-6 col-sm-3">
                            <button type="submit" class="btn btn-primary">Add</button>
                        </div>      
                    </div>
                </form>
        </div>
    </div>
@endsection
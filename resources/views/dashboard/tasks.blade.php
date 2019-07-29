@extends('layouts.dashboardLayout')
@section('content')

<div class="clearfix">&nbsp;</div>
<section class="form-sections">
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-sm-12 p-t">
        <div class="row">
          <div class="col-md-3 col-sm-6">
            <div class="task-status text-center" >
              <h4 class="text-black">TOTAL TASK</h4>
              <span class="text-black empty-space" style="text-shadow: 2px 2px 9px #656161;">{{$total_events}}</span>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="task-status text-center">
              <h4>ONGOING TASK</h4>
              <span class="empty-space" style="text-shadow: 2px 2px 9px #4b78e9;">{{$inprogress_events}}</span>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="task-status text-center" >
              <h4 class="text-red">CANCELED TASK</h4>
              <span class="text-red empty-space" style="text-shadow: 2px 2px 9px #f15b5b;">{{$canceled_events}}</span>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="task-status text-center">
              <h4 class="text-green">COMPLETED TASK</h4>
              <span class="text-green empty-space" style="text-shadow: 2px 2px 9px #66ce63;">{{$complete_events}}</span>
            </div>
          </div>
        </div>
        <div class="border-btm"></div>
      </div>
    </div>

    <!-- Search Dropdown Start-->

    <div class="row">

      <div class="col-md-3 col-sm-3" style="float:right;">
        <button type="button" class="btn btn-lg table-btn table-btn-blinking add-task" data-toggle="modal" data-target="#addTaskModal" style="margin-bottom:0px;">ADD TASK</button>
      </div>
    </div>
  </div>
</section>

<section class="empty-space">
  <div class="justify-content-center table_responsive container-sales table-responsive">

    <div class="col-md-auto">
      <table id="datatable" class="table table-striped table-bordered" style="color:black;font-family:'sans-serif'">
        <thead>
          <tr style="color:#2E488A;">
            <th >Customer</th>
            <th >Department</th>
            <th >Service</th>
            <th >Task</th>
            <th >Device Type</th>
            <th >Start Time</th>
            <th >End Time</th>
            <th >Assigned<br> Sales Rep</th>
            <th >Status</th>
            <th >Notes</th>
            <th class="col all">Action</th>
          </tr>
        </thead>
        <tbody>
          @foreach($events as $event)
          <tr>
            <td >{{$event->customer}}</td>
            <td >{{$event->department}}</td>
            <td >{{$event->service}}</td>
            <td >{{$event->task}}</td>
            <td >{{$event->device_type}}</td>
            <td >{{$event->start_time}}</td>
            <td >{{$event->end_time}}</td>
            <td >{{$event->assigned_sales_rep}}</td>
            @if($event->status =='Complete')
            <td style="font-size:16px;" class="col complete-blinking"><b>{{$event->status}}</td>
            @elseif($event->status =='Incomplete')
            <td style="font-size:16px;" class="col incomplete-blinking"><b>{{$event->status}}</td>
            @elseif($event->status =='Canceled')
            <td style="font-size:16px;" class="col canceled-blinking"><b>{{$event->status}}</td>
            @elseif($event->status =='Inprogress')
            <td style="font-size:16px;" class="col inprogress-blinking"><b>{{$event->status}}</td>
            @elseif($event->status =='Unassigned')
            <td style="font-size:16px;" class="col text-black"><b>{{$event->status}}</td>
            @endif
            <td class="col view_notes">{{$event->notes}}</td>

            <td style="display:flex;">
              <i class="fa fa-eye fa-sm" style="color: #5cb85c;cursor: pointer;" onclick="viewModal({{$event->id}})"></i>
              <i class="fa fa-edit fa-xs" style="color: #337ab7;cursor: pointer;" onclick="editModal({{$event->id}})"></i>
              <i class="fa fa-trash fa-xs" style="color:#d9534f;cursor: pointer;" onclick="deleteTaskModal({{$event->id}})"></i>
            </td>
          </tr>
          @endforeach
        </tbody>
      </table>
    </div>

  </div>
</section>
<!--   Edit Modal  -->
<div class="modal fade" tabindex="-1" role="dialog" id="editModal">
  <div class="modal-dialog" role="document" style="width:50%;">
    <div class="modal-sales">
      <div class="modal-header">
        <h5 class="modal-title">Task</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form method="post" id="updateModalForm" action="{{url('update-task')}}" class="needs-validation">
          @csrf
          <div class="row">
            <div class="col-md-4">
              <label>Customer</label>
            </div>
            <div class="col-md-8">
              <select class="form-control" id="modal_task_customer" name="customer" >                
                @foreach($customer as $cus)
                  <option>{{$cus->customer}}</option>
                @endforeach              
              </select>
            </div>
          </div>
          <p></p>
          <div class="row">
            <div class="col-md-4">
              <label>Department</label>
            </div>
            <div class="col-md-8">
                <select class="form-control" id="modal_task_department" name="department" >                
                    @foreach($department as $dep)
                      <option>{{$dep->department}}</option>
                    @endforeach              
                  </select>
            </div>
          </div>
          <p></p>
          <div class="row">
            <div class="col-md-4">
              <label>Service</label>
            </div>
            <div class="col-md-8">
                <select class="form-control" id="modal_task_service" name="service" >                
                    @foreach($service as $ser)
                      <option>{{$ser->service}}</option>
                    @endforeach              
                </select>
            </div>
          </div>
          <p></p>
          <div class="row">
            <div class="col-md-4">
              <label>Task</label>
            </div>
            <div class="col-md-8">
              <select class="form-control" id="modal_task_task" name="task" >                
                  @foreach($task as $tas)
                    <option>{{$tas->task}}</option>
                  @endforeach              
              </select>
            </div>
          </div>
          <p></p>
          <div class="row">
            <div class="col-md-4">
              <label>Device Type</label>
            </div>
            <div class="col-md-8">
              <select class="form-control" id="modal_task_device_type" name="device_type">                
                  @foreach($device_type as $dev)
                    <option>{{$dev->device_type}}</option>
                  @endforeach              
              </select>
            </div>
          </div>
          <p></p>
          <div class="row">
            <div class="col-md-4">
              <label>Start Time</label>
            </div>
            <div class="col-md-8">
              <input type="datetime-local" class="form-control" id="modal_task_start_time" name="start_time" required/>
            </div>
          </div>
          <p></p>
          <div class="row">
            <div class="col-md-4">
              <label>End Time</label>
            </div>
            <div class="col-md-8">
              <input type="datetime-local" class="form-control" id="modal_task_end_time" name="end_time"  required/>
            </div>
          </div>
          <p></p>
          <div class="row">
            <div class="col-md-4">
              <label>Assigned Sales Rep</label>
            </div>
            <div class="col-md-8">
              <select class="form-control" id="modal_task_assigned_sales_rep" name="assigned_sales_rep" >
                <option value="" disabled selected>Select Assigned Sales Rep</option>
                @if(Auth::user()->role_id == 2 )
                <option>{{Auth::user()->name}}</option>  
                @elseif(Auth::user()->role_id == 3)
                <option>{{$manager_name->name}}</option>
                @endif  
                @foreach($name as $rep)
                <option>{{$rep->name}}</option>
                @endforeach
              </select>
            </div>
          </div>
          <p></p>
          <div class="row">
            <div class="col-md-4">
              <label>Status</label>
            </div>
            <div class="col-md-8">
              <select name="status" id="modal_task_status" name="status" class="form-control">
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
          </div>   <p></p>
          <div class="row">
            <div class="col-md-4">
              <label>Notes</label>
            </div>
            <div class="col-md-8">
              <input type="text" value="" class="form-control" id="modal_task_notes" name="notes"  />
            </div>
          </div>
       
       
      </div>
      <div class="modal-footer">
      <input type="hidden" name="id" value='' id="current_edit_id">
        <button type="submit" class="btn btn-primary" data-id="" id="btnUpdate">Save changes</button>
        <button type="button" class="btn table-btn" data-dismiss="modal">Close</button>
      </div>
    </div>
    </form>
  </div>
</div>
</div>
</div>

<!--   View Modal  -->
<div class="modal fade" tabindex="-1" role="dialog" id="viewModal">
  <div class="modal-dialog" role="document">
    <div class="modal-sales modal-width">
      <div class="modal-header">
      <h3 class="modal-title">Task</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="table-responsive">
          <table class="table">
              <tbody>
                <tr style="border-top:1px solid;">
                  <th>Customer</th>
                  <td id="modal_view_customer"></td>
                </tr>
                <tr>
                  <th>Department</th>
                  <td id="modal_view_department"></td>
                </tr>
                <tr>
                  <th>Service</th>
                  <td id="modal_view_service"></td>
                </tr>
                <tr>                  
                  <th>Task</th>
                  <td id="modal_view_task"></td>
                </tr>
                <tr>                                    
                  <th>Device Type</th>
                  <td id="modal_view_device_type"></td>
                </tr>  
                <tr>
                  <th>Start Time</th>
                  <td id="modal_view_start_time"></td>
                </tr>
                <tr>
                  <th>End Time</th>
                  <td id="modal_view_end_time"></td>
                </tr>
                <tr>
                  <th>Assigned Sales Rep</th>
                  <td id="modal_view_assigned_sales_rep"></td>
                </tr>
                <tr>
                  <th>Status</th>
                  <td id="modal_view_status"></td>
                </tr>
                <tr>
                  <th >Notes</th>
                  <td id="modal_view_notes"></td>
                </tr>
        

     
          </table>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn table-btn" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<!-- Task ADD Button Modal-->

<div class="modal fade" id="addTaskModal" role="dialog">
  <div class="modal-dialog">
    <div class="modal-sales">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Add Task</h4>
      </div>
      <div class="modal-body" style="display: inline;">
        <form method="post" id="newModalForm" action="{{ route('task.add') }}" class="needs-validation">
          @csrf
          <div class="form-group">
            <label class="control-label col-md-3">Customer</label>
            <div class="col-md-9">
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
            <label class="control-label col-md-3">department</label>
            <div class="col-md-9">
                <select class="form-control" id="department_add_task" name="department" >   
                  <option value="" disabled selected>Select department</option>                 
                  @foreach($department as $div)
                    <option>{{$div->department}}</option>
                  @endforeach              
                </select>
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">Service</label>
            <div class="col-md-9">
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
            <label class="control-label col-md-3">Task</label>
            <div class="col-md-9">
              <select class="form-control" id="type_add_task" name="task" >
                  <option value="" disabled selected>Select Task</option>                    
                  @foreach($task as $tas)
                    <option>{{$tas->task}}</option>
                  @endforeach              
              </select>
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">Device Type</label>
            <div class="col-md-9">
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
            <label class="control-label col-md-3">Start Time</label>
            <div class="col-md-9">
              <input type="datetime-local" class="form-control" id="start_time_add_task" name="start_time"  required/>
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">End Time</label>
            <div class="col-md-9">
              <input type="datetime-local" class="form-control" id="end_time_add_task" name="end_time"  required/>
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">Assigned Sales Rep</label>
            <div class="col-md-9">
              <select class="form-control" id="assigned_sales_rep_add_task" name="assigned_sales_rep" >
                <option value="" disabled selected>Select Assigned Sales Rep</option>
                @if(Auth::user()->role_id == 2 )
                <option>{{Auth::user()->name}}</option>  
                @elseif(Auth::user()->role_id == 3)
                <option>{{$manager_name->name}}</option>
                @endif  
                @foreach($name as $rep)
                <option>{{$rep->name}}</option>
                @endforeach
              </select>
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">Status</label>
            <div class="col-md-9">
              <select name="status" id="task-status" class="form-control">
                <option value="Unassigned">Unassigned</option>
                <option value="Inprogress">Inprogress</option>
                <option value="Complete">Complete</option>
                <option value="Canceled">Canceled</option>
                <option value="Incomplete">Incomplete</option>                
              </select><p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">Notes</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="notes_add_task" name="notes"  />
              <p></p>
            </div>
          </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn table-btn btn-default" data-dismiss="modal">Close</button>
        <button type="submit" class="btn table-btn" id="btnAddTask">Add Task</button>
        </form>

      </div>
    </div>
  </div>
</div>

<!-- Delete Task Modal -->
<div class="modal fade" id="deleteTaskModal" role="dialog">
  <div class="modal-dialog">
    <div class="modal-sales">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Delete Task</h4>
      </div>
      <div class="modal-body" style="display: inline;">
        <form method="post" id="deleteTask" action="{{url('delete-task')}}" class="needs-validation">
          @csrf
          <div class="form-group text-center">
            <h1>Do you want to remove this task?</h1>
          </div>
          <div class="modal-footer">
            <input type="hidden" name="id" value='' id="current_delete_id">
            <button type="button" class="btn table-btn btn-default" data-dismiss="modal">Close</button>
            <button type="submit" class="btn table-btn" id="btnRemove">Yes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

@endsection

@section('script')
 <script>
$(document).ready(function() {
       
     $('#datatable').DataTable( {
         
     });
});
</script>


<script>
  function viewModal(id) {

    $("#viewModal").modal("show")

    $.get("/dashboard/tasks/" + id, function(res) {
      console.log(id);
      
      $("#modal_view_customer").html(res.customer)
      $("#modal_view_department").html(res.department)
      $("#modal_view_service").html(res.service)
      $("#modal_view_task").html(res.task)
      $("#modal_view_device_type").html(res.device_type)
      $("#modal_view_start_time").html(res.start_time)
      $("#modal_view_end_time").html(res.end_time)
      $("#modal_view_assigned_sales_rep").html(res.assigned_sales_rep)
      $("#modal_view_status").html(res.status)
      $("#modal_view_notes").html(res.notes)

      $("#viewModal").modal("show");
    });
  }

  function editModal(id) {
    console.log(id);
    $("#editModal").modal("show")
    $.get("/dashboard/tasks/" + id, function(res) {
      $("#current_edit_id").val(id)
      $("#modal_task_customer").val(res.customer)
      $("#modal_task_department").val(res.department)
      $("#modal_task_service").val(res.service)
      $("#modal_task_task").val(res.task)
      $("#modal_task_device_type").val(res.device_type)
      $("#modal_task_start_time").val(res.start_time)
      $("#modal_task_end_time").val(res.end_time)
      $("#modal_task_assigned_sales_rep").val(res.assigned_sales_rep)
      $("#modal_task_status").val(res.status)
      $("#modal_task_notes").val(res.notes)
      $("#eventModal").modal("show");
    })
  }
</script>

<script>
  function deleteTaskModal(id) {
    console.log(id);
    $("#current_delete_id").val(id)
    $("#deleteTaskModal").modal("show");

  }
</script>
<script>

</script>
@endsection
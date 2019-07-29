@extends('layouts.adminLayout')


@section('content')
    <div class="container-fluid">
         <div class="clearfix">&nbsp;</div>
         <section class="form-sections">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12 col-sm-12 p-t">
                      <div class="row">
                        <div class="col-md-3 col-sm-6 text-primary">
                          <div class="task-status text-center ">
                            <h4 class="text-black">TOTAL TASK</h4>
                            <span class="text-black empty-space">{{$total_events}}</span>
                          </div>
                        </div>
                        <div class="col-md-3 col-sm-6 text-info">
                          <div class="task-status text-center ">
                            <h4>ONGOING TASK</h4>
                            <span class="empty-space text-info">{{$inprogress_events}}</span>
                          </div>
                        </div>
                        <div class="col-md-3 col-sm-6 text-warning">
                          <div class="task-status text-center ">
                            <h4 class="text-red">CANCELED TASK</h4>
                            <span class="empty-space text-warning">{{$canceled_events}}</span>
                          </div>
                        </div>
                        <div class="col-md-3 col-sm-6 text-success">
                          <div class="task-status text-center ">
                            <h4 class="text-green">COMPLETED TASK</h4>
                            <span class="empty-space text-success">{{$complete_events}}</span>
                          </div>
                        </div>
                      </div>
                      <div class="border-btm"></div>
                    </div>
                  </div>
              
                  <!-- Search Dropdown Start-->
              
                  <div class="row">
              
                    <div class="col-md-12 col-sm-3" style="float:right;">
                      <button type="button" onclick="window.location.href='{{URL::asset('admin/tasks/create')}}'" class="btn btn-lg table-btn add-task" style="margin-bottom:0px;">ADD TASK</button>
                    </div>
                  </div>
                </div>
              </section>
              @if ($errors->any())
              <div class="alert alert-danger">
                  <ul>
                      @foreach ($errors->all() as $error)
                          <li>{{ $error }}</li>
                      @endforeach
                  </ul>
              </div>
              @endif
              @if(session()->has('success'))
                  <div class="alert alert-success">
                      {{ session()->get('success') }}
                  </div>
              @endif
              <section class="empty-space">
                <div class="justify-content-center table-responsive container-sales">
              
                  <div class="col-md-auto">
                    <table id="datatable" class="table table-striped table-bordered" style="color:black;font-family:'sans-serif'">
                      <thead>
                        <tr style="color:#2E488A;">
                          <th>ID</th>
                          <th>Tasks ID</th>
                          <th>Customer</th>
                          <th>Department</th>
                          <th>Service</th>
                          <th>Task</th>
                          <th>Device Type</th>
                          <th>Start Time</th>
                          <th>End Time</th>
                          <th>Assigned Sales Rep</th>
                          <th>Status</th>
                          <th>Notes</th>
                          <th>Action</th>
                        
                        </tr>
                      </thead>
                      <tbody>
                        @foreach($events as $key => $event)
                        <tr>
                          <td>{{$key+1}}</td>
                          <td>{{$event->id}}</td>
                          <td>{{$event->customer}}</td>
                          <td>{{$event->department}}</td>
                          <td>{{$event->service}}</td>
                          <td>{{$event->task}}</td>
                          <td>{{$event->device_type}}</td>
                          <td>{{$event->start_time}}</td>
                          <td>{{$event->end_time}}</td>
                          <td>{{$event->assigned_sales_rep}}</td>
                          @if($event->status =='Complete')
                          <td style="font-size:16px;" class="complete-blinking"><b>{{$event->status}}</td>
                          @elseif($event->status =='Incomplete')
                          <td style="font-size:16px;" class="incomplete-blinking"><b>{{$event->status}}</td>
                          @elseif($event->status =='Canceled')
                          <td style="font-size:16px;" class="canceled-blinking"><b>{{$event->status}}</td>
                          @elseif($event->status =='Inprogress')
                          <td style="font-size:16px;" class="inprogress-blinking"><b>{{$event->status}}</td>
                          @elseif($event->status =='Unassigned')
                          <td style="font-size:16px;" class="text-black"><b>{{$event->status}}</td>
                          @endif
                          <td class="view_notes">{{$event->notes}}</td>
              
                          <td class="d-flex">
                              <a href="{{ route('tasks.show', $event->id)}}"><i class="fa fa-eye fa-xs" style="color: #337ab7;" ></i></a>
                          
                              <a href="{{ route('tasks.edit', $event->id)}}"><i class="fa fa-edit fa-xs" style="color: #337ab7;" ></i></a>
                          
                             
                              <a href="{{ route('tasks.remove', $event->id)}}" onclick="return confirm('Do you want to remove this item?')" style="border: none;background: transparent;"><i class="fa fa-trash fa-xs" style="color:#d9534f;"></i></a>
                             
                          </td>
                        </tr>
                        @endforeach
                      </tbody>
                    </table>
                  </div>
              
                </div>
              </section>

    </div>

@endsection
@section('script')
<script>
  $(document).ready( function(){
    $('#datatable').excelTableFilter();

  });
</script>
<script>
    $(document).ready( function () {
     $('#datatable').DataTable();
    });
 </script>
@endsection
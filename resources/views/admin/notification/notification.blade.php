@extends('layouts.adminLayout')

@section('content')
    <div class="container-fluid">
         <div class="clearfix">&nbsp;</div>
    
                <div class="table-responsive">
       
                  @if(session()->has('success'))
                    <div class="alert alert-success">
                        {{ session()->get('success') }}
                    </div>  
                  @endif
                    <table id="table_id" class="display table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th width="10%">ID</th>
                                <th width="60%">MESSAGE</th>
                                <th width="20%">DATE</th>
                                <th width="10%">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($notifications as $key => $notification)                       
                            <tr>
                              <td>{{$key+1}}</td>
                              <td class=" text-success">{{$notification->message}}</td>
                              <td class=" text-info">{{$notification->updated_at}}</td>
                              <td><a class="btn btn-danger" onclick="return confirm('Do you want to remove this notification?')"  href="{{ route('delete.notification', $notification->id)}}" style="border: none;background: transparent;"><i class="fa fa-trash fa-xs" style="color:#d9534f;cursor: pointer;"></i></a></td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                  </div>

    </div>

@endsection
@section('script')
<script>
 $(document).ready( function () {
    $('#table_id').DataTable();
} );
</script>
@endsection
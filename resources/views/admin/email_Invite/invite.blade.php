@extends('layouts.adminLayout')

@section('content')
      
    <div class="container-fluid">
         <div class="clearfix">&nbsp;</div>
         @if(session()->has('message'))
            <div class="alert alert-success">
               {{ session()->get('message') }}
            </div>
         @endif
         @if(session()->has('error'))
            <div class="alert alert-danger">
               {{ session()->get('error') }}
            </div>
         @endif
         <form action="{{ route('admin.sendemail') }}" method="post">
            {{ csrf_field() }}
            <input type="email" name="email" required/>
            <button type="submit" class="btn btn-success">Invite</button>
         </form>
         <div class="clearfix">&nbsp;</div>

         <div class="col-md-auto table-responsive">
               <table id="datatable" class="table table-striped table-bordered display" style="color:black;font-family:'sans-serif'">
                  <form action="{{url('delete-invite')}}" method="post">
                     @csrf
                   <thead>
                       <tr style="color:#2E488A;">
                           <th>ID</th>
                           <th>Email</th>
                           <th>Accpted Status</th>
                           <th>Accepted at</th>
                           <th>Action</th>
                       </tr>
                   </thead>
                   <tbody>
                       @foreach($invite as $invite)
                       <tr>
                           <td name = "id">{{$invite->id}}</td>
                           <td>{{$invite->email}}</td>
                           <td>{{$invite->accepted == '1' ? 'Accepted' : 'Not yet'}}</td>
                           <td>{{$invite->accepted_at }}</td>
                           <td>
                                 <a class="btn btn-dark" href="{{ route('delete.invite',$invite->id)}}" style="border: none;background: transparent;"><i class="fa fa-trash fa-xs" style="color:#d9534f;cursor: pointer;"></i></a>
                              {{-- <button type="submit" onclick="return confirm('Are you sure to delete this item??')" style="border: none;background: transparent;"><i class="fa fa-trash fa-xs" style="color:#d9534f;cursor: pointer;"></i></button> --}}
                           </td>
                       </tr>
                       @endforeach
                  </tbody>
                  </form>
               </table>
           </div>
            
            {{-- <a href="{{ route('accept', $invite->token) }}">Click here</a> to activate! --}}
      </div>

@endsection
@section('script')
<script>
   $(document).ready( function () {
    $('#datatable').DataTable();
   });
</script>
@endsection
@extends('layouts.adminLayout')

@section('content')

      
        <div class="container-fluid">
                <section class="empty-space">
                        <div class="clearfix">&nbsp;</div>
                        <section class="form-sections">
                          <div class="container">
                            <div class="row">
                                @if(session()->has('success'))
                                  <div class="alert alert-success">
                                      {{ session()->get('success') }}
                                  </div>
                                @endif
                                @if(session()->has('remove'))
                                  <div class="alert alert-success">
                                      {{ session()->get('remove') }}
                                  </div>
                                @endif
                                @if ($errors->any())
                                        {{ implode('', $errors->all('<div>:message</div>')) }}
                                @endif
                        
                              <div class="col-md-10 col-sm-3" style="float:right;">
                              <button type="button" class="btn btn-primary" onclick="window.location.href='{{URL::asset('admin/userrole/create')}}'">ADD USER</button>
                              </div>
                            </div>
                          </div>
                          <div class="clearfix">&nbsp;</div>
                        </section>

                        <div class="container justify-content-center table-responsive">
                      
                          <div class="col-md-auto">
                            <table id="datatable" class="table table-striped table-bordered" style="color:black;font-family:'sans-serif'">
                              <thead>
                                <tr style="color:#2E488A;">
                                  <th>Id</th>
                                  <th>Name</th>
                                  <th>Role</th>
                                  <th>Email</th>
                                  <th>Phone</th>
                                  <th>Edit</th>
                                  <th>Remove</th>
                      
                                </tr>
                              </thead>
                              <tbody>
                                @foreach($users as $key => $member)
                               
                                <tr>
                                  <td>{{$key + 1}}</td>
                                  <td>{{$member->name}}</td>
                                  @if($member->role_id == '1')
                                  <td>Administrator</td>
                                  @elseif($member->role_id == '2')
                                  <td>Team Manager</td>
                                  @endif
                                    @if($member->role_id == '3')
                                     <td>Team Member</td>
                                    @endif
                                  <td >{{$member->email}}</td>
                                  <td >{{$member->phone}}</td>
                                  <td>
                                    <a href="{{ route('userrole.edit', $member->id)}}"><i class="fa fa-edit fa-xs" style="color: #337ab7;cursor: pointer;" ></i></a>
                                  </td>
                                  <td>
                                      <form action="{{ route('userrole.destroy', $member->id)}}" method="post">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" onclick="return confirm('Are you sure to delete this item??')" style="border: none;background: transparent;"><i class="fa fa-trash fa-xs" style="color:#d9534f;cursor: pointer;"></i></button>
                                      </form>
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
    $(function() {
      $('#datatable').DataTable();
    });
</script>
@endsection

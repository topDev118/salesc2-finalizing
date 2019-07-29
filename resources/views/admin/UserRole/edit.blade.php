@extends('layouts.adminLayout')

@section('content')

      
    <div class="container-fluid">
        <div class="card uper">
            <div class="card-header">
                @if(session()->has('message'))
                    <div class="alert alert-success">
                        {{ session()->get('message') }}
                    </div>
                @endif
                @if ($errors->any())
                <div class="alert alert-danger">
                  <ul>
                      @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                      @endforeach
                  </ul>
                </div><br />
              @endif
              <form method="post" action="{{route('userrole.update', $member->id)}}">
                    <div class="form-group">
                        @method('PATCH')
                        @csrf
                        <label for="name">Name</label>
                        <input type="text" class="form-control" name="name" value="{{$member->name}}"/>
                    </div>
                    <div class="form-group">
                        <label for="price">Role</label>
                            <select class="form-control" id="admin_user_role" name="role" required>
                                <option value="" disabled selected>Select Role</option>
                                <option  value="1" {{$member->role_id == '1' ? 'selected':''}}>Administrator</option>
                                <option  value="2" {{$member->role_id == '2' ? 'selected':''}}>Team Manager</option>
                            </select>
                    </div>
                    <div class="form-group">
                        <label for="quantity">Email</label>
                        <input type="email" class="form-control" name="email" value="{{$member->email}}"/>
                    </div>
                    <div class="form-group">
                        <label for="quantity">Phone</label>
                        <input type="text" class="form-control" name="phone" value="{{$member->phone}}"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
                </form>
        </div>
    </div>
@endsection
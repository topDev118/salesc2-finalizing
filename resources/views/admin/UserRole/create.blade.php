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
              <form method="post" action="{{route('userrole.store')}}">
                    <div class="form-group">
                        @csrf
                        <label for="name">Name</label>
                        <input type="text" class="form-control" name="name"/>
                    </div>
                    <div class="form-group">
                        <label for="price">Role</label>
                            <select class="form-control" id="admin_user_role" name="role" required>
                                <option value="" disabled selected>Select Role</option>
                                <option value="1">Administrator</option>
                                <option value="2">Team Manager</option>
                            </select>
                    </div>
                    <div class="form-group">
                        <label for="quantity">Email</label>
                        <input type="email" class="form-control" name="email"/>
                    </div>
                    <div class="form-group">
                        <label for="quantity">Phone</label>
                        <input type="text" class="form-control" name="phone"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Add</button>
                </form>
        </div>
    </div>
@endsection
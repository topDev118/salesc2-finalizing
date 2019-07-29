@extends('layouts.frontLayout')
@section('content')

    <section class="how-sales-to-help" id="section01">
   
    </section>
    <section class="images-section">
        <div class="container">
                @if ($errors->any())
                {{ implode('', $errors->all('<div>:message</div>')) }}
                 @endif
            <div class="row p-t">
            <form method = "POST">
                {{ csrf_field() }}
                <div class="form-group">
                <label for="usr">Name:</label>
                <input type="text" class="form-control" id="usr" name="username" value="{{ $name }}" required>
                </div>
                <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" id="email" name="email" value="{{ $email }}" readOnly>
                </div>
                <div class="form-group">
                <label for="phone">Phone Number:</label>
                <input type="text" class="form-control" id="phone" name="phone" required>
                </div>
                <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd" name="password" required>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>           
        </div>
    </section>
@endsection


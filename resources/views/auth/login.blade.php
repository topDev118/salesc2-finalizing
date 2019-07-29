@extends('layouts.frontLayout')

@section('content')
<section class="home-page" style="height: 100vh;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;">
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-3 row flex-fill"></div>
       
    </div>
</div>

</section>

     
@endsection
@section('script')
    <script type="text/javascript">
        $(window).on('load',function(){
             $('#myLogin').modal('show');
            
        });
    </script>
@endsection
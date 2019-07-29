<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Admin-salesc2</title>

    <!-- Bootstrap core CSS -->
    <link href="{{URL::asset('css/admin/vendor/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{URL::asset('css/fonts/font-awesome-4.7.0/css/font-awesome.min.css')}}" rel="stylesheet">

    <link href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.dataTables.min.css" rel="stylesheet">
    <!-- Custom styles for this template -->
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
    <script src="{{URL::asset('vendor/jquery/jquery-3.2.1.min.js')}}"></script>
    <link href="{{URL::asset('css/admin/simple-sidebar.css')}}" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&amp;subset=latin,cyrillic-ext" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="{{ URL::asset('Excel/src/excel-bootstrap-table-filter-style.css')}}">
    <script src="{{ URL::asset('Excel/dist/excel-bootstrap-table-filter-bundle.js')}}"></script>
</head>

<body>
    
        @include('admin.adminSidebar')
   
        @include('admin.adminHeader')
        
      
            @yield('content')
    
        @include('admin.adminFooter')

   
    
<!-- Bootstrap core JavaScript -->

<script src="{{URL::asset('css/admin/vendor/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/2.2.7/fullcalendar.min.js"></script>
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/2.2.7/fullcalendar.min.css"/>


<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.css">  
<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.js"></script>
@if(isset($map)){!! $map['js'] !!}@endif
<!-- Menu Toggle Script -->
@yield('script')
<script>
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });
 
</script>

</body>

</html>

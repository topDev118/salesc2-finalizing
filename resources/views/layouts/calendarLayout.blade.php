<!doctype html>
<html lang="en">
<head>
   
<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="{{URL::asset('img/favicon.ico')}}" type="image/x-icon">
    <title>Welcome to Sales</title>




    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>    
    <link rel="stylesheet" href="{{ URL::asset('Excel/src/excel-bootstrap-table-filter-style.css')}}">
    <script src="{{ URL::asset('Excel/dist/excel-bootstrap-table-filter-bundle.js')}}"></script>

    <link rel="stylesheet" type="text/css" href="{{URL::asset('css/dashboard/bootstrap.min.css')}}">
    
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/2.2.7/fullcalendar.min.js"></script>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/2.2.7/fullcalendar.min.css"/>



    
    <link rel="icon" type="image/png" href="{{URL::asset('img/icons/favicon.ico')}}"/>
    <link rel="stylesheet" type="text/css" href="{{URL::asset('fonts/font-awesome-4.7.0/css/font-awesome.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('fonts/iconic/css/material-design-iconic-font.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('vendor/animate/animate.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('vendor/css-hamburgers/hamburgers.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('vendor/animsition/css/animsition.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('vendor/select2/select2.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('vendor/daterangepicker/daterangepicker.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('vendor/noui/nouislider.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('css/util.css')}}">
    {{-- <link rel="stylesheet" type="text/css" href="{{URL::asset('css/main.css')}}"> --}}
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.js"></script>

    
    <script src="{{URL::asset('node_modules/datatables/media/js/dataTables.bootstrap.js')}}"></script>
    <link href="{{ URL::asset('node_modules/datatables/media/css/dataTables.bootstrap4.css') }}" rel="stylesheet">


    
    <link rel="stylesheet" type="text/css" href="{{URL::asset('css/dashboard/ie10-viewport-bug-workaround.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('css/dashboard/layout.css')}}">
    @if(isset($map)){!! $map['js'] !!}@endif

</head>

<body>

@include('dashboard.dashboardHeader')
<main class="py-4">
    @yield('content')
</main>
@include('dashboard.dashboardFooter')


<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->

<script src="{{URL::asset('js/bootstrap.min.js')}}"></script>
<script src="{{URL::asset('js/ie10-viewport-bug-workaround.js')}}"></script>
<script type="text/javascript">
    $(document).ready(function () {
        var url = window.location;
        $('ul.nav a[href="'+ url +'"]').parent().addClass('active');
        $('ul.nav a').filter(function() {
            return this.href == url;
        }).parent().addClass('active');
    });
</script>

</body>
</html>

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    
    
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <link rel="shortcut icon" href="{{URL::asset('img/favicon.ico')}}" type="image/x-icon">
    <title>Welcome to Sales</title>




  
    <link rel="icon" type="image/png" href="{{URL::asset('img/icons/favicon.ico')}}"/>
    <link rel="stylesheet" type="text/css" href="{{URL::asset('css/main.css')}}">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.js"></script>



    <script src="{{URL::asset('node_modules/datatables/media/js/dataTables.bootstrap.js')}}"></script>
    <link href="{{ URL::asset('node_modules/datatables/media/css/dataTables.bootstrap4.css') }}" rel="stylesheet">



    <link rel="stylesheet" type="text/css" href="{{URL::asset('fonts/font-awesome-4.7.0/css/font-awesome.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('fonts/iconic/css/material-design-iconic-font.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('vendor/animate/animate.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('vendor/css-hamburgers/hamburgers.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('vendor/animsition/css/animsition.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('vendor/select2/select2.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('vendor/daterangepicker/daterangepicker.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('vendor/noui/nouislider.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('css/util.css')}}">
    <link href="{{asset('bootstrap-toastr/toastr.min.css')}}" rel="stylesheet" type="text/css">
    {{-- <script type="text/javascript" src="{{URL::asset('scripts/jquery-1.11.1.min.js')}}"></script> --}}
    <link rel="stylesheet" type="text/css" href="{{URL::asset('css/dashboard/bootstrap.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('css/dashboard/ie10-viewport-bug-workaround.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('css/dashboard/layout.css')}}">

   

    <link rel="stylesheet" href="{{ URL::asset('Excel/src/excel-bootstrap-table-filter-style.css')}}">
    <script src="{{ URL::asset('Excel/dist/excel-bootstrap-table-filter-bundle.js')}}"></script>
 
   <style>
        @media screen and (max-width: 687px) {
            .table_responive {
            resposive: true;
            }
        } 
    </style>
    
    
</head>
<body>
@include('dashboard.dashboardHeader')
<main class="py-4" style="padding-bottom:200px;">
    @yield('content')
</main>
@include('dashboard.dashboardFooter')

<script src="{{URL::asset('bootstrap-toastr/toastr.min.js')}}" type="text/javascript"></script>
<script src="{{URL::asset('js/bootstrap.min.js')}}"></script>
<script src="{{URL::asset('js/ie10-viewport-bug-workaround.js')}}"></script>

<script type="text/javascript">
    $(document).ready(function () {
        var url = window.location;
        $('ul.nav a[href="'+ url +'"]').parent().addClass('active');
        $('ul.nav a').filter(function() {
            return this.href == url;
        }).parent().addClass('active');
       
        $('#datatable').excelTableFilter();
        // var table =  $('table').excelTableFilter( {
        // sScrollX: "100%",
        // sScrollXInner: "150%",
        // bScrollCollapse: true        
        // });
        // new $.fn.excelTableFilter.FixedColumns(table);
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
    });
</script>

@yield('script')

</body>
</html>

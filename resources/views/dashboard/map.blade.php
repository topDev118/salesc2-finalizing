<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Welcome to Sales</title>
    <link href="{{URL::asset('css/bootstrap.min.css')}}" rel="stylesheet">
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="{{URL::asset('css/ie10-viewport-bug-workaround.css')}}" rel="stylesheet">
    <link href="{{URL::asset('css/layout.css')}}" rel="stylesheet">
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCwS7BFWdL9r4dL7b23yNY7dRDmzzVxU54&callback=initMap">
    </script>
    <link rel="icon" type="image/png" href="{{URL::asset('img/icons/favicon.ico')}}" />
    <link rel="stylesheet" type="text/css" href="{{URL::asset('css/main.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('fonts/font-awesome-4.7.0/css/font-awesome.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('fonts/iconic/css/material-design-iconic-font.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('vendor/animate/animate.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('vendor/css-hamburgers/hamburgers.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('vendor/animsition/css/animsition.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('vendor/select2/select2.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('vendor/daterangepicker/daterangepicker.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('vendor/noui/nouislider.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('css/util.css')}}">

    <script src="{{URL::asset('vendor/jquery/jquery-3.2.1.min.js')}}"></script>
    <link rel="stylesheet" type="text/css" href="{{URL::asset('css/dashboard/bootstrap.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('css/dashboard/ie10-viewport-bug-workaround.css')}}">
    <link rel="stylesheet" type="text/css" href="{{URL::asset('css/dashboard/layout.css')}}">
    {!! $map['js'] !!}
</head>

<body>
    @include('dashboard.dashboardHeader')
    <main class="py-4">
        <div class="clearfix">&nbsp;</div>
        <section class="form-sections" style="margin-top:138px;">
            <div class="container" style="width:100%;padding-left:0px;padding-right:0px;">
                <div class="content">

                    {!! $map['html'] !!}
                </div>
            </div>
</body>
</section>
</main>



<!-- Confirm Modal -->

<div id="markerDetailModal" class="modal fade" role="dialog">
    <div class="modal-dialog" style="width:100%" ;>

        <!-- Modal content-->
        <div class="modal-sales">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Task Details in <b>{{$location}}</b></h4>
            </div>
            <div class="modal-body">
                <p>Some text in the modal.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>

    </div>
</div>


@include('dashboard.dashboardFooter')
<script src="{{URL::asset('js/jquery-3.2.1.min.js')}}"></script>
<script src="{{URL::asset('js/bootstrap.min.js')}}"></script>
<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<script src="{{URL::asset('js/ie10-viewport-bug-workaround.js')}}"></script>
<script type="text/javascript">
    $(document).ready(function() {
        var url = window.location;
        $('ul.nav a[href="' + url + '"]').parent().addClass('active');
        $('ul.nav a').filter(function() {
            return this.href == url;
        }).parent().addClass('active');
    });

    function showTasksofMember(id) {
        $.get('/dashboard/mark/task/' + id, function(result) {
            console.log(result);
            $("#markerDetailModal .modal-body").html(result)
            $("#markerDetailModal").modal('show')
        })
        console.log(id)
    }
    function showTasksofMember_member(id) {
        $.get('/dashboard/mark/task_member/' + id, function(result) {
            console.log(result);
            $("#markerDetailModal .modal-body").html(result)
            $("#markerDetailModal").modal('show')
        })
        console.log(id)
    }

    /* $(function() {
        $('#datatable').DataTable({
            responsive: true
        });
    }); */
</script>

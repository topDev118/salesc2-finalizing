<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
<head>
    
    
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>" />
    <link rel="shortcut icon" href="<?php echo e(URL::asset('img/favicon.ico')); ?>" type="image/x-icon">
    <title>Welcome to Sales</title>




  
    <link rel="icon" type="image/png" href="<?php echo e(URL::asset('img/icons/favicon.ico')); ?>"/>
    <link rel="stylesheet" type="text/css" href="<?php echo e(URL::asset('css/main.css')); ?>">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.js"></script>



    <script src="<?php echo e(URL::asset('node_modules/datatables/media/js/dataTables.bootstrap.js')); ?>"></script>
    <link href="<?php echo e(URL::asset('node_modules/datatables/media/css/dataTables.bootstrap4.css')); ?>" rel="stylesheet">



    <link rel="stylesheet" type="text/css" href="<?php echo e(URL::asset('fonts/font-awesome-4.7.0/css/font-awesome.min.css')); ?>">
    <link rel="stylesheet" type="text/css" href="<?php echo e(URL::asset('fonts/iconic/css/material-design-iconic-font.min.css')); ?>">
    <link rel="stylesheet" type="text/css" href="<?php echo e(URL::asset('vendor/animate/animate.css')); ?>">
    <link rel="stylesheet" type="text/css" href="<?php echo e(URL::asset('vendor/css-hamburgers/hamburgers.min.css')); ?>">
    <link rel="stylesheet" type="text/css" href="<?php echo e(URL::asset('vendor/animsition/css/animsition.min.css')); ?>">
    <link rel="stylesheet" type="text/css" href="<?php echo e(URL::asset('vendor/select2/select2.min.css')); ?>">
    <link rel="stylesheet" type="text/css" href="<?php echo e(URL::asset('vendor/daterangepicker/daterangepicker.css')); ?>">
    <link rel="stylesheet" type="text/css" href="<?php echo e(URL::asset('vendor/noui/nouislider.min.css')); ?>">
    <link rel="stylesheet" type="text/css" href="<?php echo e(URL::asset('css/util.css')); ?>">
    <link href="<?php echo e(asset('bootstrap-toastr/toastr.min.css')); ?>" rel="stylesheet" type="text/css">
    
    <link rel="stylesheet" type="text/css" href="<?php echo e(URL::asset('css/dashboard/bootstrap.min.css')); ?>">
    <link rel="stylesheet" type="text/css" href="<?php echo e(URL::asset('css/dashboard/ie10-viewport-bug-workaround.css')); ?>">
    <link rel="stylesheet" type="text/css" href="<?php echo e(URL::asset('css/dashboard/layout.css')); ?>">

   

    <link rel="stylesheet" href="<?php echo e(URL::asset('Excel/src/excel-bootstrap-table-filter-style.css')); ?>">
    <script src="<?php echo e(URL::asset('Excel/dist/excel-bootstrap-table-filter-bundle.js')); ?>"></script>
 
   <style>
        @media  screen and (max-width: 687px) {
            .table_responive {
            resposive: true;
            }
        } 
    </style>
    
    
</head>
<body>
<?php echo $__env->make('dashboard.dashboardHeader', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<main class="py-4" style="padding-bottom:200px;">
    <?php echo $__env->yieldContent('content'); ?>
</main>
<?php echo $__env->make('dashboard.dashboardFooter', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

<script src="<?php echo e(URL::asset('bootstrap-toastr/toastr.min.js')); ?>" type="text/javascript"></script>
<script src="<?php echo e(URL::asset('js/bootstrap.min.js')); ?>"></script>
<script src="<?php echo e(URL::asset('js/ie10-viewport-bug-workaround.js')); ?>"></script>

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

<?php echo $__env->yieldContent('script'); ?>

</body>
</html>
<?php /**PATH F:\MyWORK\laravel\resources\views/layouts/dashboardLayout.blade.php ENDPATH**/ ?>
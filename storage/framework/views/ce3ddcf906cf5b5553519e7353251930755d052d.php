<?php $__env->startSection('content'); ?>
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

     
<?php $__env->stopSection(); ?>
<?php $__env->startSection('script'); ?>
    <script type="text/javascript">
        $(window).on('load',function(){
             $('#myLogin').modal('show');
            
        });
    </script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.frontLayout', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH F:\MyWORK\laravel\resources\views/auth/login.blade.php ENDPATH**/ ?>
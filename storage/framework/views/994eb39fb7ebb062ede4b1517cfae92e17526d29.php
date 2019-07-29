
    <div class="d-flex" id="wrapper">
    <!-- Sidebar -->
    <div class="bg-dark" id="sidebar-wrapper">
            <div class="sidebar-heading" style="">
                    <img src="<?php echo e(URL::asset('img/footer-logo.png')); ?>" alt="Sales C2">
                </div>
            <div class="list-group list-group-flush">
                <a href="<?php echo e(URL::asset('/admin/dashboard')); ?>" class="<?php echo e(strpos(Route::currentRouteName(), 'dashboard')!==false ? 'active' : ''); ?> admin-link list-group-item list-group-item-action bg-light"><i class="fa fa-dashboard"></i>&nbsp;Dashboard</a>
                <a href="<?php echo e(URL::asset('/admin/userrole/')); ?>" class="<?php echo e(strpos(Route::currentRouteName(), 'userrole')!==false  ? 'active' : ''); ?> admin-link list-group-item list-group-item-action bg-light"><i class="fa fa-users"></i>&nbsp;User Role</a>
                <a href="<?php echo e(URL::asset('/admin/invite')); ?>" class="<?php echo e(strpos(Route::currentRouteName(), 'invite')!==false ? 'active' : ''); ?> admin-link list-group-item list-group-item-action bg-light"><i class="fa fa-child"></i>&nbsp;Invite</a>
                <a href="<?php echo e(URL::asset('/admin/tasks')); ?>" class="<?php echo e(strpos(Route::currentRouteName(), 'task')!==false ? 'active' : ''); ?> admin-link list-group-item list-group-item-action bg-light"><i class="fa fa-tasks"></i>&nbsp;Tasks</a>
                <a href="<?php echo e(URL::asset('/admin/schedule')); ?>" class="<?php echo e(strpos(Route::currentRouteName(), 'schedule')!==false ? 'active' : ''); ?> admin-link list-group-item list-group-item-action bg-light"><i class="fa fa-clock-o"></i>&nbsp;Schedule</a>
                <a href="<?php echo e(URL::asset('/admin/report')); ?>" class="<?php echo e(strpos(Route::currentRouteName(), 'report')!==false ? 'active' : ''); ?> admin-link list-group-item list-group-item-action bg-light"><i class="fa fa-paper-plane"></i>&nbsp;Report</a>
                <a href="<?php echo e(URL::asset('/admin/changepassword')); ?>" class="<?php echo e(strpos(Route::currentRouteName(), 'changepassword')!==false ? 'active' : ''); ?> admin-link list-group-item list-group-item-action bg-light"><i class="fa fa-key" aria-hidden="true"></i></i>&nbsp;Change Password</a>
                <a  onClick="event.preventDefault(); document.getElementById('logout-form').submit();" class="admin-link list-group-item list-group-item-action bg-light"><i class="fa fa-sign-out"></i>&nbsp;Log Out</a>
                <form id="logout-form" action="<?php echo e(route('logout')); ?>" method="POST" style="display: one;">
                        <?php echo e(csrf_field()); ?>

                </form>
            </div>
        </div>
    <!-- /#sidebar-wrapper -->
 <?php /**PATH F:\MyWORK\laravel\resources\views/admin/adminSidebar.blade.php ENDPATH**/ ?>
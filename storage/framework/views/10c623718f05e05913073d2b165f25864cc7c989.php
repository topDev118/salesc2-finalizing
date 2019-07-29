<?php $__env->startSection('content'); ?>


<div class="clearfix">&nbsp;</div>
<section class="form-sections">
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-sm-3" style="float:right;">
                <button type="button" class="btn btn-lg table-btn table-btn-blinking add-task" data-toggle="modal" data-target="#addServiceModal">ADD SERVICE</button>
            </div>
        </div>
    </div>
</section>
<section class="empty-space">

    <div class="container justify-content-center table-responsive">

        <div class="col-md-auto">
            <table id="datatable" class="table table-striped table-bordered display" style="color:black;font-family:'sans-serif'">
                <thead>
                    <tr style="color:#2E488A;">
                        <th >Classification</th>
                        <th >Service</th>
                        <th >Task</th>
                        <th >Device Type</th>
                        <th >Action</th>
                    </tr>
                </thead>
                <tbody>
                    <?php $__currentLoopData = $services; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $services): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <tr>
                        <td ><?php echo e($services->classification); ?></td>
                        <td ><?php echo e($services->service); ?></td>
                        <td ><?php echo e($services->task); ?></td>
                        <td ><?php echo e($services->device_type); ?></td>
                        <td >
                            <i class="fa fa-edit fa-xs" style="color: #337ab7;cursor: pointer;" onclick="editServiceModal(<?php echo e($services->id); ?>)"></i>
                            <i class="fa fa-trash fa-xs" style="color:#d9534f;cursor: pointer;"  onclick="deleteServiceModal(<?php echo e($services->id); ?>)"></i>
                        </td>
                    </tr>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </tbody>
            </table>
        </div>

    </div>
</section>
<!-- Add Service Modal -->

<div class="modal fade" id="addServiceModal" role="dialog">
    <div class="modal-dialog">
        <div class="modal-sales">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Add Service</h4>
            </div>
            <div class="modal-body" style="display: inline;">
                <form method="post" id="add_service" action="<?php echo e(url('add-service')); ?>" class="needs-validation">
                    <?php echo csrf_field(); ?>
                    <div class="form-group">
                        <label class="control-label col-md-3">Classification</label>
                        <div class="col-md-9">
                               
                                    <select id="service_add_classification" name="classification" class="form-control">
                                        <option>
                                            <div class="">Revenue Generating</div>
                                        </option>
                                        <option>
                                            <div class="">Service Burden</div>
                                        </option>
                                    </select><p></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-md-3">Service</label>
                        <div class="col-md-9">
                            <select id="service_add_classification" name="service" class="form-control">
                                <option>
                                    <div class="">Procedure</div>
                                </option>
                                <option>
                                    <div class="">Service</div>
                                </option>
                            </select><p></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-md-3">Task</label>
                        <div class="col-md-9">
                            <input type="text" class="form-control" id="type_add_service" name="task" required />
                            <p></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-md-3">Device Type</label>
                        <div class="col-md-9" id="device_type_add_service" name="device_type">
                            <input type="text" class="form-control" id="device_type_1_add_service" name="device_type"  />
                            <p></p>
                        </div>
                    </div>
            </div>
            <div class="modal-footer">
                    <input type="hidden" name="id" value='' id="current_id">
                <button type="button" class="btn table-btn btn-default" data-dismiss="modal">Close</button>
                <button type="submit" class="btn table-btn" id="btnAddService">Add Service</button>
            </div>
            </form>
        </div>
    </div>
</div>


<!--  Edit Accounts modal  -->

<div class="modal fade" id="editServiceModal" role="dialog">
    <div class="modal-dialog">
        <div class="modal-sales">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Edit Service</h4>
            </div>
            <div class="modal-body" style="display: inline;">
                <form method="post" id="edit_service" action="<?php echo e(url('update-service')); ?>" class="needs-validation">
                    <?php echo csrf_field(); ?>
                    <div class="form-group">
                        <label class="control-label col-md-3">Classification</label>
                        <div class="col-md-9">
                                <select id="classification_edit_service" name="classification" class="form-control">
                                        <option>
                                            <div class="">Revenue Generating</div>
                                        </option>
                                        <option>
                                            <div class="">Service Burden</div>
                                        </option>
                                    </select><p></p>
                            <p></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-md-3">Service</label>
                        <div class="col-md-9">
                                <select  id="service_edit_service" name="service" class="form-control">
                                        <option>
                                            <div class="">Procedure</div>
                                        </option>
                                        <option>
                                            <div class="">Service</div>
                                        </option>
                                    </select><p></p>
                            <p></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-md-3">Task</label>
                        <div class="col-md-9">
                            <input type="text" class="form-control" id="task_edit_service" name="task" required />
                            <p></p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-md-3">Device Type</label>
                        <div class="col-md-9">
                            <input type="text" class="form-control" id="device_type_edit_service" name="device_type" required />
                            <p></p>
                        </div>
                    </div>
            </div>
            <div class="modal-footer">
                <input type="hidden" name="id" value='' id="current_id">
                <button type="button" class="btn table-btn btn-default" data-dismiss="modal">Close</button>
                <button type="submit" class="btn table-btn" id="btnUpdate">Update</button>
            </div>
                </form>

        </div>
    </div>
</div>

<!-- Delete Team Member -->
<div class="modal fade" id="deleteServiceModal" role="dialog" >
  <div class="modal-dialog">
    <div class="modal-sales">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Delete Team Member</h4>
      </div>
      <div class="modal-body" style="display: inline;">
        <form method="post" id="deleteService" action="<?php echo e(url('delete-service')); ?>" class="needs-validation">
          <?php echo csrf_field(); ?>
          <div class="form-group text-center">
            <h1>Do you want to remove this service?</h1>
          </div>
          <div class="modal-footer">
            <input type="hidden" name="id" value='' id="current_delete_id">
            <button type="button" class="btn table-btn btn-default" data-dismiss="modal">Close</button>
            <button type="submit" class="btn table-btn" id="btnUpdate">Yes</button>
          </div>
        </form>       
      </div>
    </div>
  </div>
</div>
<?php $__env->stopSection(); ?>


<?php $__env->startSection('script'); ?>
<script>
$(document).ready( function () {
     $('#datatable').DataTable();
    console.log('hello');
} );
</script>
<script>
    function editServiceModal(id) {

        $.get("/dashboard/services/" + id, function(res) {
            console.log(id);
            
            $("#classification_edit_service").val(res.classification)
            $("#service_edit_service").val(res.service)
            $("#task_edit_service").val(res.task)
            $("#device_type_edit_service").val(res.device_type)
            $("#editServiceModal").modal("show");
        });
    }
</script>
<script>
  function deleteServiceModal(id){
    console.log(id);
    $("#current_delete_id").val(id);
    $("#deleteServiceModal").modal("show");
  }
</script>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.dashboardLayout', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH F:\MyWORK\laravel\resources\views/dashboard/services.blade.php ENDPATH**/ ?>
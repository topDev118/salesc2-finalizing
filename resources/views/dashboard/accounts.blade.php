@extends('layouts.dashboardLayout')

@section('content')


<div class="clearfix">&nbsp;</div>
<section class="form-sections">
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-sm-3" style="float:right;">
                <button type="button" class="btn btn-lg table-btn table-btn-blinking add-task" data-toggle="modal" data-target="#addAccountModal">ADD ACCOUNT</button>
            </div>
        </div>
    </div>
</section>

<section class="empty-space">

    <div class="container justify-content-center table-responsive">

        <div class="col-md-auto">
            <table id="datatable" class="table table-striped table-bordered" style="color:black;font-family:'sans-serif'">
                <thead>
                    <tr style="color:#2E488A;">
                        <th >Customer</th>
                        <th >Department</th>
                        <th >Address</th>
                        <th >City</th>
                        <th >State</th>
                        <th >POC Name</th>
                        <th >Phone</th>
                        <th >Email</th>
                        <th >Action</th>

                    </tr>
                </thead>
                <tbody>
                    @foreach($accounts as $accounts)
                    <tr>
                        <td >{{$accounts->customer}}</td>
                        <td >{{$accounts->department}}</td>
                        <td >{{$accounts->address}}</td>
                        <td >{{$accounts->city}}</td>
                        <td >{{$accounts->state}}</td>
                        <td >{{$accounts->pocname}}</td>
                        <td >{{$accounts->phone}}</td>
                        <td >{{$accounts->email}}</td>
                        <td >
                          <i class="fa fa-edit fa-xs" style="color: #337ab7;cursor: pointer;" onclick="editAccountModal({{$accounts->id}})" class="btn btn-success"></i>
                          <i class="fa fa-trash fa-xs" style="color:#d9534f;cursor: pointer;" onclick="deleteAccountModal({{$accounts->id}})" class="btn btn-danger"></i>                      
                        </td>
                        
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

    </div>
</section>
<!-- Add Account Modal -->

<div class="modal fade" id="addAccountModal" role="dialog">
  <div class="modal-dialog">
    <div class="modal-sales">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Add Account</h4>
      </div>
      <div class="modal-body" style="display: inline;">
        <form method="post" id="add_account" action="{{url('add-account')}}" class="needs-validation">
          @csrf
          <div class="form-group">
            <label class="control-label col-md-3">Customer</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="customer_add_account" name="customer" required />
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">Department</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="department_add_account" name="department"  />
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">Address</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="address_add_account" name="address"  />
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">City</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="city_add_account" name="city" required />
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">State</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="state_add_account" name="state" required />
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">POC Name</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="pocname_add_account" name="pocname"  />
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">Phone</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="phone_add_account" name="phone"  />
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">Email</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="email_add_account" name="email"  />
              <p></p>
            </div>
          </div>
          <input name="add_account_lat" id="add_account_lat" type="hidden" />
          <input name="add_account_lng" id="add_account_lng" type="hidden" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn table-btn btn-default" data-dismiss="modal">Close</button>
        <button type="submit" class="btn table-btn" id="btnAddAccount">Add Account</button>
      </div>
    </div>
    </form>
  </div>
</div>

<!--  Edit Accounts modal  -->

<div class="modal fade" id="editAccountModal" role="dialog">
  <div class="modal-dialog">
    <div class="modal-sales">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Edit Account</h4>
      </div>
      <div class="modal-body" style="display: inline;">
        <form method="post" id="edit_account" action="{{url('update-account')}}" class="needs-validation">
          @csrf
          <div class="form-group">
            <label class="control-label col-md-3">Customer</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="customer_edit_account" name="customer" required />
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">department</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="department_edit_account" name="department"  />
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">Address</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="address_edit_account" name="address"  />
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">City</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="city_edit_account" name="city" required />
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">State</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="state_edit_account" name="state" required />
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">Poc Name</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="pocname_edit_account" name="pocname"  />
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">Phone</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="phone_edit_account" name="phone"  />
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">Email</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="email_edit_account" name="email"  />
              <p></p>
            </div>
          </div>
          <input name="edit_account_lat" id="edit_account_lat" type="hidden" />
          <input name="edit_account_lng" id="edit_account_lng" type="hidden" />
      </div>
      <div class="modal-footer">
        <input type="hidden" name="id" value='' id="current_id">
        <button type="button" class="btn table-btn btn-default" data-dismiss="modal">Close</button>
        <button type="submit" class="btn table-btn" id="btnUpdate">Update</button>
        </form>
      </div>
    </div>
  </div>
</div>

<!-- Delete Account Modal -->
<div class="modal fade" id="deleteAccountModal" role="dialog" >
  <div class="modal-dialog">
    <div class="modal-sales">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Delete Account</h4>
      </div>
      <div class="modal-body" style="display: inline;">
        <form method="post" id="deleteAccount" action="{{url('delete-account')}}" class="needs-validation">
          @csrf
          <div class="form-group text-center">
            <h1>Do you want to remove this account?</h1>
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


@endsection

@section('script')
<script>
  /***************AutoComplete Field********************/
  function initMap() {

    var input = document.getElementById('address_add_account');
    var input_edit = document.getElementById('address_edit_account'); //this field can be auto completed.

    var autocomplete = new google.maps.places.Autocomplete(input);
    var autocomplete_edit = new google.maps.places.Autocomplete(input_edit);

    autocomplete.addListener('place_changed', function() {
      var place = autocomplete.getPlace();
      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }
      $('#add_account_lat').val(place.geometry.location.lat())
      $('#add_account_lng').val(place.geometry.location.lng())
    });
    autocomplete_edit.addListener('place_changed', function() {
      var place = autocomplete.getPlace();
      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }
      $('#edit_account_lat').val(place.geometry.location.lat())
      $('#edit_account_lng').val(place.geometry.location.lng())
    });
  }
</script>
<script>
   
function editAccountModal(id) {

$.get("/dashboard/accounts/" + id, function(res) {
  $("#current_id").val(id)
  $("#customer_edit_account").val(res.customer)
  $("#department_edit_account").val(res.department)
  $("#address_edit_account").val(res.address)
  $("#city_edit_account").val(res.city)
  $("#state_edit_account").val(res.state)
  $("#pocname_edit_account").val(res.pocname)
  $("#phone_edit_account").val(res.phone)
  $("#email_edit_account").val(res.email)
  $("#editAccountModal").modal("show");
});
}
</script>
<script>
function deleteAccountModal(id){
  console.log(id);
  $("#current_delete_id").val(id)
  $("#deleteAccountModal").modal("show");

}
</script>

<script>
$(document).ready( function () {
   $('#datatable').DataTable(); 
    console.log('hello');
} );
</script>

@endsection
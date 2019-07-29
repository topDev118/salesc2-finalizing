@extends('layouts.dashboardLayout')
@section('content')
<style>
  .pac-container {
    z-index: 1051 !important;
  }
</style>
<div class="clearfix">&nbsp;</div>
<section class="form-sections">
  <div class="container">
    <div class="row">

      <div class="col-md-3 col-sm-3" style="float:right;">
        <button type="button" class="btn btn-lg table-btn table-btn-blinking add-task" data-toggle="modal" data-target="#addTeamMemberModal">ADD AND INVITE TEAM MEMBER</button>
      </div>
    </div>
  </div>
</section>
<!-- <div class="container"> -->
<section class="empty-space">

  <div class="container justify-content-center table-responsive">

    <div class="col-md-auto">
      <table id="datatable" class="table table-striped table-bordered" style="color:black;font-family:'sans-serif'">
        <thead>
          <tr style="color:#2E488A;">
            <th >Name</th>
            <th >Role</th>
            <th >Email</th>
            <th >Phone</th>
            <th >Territory</th>
            <th >Region</th>
            <th >Area</th>
            <th >Address</th>
            <th >Action</th>

          </tr>
        </thead>
        <tbody>
          @foreach($team_members as $member)
          <tr>
            <td >{{$member->name}}</td>
            <td >{{$member->role}}</td>
            <td >{{$member->email}}</td>
            <td >{{$member->phone}}</td>
            <td >{{$member->territory}}</td>
            <td >{{$member->region}}</td>
            <td >{{$member->area}}</td>
            <td >{{$member->address}}</td>
            <td >
            <i class="fa fa-edit fa-xs" style="color: #337ab7;cursor: pointer;" onclick="editTeamMemberModal({{$member->id}})" class="btn btn-success"></i>
            <i class="fa fa-trash fa-xs" style="color:#d9534f;cursor: pointer;"  onclick="deleteTeamMemberModal({{$member->id}})" class="btn btn-danger"></i>
          </tr>
          @endforeach
        </tbody>
      </table>
    </div>

  </div>
</section>
<!-- Add Team Member Modal -->

<div class="modal fade" id="addTeamMemberModal" role="dialog">
  <div class="modal-dialog">
    <div class="modal-sales">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Add And Send Invite Team Member</h4>
      </div>
      <div class="modal-body" style="display: inline;">
        <form method="post" id="addTeamMember" action="{{url('add-teammember')}}" class="needs-validation">
          @csrf
          <div class="form-group">
            <label class="control-label col-md-3">Name</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="name_add_team" name="name" required />
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">Role</label>
            <div class="col-md-9">
              <!-- <input type="text" class="form-control" id="role_add_team" name="role" required> -->
              <select name="role" id="role_add_team" class="form-control">
                <option value="Sales Rep">Sales Rep</option>
                <option value="Clinical Rep">Clinical Rep</option>
                <option value="Region Manager">Region Manager</option>
              </select>
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">Email</label>
            <div class="col-md-9">
              <input type="email" class="form-control" id="email_add_team" name="email"  />
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">Phone</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="phone_add_team" name="phone"  />
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">Territory</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="territory_add_team" name="territory"  />
              <p></p>
            </div>
          </div>

          <div class="form-group">
            <label class="control-label col-md-3">Region</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="region_add_team" name="region"  />
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">Area</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="area_add_team" name="area"  />
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">Address</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="address_add_team" name="address" placeholder=""  />
              <p></p>
            </div>
          </div>
          <input name="add_member_lat" id="add_member_lat" type="hidden" />
          <input name="add_member_lng" id="add_member_lng" type="hidden" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn table-btn btn-default" data-dismiss="modal">Close</button>
        <button type="submit" class="btn table-btn" id="btnAddMember">Add Team Member</button>
        </form>
      </div>
    </div>
  </div>
</div>

<!-- Edit Modal -->
<div class="modal fade" id="editTeamMemberModal" role="dialog">
  <div class="modal-dialog">
    <div class="modal-sales">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Edit Team Member</h4>
      </div>
      <div class="modal-body" style="display: inline;">
        <form method="post" id="editTeamMember" action="{{url('update-teammember')}}" class="needs-validation">
          @csrf
          <div class="form-group">
            <label class="control-label col-md-3">Name</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="name_edit_team" name="name" required />
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">Role</label>
            <div class="col-md-9">
              <!-- <input type="text" class="form-control" id="role_edit_team" name="role" required /> -->
              <select name="role" id="role_edit_team" class="form-control">
                <option value="Sales Rep">Sales Rep</option>
                <option value="Clinical Rep">Clinical Rep</option>
                <option value="Region Manager">Region Manager</option>
              </select>
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">Email</label>
            <div class="col-md-9">
              <input type="email" class="form-control" id="email_edit_team" name="email" required />
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">Phone</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="phone_edit_team" name="phone" required />
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">Territory</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="territory_edit_team" name="territory" required />
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">Region</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="region_edit_team" name="region" required />
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">Area</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="area_edit_team" name="area" required />
              <p></p>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-md-3">Address</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="address_edit_team" name="address" placeholder="" required />
              <p></p>
            </div>
          </div>
          <input name="edit_member_lat" id="edit_member_lat" type="hidden" />
          <input name="edit_member_lng" id="edit_member_lng" type="hidden" />
          <!-- <div class="form-group">
            <label class="control-label col-md-3">Area</label>
            <div class="col-md-9">
              <input type="text" class="form-control" id="area_edit_team" name="area" required />
              <p></p>
            </div>
          </div> -->
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

<!-- Delete Team Member -->
<div class="modal fade" id="deleteTeamMemberModal" role="dialog" >
  <div class="modal-dialog">
    <div class="modal-sales">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Delete Team Member</h4>
      </div>
      <div class="modal-body" style="display: inline;">
        <form method="post" id="deleteTeamMember" action="{{url('delete-team')}}" class="needs-validation">
          @csrf
          <div class="form-group text-center">
            <h1>Do you want to remove this task?</h1>
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

    var input = document.getElementById('address_add_team');
    var input_edit = document.getElementById('address_edit_team'); //this field can be auto completed.

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
      $('#add_member_lat').val(place.geometry.location.lat())
      $('#add_member_lng').val(place.geometry.location.lng())
    });
    autocomplete_edit.addListener('place_changed', function() {
      var place = autocomplete.getPlace();
      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }
      $('#edit_member_lat').val(place.geometry.location.lat())
      $('#edit_member_lng').val(place.geometry.location.lng())
    });
  }
</script>
<script>
  $(function() {
     $('#datatable').DataTable({
    
    }); 
   /*  $('table').excelTableFilter(); */
  });

  function editTeamMemberModal(id) {

    $.get("/dashboard/team/" + id, function(res) {

      $("#current_id").val(id)
      $("#name_edit_team").val(res.name)
      $("#role_edit_team").val(res.role)
      $("#email_edit_team").val(res.email)
      $('#phone_edit_team').val(res.phone)
      $("#territory_edit_team").val(res.territory)
      $("#region_edit_team").val(res.region)
      $("#area_edit_team").val(res.area)
      $("#address_edit_team").val(res.address)
      $("#editTeamMemberModal").modal("show");
    });
  }
</script>
<script>
  function deleteTeamMemberModal(id){
    console.log(id);
    $("#current_delete_id").val(id);
    $("#deleteTeamMemberModal").modal("show");
  }
</script>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCwS7BFWdL9r4dL7b23yNY7dRDmzzVxU54&libraries=places&callback=initMap" async defer></script>
@endsection
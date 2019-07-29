@extends('layouts.adminLayout')
@section('content')

    <section class="form-sections">
            <div class="container-fluid">
                    <div class="clearfix">&nbsp;</div>
                        
                        <div class="container">
                            <form name="importform" action="{{url('export')}}">
                                @csrf  
                                <div class="row">
                                        <div class="col-md-6  col-12">
                                                
                                                <input type="date" class="form-control" name="start_date"><p>
                                                                <h4>Select Start Date</h4>
                                        </div>
                                        <div class="col-md-6 col-12">
                                                
                                                <input type="date" class="form-control" name="end_date"><p>
                                                                <h4>Select End Date</h4>
                                        </div>
                                </div>
                        </div>
                        <div class="container">
                                <div class="row" style="display:flex;justify-content:center;margin-top:70px;">
                                    <div class="col-md-8  col-12">
                                        <h3 style="display: flex;justify-content: center;">Click here to download the report as an excel file</h3>
                                    </div>
                                </div><p></p>
                                <div class="row" style="display:flex;justify-content:center;margin-top;">
                                    <div class="col-md-8  col-12">
                                        <input type="submit" class=" btn table-btn " name="operations_report" style="width:100%; height:50px;font-size:23px;" value="Operations Report" />
                                    </div>
                                </div>
                        </form>
                        </div>
                </div>
    </section>
@endsection
<?php
    
namespace App\Http\Controllers;
   
use Illuminate\Http\Request;
use App\Exports\ExportUsers;
use App\Imports\ImportUsers;
use Maatwebsite\Excel\Facades\Excel;
class ExcelController extends Controller
{
    //

     /**
    * @return \Illuminate\Support\Collection
    */
    public function importExport()
    {
       return view('import');
    }
    
    /**
    * @return \Illuminate\Support\Collection
    */
    public function export(Request $request) 
    {
        $option = '';
        if(isset($request->time_activity_report)){
            //return "Time Activity Report";/
            $option = 'time_activity_report';
            return Excel::download(new ExportUsers($request->start_date,$request->end_date, $option), 'time_activity_report.xlsx');
        }
        
        if(isset($request->operations_report)){
            //return "Time Activity Report";
            $option = 'operations_report';
            return Excel::download(new ExportUsers($request->start_date,$request->end_date, $option), 'operations_report.xlsx');
        }

        if(isset($request->product_summary_report)){
            //return "Product Summary Report";
            $option = 'product_summary_report';
            return Excel::download(new ExportUsers($request->start_date,$request->end_date, $option), 'product_summary_report.xlsx');
        }

        if(isset($request->task_completion_report)){
            //return "Task Completion Report";
            $option = 'task_completion_report';
            return Excel::download(new ExportUsers($request->start_date,$request->end_date, $option), 'task_completion_report.xlsx');
        }

        if(isset($request->account_summary_report)){
            //return "Account Summary Report";
            $option = 'account_summary_report';
            return Excel::download(new ExportUsers($request->start_date,$request->end_date, $option), 'account_summary_report.xlsx');
        }


      
       
    }
    
    /**
    * @return \Illuminate\Support\Collection
    */
    public function import() 
    {
        Excel::import(new ImportUsers, request()->file('file'));
            
        return back();
    }
}

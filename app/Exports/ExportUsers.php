<?php
   
namespace App\Exports;
   
use App\User;
use App\Service;
use App\Tasks;
use DB;
use Auth;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
   
class ExportUsers implements FromCollection , WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public $start_date;
    public $end_date;
    public $option;
    public function __construct($start_date,$end_date, $option){
        // dd($start_date);
        $this->start_date = $start_date;
        $this->end_date = $end_date;
        $this->option = $option;
    }
    public function collection()
    {
        $start_date = $this->start_date;
        $end_date = $this->end_date;
        //dd($start_date,$end_date);
        $surat = DB::table('tasks');

        //$data = Tasks::whereNotNull('id');
        $user_name = Auth::user()->name;
        $admin = DB::table('team_manager')->where('name',$user_name)->first();
       // dd($admin);


        // $surat = DB::table('team_manager');
        $query = $surat->leftJoin('team_manager','tasks.assigned_sales_rep', '=', 'team_manager.name')
            ->leftJoin('team_members', 'team_manager.role_id', '=', 'team_members.team_manager_id')
            ->leftJoin('accounts', 'team_manager.role_id', '=', 'accounts.team_manager_id')
            ->leftJoin('services', 'team_manager.role_id', '=', 'services.team_manager_id')
            ->select('tasks.id','tasks.start_time','tasks.end_time','tasks.assigned_sales_rep',
                    'team_members.territory','team_members.region','team_members.area',
                    'services.classification','tasks.task','tasks.task','tasks.task',
                    'tasks.customer','accounts.city','accounts.state','tasks.department','tasks.service','tasks.device_type','tasks.status','tasks.notes');
        if($admin->role_id == 2){
           $query = $query->where('tasks.assigned_sales_rep',$user_name);
        } else if($admin->role_id == 3){
            $team_manager = DB::table('team_manager')->where('id',$admin->role_id)->first();
            $query = $query->where('tasks.assigned_sales_rep',$team_manager->name);
         }
        //dd($query->get());exit;
        if($start_date){
            $query = $query->where('tasks.start_time', '>=',  $start_date);
        }
        if($end_date){
            $query = $query->where('tasks.end_time', '<=',  $end_date);
        }
        $tasks = $query->get();
        $i = 1;
        foreach($tasks as $key=> $task){
            $tasks[$key]->id = $i++;
        }
        return $tasks;
       
    }
    public function headings(): array
    {
            return [
                'Id',
                'start_time',
                'end_time',
                'assigned_sales_rep',
                'territory',
                'region',
                'area',
                'classification',
                'task',
                'customer',
                'city',
                'state',
                'department',
                'service',
                'device_type',
                'status',
                'notes'
            ];
    }
}
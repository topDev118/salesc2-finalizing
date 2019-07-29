<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Adminnotification extends Model
{
    //
    protected $fillable = [
        "id", "message","email"
    ];
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Invite extends Model
{
    //
    protected $fillable = [
        "id", "email", "token", "accepted", "accepted_at"
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SheetMusic extends Model
{
    use HasFactory;
    protected $table = 'sheet_music';
    protected $primaryKey = 'sheet_music_id';
    protected $fillable = [ 'title', 'sheet_music', 'author','locked'];
}

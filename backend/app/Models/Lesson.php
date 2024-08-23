<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Lesson extends Model
{
    use HasFactory;
    protected $table = 'lessons';
    protected $primaryKey = 'lesson_id';
    protected $fillable = [ 'instrument_fk', 'title', 'description', 'video', 'theory','locked'];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Instrument extends Model
{
    use HasFactory;

    protected $table = 'instruments';
    protected $primaryKey = 'instrument_id';
    protected $fillable = ['name', 'image', 'image_description'];

    public function lesson(): HasMany
    {
        return $this->hasMany(Lesson::class, 'instrument_fk');
    }
}

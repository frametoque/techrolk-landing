<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $table = 'services';

    protected $fillable = [
        'name',
        'description',
        'image',
        'tagline',
        'features',
        'deliverables',
        'color',
        'bg',
        'icon',
    ];

    protected $casts = [
        'features' => 'array',
        'deliverables' => 'array',
    ];

    public function portfolios()
    {
        return $this->hasMany(Portfolio::class, 'service_id');
    }
}

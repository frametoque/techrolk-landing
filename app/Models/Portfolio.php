<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug',
        'title',
        'category',
        'mainImage',
        'Short_description',
        'Sdescription',
        'description',
        'youtube_video_url',
        'image1',
        'image2',
        'image3',
        'image4',
        'collage_images',
        'tags',
        'challenge',
        'solution',
        'outcome',
        'service_id',
    ];

    protected $casts = [
        'collage_images' => 'array',
        'tags' => 'array',
    ];

    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id');
    }
}

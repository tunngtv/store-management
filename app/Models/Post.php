<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @mixin IdeHelperPost
 */
class Post extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable
     *
     * @var array
     */
    protected $fillable = [
        'author_id',
        'category_id',
        'title',
        'content',
        'posted_at',
        'slug',
        'thumbnail_id',
    ];

    /**
     * The attributes that should be mutated to dates
     *
     * @var array
     */
    protected $casts = [
         'posted_at' => 'datetime'
    ];

    /**
     * Get the user that owns the post
     */
    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'author_id', 'id',);
    }

    public function categories(): BelongsTo
    {
        return $this->belongsTo(User::class, 'category_id', 'id',);
    }
}

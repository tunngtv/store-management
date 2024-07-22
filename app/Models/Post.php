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
        'title',
        'content',
        'posted_at',
        'slug',
        'thumbnail_id'
    ];

    /**
     * The attributes that should be mutated to dates
     *
     * @var array
     */
    protected $casts = [
         'posted_at' => 'datetime'
    ];

    public static function create(mixed $validated)
    {
        //
    }

    /**
     * Get the user that owns the post
     */
    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'author_id', 'id',);
    }
}

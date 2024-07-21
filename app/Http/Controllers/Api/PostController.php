<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\BaseController;
use App\Http\Requests\StorePostRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PostController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Post::query();

        // Filter by search query if provided
        if ($request->has('search')) {
            $search = $request->query('search');
            $query->where(function ($Query) use ($search) {
                $Query->where('title', 'LIKE', "%{$search}%")
                    ->orWhere('content', 'LIKE', "%{$search}%");
            });
        }

        // Sort by the given column if provided
        if ($request->has('sort')) {
            $sort = $request->query('sort');
            $order = $request->query('order', 'asc');
            $query->orderBy($sort, $order);
        }

        // $sql = $query->toSql();
        // Log::info("SQL Query: $sql");

        $posts = $query->get();

        return $this->sendSuccessResponse(PostResource::collection($posts), 'Posts retrieved successfully.');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request): JsonResponse
    {
        try {
            // Create the post using validated data
            $post = Post::create($request->validated());
            return $this->sendSuccessResponse(new PostResource($post), 'Post created successfully.', 201);
        } catch (\Throwable $e) {
            Log::error($e);
            return $this->sendErrorResponse('An error occurred while creating the post.');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id): JsonResponse
    {
        $post = Post::findOrFail($id);

        if ($post) {
            return $this->sendSuccessResponse(new PostResource($post), 'Post retrieved successfully.');
        } else {
            return $this->sendErrorResponse('Post not found.', 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}

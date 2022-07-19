<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentRequest;
use App\Models\Comment;
use App\Models\Hotel;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(CommentRequest $request, Hotel $hotel)
    {
        $data = $request->except('_token');

        $data['user_id'] = auth()->user()->id;

        $data['hotel_id'] = $request->hotel_id;

        Comment::create($data);

        return response()->json();
    }
    public function show($id) {
        $comments = Comment::where('hotel_id', $id)->with('user')->get();

        return response()->json($comments);
    }
    public function update(CommentRequest $request, $id)
    {
        $data = $request->except('_token', '_method');

        $comment = Comment::find($id);

        $comment->update($data);

        return response()->json();
    }
    public function destroy($id, Hotel $hotel)
    {
        $comment = Comment::find($id);

        $comment->delete();

        return response()->json();
    }
}

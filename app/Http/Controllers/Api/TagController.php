<?php

namespace App\Http\Controllers\Api;

use App\Models\Tag;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\TagResource;

class TagController extends Controller
{
    public function index()
    {
        if (request("filter")=="newest") {
            $tags=Tag::search(request("search"))->orderBy("id", "desc")->paginate(40);
        } elseif (request("filter")=="oldest") {
            $tags=Tag::search(request("search"))->orderBy("id", "asc")->paginate(40);
        } elseif (request("filter")=="name") {
            $tags=Tag::search(request("search"))->orderBy("name", "asc")->paginate(40);
        }

        return TagResource::collection($tags);
    }

    public function store(Request $request)
    {
        //
    }

    public function show(Tag $tag)
    {
        //
    }

    public function update(Request $request, Tag $tag)
    {
        //
    }

    public function destroy(Tag $tag)
    {
        //
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        if (request("filter")=="newusers") {
            $users=User::search(request("search"))->orderBy("id", "desc")->paginate(40);
        } elseif (request("filter")=="oldusers") {
            $users=User::search(request("search"))->orderBy("id", "asc")->paginate(40);
        }

        return UserResource::collection($users);
    }

    public function show(User $user)
    {
        return new UserResource($user);
    }
}

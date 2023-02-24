<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserLoginRequest;
use App\Http\Requests\UserRegisterRequest;
use App\Models\User;
use App\Traits\HttpResponses;

class UserAuthController extends Controller
{
    use HttpResponses;

    public function register(UserRegisterRequest $request)
    {
        $user=User::create($request->validated());

        return $this->success(
            [
            "user"=>$user,
            "token"=>$user->createToken("Api Token for $user->name")->plainTextToken
        ],
            "Account is created successfully"
        );
    }

    public function login(UserLoginRequest $request)
    {
        $request->validated($request->all());

        if (!auth()->attempt($request->only(["email","password"]))) {
            return $this->error([""], "Creditionals do not match!", "401");
        }

        $user=User::where("email", $request->email)->first();

        return $this->success([
            "user"=>$user,
            "token"=>$user->createToken("Api Token for $user->name")->plainTextToken
        ], "Login Successfully");
    }

    public function logout()
    {
        auth()->user()->currentAccessToken()->delete();

        return $this->success([
            "message"=>"You have successfully been logged out and your token has been deleted"
        ]);
    }
}

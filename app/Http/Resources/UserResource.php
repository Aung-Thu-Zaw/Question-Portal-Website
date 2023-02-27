<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id"=>$this->id,
            "name"=>$this->name,
            // "email"=>$this->email,
            // "avatar"=>$this->profile->avatar,
            // "title"=>$this->profile->title,
            // "about"=>$this->profile->about,
            // "website_link"=>$this->profile->website_link,
            // "twitter_link"=>$this->profile->twitter_link,
            // "github_link"=>$this->profile->github_link,
            // "location"=>$this->profile->location,
            // "created_data"=>$this->created_at->toDateString()
        ];
    }
}

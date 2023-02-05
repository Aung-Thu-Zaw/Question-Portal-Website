<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class QuestionResource extends JsonResource
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
             "question"=>$this->question,
             "detail"=>$this->detail,
             "view"=>$this->view,
             "created_date"=>$this->created_at->toDateString(),
             "created_time"=>$this->created_at->diffForHumans(),
             "updated_date"=>$this->updated_at->toDateString(),
         ];
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AnswerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return[
          "id"=>$this->id,
          "question_id"=>$this->question_id,
          "answer"=>$this->answer,
          "created_time"=>$this->created_at->format("H:i A"),
          "created_date"=>$this->created_at->format("M j, Y"),
          "user"=>$this->user->name,
        ];
    }
}

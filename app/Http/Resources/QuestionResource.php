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
             "slug"=>strtolower(str_replace(" ", "-", $this->question)),
             "problem_detail"=>$this->problem_detail,
             "expect_answer"=>$this->expect_answer,
             "view"=>$this->view,
             "tags"=>TagResource::collection($this->tags),
             "created_date"=>$this->created_at->toDateString(),
             "created_time"=>$this->created_at->diffForHumans(),
             "updated_date"=>$this->updated_at->toDateString(),

         ];
    }
}

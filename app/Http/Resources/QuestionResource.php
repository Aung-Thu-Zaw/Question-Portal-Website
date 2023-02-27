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
             "like"=>$this->like,
             "created_date"=>$this->created_at->toDateString(),
             "created_time"=>$this->created_at->diffForHumans(),
             "updated_date"=>$this->updated_at->toDateString(),
             "updated_time"=>$this->updated_at->diffForHumans(),
             "user"=>$this->user->name,
             "total_answer"=>$this->answers->count(),
             "answers"=>AnswerResource::collection($this->answers),
             "tags"=>TagResource::collection($this->tags),
         ];
    }
}

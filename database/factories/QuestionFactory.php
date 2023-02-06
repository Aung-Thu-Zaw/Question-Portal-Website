<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class QuestionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "question"=>$this->faker->sentence(),
            "slug"=>$this->faker->slug(),
            "detail"=>$this->faker->text(),
            "view"=>"3"
        ];
    }
}

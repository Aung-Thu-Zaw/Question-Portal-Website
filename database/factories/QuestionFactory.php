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
            "problem_detail"=>$this->faker->paragraph(5),
            "expect_answer"=>$this->faker->paragraph(5),
            "view"=>$this->faker->randomNumber(),
            "created_at"=>$this->faker->dateTimeBetween("-2 months", now())
        ];
    }
}

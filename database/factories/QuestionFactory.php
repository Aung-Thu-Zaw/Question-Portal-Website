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
            "user_id"=>fake()->numberBetween(1, 5),
            "question"=>fake()->sentence(),
            "problem_detail"=>"Say I have a Vue instance like so:

            new Vue({
                el: '#app',

                data: {
                    word: 'foo',
                },

                filters: {
                   capitalize: function(text) {
                       return text.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
                   }
                },

                methods: {
                    sendData: function() {
                        var payload = this.filters.capitalize(this.word); // how?
                    }
                }
            }",
            "expect_answer"=>"
            <span>The word is {{ word | capitalize }}</span>
           ",
            "view"=>fake()->randomNumber(),
            "like"=>fake()->randomNumber(),
            "created_at"=>fake()->dateTimeBetween("-2 months", now())
        ];
    }
}

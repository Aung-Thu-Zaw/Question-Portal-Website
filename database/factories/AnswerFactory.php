<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Answer>
 */
class AnswerFactory extends Factory
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
            "question_id"=>fake()->numberBetween(1, 10),
            "answer"=>"
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
            }
            "

        ];
    }
}

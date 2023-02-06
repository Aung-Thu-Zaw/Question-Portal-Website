<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Tag::factory(100)->create();
        Tag::factory(100)->create([
            "description"=>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias repellendus itaque inventore voluptates eligendi numquam consequuntur veritatis iste quos deleniti?
            "
        ]);
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('countries')->insert([
            ['name' => 'Украина', 'image' => 'images/Украина.jpg'],
            ['name' => 'Италия', 'image' => 'images/Италия.jpg'],
            ['name' => 'Турция', 'image' => 'images/Турция.jpg'],
            ['name' => 'Нидерланды', 'image' => 'images/Нидерланды.jpg'],
        ]);
    }
}

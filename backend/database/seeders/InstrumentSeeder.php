<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class InstrumentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('instruments')->insert([
            [
                'name' => 'Guitarra',
                'image' => 'sistroFiles/imageInstrument/MQ2ESWv69veS8umU95gIR56Pbp7w2DGmbHKpOX0H.jpg',
                'image_description' => 'imagen de una guitarra',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Piano',
                'image' => 'sistroFiles/imageInstrument/fomnVaJfUJlgArnr55Ktc9jI1cs4ecaEC6onuzSL.jpg',
                'image_description' => 'imagen de un piano',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Violín',
                'image' => 'sistroFiles/imageInstrument/1xBVJSUk8Guoh70YgM7jkNDhFla3AOLZFB669tYY.jpg',
                'image_description' => 'imagen de un violín',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Batería',
                'image' => 'sistroFiles/imageInstrument/NZf4Fjgiv7DIzu6Aq5Ru3usKDyi5nZvYx7nyjDUe.jpg',               
                'image_description' => 'imagen de la batería',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}

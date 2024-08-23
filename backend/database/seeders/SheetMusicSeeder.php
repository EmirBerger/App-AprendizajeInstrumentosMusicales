<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SheetMusicSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('sheet_music')->insert([
            [
                'title' => 'River Flows in You',
                'author' => 'Yiruma',
                'sheet_music' => 'sistroFiles/sheetMusic/phPXpOL1qDnooVfUSC3yeYAGZXIcn9vjpyjNH5QZ.pdf',
                'locked' => false
            ],
            [
                'title' => 'Prelude in C Major',
                'author' => 'Johann Sebastian Bach',
                'sheet_music' => 'sistroFiles/sheetMusic/UeUueIrdyaP13GceMu5WRPtVp1kZRJGDda8N65yQ.pdf',
                'locked' => false
            ],
            [
                'title' => 'Gymnopédie No.1',
                'author' => 'Erik Satie',
                'sheet_music' => 'sistroFiles/sheetMusic/7PyJIldnR2TDXix4T4TO7gSXijUBc08Ro5isz8I8.pdf',
                'locked' => false
            ],
            [
                'title' => 'Clair de Lune',
                'author' => 'Claude Debussy',
                'sheet_music' => 'sistroFiles/sheetMusic/ru4gy3Ax6gyNLzHbhbVkOhnZvBqU5VTXcQkE5Si4.pdf',
                'locked' => false
            ],
            [
                'title' => 'Canon in D',
                'author' => 'Johann Pachelbel',
                'sheet_music' => 'sistroFiles/sheetMusic/2elzdAlik7YaBmyCmfpN7YxFN0z7yVdadgXdiT7D.pdf',
                'locked' => false
            ],
        ]);
    }
}

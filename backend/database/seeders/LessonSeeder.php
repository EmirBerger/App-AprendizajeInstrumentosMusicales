<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LessonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('Lessons')->insert([
            [
                'instrument_fk' => 1,
                'title' => 'Introducción a la guitarra',
                'description' => 'En esta clase se va a empezar a ver cuál es el correcto posicionamiento de las manos en la guitarra.',
                'video' => 'HXTvJyEeHco',
                'theory' => 'sistroFiles/theory/PPmx2n12L35dIaRhYeIo78qZiKa4uRCZltfKbLqV.pdf',
                'locked' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'instrument_fk' => 1,
                'title' => 'Aprendiendo las notas',
                'description' => 'En esta clase se aprenderán las notas básicas en la guitarra.',
                'video' => 'HXTvJyEeHco',
                'theory' => 'sistroFiles/theory/PPmx2n12L35dIaRhYeIo78qZiKa4uRCZltfKbLqV.pdf',
                'locked' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'instrument_fk' => 1,
                'title' => 'Acordes básicos',
                'description' => 'Esta clase cubrirá los acordes básicos que todo guitarrista principiante debe conocer.',
                'video' => 'HXTvJyEeHco',
                'theory' => 'sistroFiles/theory/PPmx2n12L35dIaRhYeIo78qZiKa4uRCZltfKbLqV.pdf',
                'locked' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'instrument_fk' => 2,
                'title' => 'Introducción al piano',
                'description' => 'En esta clase se cubrirán las partes del piano y el posicionamiento correcto de las manos.',
                'video' => 'HXTvJyEeHco',
                'theory' => 'sistroFiles/theory/PPmx2n12L35dIaRhYeIo78qZiKa4uRCZltfKbLqV.pdf',
                'locked' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'instrument_fk' => 2,
                'title' => 'Escalas básicas',
                'description' => 'Aprende las escalas básicas y su importancia en la práctica del piano.',
                'video' => 'HXTvJyEeHco',
                'theory' => 'sistroFiles/theory/PPmx2n12L35dIaRhYeIo78qZiKa4uRCZltfKbLqV.pdf',
                'locked' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'instrument_fk' => 3,
                'title' => 'Introducción al violín',
                'description' => 'En esta clase se aprenderá la forma correcta de sostener el violín y el arco.',
                'video' => 'HXTvJyEeHco',
                'theory' => 'sistroFiles/theory/PPmx2n12L35dIaRhYeIo78qZiKa4uRCZltfKbLqV.pdf',
                'locked' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'instrument_fk' => 3,
                'title' => 'Técnica de arco',
                'description' => 'Aprende las técnicas básicas de arco para obtener un buen sonido en el violín.',
                'video' => 'HXTvJyEeHco',
                'theory' => 'sistroFiles/theory/PPmx2n12L35dIaRhYeIo78qZiKa4uRCZltfKbLqV.pdf',
                'locked' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'instrument_fk' => 4,
                'title' => 'Configuración de la batería',
                'description' => 'En esta clase se cubrirá cómo configurar correctamente tu batería.',
                'video' => 'HXTvJyEeHco',
                'theory' => 'sistroFiles/theory/PPmx2n12L35dIaRhYeIo78qZiKa4uRCZltfKbLqV.pdf',
                'locked' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'instrument_fk' => 4,
                'title' => 'Ritmos básicos',
                'description' => 'Aprende los ritmos básicos que todo baterista debe conocer.',
                'video' => 'HXTvJyEeHco',
                'theory' => 'sistroFiles/theory/PPmx2n12L35dIaRhYeIo78qZiKa4uRCZltfKbLqV.pdf',
                'locked' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'instrument_fk' => 4,
                'title' => 'Coordinación e independencia',
                'description' => 'Esta clase se enfocará en ejercicios para mejorar la coordinación e independencia de las manos y pies.',
                'video' => 'HXTvJyEeHco',
                'theory' => 'sistroFiles/theory/PPmx2n12L35dIaRhYeIo78qZiKa4uRCZltfKbLqV.pdf',
                'locked' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}

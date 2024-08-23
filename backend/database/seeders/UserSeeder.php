<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'name' => 'Admin',
                'last_name' => 'Dios',
                'email' => 'admin@gmail.com',
                'password' => Hash::make('123456'),
                'rol' => 1,
            ],
            [
                'name' => 'Emir',
                'last_name' => 'Berger',
                'email' => 'emir@gmail.com',
                'password' => Hash::make('123456'),
                'rol' => 0,
            ]
        ]);
    }
}

<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'first_name' => 'Tung',
            'last_name' => 'Tran',
            'birth_date' => '1994-05-07',
            'gender' => 'male',
            'email' => User::ADMIN_EMAIL,
            'password' => Hash::make('password'),
        ]);

        // $this->call([
        //     User::class,
        // ]);
    }
}

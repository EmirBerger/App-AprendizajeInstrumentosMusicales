<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sheet_music', function (Blueprint $table) {
            $table->bigIncrements('sheet_music_id');
            $table->string('title');
            $table->string('author');
            $table->string('sheet_music')->nullable();
            $table->boolean('locked')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sheet_music');
    }
};

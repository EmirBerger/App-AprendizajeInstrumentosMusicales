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
        Schema::create('lessons', function (Blueprint $table) {
            $table->bigIncrements('lesson_id');
            // Definir las restricciones de las claves foráneas
            $table->unsignedBigInteger('instrument_fk');
            $table->foreign('instrument_fk')->references('instrument_id')->on('instruments');
            $table->string('title');
            $table->text('description');
            $table->string('video');
            $table->string('theory')->nullable();
            $table->boolean('locked')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lessons');
    }
};

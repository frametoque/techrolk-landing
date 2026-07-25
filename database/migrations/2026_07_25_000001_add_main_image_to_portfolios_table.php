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
        Schema::table('portfolios', function (Blueprint $table) {
            if (!Schema::hasColumn('portfolios', 'mainImage')) {
                $table->string('mainImage')->nullable();
            }
            if (!Schema::hasColumn('portfolios', 'Short_description')) {
                $table->text('Short_description')->nullable();
            }
            if (!Schema::hasColumn('portfolios', 'image1')) {
                $table->string('image1')->nullable();
            }
            if (!Schema::hasColumn('portfolios', 'image2')) {
                $table->string('image2')->nullable();
            }
            if (!Schema::hasColumn('portfolios', 'image3')) {
                $table->string('image3')->nullable();
            }
            if (!Schema::hasColumn('portfolios', 'image4')) {
                $table->string('image4')->nullable();
            }
            if (!Schema::hasColumn('portfolios', 'book_id')) {
                $table->unsignedBigInteger('book_id')->nullable();
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
    }
};

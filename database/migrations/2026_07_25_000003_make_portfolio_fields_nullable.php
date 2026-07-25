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
            if (Schema::hasColumn('portfolios', 'Sdescription')) {
                $table->text('Sdescription')->nullable()->change();
            }
            if (Schema::hasColumn('portfolios', 'Short_description')) {
                $table->text('Short_description')->nullable()->change();
            }
            if (Schema::hasColumn('portfolios', 'image1')) {
                $table->string('image1')->nullable()->change();
            }
            if (Schema::hasColumn('portfolios', 'image2')) {
                $table->string('image2')->nullable()->change();
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

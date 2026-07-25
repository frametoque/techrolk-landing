<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('books') && !Schema::hasTable('services')) {
            Schema::rename('books', 'services');
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('services') && !Schema::hasTable('books')) {
            Schema::rename('services', 'books');
        }
    }
};

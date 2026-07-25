<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasColumn('portfolios', 'book_id') && !Schema::hasColumn('portfolios', 'service_id')) {
            Schema::table('portfolios', function (Blueprint $table) {
                $table->renameColumn('book_id', 'service_id');
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasColumn('portfolios', 'service_id') && !Schema::hasColumn('portfolios', 'book_id')) {
            Schema::table('portfolios', function (Blueprint $table) {
                $table->renameColumn('service_id', 'book_id');
            });
        }
    }
};

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
        // Update books (services) table
        Schema::table('books', function (Blueprint $table) {
            if (!Schema::hasColumn('books', 'tagline')) {
                $table->string('tagline')->nullable();
                $table->json('features')->nullable();
                $table->json('deliverables')->nullable();
                $table->string('color')->nullable();
                $table->string('bg')->nullable();
                $table->string('icon')->nullable();
            }
        });

        // Update portfolios table
        Schema::table('portfolios', function (Blueprint $table) {
            if (!Schema::hasColumn('portfolios', 'slug')) {
                $table->string('slug')->nullable()->unique();
                $table->string('category')->nullable();
                $table->json('collage_images')->nullable();
                $table->json('tags')->nullable();
                $table->text('challenge')->nullable();
                $table->text('solution')->nullable();
                $table->text('outcome')->nullable();
            }
            if (!Schema::hasColumn('portfolios', 'mainImage')) {
                $table->string('mainImage')->nullable();
            }
        });

        // Create teams table
        if (!Schema::hasTable('teams')) {
            Schema::create('teams', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->string('role');
                $table->text('bio')->nullable();
                $table->string('image')->nullable();
                $table->timestamps();
            });
        }

        // Create partners table
        if (!Schema::hasTable('partners')) {
            Schema::create('partners', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->string('logo');
                $table->enum('type', ['partner', 'dealership'])->default('partner');
                $table->timestamps();
            });
        }

        // Create testimonials table
        if (!Schema::hasTable('testimonials')) {
            Schema::create('testimonials', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->string('role')->nullable();
                $table->text('text');
                $table->integer('stars')->default(5);
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('testimonials');
        Schema::dropIfExists('partners');
        Schema::dropIfExists('teams');
    }
};

<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\Service;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Only run when NOT in terminal and when the table actually exists
        if (!$this->app->runningInConsole()) {
            View::composer('*', function ($view) {
                if (Schema::hasTable('services')) {
                    $view->with('services', Service::all());
                }
            });
        }
    }
}

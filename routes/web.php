<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\PortfolioController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [ServiceController::class, 'Home'])->name('home');
Route::get('/about', [ServiceController::class, 'About'])->name('about');
Route::get('/contact', [ServiceController::class, 'Contact'])->name('contact');
Route::get('/services', [ServiceController::class, 'Services'])->name('services');
Route::get('/portfolio', [PortfolioController::class, 'index'])->name('portfolio');
Route::get('/portfolio/{id}', [PortfolioController::class, 'show'])->name('portfolio.show');

Route::get('/cookies', function () {
    return view('cookies');
});

Route::get('/terms', function () {
    return view('terms');
});

Route::get('/privacy', function () {
    return view('privacy');
});

Route::get('/shipping-details', function () {
    return view('shipping');
});

Route::get('/refund-policy', function () {
    return view('refund');
});


/*Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});*/

Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'
])->group(function () {
    Route::get('/dashboard',[AdminController::class,'dashboard'])->name('dashboard');
});
/*-----------------------------------------------------------*/



/*-----------------------------------------------------------------------------------*/
Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'
])->group(function () {
    Route::get('/dashboard/index',[AdminController::class,'dashboard_index'])->name('dashboard_index');
});
Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'
])->group(function () {
    Route::get('/dashboard/services',[AdminController::class,'dashboard_services'])->name('dashboard_services');
});
Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'
])->group(function () {
    Route::get('/dashboard/Add-services',[AdminController::class,'Service_index'])->name('Service_index');
});
Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'
])->group(function () {
    Route::post('/dashboard/Add-services',[AdminController::class,'dashboard_add_services'])->name('dashboard_add_services');
});
Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'
])->group(function () {
    Route::get('/Edit-services/{id}',[AdminController::class,'Service_Details'])->name('Service_Details');
});
Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'
])->group(function () {
    Route::post('/Edit-services/{id}',[AdminController::class,'Edit_Service_Details'])->name('Service_Details');
});
Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'
])->group(function () {
    Route::get('/Delete-service/{id}',[AdminController::class,'Delete_Service_Details'])->name('Service_Details');
});
Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'
])->group(function () {
    Route::get('/dashboard/Portfolio',[AdminController::class,'Portfolio'])->name('Portfolio');
});
Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'
])->group(function () {
    Route::get('/dashboard/Add-Portfolio',[AdminController::class,'Portfolio_Index'])->name('Portfolio_Index');
});
Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'
])->group(function () {
    Route::post('/dashboard/Add-Portfolio',[AdminController::class,'Add_Portfolio'])->name('Add_Portfolio');
});
Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'
])->group(function () {
    Route::get('/Edit-portfolio/{id}',[AdminController::class,'portfolio_Details'])->name('Service_Details');
});
Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'
])->group(function () {
    Route::post('/Edit-portfolio/{id}',[AdminController::class,'Edit_portfolio_Details'])->name('portfolio_Details');
});
Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'])->group(function () {
    Route::get('/Delete-portfolio/{id}',[AdminController::class,'Delete_portfolio_Details'])->name('portfolio_Delete');
    Route::get('/dashboard/partners', [AdminController::class, 'Partners'])->name('partners');
    Route::get('/dashboard/Add-partner', [AdminController::class, 'Partner_Index'])->name('Partner_Index');
    Route::post('/dashboard/Add-partner', [AdminController::class, 'Add_Partner'])->name('Add_Partner');
    Route::get('/Edit-partner/{id}', [AdminController::class, 'Edit_Partner_Index'])->name('Edit_Partner_Index');
    Route::post('/Edit-partner/{id}', [AdminController::class, 'Edit_Partner_Details'])->name('Edit_Partner_Details');
    Route::get('/Delete-partner/{id}', [AdminController::class, 'Delete_Partner_Details'])->name('Delete_Partner_Details');

    /* Teams Routes */
    Route::get('/dashboard/teams', [AdminController::class, 'Teams'])->name('teams');
    Route::get('/dashboard/Add-team', [AdminController::class, 'Team_Index'])->name('Team_Index');
    Route::post('/dashboard/Add-team', [AdminController::class, 'Add_Team'])->name('Add_Team');
    Route::get('/Edit-team/{id}', [AdminController::class, 'Edit_Team_Index'])->name('Edit_Team_Index');
    Route::post('/Edit-team/{id}', [AdminController::class, 'Edit_Team_Details'])->name('Edit_Team_Details');
    Route::get('/Delete-team/{id}', [AdminController::class, 'Delete_Team_Details'])->name('Delete_Team_Details');

    /* Testimonials Routes */
    Route::get('/dashboard/testimonials', [AdminController::class, 'Testimonials'])->name('testimonials');
    Route::get('/dashboard/Add-testimonial', [AdminController::class, 'Testimonial_Index'])->name('Testimonial_Index');
    Route::post('/dashboard/Add-testimonial', [AdminController::class, 'Add_Testimonial'])->name('Add_Testimonial');
    Route::get('/Edit-testimonial/{id}', [AdminController::class, 'Edit_Testimonial_Index'])->name('Edit_Testimonial_Index');
    Route::post('/Edit-testimonial/{id}', [AdminController::class, 'Edit_Testimonial_Details'])->name('Edit_Testimonial_Details');
    Route::get('/Delete-testimonial/{id}', [AdminController::class, 'Delete_Testimonial_Details'])->name('Delete_Testimonial_Details');
});
Route::get('/services',[ServiceController::class,'Services'])->name('Shop');

// Old duplicate portfolio routes removed in favor of top routes:
// Route::get('/portfolio', [PortfolioController::class, 'showPortfoliosByBook'])->name('books.portfolios');
// Route::get('/{portfolio}', [PortfolioController::class, 'showPortfolioInBook'])->name('showPortfolioInBook');
 





 /* redirector */
 Route::middleware(['redirect.product.url'])->group(function () {
    Route::get('product/{product}', function(Product $product) {
        // ...
    });
});
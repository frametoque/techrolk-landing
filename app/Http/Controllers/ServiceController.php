<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;
use App\Models\Portfolio;
use App\Models\Team;
use App\Models\Partner;
use App\Models\Testimonial;

class ServiceController extends Controller
{
    public function Home()
    {
        $services = Service::all();
        $testimonials = Testimonial::all();
        $projects = Portfolio::whereNotNull('title')->get()->unique('title')->take(6)->values();

        return view('index', compact('services', 'testimonials', 'projects'));
    }

    public function About()
    {
        $team = Team::all();
        $partners = Partner::where('type', 'partner')->get();
        $dealerships = Partner::where('type', 'dealership')->get();

        return view('about', compact('team', 'partners', 'dealerships'));
    }

    public function Contact()
    {
        return view('contact');
    }

    public function Services()
    {
        $services = Service::all();

        return view('services', compact('services'));
    }
}
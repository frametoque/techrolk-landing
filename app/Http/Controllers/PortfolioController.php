<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;
use App\Models\Portfolio;

class PortfolioController extends Controller
{
    public function index()
    {
        $projects = Portfolio::whereNotNull('title')
            ->get()
            ->unique('title')
            ->values();
            
        return view('portfolio', compact('projects'));
    }

    public function show($id)
    {
        $project = Portfolio::where('slug', $id)
            ->orWhere('id', $id)
            ->firstOrFail();

        return view('indi_portfolio', compact('project'));
    }

    public function showPortfoliosByBook()
    {
        return $this->index();
    }

    public function showPortfolioInBook($portfolioTitle)
    {
        return $this->show($portfolioTitle);
    }
}

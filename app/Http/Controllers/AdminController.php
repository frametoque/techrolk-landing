<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Models\Service;
use App\Models\Portfolio;
use App\Models\Partner;
use App\Models\Team;
use App\Models\Testimonial;
use Illuminate\Support\Facades\Storage;
class AdminController extends Controller
{
    public function dashboard (){
        $UStype=Auth::user()->UStype;

        if($UStype== "1"){
            return view('Admin.Dashboard.index');
    }
    else{
        return view("index");
    }
}
/*------------------------------------------------*/
public function index()
    {
        return view('admin.service_add');
    }
public function aservice(Request $request)
{
    $input = $request->all();
    Service::create($input);
    return redirect()->back();
}
public function show($id)
    {
        $service = Service::find($id);
        return view('admin.show',compact('service'));
    }
    public function showall()
    {
        $services = Service::all();
        return view('admin.showall', compact('services'));
    }
/*---------------------------------*/
public function dashboard_index()
    {
        return view('Admin.Dashboard.index');
    }
    public function dashboard_services()
    {
        $services = Service::all();
        return view('Admin.Dashboard.Services', compact('services'));
    }
    public function Service_index()
    {
        return view('Admin.Dashboard.Add_service');
    }
    /*public function dashboard_add_services(Request $request)
    {
        $input = $request->all();
        Service::create($input);
        return redirect()->back();
    }*/
    public function dashboard_add_services(Request $request)
    {
        $service = new Service;
        $service->name = $request->name;
        $service->description = $request->description;
        $service->tagline = $request->tagline ?? $request->name;
        $service->icon = $request->icon ?? 'Cpu';
        $service->color = $request->color ?? '#CC1F2A';
        $service->bg = $request->bg ?? '#FFF5F5';
        
        if ($request->features) {
            $service->features = is_array($request->features) ? $request->features : array_map('trim', explode(',', $request->features));
        }
        if ($request->deliverables) {
            $service->deliverables = is_array($request->deliverables) ? $request->deliverables : array_map('trim', explode(',', $request->deliverables));
        }

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move('uploads', $imageName);
            $service->image = '/uploads/' . $imageName;
        }

        $service->save();
        return redirect()->back()->with('message', "Service added successfully");
    }

    public function Service_Details($id)
    {
        $service = Service::find($id);
        return view('Admin.Dashboard.Edit_service', compact('service'));
    }

    public function Edit_Service_Details(Request $request, $id)
    {
        $service = Service::find($id);
        $service->name = $request->name;
        $service->description = $request->description;
        $service->tagline = $request->tagline ?? $service->tagline;
        $service->icon = $request->icon ?? $service->icon ?? 'Cpu';
        $service->color = $request->color ?? $service->color ?? '#CC1F2A';
        $service->bg = $request->bg ?? $service->bg ?? '#FFF5F5';

        if ($request->features) {
            $service->features = is_array($request->features) ? $request->features : array_map('trim', explode(',', $request->features));
        }
        if ($request->deliverables) {
            $service->deliverables = is_array($request->deliverables) ? $request->deliverables : array_map('trim', explode(',', $request->deliverables));
        }

        $image = $request->image;
        if ($image) {
            $imagename = time() . '.' . $image->getClientOriginalExtension();
            $request->image->move('uploads', $imagename);
            $service->image = '/uploads/' . $imagename;
        }

        $service->save();
        return redirect()->back()->with('message', "Service updated successfully");
    }

    public function Delete_Service_Details($id)
    {
        $service = Service::find($id);
        $service->delete();
        return redirect()->back()->with('message', "Service deleted successfully");
    }

    public function Portfolio()
    {
        $portfolios = Portfolio::all();
        return view('Admin.Dashboard.Portfolio', compact('portfolios'));
    }

    public function Portfolio_Index()
    {
        $services = Service::all();
        return view('Admin.Dashboard.Add_portfolio', compact('services'));
    }

    public function Add_Portfolio(Request $request)
    {
        $portfolio = new Portfolio;
        $portfolio->title = $request->title;
        $portfolio->Short_description = $request->Short_description ?? $request->Sdescription ?? '';
        $portfolio->Sdescription = $request->Sdescription ?? $request->Short_description ?? '';
        $portfolio->description = $request->description;
        $portfolio->youtube_video_url = $request->youtube_video_url;
        $portfolio->service_id = $request->service_id ?? $request->book_id;
        $portfolio->slug = \Illuminate\Support\Str::slug($request->title);
        $portfolio->challenge = $request->challenge;
        $portfolio->solution = $request->solution;
        $portfolio->outcome = $request->outcome;

        if ($request->tags) {
            $portfolio->tags = is_array($request->tags) ? $request->tags : array_map('trim', explode(',', $request->tags));
        }

        if ($request->hasFile('image1')) {
            $image1 = $request->file('image1');
            $imageName1 = time() . '-image1.' . $image1->getClientOriginalExtension();
            $image1->move('portfolio_assets', $imageName1);
            $portfolio->image1 = '/portfolio_assets/' . $imageName1;
            $portfolio->mainImage = '/portfolio_assets/' . $imageName1;
        }

        if ($request->hasFile('image2')) {
            $image2 = $request->file('image2');
            $imageName2 = time() . '-image2.' . $image2->getClientOriginalExtension();
            $image2->move('portfolio_assets', $imageName2);
            $portfolio->image2 = '/portfolio_assets/' . $imageName2;
        }

        if ($request->hasFile('image3')) {
            $image3 = $request->file('image3');
            $imageName3 = time() . '-image3.' . $image3->getClientOriginalExtension();
            $image3->move('portfolio_assets', $imageName3);
            $portfolio->image3 = '/portfolio_assets/' . $imageName3;
        }

        if ($request->hasFile('image4')) {
            $image4 = $request->file('image4');
            $imageName4 = time() . '-image4.' . $image4->getClientOriginalExtension();
            $image4->move('portfolio_assets', $imageName4);
            $portfolio->image4 = '/portfolio_assets/' . $imageName4;
        }

        $portfolio->collage_images = array_values(array_filter([
            $portfolio->image1,
            $portfolio->image2,
            $portfolio->image3,
            $portfolio->image4
        ]));

        $portfolio->save();
        return redirect()->back()->with('message', "Portfolio item added successfully");
    }

    public function portfolio_Details($id)
    {
        $portfolio = Portfolio::find($id);
        $services = Service::all();
        return view('Admin.Dashboard.Edit_portfolio', compact('portfolio', 'services'));
    }

    public function Edit_portfolio_Details(Request $request, $id)
    {
        $portfolio = Portfolio::find($id);
        $portfolio->title = $request->title;
        $portfolio->Short_description = $request->Short_description ?? $request->Sdescription ?? $portfolio->Short_description;
        $portfolio->Sdescription = $request->Sdescription ?? $request->Short_description ?? $portfolio->Sdescription;
        $portfolio->description = $request->description;
        $portfolio->youtube_video_url = $request->youtube_video_url;
        $portfolio->service_id = $request->service_id ?? $request->book_id ?? $portfolio->service_id;
        $portfolio->challenge = $request->challenge ?? $portfolio->challenge;
        $portfolio->solution = $request->solution ?? $portfolio->solution;
        $portfolio->outcome = $request->outcome ?? $portfolio->outcome;

        if ($request->tags) {
            $portfolio->tags = is_array($request->tags) ? $request->tags : array_map('trim', explode(',', $request->tags));
        }

        if (empty($portfolio->slug)) {
            $portfolio->slug = \Illuminate\Support\Str::slug($request->title);
        }

        if ($request->hasFile('image1')) {
            $image1 = $request->file('image1');
            $imageName1 = time() . '-image1.' . $image1->getClientOriginalExtension();
            $image1->move('portfolio_assets', $imageName1);
            $portfolio->image1 = '/portfolio_assets/' . $imageName1;
            $portfolio->mainImage = '/portfolio_assets/' . $imageName1;
        }

        if ($request->hasFile('image2')) {
            $image2 = $request->file('image2');
            $imageName2 = time() . '-image2.' . $image2->getClientOriginalExtension();
            $image2->move('portfolio_assets', $imageName2);
            $portfolio->image2 = '/portfolio_assets/' . $imageName2;
        }

        if ($request->hasFile('image3')) {
            $image3 = $request->file('image3');
            $imageName3 = time() . '-image3.' . $image3->getClientOriginalExtension();
            $image3->move('portfolio_assets', $imageName3);
            $portfolio->image3 = '/portfolio_assets/' . $imageName3;
        }

        if ($request->hasFile('image4')) {
            $image4 = $request->file('image4');
            $imageName4 = time() . '-image4.' . $image4->getClientOriginalExtension();
            $image4->move('portfolio_assets', $imageName4);
            $portfolio->image4 = '/portfolio_assets/' . $imageName4;
        }

        $portfolio->collage_images = array_values(array_filter([
            $portfolio->image1,
            $portfolio->image2,
            $portfolio->image3,
            $portfolio->image4
        ]));

        $portfolio->save();
        return redirect()->back()->with('message', "Portfolio item updated successfully");
    }
    public function Delete_portfolio_Details($id){
        $portfolio=Portfolio::find($id);
        // Delete the associated image files from the folder
    if ($portfolio->image1) {
        $imagePath = 'uploadsP/' . $portfolio->image4;
        $this->deleteImageFile($imagePath);
    }

    if ($portfolio->image2) {
        $this->deleteImageFile($portfolio->image2);
    }

    if ($portfolio->image3) {
        $this->deleteImageFile($portfolio->image3);
    }

    if ($portfolio->image4) {
        $this->deleteImageFile($portfolio->image4);
    }
        $portfolio->delete();
        return redirect()->back()->with('message',"Service deleted successfully");
    }
    public function Partners()
    {
        $partners = Partner::all();
        return view('Admin.Dashboard.Partners', compact('partners'));
    }

    public function Partner_Index()
    {
        return view('Admin.Dashboard.Add_partner');
    }

    public function Add_Partner(Request $request)
    {
        $partner = new Partner;
        $partner->name = $request->name;
        $partner->type = $request->type ?? 'partner';

        if ($request->hasFile('logo')) {
            $logo = $request->file('logo');
            $logoName = time() . '-partner.' . $logo->getClientOriginalExtension();
            $logo->move('partners', $logoName);
            $partner->logo = '/partners/' . $logoName;
        }

        $partner->save();
        return redirect()->back()->with('message', "Partner added successfully");
    }

    public function Edit_Partner_Index($id)
    {
        $partner = Partner::find($id);
        return view('Admin.Dashboard.Edit_partner', compact('partner'));
    }

    public function Edit_Partner_Details(Request $request, $id)
    {
        $partner = Partner::find($id);
        $partner->name = $request->name;
        $partner->type = $request->type ?? $partner->type ?? 'partner';

        if ($request->hasFile('logo')) {
            $logo = $request->file('logo');
            $logoName = time() . '-partner.' . $logo->getClientOriginalExtension();
            $logo->move('partners', $logoName);
            $partner->logo = '/partners/' . $logoName;
        }

        $partner->save();
        return redirect()->back()->with('message', "Partner updated successfully");
    }

    public function Delete_Partner_Details($id)
    {
        $partner = Partner::find($id);
        $partner->delete();
        return redirect()->back()->with('message', "Partner deleted successfully");
    }

    /* Teams Management */
    public function Teams()
    {
        $teams = Team::all();
        return view('Admin.Dashboard.Teams', compact('teams'));
    }

    public function Team_Index()
    {
        return view('Admin.Dashboard.Add_team');
    }

    public function Add_Team(Request $request)
    {
        $team = new Team;
        $team->name = $request->name;
        $team->role = $request->role;
        $team->bio = $request->bio;

        if ($request->hasFile('image')) {
            $img = $request->file('image');
            $imgName = time() . '-team.' . $img->getClientOriginalExtension();
            $img->move('team', $imgName);
            $team->image = '/team/' . $imgName;
        }

        $team->save();
        return redirect()->back()->with('message', "Team member added successfully");
    }

    public function Edit_Team_Index($id)
    {
        $team = Team::find($id);
        return view('Admin.Dashboard.Edit_team', compact('team'));
    }

    public function Edit_Team_Details(Request $request, $id)
    {
        $team = Team::find($id);
        $team->name = $request->name;
        $team->role = $request->role;
        $team->bio = $request->bio;

        if ($request->hasFile('image')) {
            $img = $request->file('image');
            $imgName = time() . '-team.' . $img->getClientOriginalExtension();
            $img->move('team', $imgName);
            $team->image = '/team/' . $imgName;
        }

        $team->save();
        return redirect()->back()->with('message', "Team member updated successfully");
    }

    public function Delete_Team_Details($id)
    {
        $team = Team::find($id);
        $team->delete();
        return redirect()->back()->with('message', "Team member deleted successfully");
    }

    /* Testimonials Management */
    public function Testimonials()
    {
        $testimonials = Testimonial::all();
        return view('Admin.Dashboard.Testimonials', compact('testimonials'));
    }

    public function Testimonial_Index()
    {
        return view('Admin.Dashboard.Add_testimonial');
    }

    public function Add_Testimonial(Request $request)
    {
        $testimonial = new Testimonial;
        $testimonial->name = $request->name;
        $testimonial->role = $request->role;
        $testimonial->text = $request->text;
        $testimonial->stars = $request->stars ?? 5;

        $testimonial->save();
        return redirect()->back()->with('message', "Testimonial added successfully");
    }

    public function Edit_Testimonial_Index($id)
    {
        $testimonial = Testimonial::find($id);
        return view('Admin.Dashboard.Edit_testimonial', compact('testimonial'));
    }

    public function Edit_Testimonial_Details(Request $request, $id)
    {
        $testimonial = Testimonial::find($id);
        $testimonial->name = $request->name;
        $testimonial->role = $request->role;
        $testimonial->text = $request->text;
        $testimonial->stars = $request->stars ?? 5;

        $testimonial->save();
        return redirect()->back()->with('message', "Testimonial updated successfully");
    }

    public function Delete_Testimonial_Details($id)
    {
        $testimonial = Testimonial::find($id);
        $testimonial->delete();
        return redirect()->back()->with('message', "Testimonial deleted successfully");
    }
}


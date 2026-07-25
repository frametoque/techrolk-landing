@include ('Admin.Dashboard.tech_header')

<div class="container-fluid py-2">
    <div class="d-flex align-items-center justify-content-between mb-4">
        <div>
            <h2 class="fw-bold m-0" style="color: #0A0A0A; letter-spacing: -0.02em;">Dashboard Overview</h2>
            <p class="text-muted m-0 small">Manage services, portfolio projects, team members, partners, and testimonials.</p>
        </div>
        <div class="d-flex gap-2">
            <a href="{{ url('dashboard/Add-Portfolio') }}" class="btn btn-primary">
                <i class="fa-solid fa-plus me-1"></i> Add Project
            </a>
            <a href="{{ url('dashboard/Add-services') }}" class="btn btn-outline-dark">
                <i class="fa-solid fa-plus me-1"></i> Add Service
            </a>
            <a href="{{ url('dashboard/Add-team') }}" class="btn btn-outline-dark">
                <i class="fa-solid fa-plus me-1"></i> Add Team
            </a>
            <a href="{{ url('dashboard/Add-partner') }}" class="btn btn-outline-dark">
                <i class="fa-solid fa-plus me-1"></i> Add Partner
            </a>
        </div>
    </div>

    @php
        $servicesCount = DB::table('services')->count();
        $projectsCount = DB::table('portfolios')->count();
        $partnersCount = DB::table('partners')->count();
        $teamsCount = DB::table('teams')->count();
        $testimonialsCount = DB::table('testimonials')->count();
    @endphp

    <div class="row g-4 mb-4">
        <div class="col-xl-4 col-md-6">
            <div class="card border-0 shadow-sm p-3">
                <div class="d-flex align-items-center justify-content-between">
                    <div>
                        <span class="text-uppercase text-muted fw-bold small">Total Services</span>
                        <h1 class="fw-bold mt-2 mb-0" style="color: #0A0A0A;">{{ $servicesCount }}</h1>
                    </div>
                    <div style="width: 54px; height: 54px; background: rgba(204,31,42,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                        <i class="fa-solid fa-gears text-danger fs-3"></i>
                    </div>
                </div>
                <div class="mt-3">
                    <a href="{{ url('dashboard/services') }}" class="text-danger fw-semibold text-decoration-none small">
                        Manage Services <i class="fa-solid fa-arrow-right ms-1"></i>
                    </a>
                </div>
            </div>
        </div>

        <div class="col-xl-4 col-md-6">
            <div class="card border-0 shadow-sm p-3">
                <div class="d-flex align-items-center justify-content-between">
                    <div>
                        <span class="text-uppercase text-muted fw-bold small">Total Portfolio Projects</span>
                        <h1 class="fw-bold mt-2 mb-0" style="color: #0A0A0A;">{{ $projectsCount }}</h1>
                    </div>
                    <div style="width: 54px; height: 54px; background: rgba(10,10,10,0.06); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                        <i class="fa-solid fa-layer-group text-dark fs-3"></i>
                    </div>
                </div>
                <div class="mt-3">
                    <a href="{{ url('dashboard/Portfolio') }}" class="text-dark fw-semibold text-decoration-none small">
                        Manage Portfolio <i class="fa-solid fa-arrow-right ms-1"></i>
                    </a>
                </div>
            </div>
        </div>

        <div class="col-xl-4 col-md-6">
            <div class="card border-0 shadow-sm p-3">
                <div class="d-flex align-items-center justify-content-between">
                    <div>
                        <span class="text-uppercase text-muted fw-bold small">Partners & Dealerships</span>
                        <h1 class="fw-bold mt-2 mb-0" style="color: #0A0A0A;">{{ $partnersCount }}</h1>
                    </div>
                    <div style="width: 54px; height: 54px; background: rgba(204,31,42,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                        <i class="fa-solid fa-handshake text-danger fs-3"></i>
                    </div>
                </div>
                <div class="mt-3">
                    <a href="{{ url('dashboard/partners') }}" class="text-danger fw-semibold text-decoration-none small">
                        Manage Partners <i class="fa-solid fa-arrow-right ms-1"></i>
                    </a>
                </div>
            </div>
        </div>

        <div class="col-xl-6 col-md-6">
            <div class="card border-0 shadow-sm p-3">
                <div class="d-flex align-items-center justify-content-between">
                    <div>
                        <span class="text-uppercase text-muted fw-bold small">Team Members</span>
                        <h1 class="fw-bold mt-2 mb-0" style="color: #0A0A0A;">{{ $teamsCount }}</h1>
                    </div>
                    <div style="width: 54px; height: 54px; background: rgba(10,10,10,0.06); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                        <i class="fa-solid fa-users text-dark fs-3"></i>
                    </div>
                </div>
                <div class="mt-3">
                    <a href="{{ url('dashboard/teams') }}" class="text-dark fw-semibold text-decoration-none small">
                        Manage Team Members <i class="fa-solid fa-arrow-right ms-1"></i>
                    </a>
                </div>
            </div>
        </div>

        <div class="col-xl-6 col-md-6">
            <div class="card border-0 shadow-sm p-3">
                <div class="d-flex align-items-center justify-content-between">
                    <div>
                        <span class="text-uppercase text-muted fw-bold small">Client Testimonials</span>
                        <h1 class="fw-bold mt-2 mb-0" style="color: #0A0A0A;">{{ $testimonialsCount }}</h1>
                    </div>
                    <div style="width: 54px; height: 54px; background: rgba(204,31,42,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                        <i class="fa-solid fa-quote-left text-danger fs-3"></i>
                    </div>
                </div>
                <div class="mt-3">
                    <a href="{{ url('dashboard/testimonials') }}" class="text-danger fw-semibold text-decoration-none small">
                        Manage Testimonials <i class="fa-solid fa-arrow-right ms-1"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

@include ('Admin.Dashboard.tech_footer')
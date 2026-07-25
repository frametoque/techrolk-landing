@include ('Admin.Dashboard.tech_header')

<div class="container-fluid py-2">
    <div class="d-flex align-items-center justify-content-between mb-4">
        <div>
            <h2 class="fw-bold m-0" style="color: #0A0A0A; letter-spacing: -0.02em;">Add New Service</h2>
            <p class="text-muted m-0 small">Create a new core engineering service offering.</p>
        </div>
        <div>
            <a href="{{ url('dashboard/services') }}" class="btn btn-outline-dark">
                <i class="fa-solid fa-arrow-left me-1"></i> Back to Services
            </a>
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-lg-8">
            <div class="card border-0 shadow-sm">
                <div class="card-header bg-white py-3 border-bottom">
                    <span class="fw-bold text-dark"><i class="fa-solid fa-plus-circle me-2 text-danger"></i> Service Details</span>
                </div>
                <div class="card-body p-4">
                    <form method="post" action="{{ url('/dashboard/Add-services') }}">
                        @csrf
                        <div class="mb-3">
                            <label class="form-label">Service Name</label>
                            <input type="text" name="name" class="form-control" placeholder="e.g. 3D Computer Aided Design (CAD)" required/>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Tagline</label>
                            <input type="text" name="tagline" class="form-control" placeholder="e.g. Precision 3D modeling and industrial prototyping"/>
                        </div>

                        <div class="row g-3 mb-3">
                            <div class="col-md-6">
                                <label class="form-label">Service Icon (Lucide Icon)</label>
                                <select name="icon" class="form-select form-control">
                                    <option value="Plane">Plane (Drone Solutions)</option>
                                    <option value="Cpu" selected>Cpu (CAD Design)</option>
                                    <option value="Printer">Printer (3D Printing)</option>
                                    <option value="Pen">Pen (Prototyping)</option>
                                    <option value="Hammer">Hammer (Tuning)</option>
                                    <option value="Zap">Zap (Fast Turnaround)</option>
                                    <option value="Shield">Shield (Security)</option>
                                </select>
                            </div>
                            <div class="col-md-3">
                                <label class="form-label">Theme Color</label>
                                <input type="text" name="color" class="form-control" value="#CC1F2A"/>
                            </div>
                            <div class="col-md-3">
                                <label class="form-label">Background Color</label>
                                <input type="text" name="bg" class="form-control" value="#FFF5F5"/>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Key Features (Comma separated)</label>
                            <input type="text" name="features" class="form-control" placeholder="e.g. High Precision, STEP & STL Support, Custom Enclosures"/>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Deliverables (Comma separated)</label>
                            <input type="text" name="deliverables" class="form-control" placeholder="e.g. 3D CAD Source Files, STL Print Files, Technical Drawings"/>
                        </div>

                        <div class="mb-4">
                            <label class="form-label">Description</label>
                            <textarea name="description" class="form-control" rows="6" placeholder="Describe the service..." required></textarea>
                        </div>

                        <div class="d-flex justify-content-end gap-2">
                            <a href="{{ url('dashboard/services') }}" class="btn btn-outline-dark">Cancel</a>
                            <button type="submit" class="btn btn-primary">
                                <i class="fa-solid fa-check me-1"></i> Save Service
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

@include ('Admin.Dashboard.tech_footer')
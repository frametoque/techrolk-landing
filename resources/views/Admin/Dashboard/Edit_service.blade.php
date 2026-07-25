@include ('Admin.Dashboard.tech_header')

<div class="container-fluid py-2">
    <div class="d-flex align-items-center justify-content-between mb-4">
        <div>
            <h2 class="fw-bold m-0" style="color: #0A0A0A; letter-spacing: -0.02em;">Edit Service</h2>
            <p class="text-muted m-0 small">Update service details for {{ $service->name }}.</p>
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
                    <span class="fw-bold text-dark"><i class="fa-solid fa-pen-to-square me-2 text-danger"></i> Service Details</span>
                </div>
                <div class="card-body p-4">
                    <form method="post" action="{{ url('/Edit-services', $service->id) }}">
                        @csrf
                        <div class="mb-3">
                            <label class="form-label">Service Name</label>
                            <input type="text" name="name" class="form-control" value="{{ $service->name }}" required/>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Tagline</label>
                            <input type="text" name="tagline" class="form-control" value="{{ $service->tagline }}"/>
                        </div>

                        <div class="row g-3 mb-3">
                            <div class="col-md-6">
                                <label class="form-label">Service Icon (Lucide Icon)</label>
                                <select name="icon" class="form-select form-control">
                                    <option value="Plane" {{ ($service->icon ?? '') == 'Plane' ? 'selected' : '' }}>Plane (Drone Solutions)</option>
                                    <option value="Cpu" {{ ($service->icon ?? '') == 'Cpu' ? 'selected' : '' }}>Cpu (CAD Design)</option>
                                    <option value="Printer" {{ ($service->icon ?? '') == 'Printer' ? 'selected' : '' }}>Printer (3D Printing)</option>
                                    <option value="Pen" {{ ($service->icon ?? '') == 'Pen' ? 'selected' : '' }}>Pen (Prototyping)</option>
                                    <option value="Hammer" {{ ($service->icon ?? '') == 'Hammer' ? 'selected' : '' }}>Hammer (Tuning)</option>
                                    <option value="Zap" {{ ($service->icon ?? '') == 'Zap' ? 'selected' : '' }}>Zap (Fast Turnaround)</option>
                                    <option value="Shield" {{ ($service->icon ?? '') == 'Shield' ? 'selected' : '' }}>Shield (Security)</option>
                                </select>
                            </div>
                            <div class="col-md-3">
                                <label class="form-label">Theme Color</label>
                                <input type="text" name="color" class="form-control" value="{{ $service->color ?? '#CC1F2A' }}"/>
                            </div>
                            <div class="col-md-3">
                                <label class="form-label">Background Color</label>
                                <input type="text" name="bg" class="form-control" value="{{ $service->bg ?? '#FFF5F5' }}"/>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Key Features (Comma separated)</label>
                            <input type="text" name="features" class="form-control" value="{{ is_array($service->features) ? implode(', ', $service->features) : $service->features }}"/>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Deliverables (Comma separated)</label>
                            <input type="text" name="deliverables" class="form-control" value="{{ is_array($service->deliverables) ? implode(', ', $service->deliverables) : $service->deliverables }}"/>
                        </div>

                        <div class="mb-4">
                            <label class="form-label">Description</label>
                            <textarea name="description" class="form-control" rows="6" required>{!! $service->description !!}</textarea>
                        </div>

                        <div class="d-flex justify-content-end gap-2">
                            <a href="{{ url('dashboard/services') }}" class="btn btn-outline-dark">Cancel</a>
                            <button type="submit" class="btn btn-primary">
                                <i class="fa-solid fa-check me-1"></i> Update Service
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

@include ('Admin.Dashboard.tech_footer')
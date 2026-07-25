@include ('Admin.Dashboard.tech_header')

<div class="container-fluid py-2">
    <div class="d-flex align-items-center justify-content-between mb-4">
        <div>
            <h2 class="fw-bold m-0" style="color: #0A0A0A; letter-spacing: -0.02em;">Edit Partner / Dealership</h2>
            <p class="text-muted m-0 small">Update details for {{ $partner->name }}.</p>
        </div>
        <div>
            <a href="{{ url('dashboard/partners') }}" class="btn btn-outline-dark">
                <i class="fa-solid fa-arrow-left me-1"></i> Back to Partners
            </a>
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-lg-8">
            <div class="card border-0 shadow-sm">
                <div class="card-header bg-white py-3 border-bottom">
                    <span class="fw-bold text-dark"><i class="fa-solid fa-pen-to-square me-2 text-danger"></i> Partner Details</span>
                </div>
                <div class="card-body p-4">
                    <form method="post" action="{{ url('/Edit-partner', $partner->id) }}" enctype="multipart/form-data">
                        @csrf
                        <div class="mb-3">
                            <label class="form-label">Partner / Brand Name</label>
                            <input type="text" name="name" class="form-control" value="{{ $partner->name }}" required/>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Classification / Type</label>
                            <select name="type" class="form-select form-control" required>
                                <option value="dealership" {{ $partner->type === 'dealership' ? 'selected' : '' }}>Official Dealership</option>
                                <option value="partner" {{ $partner->type === 'partner' ? 'selected' : '' }}>Corporate Partner</option>
                            </select>
                        </div>

                        <div class="mb-4">
                            <label class="form-label">Logo Image Upload</label>
                            <input type="file" name="logo" accept=".jpg, .jpeg, .png, .webp" class="form-control" />
                            @if ($partner->logo)
                                <div class="mt-3">
                                    <span class="d-block small text-muted mb-1">Current Logo Preview:</span>
                                    <img src="{{ $partner->logo }}" style="max-height: 80px; max-width: 160px; object-fit: contain; border-radius: 8px; border: 1px solid #E8E8E8; padding: 6px; background: #FFFFFF;" />
                                </div>
                            @endif
                        </div>

                        <div class="d-flex justify-content-end gap-2">
                            <a href="{{ url('dashboard/partners') }}" class="btn btn-outline-dark">Cancel</a>
                            <button type="submit" class="btn btn-primary">
                                <i class="fa-solid fa-check me-1"></i> Update Partner
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

@include ('Admin.Dashboard.tech_footer')

@include ('Admin.Dashboard.tech_header')

<div class="container-fluid py-2">
    <div class="d-flex align-items-center justify-content-between mb-4">
        <div>
            <h2 class="fw-bold m-0" style="color: #0A0A0A; letter-spacing: -0.02em;">Add Team Member</h2>
            <p class="text-muted m-0 small">Create a new staff profile.</p>
        </div>
        <div>
            <a href="{{ url('dashboard/teams') }}" class="btn btn-outline-dark">
                <i class="fa-solid fa-arrow-left me-1"></i> Back to Team
            </a>
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-lg-8">
            <div class="card border-0 shadow-sm">
                <div class="card-header bg-white py-3 border-bottom">
                    <span class="fw-bold text-dark"><i class="fa-solid fa-plus-circle me-2 text-danger"></i> Member Details</span>
                </div>
                <div class="card-body p-4">
                    <form method="post" action="{{ url('/dashboard/Add-team') }}" enctype="multipart/form-data">
                        @csrf
                        <div class="mb-3">
                            <label class="form-label">Full Name</label>
                            <input type="text" name="name" class="form-control" placeholder="e.g. Nelitha Kulasinghe" required/>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Role / Position Title</label>
                            <input type="text" name="role" class="form-control" placeholder="e.g. Founder & Chief UAV Engineer" required/>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Biography / Description</label>
                            <textarea name="bio" class="form-control" rows="4" placeholder="Brief professional background..." required></textarea>
                        </div>

                        <div class="mb-4">
                            <label class="form-label">Profile Image Upload</label>
                            <input type="file" name="image" accept=".jpg, .jpeg, .png, .webp" class="form-control" required/>
                        </div>

                        <div class="d-flex justify-content-end gap-2">
                            <a href="{{ url('dashboard/teams') }}" class="btn btn-outline-dark">Cancel</a>
                            <button type="submit" class="btn btn-primary">
                                <i class="fa-solid fa-check me-1"></i> Save Team Member
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

@include ('Admin.Dashboard.tech_footer')

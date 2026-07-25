@include ('Admin.Dashboard.tech_header')

<div class="container-fluid py-2">
    <div class="d-flex align-items-center justify-content-between mb-4">
        <div>
            <h2 class="fw-bold m-0" style="color: #0A0A0A; letter-spacing: -0.02em;">Add New Portfolio Project</h2>
            <p class="text-muted m-0 small">Create a new engineering showcase item with images, challenge, solution, and specs.</p>
        </div>
        <div>
            <a href="{{ url('dashboard/Portfolio') }}" class="btn btn-outline-dark">
                <i class="fa-solid fa-arrow-left me-1"></i> Back to Portfolio
            </a>
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-lg-9">
            <div class="card border-0 shadow-sm">
                <div class="card-header bg-white py-3 border-bottom">
                    <span class="fw-bold text-dark"><i class="fa-solid fa-plus-circle me-2 text-danger"></i> Project Details</span>
                </div>
                <div class="card-body p-4">
                    <form method="post" action="{{ url('/dashboard/Add-Portfolio') }}" enctype="multipart/form-data">
                        @csrf
                        <div class="mb-3">
                            <label class="form-label">Project Name / Title</label>
                            <input type="text" name="title" class="form-control" placeholder="e.g. High Endurance Hybrid Oil Electric Hexacopter" required/>
                        </div>

                        <div class="row g-3 mb-3">
                            <div class="col-md-6">
                                <label class="form-label">Associated Service Category</label>
                                <select name="service_id" class="form-select form-control" required>
                                    @foreach($services as $service)
                                        <option value="{{ $service->id }}">{{ $service->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Tags (Comma separated)</label>
                                <input type="text" name="tags" class="form-control" placeholder="e.g. Hybrid, Heavy Payload, Autopilot"/>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Short Summary</label>
                            <textarea name="Short_description" class="form-control" rows="2" placeholder="Brief summary of the project..." required></textarea>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Full Overview / Description</label>
                            <textarea name="description" class="form-control" rows="5" placeholder="Detailed technical overview..." required></textarea>
                        </div>

                        <div class="row g-3 mb-3">
                            <div class="col-md-4">
                                <label class="form-label">Engineering Challenge</label>
                                <textarea name="challenge" class="form-control" rows="3" placeholder="Challenge faced..."></textarea>
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">Custom Solution</label>
                                <textarea name="solution" class="form-control" rows="3" placeholder="Engineered solution..."></textarea>
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">Project Outcome</label>
                                <textarea name="outcome" class="form-control" rows="3" placeholder="Key outcomes & specs..."></textarea>
                            </div>
                        </div>

                        <div class="mb-4">
                            <label class="form-label">YouTube Demo Video URL or ID</label>
                            <input type="text" name="youtube_video_url" class="form-control" placeholder="e.g. U31AZ2fZLhI or https://www.youtube.com/watch?v=..." />
                        </div>

                        <hr class="my-4">

                        <h5 class="fw-bold mb-3" style="color: #0A0A0A;"><i class="fa-solid fa-images text-danger me-2"></i> Project Media / Image Uploads</h5>

                        <div class="row g-3 mb-4">
                            <div class="col-md-6">
                                <label class="form-label">Image 1 (Main Image)</label>
                                <input type="file" name="image1" accept=".jpg, .jpeg, .png, .webp" class="form-control" required/>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Image 2</label>
                                <input type="file" name="image2" accept=".jpg, .jpeg, .png, .webp" class="form-control" />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Image 3</label>
                                <input type="file" name="image3" accept=".jpg, .jpeg, .png, .webp" class="form-control" />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Image 4</label>
                                <input type="file" name="image4" accept=".jpg, .jpeg, .png, .webp" class="form-control" />
                            </div>
                        </div>

                        <div class="d-flex justify-content-end gap-2">
                            <a href="{{ url('dashboard/Portfolio') }}" class="btn btn-outline-dark">Cancel</a>
                            <button type="submit" class="btn btn-primary">
                                <i class="fa-solid fa-check me-1"></i> Save Project
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

@include ('Admin.Dashboard.tech_footer')
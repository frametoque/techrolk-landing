@include ('Admin.Dashboard.tech_header')

<div class="container-fluid py-2">
    <div class="d-flex align-items-center justify-content-between mb-4">
        <div>
            <h2 class="fw-bold m-0" style="color: #0A0A0A; letter-spacing: -0.02em;">Edit Portfolio Project</h2>
            <p class="text-muted m-0 small">Update details for {{ $portfolio->title }}.</p>
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
                    <span class="fw-bold text-dark"><i class="fa-solid fa-pen-to-square me-2 text-danger"></i> Project Details</span>
                </div>
                <div class="card-body p-4">
                    <form method="post" action="{{ url('/Edit-portfolio', $portfolio->id) }}" enctype="multipart/form-data">
                        @csrf
                        <div class="mb-3">
                            <label class="form-label">Project Name / Title</label>
                            <input type="text" name="title" class="form-control" value="{{ $portfolio->title }}" required/>
                        </div>

                        <div class="row g-3 mb-3">
                            <div class="col-md-6">
                                <label class="form-label">Associated Service Category</label>
                                <select name="service_id" class="form-select form-control" required>
                                    @foreach($services as $service)
                                        <option value="{{ $service->id }}" {{ ($portfolio->service_id ?? $portfolio->book_id) == $service->id ? 'selected' : '' }}>
                                            {{ $service->name }}
                                        </option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Tags (Comma separated)</label>
                                <input type="text" name="tags" class="form-control" value="{{ is_array($portfolio->tags) ? implode(', ', $portfolio->tags) : $portfolio->tags }}"/>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Short Summary</label>
                            <textarea name="Sdescription" class="form-control" rows="2" required>{!! $portfolio->Sdescription ?? $portfolio->Short_description !!}</textarea>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Full Overview / Description</label>
                            <textarea name="description" class="form-control" rows="5" required>{!! $portfolio->description !!}</textarea>
                        </div>

                        <div class="row g-3 mb-3">
                            <div class="col-md-4">
                                <label class="form-label">Engineering Challenge</label>
                                <textarea name="challenge" class="form-control" rows="3">{!! $portfolio->challenge !!}</textarea>
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">Custom Solution</label>
                                <textarea name="solution" class="form-control" rows="3">{!! $portfolio->solution !!}</textarea>
                            </div>
                            <div class="col-md-4">
                                <label class="form-label">Project Outcome</label>
                                <textarea name="outcome" class="form-control" rows="3">{!! $portfolio->outcome !!}</textarea>
                            </div>
                        </div>

                        <div class="mb-4">
                            <label class="form-label">YouTube Demo Video URL or ID</label>
                            <input type="text" name="youtube_video_url" class="form-control" value="{{ $portfolio->youtube_video_url }}" />
                        </div>

                        <hr class="my-4">

                        <h5 class="fw-bold mb-3" style="color: #0A0A0A;"><i class="fa-solid fa-images text-danger me-2"></i> Project Media / Image Uploads</h5>

                        <div class="row g-4 mb-4">
                            <div class="col-md-6">
                                <label class="form-label">Image 1 (Main Image)</label>
                                <input type="file" name="image1" accept=".jpg, .jpeg, .png, .webp" class="form-control" />
                                @php
                                    $img1 = $portfolio->image1 ?? $portfolio->mainImage;
                                    if ($img1 && !str_starts_with($img1, '/')) { $img1 = '/uploadsP/' . $img1; }
                                @endphp
                                @if ($img1)
                                    <div class="mt-2">
                                        <img src="{{ $img1 }}" style="max-height: 100px; border-radius: 8px; border: 1px solid #E8E8E8;" />
                                    </div>
                                @endif
                            </div>

                            <div class="col-md-6">
                                <label class="form-label">Image 2</label>
                                <input type="file" name="image2" accept=".jpg, .jpeg, .png, .webp" class="form-control" />
                                @php
                                    $img2 = $portfolio->image2;
                                    if ($img2 && !str_starts_with($img2, '/')) { $img2 = '/uploadsP/' . $img2; }
                                @endphp
                                @if ($img2)
                                    <div class="mt-2">
                                        <img src="{{ $img2 }}" style="max-height: 100px; border-radius: 8px; border: 1px solid #E8E8E8;" />
                                    </div>
                                @endif
                            </div>

                            <div class="col-md-6">
                                <label class="form-label">Image 3</label>
                                <input type="file" name="image3" accept=".jpg, .jpeg, .png, .webp" class="form-control" />
                                @php
                                    $img3 = $portfolio->image3;
                                    if ($img3 && !str_starts_with($img3, '/')) { $img3 = '/uploadsP/' . $img3; }
                                @endphp
                                @if ($img3)
                                    <div class="mt-2">
                                        <img src="{{ $img3 }}" style="max-height: 100px; border-radius: 8px; border: 1px solid #E8E8E8;" />
                                    </div>
                                @endif
                            </div>

                            <div class="col-md-6">
                                <label class="form-label">Image 4</label>
                                <input type="file" name="image4" accept=".jpg, .jpeg, .png, .webp" class="form-control" />
                                @php
                                    $img4 = $portfolio->image4;
                                    if ($img4 && !str_starts_with($img4, '/')) { $img4 = '/uploadsP/' . $img4; }
                                @endphp
                                @if ($img4)
                                    <div class="mt-2">
                                        <img src="{{ $img4 }}" style="max-height: 100px; border-radius: 8px; border: 1px solid #E8E8E8;" />
                                    </div>
                                @endif
                            </div>
                        </div>

                        <div class="d-flex justify-content-end gap-2">
                            <a href="{{ url('dashboard/Portfolio') }}" class="btn btn-outline-dark">Cancel</a>
                            <button type="submit" class="btn btn-primary">
                                <i class="fa-solid fa-check me-1"></i> Update Project
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

@include ('Admin.Dashboard.tech_footer')
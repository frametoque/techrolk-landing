@include ('Admin.Dashboard.tech_header')

@if(session()->has('message'))
    <div class="alert alert-success alert-dismissible fade show border-0 shadow-sm rounded-3 mb-4" role="alert">
        <i class="fa-solid fa-circle-check me-2"></i> {{ session()->get('message') }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
@endif

<div class="container-fluid py-2" style="min-height: 700px;">
    <div class="d-flex align-items-center justify-content-between mb-4">
        <div>
            <h2 class="fw-bold m-0" style="color: #0A0A0A; letter-spacing: -0.02em;">Portfolio Management</h2>
            <p class="text-muted m-0 small">Showcase your engineering projects and custom builds.</p>
        </div>
        <div>
            <a href="{{ url('dashboard/Add-Portfolio') }}" class="btn btn-primary">
                <i class="fa-solid fa-plus me-1"></i> Add New Project
            </a>
        </div>
    </div>

    <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb border-0 shadow-sm p-3 mb-0">
            <li class="breadcrumb-item"><a href="{{ url('dashboard') }}"><i class="fa-solid fa-house me-1"></i> Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Portfolio</li>
        </ol>
    </nav>

    <div class="card border-0 shadow-sm">
        <div class="card-header bg-white py-3 border-bottom d-flex align-items-center justify-content-between">
            <span class="fw-bold text-dark"><i class="fa-solid fa-layer-group me-2 text-danger"></i> All Projects</span>
        </div>
        <div class="card-body p-0">
            <table id="datatablesSimple">
                <thead>
                    <tr>
                        <th width="8%">ID</th>
                        <th width="12%">Image</th>
                        <th width="25%">Project Name</th>
                        <th width="40%">Description</th>
                        <th width="15%" class="text-end">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($portfolios as $portfolio)
                        @php
                            $imgSrc = $portfolio->mainImage ?? $portfolio->image1;
                            if ($imgSrc && !str_starts_with($imgSrc, '/')) {
                                $imgSrc = '/uploadsP/' . $imgSrc;
                            }
                        @endphp
                        <tr>
                            <td><span class="badge bg-light text-dark border">{{ $portfolio->id }}</span></td>
                            <td>
                                @if($imgSrc)
                                    <img src="{{ $imgSrc }}" style="width: 64px; height: 64px; object-fit: cover; border-radius: 10px; border: 1px solid #E8E8E8;">
                                @else
                                    <span class="badge bg-light text-muted">No Image</span>
                                @endif
                            </td>
                            <td class="fw-bold text-dark">{{ $portfolio->title }}</td>
                            <td>
                                <div style="max-height: 60px; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; color: #6B6B6B; font-size: 13px;">
                                    {!! strip_tags($portfolio->description ?? $portfolio->Short_description) !!}
                                </div>
                            </td>
                            <td class="text-end">
                                <a href="{{ url('Edit-portfolio', $portfolio->id) }}" class="btn btn-sm btn-outline-dark me-1">
                                    <i class="fa-solid fa-pen-to-square"></i> Edit
                                </a>
                                <a onclick="return confirm('Are you sure you want to delete this portfolio project?')" href="{{ url('Delete-portfolio', $portfolio->id) }}" class="btn btn-sm btn-danger">
                                    <i class="fa-solid fa-trash"></i> Delete
                                </a>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>

@include ('Admin.Dashboard.tech_footer')
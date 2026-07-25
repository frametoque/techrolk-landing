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
            <h2 class="fw-bold m-0" style="color: #0A0A0A; letter-spacing: -0.02em;">Client Testimonials</h2>
            <p class="text-muted m-0 small">Manage reviews and feedback from enterprise partners and clients.</p>
        </div>
        <div>
            <a href="{{ url('dashboard/Add-testimonial') }}" class="btn btn-primary">
                <i class="fa-solid fa-plus me-1"></i> Add Testimonial
            </a>
        </div>
    </div>

    <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb border-0 shadow-sm p-3 mb-0">
            <li class="breadcrumb-item"><a href="{{ url('dashboard') }}"><i class="fa-solid fa-house me-1"></i> Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Testimonials</li>
        </ol>
    </nav>

    <div class="card border-0 shadow-sm">
        <div class="card-header bg-white py-3 border-bottom d-flex align-items-center justify-content-between">
            <span class="fw-bold text-dark"><i class="fa-solid fa-quote-left me-2 text-danger"></i> All Testimonials</span>
        </div>
        <div class="card-body p-0">
            <table id="datatablesSimple">
                <thead>
                    <tr>
                        <th width="8%">ID</th>
                        <th width="20%">Client Name</th>
                        <th width="20%">Role / Company</th>
                        <th width="37%">Feedback Quote</th>
                        <th width="15%" class="text-end">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($testimonials as $item)
                        <tr>
                            <td><span class="badge bg-light text-dark border">{{ $item->id }}</span></td>
                            <td class="fw-bold text-dark">{{ $item->name }}</td>
                            <td><span class="badge bg-light text-dark border px-2 py-1">{{ $item->role }}</span></td>
                            <td>
                                <div style="max-height: 50px; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; color: #6B6B6B; font-size: 13px;">
                                    "{!! strip_tags($item->text) !!}"
                                </div>
                            </td>
                            <td class="text-end">
                                <a href="{{ url('Edit-testimonial', $item->id) }}" class="btn btn-sm btn-outline-dark me-1">
                                    <i class="fa-solid fa-pen-to-square"></i> Edit
                                </a>
                                <a onclick="return confirm('Are you sure you want to delete this testimonial?')" href="{{ url('Delete-testimonial', $item->id) }}" class="btn btn-sm btn-danger">
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

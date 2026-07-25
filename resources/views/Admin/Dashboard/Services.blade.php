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
            <h2 class="fw-bold m-0" style="color: #0A0A0A; letter-spacing: -0.02em;">Services Management</h2>
            <p class="text-muted m-0 small">Create, edit, and organize your core services.</p>
        </div>
        <div>
            <a href="{{ url('dashboard/Add-services') }}" class="btn btn-primary">
                <i class="fa-solid fa-plus me-1"></i> Add New Service
            </a>
        </div>
    </div>

    <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb border-0 shadow-sm p-3 mb-0">
            <li class="breadcrumb-item"><a href="{{ url('dashboard') }}"><i class="fa-solid fa-house me-1"></i> Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Services</li>
        </ol>
    </nav>

    <div class="card border-0 shadow-sm">
        <div class="card-header bg-white py-3 border-bottom d-flex align-items-center justify-content-between">
            <span class="fw-bold text-dark"><i class="fa-solid fa-list me-2 text-danger"></i> All Services</span>
        </div>
        <div class="card-body p-0">
            <table id="datatablesSimple">
                <thead>
                    <tr>
                        <th width="10%">ID</th>
                        <th width="25%">Service Name</th>
                        <th width="50%">Description</th>
                        <th width="15%" class="text-end">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($services as $service)
                        <tr>
                            <td><span class="badge bg-light text-dark border">{{ $service->id }}</span></td>
                            <td class="fw-bold text-dark">{{ $service->name }}</td>
                            <td>
                                <div style="max-height: 60px; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; color: #6B6B6B; font-size: 13px;">
                                    {!! strip_tags($service->description) !!}
                                </div>
                            </td>
                            <td class="text-end">
                                <a href="{{ url('Edit-services', $service->id) }}" class="btn btn-sm btn-outline-dark me-1">
                                    <i class="fa-solid fa-pen-to-square"></i> Edit
                                </a>
                                <a onclick="return confirm('Are you sure you want to delete this service?')" href="{{ url('Delete-service', $service->id) }}" class="btn btn-sm btn-danger">
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
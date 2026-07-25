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
            <h2 class="fw-bold m-0" style="color: #0A0A0A; letter-spacing: -0.02em;">Partners & Dealerships</h2>
            <p class="text-muted m-0 small">Manage your corporate partners and authorized brand dealerships.</p>
        </div>
        <div>
            <a href="{{ url('dashboard/Add-partner') }}" class="btn btn-primary">
                <i class="fa-solid fa-plus me-1"></i> Add New Partner / Dealership
            </a>
        </div>
    </div>

    <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb border-0 shadow-sm p-3 mb-0">
            <li class="breadcrumb-item"><a href="{{ url('dashboard') }}"><i class="fa-solid fa-house me-1"></i> Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Partners</li>
        </ol>
    </nav>

    <div class="card border-0 shadow-sm">
        <div class="card-header bg-white py-3 border-bottom d-flex align-items-center justify-content-between">
            <span class="fw-bold text-dark"><i class="fa-solid fa-handshake me-2 text-danger"></i> All Partners & Dealerships</span>
        </div>
        <div class="card-body p-0">
            <table id="datatablesSimple">
                <thead>
                    <tr>
                        <th width="10%">ID</th>
                        <th width="15%">Logo</th>
                        <th width="35%">Partner / Brand Name</th>
                        <th width="20%">Type</th>
                        <th width="20%" class="text-end">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($partners as $partner)
                        <tr>
                            <td><span class="badge bg-light text-dark border">{{ $partner->id }}</span></td>
                            <td>
                                @if($partner->logo)
                                    <img src="{{ $partner->logo }}" style="max-height: 48px; max-width: 90px; object-fit: contain; border-radius: 6px;">
                                @else
                                    <span class="badge bg-light text-muted">No Logo</span>
                                @endif
                            </td>
                            <td class="fw-bold text-dark">{{ $partner->name }}</td>
                            <td>
                                <span class="badge {{ $partner->type === 'dealership' ? 'bg-danger text-white' : 'bg-dark text-white' }} px-3 py-2" style="border-radius: 6px; font-weight: 600; text-transform: uppercase; font-size: 11px;">
                                    {{ $partner->type }}
                                </span>
                            </td>
                            <td class="text-end">
                                <a href="{{ url('Edit-partner', $partner->id) }}" class="btn btn-sm btn-outline-dark me-1">
                                    <i class="fa-solid fa-pen-to-square"></i> Edit
                                </a>
                                <a onclick="return confirm('Are you sure you want to delete this partner?')" href="{{ url('Delete-partner', $partner->id) }}" class="btn btn-sm btn-danger">
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

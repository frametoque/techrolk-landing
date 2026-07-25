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
            <h2 class="fw-bold m-0" style="color: #0A0A0A; letter-spacing: -0.02em;">Team Members</h2>
            <p class="text-muted m-0 small">Manage leadership, engineers, and key personnel profiles.</p>
        </div>
        <div>
            <a href="{{ url('dashboard/Add-team') }}" class="btn btn-primary">
                <i class="fa-solid fa-plus me-1"></i> Add Team Member
            </a>
        </div>
    </div>

    <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb border-0 shadow-sm p-3 mb-0">
            <li class="breadcrumb-item"><a href="{{ url('dashboard') }}"><i class="fa-solid fa-house me-1"></i> Dashboard</a></li>
            <li class="breadcrumb-item active" aria-current="page">Team</li>
        </ol>
    </nav>

    <div class="card border-0 shadow-sm">
        <div class="card-header bg-white py-3 border-bottom d-flex align-items-center justify-content-between">
            <span class="fw-bold text-dark"><i class="fa-solid fa-users me-2 text-danger"></i> All Team Members</span>
        </div>
        <div class="card-body p-0">
            <table id="datatablesSimple">
                <thead>
                    <tr>
                        <th width="8%">ID</th>
                        <th width="12%">Photo</th>
                        <th width="25%">Full Name</th>
                        <th width="20%">Role / Position</th>
                        <th width="20%">Bio Summary</th>
                        <th width="15%" class="text-end">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($teams as $member)
                        <tr>
                            <td><span class="badge bg-light text-dark border">{{ $member->id }}</span></td>
                            <td>
                                @if($member->image)
                                    <img src="{{ $member->image }}" style="width: 48px; height: 48px; object-fit: cover; border-radius: 50%; border: 1px solid #E8E8E8;">
                                @else
                                    <span class="badge bg-light text-muted">No Photo</span>
                                @endif
                            </td>
                            <td class="fw-bold text-dark">{{ $member->name }}</td>
                            <td><span class="badge bg-light text-dark border px-2 py-1">{{ $member->role }}</span></td>
                            <td>
                                <div style="max-height: 50px; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; color: #6B6B6B; font-size: 13px;">
                                    {!! strip_tags($member->bio) !!}
                                </div>
                            </td>
                            <td class="text-end">
                                <a href="{{ url('Edit-team', $member->id) }}" class="btn btn-sm btn-outline-dark me-1">
                                    <i class="fa-solid fa-pen-to-square"></i> Edit
                                </a>
                                <a onclick="return confirm('Are you sure you want to delete this team member?')" href="{{ url('Delete-team', $member->id) }}" class="btn btn-sm btn-danger">
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

<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TechRoLK - Admin Control Panel</title>
    <link rel="icon" type="image/png" href="/favicon-light.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    
    <!-- Bootstrap core CSS & FontAwesome -->
    <link rel="stylesheet" href="/adm/tech_admin_dashboard/css/styles.css">
    <link rel="stylesheet" href="/adm/tech_admin_dashboard/css/simple-datatables-style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" type="text/css" href="https://jhollingworth.github.io/bootstrap-wysihtml5//lib/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="https://jhollingworth.github.io/bootstrap-wysihtml5//src/bootstrap-wysihtml5.css">

    <style>
        body {
            font-family: 'Inter', sans-serif !important;
            background-color: #F8F9FA !important;
            color: #0A0A0A;
        }

        /* Topbar Header */
        .sb-topnav {
            background-color: #0A0A0A !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            height: 64px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .sb-topnav .navbar-brand {
            font-weight: 800;
            font-size: 16px;
            color: #FFFFFF !important;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        /* Sidebar Navigation */
        .sb-sidenav-dark {
            background-color: #0A0A0A !important;
            border-right: 1px solid rgba(255, 255, 255, 0.06);
        }

        .sb-sidenav-dark .sb-sidenav-menu .nav-link {
            color: rgba(255, 255, 255, 0.65) !important;
            font-weight: 500;
            font-size: 14px;
            padding: 12px 18px;
            border-radius: 8px;
            margin: 4px 12px;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .sb-sidenav-dark .sb-sidenav-menu .nav-link:hover {
            color: #FFFFFF !important;
            background-color: rgba(204, 31, 42, 0.15) !important;
        }

        .sb-sidenav-dark .sb-sidenav-menu .nav-link.active {
            color: #FFFFFF !important;
            background-color: #CC1F2A !important;
            font-weight: 700;
            box-shadow: 0 4px 14px rgba(204, 31, 42, 0.35);
        }

        /* Cards & Panels */
        .card, .panel {
            border: 1px solid #E8E8E8 !important;
            border-radius: 14px !important;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03) !important;
            overflow: hidden;
            background: #FFFFFF !important;
        }

        .card-header, .panel-heading {
            background-color: #FFFFFF !important;
            border-bottom: 1px solid #F0F0F0 !important;
            padding: 18px 24px !important;
            font-weight: 700;
        }

        .panel-heading h3 {
            font-weight: 800;
            font-size: 20px;
            margin: 0;
            color: #0A0A0A !important;
        }

        .panel-body {
            padding: 28px !important;
        }

        /* Tables & Datatables */
        table.dataTable, table.table, .datatable-table {
            border-collapse: separate !important;
            border-spacing: 0 !important;
            width: 100% !important;
            border: none !important;
        }

        .datatable-table th, table th {
            background-color: #F8F9FA !important;
            color: #4A4A4A !important;
            font-weight: 700 !important;
            font-size: 13px !important;
            text-transform: uppercase !important;
            letter-spacing: 0.04em !important;
            padding: 14px 16px !important;
            border-bottom: 1px solid #E8E8E8 !important;
            border-top: none !important;
        }

        .datatable-table td, table td {
            padding: 16px !important;
            vertical-align: middle !important;
            border-bottom: 1px solid #F0F0F0 !important;
            font-size: 14px;
            color: #2D2D2D;
        }

        .datatable-table tr:hover td, table tr:hover td {
            background-color: #FAFBFD !important;
        }

        .datatable-input, .datatable-selector {
            border: 1px solid #E2E8F0 !important;
            border-radius: 8px !important;
            padding: 8px 14px !important;
            font-size: 14px !important;
            outline: none !important;
            background-color: #FFFFFF !important;
        }

        .datatable-input:focus {
            border-color: #CC1F2A !important;
            box-shadow: 0 0 0 3px rgba(204, 31, 42, 0.12) !important;
        }

        /* Form Controls */
        .form-control, input[type="text"], input[type="file"], select, textarea {
            border: 1px solid #E2E8F0 !important;
            border-radius: 9px !important;
            padding: 10px 14px !important;
            font-size: 14px !important;
            color: #0A0A0A !important;
            background-color: #FFFFFF !important;
            box-shadow: none !important;
            transition: all 0.2s ease !important;
        }

        .form-control:focus, input[type="text"]:focus, select:focus, textarea:focus {
            border-color: #CC1F2A !important;
            box-shadow: 0 0 0 3px rgba(204, 31, 42, 0.12) !important;
        }

        .form-group label {
            font-weight: 700 !important;
            font-size: 13px !important;
            color: #4A4A4A !important;
            margin-bottom: 8px !important;
            text-transform: uppercase;
            letter-spacing: 0.03em;
        }

        /* Buttons */
        .btn {
            border-radius: 8px !important;
            font-weight: 600 !important;
            font-size: 13px !important;
            padding: 8px 18px !important;
            transition: all 0.2s ease !important;
            box-shadow: none !important;
        }

        .btn-primary, .btn-info, .btn-success {
            background: #CC1F2A !important;
            border-color: #CC1F2A !important;
            color: #FFFFFF !important;
        }

        .btn-primary:hover, .btn-info:hover, .btn-success:hover {
            background: #A81822 !important;
            border-color: #A81822 !important;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(204, 31, 42, 0.25) !important;
        }

        .btn-danger {
            background: #FFF5F5 !important;
            border-color: #FEB2B2 !important;
            color: #E53E3E !important;
        }

        .btn-danger:hover {
            background: #E53E3E !important;
            border-color: #E53E3E !important;
            color: #FFFFFF !important;
            transform: translateY(-1px);
        }

        .btn-outline-dark {
            border: 1px solid #E2E8F0 !important;
            color: #0A0A0A !important;
            background: #FFFFFF !important;
        }

        .btn-outline-dark:hover {
            background: #F8F9FA !important;
            border-color: #CBD5E0 !important;
        }

        .breadcrumb {
            background: #FFFFFF !important;
            border: 1px solid #E8E8E8 !important;
            border-radius: 10px !important;
            padding: 10px 16px !important;
        }

        .breadcrumb-item a {
            color: #CC1F2A !important;
            text-decoration: none;
            font-weight: 500;
        }

        a, a:hover, a:focus, a:active {
            text-decoration: none !important;
        }

        ::selection {
            background-color: #CC1F2A;
            color: #ffffff;
        }
    </style>
</head>

<body class="sb-nav-fixed">
    <nav class="sb-topnav navbar navbar-expand navbar-dark">
        <a class="navbar-brand ps-3" href="{{url('/dashboard')}}">
            <img src="/Logo PNG 02.png" alt="TechRoLK Logo" style="height: 32px; width: auto;">
            <span style="font-size: 18px; font-weight: 900; color: #FFFFFF; letter-spacing: -0.02em; font-family: 'Inter', sans-serif;">
                Tech<span style="color: #CC1F2A;">RoLK</span>
                <span style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: rgba(255,255,255,0.5); margin-left: 6px; letter-spacing: 0.08em; border: 1px solid rgba(255,255,255,0.15); padding: 2px 8px; border-radius: 6px;">Admin</span>
            </span>
        </a>
        <div class="ms-auto pe-4">
            <a href="/" target="_blank" class="btn btn-sm btn-outline-dark" style="border-radius: 8px; font-weight: 600; background: rgba(255,255,255,0.08) !important; border: 1px solid rgba(255,255,255,0.2) !important; color: #FFFFFF !important;">
                <i class="fa-solid fa-arrow-up-right-from-square me-1"></i> View Live Site
            </a>
        </div>
    </nav>

    <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
            <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div class="sb-sidenav-menu">
                    <div class="nav pt-3">
                        <a class="nav-link {{ request()->is('dashboard', 'dashboard/index') ? 'active' : '' }}" href="{{url('dashboard/index')}}">
                            <i class="fa-solid fa-chart-line"></i> Dashboard
                        </a>
                        <a class="nav-link {{ request()->is('dashboard/services*', 'Edit-services*') ? 'active' : '' }}" href="{{url('dashboard/services')}}">
                            <i class="fa-solid fa-gears"></i> Services
                        </a>
                        <a class="nav-link {{ request()->is('dashboard/Portfolio*', 'Edit-portfolio*') ? 'active' : '' }}" href="{{url('dashboard/Portfolio')}}">
                            <i class="fa-solid fa-layer-group"></i> Portfolio
                        </a>
                        <a class="nav-link {{ request()->is('dashboard/partners*', 'Edit-partner*') ? 'active' : '' }}" href="{{url('dashboard/partners')}}">
                            <i class="fa-solid fa-handshake"></i> Partners & Dealerships
                        </a>
                        <a class="nav-link {{ request()->is('dashboard/teams*', 'Edit-team*') ? 'active' : '' }}" href="{{url('dashboard/teams')}}">
                            <i class="fa-solid fa-users"></i> Team Members
                        </a>
                        <a class="nav-link {{ request()->is('dashboard/testimonials*', 'Edit-testimonial*') ? 'active' : '' }}" href="{{url('dashboard/testimonials')}}">
                            <i class="fa-solid fa-quote-left"></i> Testimonials
                        </a>
                        <a class="nav-link text-danger mt-4" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                            <i class="fa-solid fa-right-from-bracket"></i> Logout
                        </a>

                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            @csrf
                        </form>
                    </div>
                </div>
            </nav>
        </div>
        <div id="layoutSidenav_content">
            <main class="p-4">

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Services | TechRoLK Engineering Solutions</title>
    <meta name="description" content="Explore TechRoLK's services: 3D CAD modeling, 3D printing, custom drone solutions, prototyping, and FPV drone assembly.">
    <link rel="icon" type="image/png" href="/favicon-light.png">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    <style>
        body { margin: 0; font-family: 'Inter', sans-serif; background-color: #FAFAFA; color: #0A0A0A; }
    </style>
</head>
<body>
    <div id="react-services-root" data-props="{{ json_encode(['servicesData' => $services]) }}"></div>
</body>
</html>
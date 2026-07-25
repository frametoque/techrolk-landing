<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TechRoLK | Engineering Solutions & Prototyping</title>
    <meta name="description" content="From precision CAD design and premium 3D printing to custom drone solutions, TechRoLK transforms concepts into working prototypes in Sri Lanka.">
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
    <div id="react-home-root" data-props="{{ json_encode(['servicesData' => $services, 'testimonialsData' => $testimonials]) }}"></div>
</body>
</html>
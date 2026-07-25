<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>500 - Internal Server Error | TechRoLK</title>
    <link rel="icon" type="image/png" href="/favicon-light.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Inter', sans-serif;
            background-color: #0A0A0A;
            color: #FFFFFF;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }
        .bg-glow {
            position: absolute;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(204, 31, 42, 0.15) 0%, rgba(10, 10, 10, 0) 70%);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
        }
        .container { text-align: center; z-index: 10; max-width: 600px; padding: 2rem; }
        .logo { height: 48px; width: auto; margin-bottom: 2rem; }
        .error-code {
            font-size: 8rem;
            font-weight: 900;
            line-height: 1;
            background: linear-gradient(135deg, #FFFFFF 0%, #CC1F2A 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 1rem;
        }
        .error-title { font-size: 1.75rem; font-weight: 800; margin-bottom: 1rem; color: #FFFFFF; }
        .error-desc { font-size: 1rem; color: rgba(255, 255, 255, 0.65); line-height: 1.6; margin-bottom: 2.5rem; }
        .btn-group { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .btn {
            display: inline-flex; align-items: center; gap: 0.5rem;
            padding: 0.85rem 1.75rem; border-radius: 10px; font-weight: 700;
            font-size: 0.95rem; text-decoration: none; transition: all 0.25s ease;
        }
        .btn-primary { background-color: #CC1F2A; color: #FFFFFF; box-shadow: 0 4px 20px rgba(204, 31, 42, 0.4); }
        .btn-primary:hover { background-color: #A81822; transform: translateY(-2px); }
    </style>
</head>
<body>
    <div class="bg-glow"></div>
    <div class="container">
        <img src="/Logo PNG 02.png" alt="TechRoLK Logo" class="logo">
        <div class="error-code">500</div>
        <h1 class="error-title">Internal Server Error</h1>
        <p class="error-desc">Something went wrong on our servers. Our engineering team has been notified.</p>
        <div class="btn-group">
            <a href="/" class="btn btn-primary"><i class="fa-solid fa-house"></i> Return Home</a>
        </div>
    </div>
</body>
</html>

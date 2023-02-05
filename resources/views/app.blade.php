<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    @vite('resources/css/app.css')
    <script src="https://kit.fontawesome.com/18c274e5f3.js" crossorigin="anonymous"></script>

    {{--
    <link rel="stylesheet" href="/assets/css/style.css" /> --}}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
        rel="stylesheet" />

</head>

<body class="antialiased">
    <div id="app" style="position: relative;">

    </div>
    @vite("resources/js/app.js")

    {{-- <script src="/assets/js/script.js"></script> --}}
</body>

</html>
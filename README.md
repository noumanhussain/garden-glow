# Garden Glow 🌿

A modern e-commerce platform for plants, gardening supplies, and accessories. Built with Laravel, React, and Tailwind CSS.

## Features

-   **Modern UI/UX**: Clean and responsive design optimized for all devices
-   **Dynamic Navigation**: Interactive dropdown menus for easy category browsing
-   **Product Sections**:
    -   Latest Products showcase
    -   Featured collections
    -   Service highlights
    -   Interactive image sliders

## Core Components

-   **Header Navigation**:

    -   Category-based dropdowns
    -   Smart hover interactions
    -   Mobile-responsive menu

-   **Product Displays**:

    -   Grid layouts
    -   Hover effects
    -   Rating system
    -   Price displays

-   **Services Section**:
    -   Pick Your Plant
    -   Choose Pot Colors
    -   Shipping Options
    -   Growth Guidance

## Tech Stack

-   **Backend**: Laravel 10
-   **Frontend**: React with Inertia.js
-   **Styling**: Tailwind CSS
-   **State Management**: React Hooks
-   **Routing**: Laravel + Inertia

## Getting Started

1. Clone the repository:

```bash
git clone [repository-url]
cd garden-glow
```

2. Install PHP dependencies:

```bash
composer install
```

3. Install NPM packages:

```bash
npm install
```

4. Set up environment file:

```bash
cp .env.example .env
php artisan key:generate
```

5. Start the development server:

```bash
php artisan serve
```

6. In a separate terminal, start the Vite development server:

```bash
npm run dev
```

## Project Structure

```
garden-glow/
├── resources/
│   ├── js/
│   │   ├── Components/    # React components
│   │   ├── Layouts/      # Page layouts
│   │   └── Pages/        # Page components
│   └── css/
│       └── app.css       # Global styles
├── public/
│   └── images/           # Static images
└── routes/
    └── web.php          # Web routes
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

-   Plant images from Pexels
-   Icons and design inspiration from various gardening websites
-   Laravel and React communities for excellent documentation and resources

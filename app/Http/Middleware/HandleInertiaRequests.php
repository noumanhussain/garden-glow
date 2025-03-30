<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => Auth::user(),
                'isLoggedIn' => Auth::check(),
            ],
            'flash' => [
                'message' => $request->session()->get('message'),
                'error' => $request->session()->get('error'),
                'success' => $request->session()->get('success'),
            ],
            'ziggy' => function () use ($request) {
                return [
                    'location' => $request->url(),
                ];
            },
            'debug' => [
                'session_id' => $request->session()->getId(),
                'has_session' => $request->hasSession(),
                'auth_check' => Auth::check(),
                'user_exists' => !is_null(Auth::user()),
                'session_data' => $request->session()->all(),
            ],
        ]);
    }
}

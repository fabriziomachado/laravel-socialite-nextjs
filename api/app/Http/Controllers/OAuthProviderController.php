<?php

namespace App\Http\Controllers;

use App\Enums\OAuthProviderEnum;
use App\Models\OAuthProvider;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class OAuthProviderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(OAuthProviderEnum $provider)
    {
        return Socialite::driver($provider->value)->redirect();
    }

    public function store(OAuthProviderEnum $provider)
    {
        $socialite = Socialite::driver($provider->value)->user();

        $user = User::firstOrCreate([
            'email' => $socialite->getEmail(),
        ], [
                'name' => $socialite->getName()
            ]);

        $user->providers()->updateOrCreate([
            'provider' => $provider,
            'provider_id' => $socialite->getId(),
        ]);

        Auth::login($user);

        return redirect(config('app.frontend_url') . '/dashboard');
    }


}
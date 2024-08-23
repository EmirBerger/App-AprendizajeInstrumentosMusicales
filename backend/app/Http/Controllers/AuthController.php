<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use \stdClass;

class AuthController extends Controller
{
    protected array $validationRules = [
        'email' => 'required',
        'password' => 'required',
    ];

    protected array $validationMessages = [
        'email.required' => 'El correo es requerido.',
        'password.required' => 'La contraseña es requerido.',
    ];

    public function register(Request $request)
    {
        $request->validate($this->validationRules, $this->validationMessages);
        $input = $request->all();
        $user = User::create($input);
        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json([
            'message' => 'Usuario registrado con éxito', 
            'data'=> $user, 
            'access_token' => $token, 
            'token_type' => 'Bearer'
        ], 201,);
    }

    public function login(Request $request)
    {
        $request->validate($this->validationRules, $this->validationMessages);
        $credentials = $request->only(['email', 'password']);
        if(!auth()->attempt($credentials)){
            return response()->json(['message' => 'Email o Contraseña incorrecta'], 404);
        }
        $user = User::where('email', $request['email'])->firstOrFail();
        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json([
            'message' => 'Sesión Iniciada',
            'user'=> $user, 
            'access_token' => $token, 
            'token_type' => 'Bearer'
        ], 201);
    
    }
    
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        // auth()->logout();
        // $request->session()->invalidate();
        // $request->session()->regenerateToken();
        return response()->json(['message' => 'Sesión cerrada'], 201);

        // auth()->user()->tokens()->delete();
        // return response()->json(['message' => 'Sesión cerrada'], 201);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\SheetMusic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;

class SheetMusicController extends Controller
{
    protected array $validationRules = [
        'title' => 'required',
        'author' => 'required',
        'sheet_music' => 'required',
    ];

    protected array $validationMessages = [
        'title.required' => 'El titulo es requerido',
        'author.required' => 'El autor es requerido',
        'sheet_music.required' => 'La partitura es requerida',
    ];

    public function getListSheetMusic()
    {
        $sheetMusic = SheetMusic::all();
        return $sheetMusic;
    }

    public function getSheetMusic($id)
    {
        $sheetMusic = SheetMusic::findOrFail($id);
        $sheetMusic->sheet_music = asset('storage/' . $sheetMusic->sheet_music);
        return response()->json($sheetMusic);
    }

    public function createSheetMusic(Request $request)
    {
        $request->validate($this->validationRules, $this->validationMessages);
        $input = $request->all();
        try {
            DB::beginTransaction();
            if ($request->hasFile('sheet_music')) {
                $input['sheet_music'] = $request->file('sheet_music')->store('sistroFiles/sheetMusic');
            }
            SheetMusic::create($input);
            DB::commit();
            return response()->json(['message' => 'Partitura agregada'], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Ocurrio un error, partitura no agregada'], 404);
        }
    }

    public function editSheetMusic($id, Request $request)
    {
        $request->validate($this->validationRules, $this->validationMessages);
        $sheetMusic = SheetMusic::findOrFail($id);
        $input = $request->all();
        $oldSheetMusic = $sheetMusic->sheet_Music;
        try {
            DB::beginTransaction();
            if ($request->hasFile('sheet_music')) {
                $input['sheet_music'] = $request->file('sheet_music')->store('sistroFiles/sheetMusic');
            }
            $sheetMusic->update($input);
            if ($request->hasFile('sheet_music') && !empty($oldSheetMusic)) {
                Storage::delete($oldSheetMusic);
            }
            DB::commit();
            return response()->json(['message' => 'Partitura editada'], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Ocurrio un error, partitura no editada'], 404);
        }
    }

    public function deleteSheetMusic($id)
    {
        $sheetMusic = SheetMusic::findOrFail($id);
        try {
            DB::beginTransaction();
            $sheetMusic->delete();
            if ($sheetMusic->sheet_music && Storage::exists($sheetMusic->sheet_music)) {
                Storage::delete($sheetMusic->sheet_music);
            }
            DB::commit();
            return response()->json(['message' => 'Partitura eliminada'], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Ocurrio un error, partitura no eliminada'], 404);
        }
    }
}

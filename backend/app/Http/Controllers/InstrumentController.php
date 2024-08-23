<?php

namespace App\Http\Controllers;

use App\Models\Instrument;
use App\Models\Lesson;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class InstrumentController extends Controller
{
    protected array $createValidationRules = [
        'name' => 'required|unique:instruments,name',
        'image' => 'required',
        'image_description' => 'required'
    ];

    protected array $validationRules = [
        'name' => 'required',
        'image_description' => 'required'
    ];

    protected array $validationMessages = [
        'name.required' => 'El nombre del instrumento es requerido',
        'name.unique' => 'El instrumento ya esta cargado',
        'image.required' => 'La imagen del instrumento es requerida',
        'image_description.required' => 'La descripción es requerida'
    ];

    public function getInstruments()
    {
        $instruments = Instrument::all();
        return $instruments;
    }

    public function createInstrument(Request $request)
    {
        $request->validate($this->createValidationRules, $this->validationMessages);
        $input = $request->except('image');
        try {
            DB::beginTransaction();
            if ($request->hasFile('image')) {
                $input['image'] = $request->file('image')->store('sistroFiles/imageInstrument');
            }
            Instrument::create($input);
            DB::commit();
            return response()->json(['message' => 'Instrumento agregado'], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Ocurrio un error, instrumento no agregado'], 404);
        }
    }

    public function editInstrument(int $id, Request $request)
    {
        $request->validate($this->validationRules, $this->validationMessages);
        $instrument = Instrument::findOrFail($id);
        $input = $request->only('name', 'image', 'image_description');
        $oldImage = $instrument->image;
        try {
            DB::beginTransaction();
            if ($request->hasFile('image')) {
                $input['image'] = $request->file('image')->store('sistroFiles/imageInstrument');
            }
            $instrument->update($input);
            if ($request->hasFile('image')) {
                Storage::delete($oldImage);
            }
            DB::commit();
            return response()->json(['message' => 'Instrumento editado']);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Ocurrio un error, instrumento no editado']);
        }
    }
    public function deleteInstrument(int $id, Request $request)
    {
        $instrument = Instrument::findOrFail($id);
        try {
            DB::beginTransaction();
            Lesson::where('instrument_fk', $id)->delete();
            $instrument->delete();
            if ($instrument->image && Storage::exists($instrument->image)) {
                Storage::delete($instrument->image);
            }
            DB::commit();
            return response()->json(['message' => 'Instrumento eliminado']);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Ocurrio un error, instrumento no eliminado']);
        }
    }
}

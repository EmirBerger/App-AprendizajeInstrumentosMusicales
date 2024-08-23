<?php

namespace App\Http\Controllers;

use App\Models\Lesson;
use App\Models\Instrument;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class LessonsController extends Controller
{
    protected array $validationRules = [
        'title' => 'required',
        'description' => 'required',
        'video' => 'required',
        'theory' => 'required',
    ];

    protected array $validationMessages = [
        'title.required' => 'El titulo es requerido',
        'description.required' => 'La descripción es requerida',
        'video.required' => 'El video es requerido',
        'theory.required' => 'La teoria es requerida',
    ];

    public function getLessonsInstrument($id)
    {
        $instrument = Instrument::with('lesson')->findOrFail($id);
        $lessons = $instrument->lesson;
        return $lessons;
    }

    public function getLesson($id)
    {
        $lesson =  Lesson::findOrFail($id);
        $lesson->theory = asset('storage/' . $lesson->theory);
        return $lesson;
    }

    public function createLesson(Request $request)
    {
        $request->validate($this->validationRules, $this->validationMessages);
        $input = $request->all();
        try {
            DB::beginTransaction();
            if ($request->hasFile('theory')) {
                $input['theory'] = $request->file('theory')->store('sistroFiles/theory');
            }
            Lesson::create($input);
            DB::commit();
            return response()->json(['message' => 'Clase agregada'], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Ocurrio un error, clase no agregada', 'error' => $e->getMessage()], 404);
        }
    }

    public function editLesson($id, Request $request)
    {
        $request->validate($this->validationRules, $this->validationMessages);
        $lesson = Lesson::findOrFail($id);
        $input = $request->only(['instrument_fk', 'title', 'description', 'video', 'theory']);
        $oldTheory = $lesson->theory;
        try {
            DB::beginTransaction();
            if ($request->hasFile('theory')) {
                $input['theory'] = $request->file('theory')->store('sistroFiles/theory');
            }
            $lesson->update($input);
            if ($request->hasFile('theory')) {
                Storage::delete($oldTheory);
            }
            DB::commit();
            return response()->json(['message' => 'Clase editada']);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Ocurrio un error, clase no editada']);
        }
    }
    public function deleteLesson($id)
    {
        $lesson = Lesson::findOrFail($id);
        try {
            DB::beginTransaction();
            $lesson->delete();
            if ($lesson->theory && Storage::exists($lesson->theory)) {
                Storage::delete($lesson->theory);
            }
            DB::commit();
            return response()->json(['message' => 'Clase eliminada']);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Ocurrio un error, clase no eliminada']);
        }
    }
}

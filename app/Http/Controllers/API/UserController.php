<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Validator;


class UserController extends Controller
{
  // all users
  public function index()
  {
    $users = User::all()->toArray();

    return array_reverse($users);
  }

  // add user
  public function add(Request $request)
  {
    $user = new User([
      'name' => $request->input('name'),
      'email' => $request->input('email'),
      'password' => $request->input('password')
    ]);
    $user->save();

    return response()->json('The user successfully added.');
  }

  // edit user
  public function edit($id)
  {
    $user = User::find($id);
    return response()->json($user);
  }

  // update user
  public function update($id, Request $request)
  {
    $user = User::find($id);
    $user->update($request->all());

    return response()->json('The user successfully updated.');
  }

  // delete user
  public function delete($id)
  {
    $user = User::find($id);
    $user->delete();

    return response()->json('The user sucessfully deleted.');
  }
}

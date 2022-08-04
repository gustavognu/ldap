<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChatigoController;
// use App\Lib\CoreHelper;;
require __DIR__.'/auth.php';

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

Route::get('/usuarios', function () {
    return view('usuarios');
})->middleware(['auth'])->name('usuarios');

Route::get('chatigo', [ChatigoController::class, 'index']);

use App\Http\Controllers\AjustesController;
Route::get('ajustes', [AjustesController::class, 'index']);
Route::post('set_ajustes', [AjustesController::class, 'set_ajustes']);
Route::post('get_ajustes_by_id', [AjustesController::class, 'get_ajustes_by_id']);
Route::post('delete_ajustes', [AjustesController::class, 'delete_ajustes']);
Route::post('undo_delete_ajustes', [AjustesController::class, 'undo_delete_ajustes']);
Route::get('get_ajustes_by_datatable', [AjustesController::class, 'get_ajustes_by_datatable']);

use App\Http\Controllers\Admin_migrationsController;
Route::get('admin_migrations', [Admin_migrationsController::class, 'index']);
Route::post('set_admin_migrations', [Admin_migrationsController::class, 'set_admin_migrations']);
Route::post('get_admin_migrations_by_id', [Admin_migrationsController::class, 'get_admin_migrations_by_id']);
Route::post('delete_admin_migrations', [Admin_migrationsController::class, 'delete_admin_migrations']);
Route::post('undo_delete_admin_migrations', [Admin_migrationsController::class, 'undo_delete_admin_migrations']);
Route::get('get_admin_migrations_by_datatable', [Admin_migrationsController::class, 'get_admin_migrations_by_datatable']);




use App\Http\Controllers\LdapController;
Route::get('ldap', [LdapController::class, 'index']);
Route::post('set_ldap', [LdapController::class, 'set_ldap']);
Route::post('get_ldap_by_id', [LdapController::class, 'get_ldap_by_id']);
Route::post('delete_ldap', [LdapController::class, 'delete_ldap']);
Route::post('undo_delete_ldap', [LdapController::class, 'undo_delete_ldap']);
Route::get('get_ldap_by_datatable', [LdapController::class, 'get_ldap_by_datatable']);


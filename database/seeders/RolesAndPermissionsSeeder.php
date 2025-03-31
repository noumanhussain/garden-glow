<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;
use App\Enums\PermissionsEnum;
use App\Enums\RoleEnum;
use Illuminate\Support\Facades\Hash;

class RolesAndPermissionsSeeder extends Seeder
{
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // Create permissions
        foreach (PermissionsEnum::asArray() as $permission) {
            Permission::create(['name' => $permission]);
        }

        // Create roles and assign permissions
        foreach (RoleEnum::asArray() as $roleName) {
            $role = Role::create(['name' => $roleName]);
            $permissions = RoleEnum::getPermissions($roleName);
            $role->givePermissionTo($permissions);
        }

        // Create super admin user
        $superAdmin = User::create([
            'name' => 'Super Admin',
            'email' => 'superadmin@gardenglow.com',
            'password' => Hash::make('password123'),
        ]);
        $superAdmin->assignRole(RoleEnum::SUPER_ADMIN);

        // Create admin user
        $admin = User::create([
            'name' => 'Admin User',
            'email' => 'admin@gardenglow.com',
            'password' => Hash::make('password123'),
        ]);
        $admin->assignRole(RoleEnum::ADMIN);

        // Create manager user
        $manager = User::create([
            'name' => 'Manager User',
            'email' => 'manager@gardenglow.com',
            'password' => Hash::make('password123'),
        ]);
        $manager->assignRole(RoleEnum::MANAGER);
    }
}

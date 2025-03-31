<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static SUPER_ADMIN()
 * @method static static ADMIN()
 * @method static static MANAGER()
 * @method static static EDITOR()
 * @method static static CUSTOMER()
 */
final class RoleEnum extends Enum
{
    const SUPER_ADMIN = 'super-admin';
    const ADMIN = 'admin';
    const MANAGER = 'manager';
    const EDITOR = 'editor';
    const CUSTOMER = 'customer';

    public static function getDescription($value): string
    {
        return match ($value) {
            self::SUPER_ADMIN => 'Super Administrator',
            self::ADMIN => 'Administrator',
            self::MANAGER => 'Store Manager',
            self::EDITOR => 'Content Editor',
            self::CUSTOMER => 'Customer',
            default => parent::getDescription($value),
        };
    }

    public static function getPermissions($value): array
    {
        return match ($value) {
            self::SUPER_ADMIN => [
                PermissionsEnum::RoleList,
                PermissionsEnum::RoleCreate,
                PermissionsEnum::RoleEdit,
                PermissionsEnum::RoleDelete,
                // Add all other permissions here
            ],
            self::ADMIN => [
                PermissionsEnum::RoleList,
                PermissionsEnum::RoleCreate,
                PermissionsEnum::RoleEdit,
                // Add admin-specific permissions
            ],
            self::MANAGER => [
                PermissionsEnum::RoleList,
                // Add manager-specific permissions
            ],
            self::EDITOR => [
                // Add editor-specific permissions
            ],
            self::CUSTOMER => [
                // Add customer-specific permissions
            ],
            default => [],
        };
    }

    public static function getBadgeClasses($value): string
    {
        return match ($value) {
            self::SUPER_ADMIN => 'bg-purple-100 text-purple-800',
            self::ADMIN => 'bg-red-100 text-red-800',
            self::MANAGER => 'bg-blue-100 text-blue-800',
            self::EDITOR => 'bg-yellow-100 text-yellow-800',
            self::CUSTOMER => 'bg-green-100 text-green-800',
            default => 'bg-gray-100 text-gray-800',
        };
    }

    public static function getIcon($value): string
    {
        return match ($value) {
            self::SUPER_ADMIN => 'shield-check',
            self::ADMIN => 'shield',
            self::MANAGER => 'briefcase',
            self::EDITOR => 'pencil',
            self::CUSTOMER => 'user',
            default => 'user-circle',
        };
    }

    public static function canBeAssignedBy($userRole): array
    {
        return match ($userRole) {
            self::SUPER_ADMIN => [
                self::SUPER_ADMIN,
                self::ADMIN,
                self::MANAGER,
                self::EDITOR,
                self::CUSTOMER,
            ],
            self::ADMIN => [
                self::MANAGER,
                self::EDITOR,
                self::CUSTOMER,
            ],
            self::MANAGER => [
                self::CUSTOMER,
            ],
            default => [],
        };
    }

    public static function getLevel($value): int
    {
        return match ($value) {
            self::SUPER_ADMIN => 100,
            self::ADMIN => 80,
            self::MANAGER => 60,
            self::EDITOR => 40,
            self::CUSTOMER => 20,
            default => 0,
        };
    }

    public static function hasHigherLevelThan($roleA, $roleB): bool
    {
        return self::getLevel($roleA) > self::getLevel($roleB);
    }
}

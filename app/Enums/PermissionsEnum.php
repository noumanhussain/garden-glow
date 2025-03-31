<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class PermissionsEnum extends Enum
{
    public const RoleList = 'role-list';
    public const RoleCreate = 'role-create';
    public const RoleEdit = 'role-edit';
    public const RoleDelete = 'role-delete';
}

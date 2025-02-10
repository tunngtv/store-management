<?php

declare(strict_types=1);

namespace App\Enum;

use BenSampo\Enum\Enum;

final class UserGender extends Enum
{
    public const MALE = 'male';
    public const FEMALE = 'female';
    public const OTHER = 'other';
}

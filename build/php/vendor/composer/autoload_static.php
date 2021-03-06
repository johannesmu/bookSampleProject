<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit38b078cdff755b4f23e833b7bd52c59e
{
    public static $prefixLengthsPsr4 = array (
        'b' => 
        array (
            'bookstore\\' => 10,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'bookstore\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit38b078cdff755b4f23e833b7bd52c59e::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit38b078cdff755b4f23e833b7bd52c59e::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit38b078cdff755b4f23e833b7bd52c59e::$classMap;

        }, null, ClassLoader::class);
    }
}

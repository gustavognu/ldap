<?php

namespace App\Lib;

class LibCore
{

    public $key='test_key';

    function getConfig()
    {
        return $this->key;
    }

    public function hasTable($table='')
    {
        if(!\Schema::hasTable($table))
            return json_encode(array("b_status"=> true, "vc_message" => "No se encontro la tabla %name_strtolower%"));

        return false;

    }
}
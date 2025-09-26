class Calculos
{
    static function main()
    {
        trace("hola desde haxe");
    }

    public function getDifference(pais1:String, pais2:String, dinero:Float)
    {
        var trans:Float = 0;
        switch(pais1)
        {
            case "México":
                if(pais2 == "Japón")
                    trans = 8;
        }

        dinero = dinero * trans;

        return dinero;
    }
}
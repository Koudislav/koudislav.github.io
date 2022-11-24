<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generator prikladu</title>
</head>

<body>
    <h1>Generator prikladu</h1>


    <?php


    function generatorPrikladu()
    {
        $a = rand(1, 9);
        $b = rand(1, 9);
        $znamenko = rand(1, 2);
        echo "nova cisla ";
        return [$a, $b];
    }

    $polePrikladu = [];

    for (count($polePrikladu); count($polePrikladu) < 20; count($polePrikladu)) {
        $priklad = generatorPrikladu();                     //vygeneruje priklad

        if (count($polePrikladu) == 0) {
            if (0 < ($priklad[0] - $priklad[1]) && ($priklad[0] - $priklad[1]) <= 10) {          //ulozi prvni priklad
                $polePrikladu[] = "$priklad[0] - $priklad[1]";
                echo "0 < " . ($priklad[0] - $priklad[1]) . " && " . ($priklad[0] - $priklad[1]) . " <= 10 <br>";
            } else {
                echo "vysledek mimo rozsah ";
                continue;
            }
        } 
        else if (rand(1, 2) % 2 == 0) {   //minus          
            if (0 < ($priklad[0] - $priklad[1]) && ($priklad[0] - $priklad[1]) <= 10) {           //vysledek 1-10
                foreach ($polePrikladu as $porovnani) {
                    if (("$priklad[0] - $priklad[1]") === $porovnani) {
                        echo "porovnaniMinus1 Shoda ";             //zjisti jestli se neopak"$priklad[0]$priklad[1]$priklad[2]"uje
                        break;                                  //opakuje-li se - konec
                    } else {
                        echo "porovnaniMinus2 ";
                                     //neopakuje se, ulozi se
                    }
                }
                $polePrikladu[] = "$priklad[0] - $priklad[1]";
                echo "0 < " . ($priklad[0] - $priklad[1]) . " && " . ($priklad[0] - $priklad[1]) . " <= 10 <br>";
            }
        }else if (rand(1, 2) % 2 == 1) {   //minus          
            if (0 < ($priklad[0] + $priklad[1]) && ($priklad[0] + $priklad[1]) <= 10) {           //vysledek 1-10
                foreach ($polePrikladu as $porovnani) {
                    if (("$priklad[0] + $priklad[1]") === $porovnani) {
                        echo "porovnaniPlus1 ";             //zjisti jestli se neopak"$priklad[0]$priklad[1]$priklad[2]"uje
                        break;                                  //opakuje-li se - konec
                    } else {
                        echo "porovnaniPlus2 ";
                                    //neopakuje se, ulozi se

                    }
                }
                $polePrikladu[] = "$priklad[0] + $priklad[1]";
                echo "0 < " . ($priklad[0] + $priklad[1]) . " && " . ($priklad[0] + $priklad[1]) . " <= 10 <br>";
            }
        }
    }
    //     if (0 < ($priklad[0].$priklad[1].$priklad[2]) && ($priklad[0].$priklad[1].$priklad[2]) <= 10) {           //vysledek 1-10
    //         foreach ($polePrikladu as $porovnani) { 
    //             if (($priklad[0].$priklad[1].$priklad[2]) == $porovnani) {               //zjisti jestli se neopak"$priklad[0]$priklad[1]$priklad[2]"uje
    //                 break;                                  //opakuje-li se - konec
    //             } else {
    //                 $polePrikladu[] = $priklad;             //neopakuje se, ulozi se
    //             }
    //         }
    //     }
    // }
    var_dump($polePrikladu);

    echo "<table border='1 solid black'";
    foreach ($polePrikladu as $jedenPriklad) {
       echo "<tr>
        <td>$jedenPriklad = _______ </td>
       </tr>";
    }
    echo "/table>";



    ?>





</body>

</html>
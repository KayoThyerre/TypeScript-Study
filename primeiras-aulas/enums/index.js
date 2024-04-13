var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Blue"] = 2] = "Blue";
    Colors[Colors["Green"] = 3] = "Green";
})(Colors || (Colors = {}));
function showColor(color) {
    console.log(color);
}
showColor(Colors.Red);

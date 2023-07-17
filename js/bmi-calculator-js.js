_cmnHideElement("OutputResult");
document.getElementById("heightUnit").value = "Centimeter"; //ambil unit CM
document.getElementById("weightUnit").value = "Kg";  //ambil data kg

function BmiCalculatorFormValidate() {
    _cmnRemoveAllErrorMessage();

    var bmiHeight = document.getElementById("bmiHeight").value;
    var bmiWeight = document.getElementById("bmiWeight").value;

    if (bmiHeight == "" || isNaN(bmiHeight) || (!isNaN(bmiHeight) && bmiHeight <= 0)) {
        _cmnShowErrorMessageBottomOfTheInputFiled("bmiHeight", "Masukkan tinggi yang valid."); //form validation (jika belum isi bidang akan muncul alernt)
        return false;
    }

    if (bmiWeight == "" || isNaN(bmiWeight) || (!isNaN(bmiWeight) && bmiWeight <= 0)) {
        _cmnShowErrorMessageBottomOfTheInputFiled("bmiWeight", "Masukkan berat yang valid."); //form validation (jika belum isi bidang akan muncul alernt)
        return false;
    }

    return true;
}

function BmiCalculatorReset() {
    document.getElementById("bmiHeight").value = "";
    document.getElementById("bmiWeight").value = "";
    document.getElementById("heightUnit").value = "Centimeter";
    document.getElementById("weightUnit").value = "Kg";

    _cmnRemoveAllErrorMessage();

    _cmnHideElement("OutputResult");
    _cmnShowElement("OutputInfo", "flex");
}

function BmiCalculation() {
    if (BmiCalculatorFormValidate()) {
        var result;
        var Height = Number(document.getElementById("bmiHeight").value)
        var Weight = Number(document.getElementById("bmiWeight").value)
        var heightUnit = document.getElementById("heightUnit").value;
        var weightUnit = document.getElementById("weightUnit").value;

        if (heightUnit == "Centimeter") {
            Height = Height / 100;
        }

        if (weightUnit == "Pound") {
            Weight = Weight / 2.20462;
        }

        result = (Weight / (Height * Height));

        document.getElementById("bmiResult").innerHTML = result.toFixed(1);


        //result div show
        _cmnHideElement("OutputInfo");
        _cmnShowElement("OutputResult", "flex");
    }
}
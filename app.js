window.onload = () => {
  let button = document.querySelector("#btn");

  button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
  let height = parseFloat(document.querySelector("#height").value);
  let weight = parseFloat(document.querySelector("#weight").value);
  let result = document.querySelector("#result");

  if (!Number.isFinite(height)) {
    result = "Vui lòng nhập chiều cao hợp lệ!";
  } 
  else if (!Number.isFinite(weight)) {
    result = "Vui lòng nhập cân nặng hợp lệ!";
  } 
  else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.5) {
      result = `      BMI : ${bmi}
      Phân loại: GẦY
      Nguy cơ phát triển bệnh: THẤP`;
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
      result = `      BMI : ${bmi}
      Phân loại: BÌNH THƯỜNG
      Nguy cơ phát triển bệnh: TRUNG BÌNH`;
    }
    else if (bmi >= 25 && bmi <= 29.9) {
      result = `      BMI : ${bmi}
      Phân loại: HƠI BÉO
      Nguy cơ phát triển bệnh: CAO`;
    }
    else if (bmi >= 30 && bmi <= 34.9) {
      result = `      BMI : ${bmi}
      Phân loại: BÉO PHÌ CẤP ĐỘ 1
      Nguy cơ phát triển bệnh: CAO`;
    }
    else if (bmi >= 35 && bmi <= 39.9) {
      result = `      BMI : ${bmi}
      Phân loại: 	BÉO PHÌ CẤP ĐỘ 2
      Nguy cơ phát triển bệnh: RẤT CAO`;
    }
    else {
      result = `      BMI : ${bmi}
      Phân loại: 	BÉO PHÌ CẤP ĐỘ 3
      Nguy cơ phát triển bệnh: NGUY HIỂM`;
    };
  }

  alert(result)
}
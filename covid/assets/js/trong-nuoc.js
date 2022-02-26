let covid_case_vn = document.getElementById('covid-cases-vn')
let now_covid_case_vn = document.getElementById('now-num-cases-vn')
let new_num_cases_vn = document.getElementById('new-num-cases-vn')

let covid_deaths_vn = document.getElementById('covid-deaths-vn')
let now_num_deaths_vn = document.getElementById('now-num-deaths-vn')
let new_num_deaths_vn = document.getElementById('new-num-deaths-vn')

let covid_recovered_vn = document.getElementById('covid-recovered-vn')
let now_num_recovered_vn = document.getElementById('now-num-recovered-vn')
let new_num_recovered_vn = document.getElementById('new-num-recovered-vn')

let covid_first_vacxin_vn = document.getElementById('covid-first-vacxin-vn')
let now_num_first_vacxin_vn = document.getElementById('now-num-first-vacxin-vn')
let new_num_first_vacxin_vn = document.getElementById('new-num-first-vacxin-vn')

let covid_second_vacxin_vn = document.getElementById('covid-second-vacxin-vn')
let now_num_second_vacxin_vn = document.getElementById('now-num-second-vacxin-vn')
let new_num_second_vacxin_vn = document.getElementById('new-num-second-vacxin-vn')

google.charts.load("current", {
    packages: ["geochart"]
  });
  google.charts.setOnLoadCallback(drawRegionsMap);
  
  function drawRegionsMap() {
    fetch("https://static.pipezero.com/covid/data.json")
      .then((res) => res.json())
      .then((res) => {
        let cases = [];
  
        res.locations.forEach((locations) => {
          cases.push([locations.name, locations.cases]);
        });
        var data = google.visualization.arrayToDataTable([
            ["Thành phố", "Số ca mắc"],
            ...cases,
            ['VN-CT', cases[9][1]],
            ['Thừa Thiên–Huế', cases[25][1]],
            ['VN-HP', cases[22][1]],
            ['VN-HN', cases[3][1]],
            ['VN-55', cases[15][1]],
            ['VN-DN', cases[23][1]],
            ['Bà Rịa–Vũng Tàu', cases[19][1]],
            ['VN-SG', cases[0][1]],
          ]);
  

  
        var options = {
          colorAxis: { colors: [ "#21bf73", "#feb72b", "#f84449"] },
                region: 'VN',
                displayMode: 'regions',
                resolution: 'provinces',
        };
  
        var chart = new google.visualization.GeoChart(
          document.querySelector(".world-map")
        );
  
        chart.draw(data, options);
      });
  }
  function numberFormat(number) {
    let fmt = new Intl.NumberFormat();
    return fmt.format(number);
}


// Vaccin Vietnam
let fetchFnc10 = async () => {
  let dataFetch10 = await fetch(`https://api.zingnews.vn/public/v2/corona/getChart?type=vaccination`, {
  })
  let dataJSON10 = await dataFetch10.json()
  // console.log(dataJSON10.data)

  covid_first_vacxin_vn.innerHTML = numberFormat(dataJSON10.data.first.total )

  new_num_first_vacxin_vn.innerHTML = Math.round(dataJSON10.data.firstRatio) + "%"

  now_num_first_vacxin_vn.innerHTML = numberFormat((dataJSON10.data.first.total - dataJSON10.data.first.datas[dataJSON10.data.first.datas.length - 1].y))

  covid_second_vacxin_vn.innerHTML = numberFormat(dataJSON10.data.second.total)

  new_num_second_vacxin_vn.innerHTML = Math.round(dataJSON10.data.secondRatio) + "%"

  now_num_second_vacxin_vn.innerHTML = numberFormat((dataJSON10.data.second.total - dataJSON10.data.second.datas[dataJSON10.data.second.datas.length - 1].y))


}
fetchFnc10()

//   google.load('visualization', '1', {
//     'packages': ['geochart']
//   });
//   google.setOnLoadCallback(drawVisualization);
  
//   function drawVisualization() {
//     var data = google.visualization.arrayToDataTable([
//       ['State', 'Value'],
//       ['Bắc Giang', 1],
//       ['Bắc Kạn', 2],
//       ['Cao Bằng', 3],
//       ['Hà Giang', 4],
//       ['Lạng Sơn', 5],
//       ['Phú Thọ', 6],
//       ['Quảng Ninh', 7],
//       ['Thái Nguyên', 8],
//       ['Tuyên Quang', 9],
//       ['Lào Cai', 10],
//       ['Yên Bái', 11],
//       ['Điện Biên', 12],
//       ['Hòa Bình', 13],
//       ['Lai Châu', 14],
//       ['Sơn La', 15],
//       ['Bắc Ninh', 16],
//       ['Hà Nam', 17],
//       ['Hải Dương', 18],
//       ['Hưng Yên', 19],
//       ['Nam Định', 20],
//       ['Ninh Bình', 21],
//       ['Thái Bình', 22],
//       ['Vĩnh Phúc', 23],
//       ['Hà Nội City', 24],
//       ['Hải Phòng City', 25],
//       ['Hà Tĩnh', 26],
//       ['Nghệ An', 27],
//       ['Quảng Bình', 28],
//       ['Quảng Trị', 29],
//       ['Thanh Hóa', 30],
//       ['Thừa Thiên–Huế', 31],
//       ['Đắk Lắk', 32],
//       ['Đắk Nông', 33],
//       ['Gia Lai', 34],
//       ['Kon Tum', 35],
//       ['Lâm Đồng', 36],
//       ['Bình Định', 37],
//       ['Bình Thuận', 38],
//       ['Khánh Hòa', 39],
//       ['Ninh Thuận', 40],
//       ['Phú Yên', 41],
//       ['Quảng Nam', 42],
//       ['Quảng Ngãi', 43],
//       ['Đà Nẵng City', 44],
//       ['Bà Rịa–Vũng Tàu', 45],
//       ['Bình Dương', 46],
//       ['Bình Phước', 47],
//       ['Đồng Nai', 48],
//       ['Tây Ninh', 49],
//       ['Hồ Chí Minh City', 50],
//       ['An Giang', 51],
//       ['Bạc Liêu', 52],
//       ['Bến Tre', 53],
//       ['Cà Mau', 54],
//       ['Đồng Tháp', 55],
//       ['Hậu Giang', 56],
//       ['Kiên Giang', 57],
//       ['Long An', 58],
//       ['Sóc Trăng', 59],
//       ['Tiền Giang', 60],
//       ['Trà Vinh', 61],
//       ['Vĩnh Long', 62],
//       ['VN-CT', 63],
//       ['VN-DN', 64]
//    ]);
  
//     var opts = {
//       region: 'VN',
//       displayMode: 'regions',
//       resolution: 'provinces',
//     };
//     var geochart = new google.visualization.GeoChart(
//       document.getElementById('visualization'));
//     geochart.draw(data, opts);
//   };


let fetchFnc = async () => {
    let dataFetch = await fetch(`https://static.pipezero.com/covid/data.json`, {
    })
    let dataJSON = await dataFetch.json()

    covid_case_vn.innerHTML = numberFormat(dataJSON.total.internal.cases)
    now_covid_case_vn.innerHTML = "+" + numberFormat(dataJSON.today.internal.cases)
    new_num_cases_vn.innerHTML = "+" + numberFormat(((dataJSON.today.internal.cases / dataJSON.total.internal.cases) * 100).toFixed(2)) + "%"

    covid_deaths_vn.innerHTML = numberFormat(dataJSON.total.internal.death)
    now_num_deaths_vn.innerHTML = "+" + numberFormat(dataJSON.today.internal.death)
    new_num_deaths_vn.innerHTML = "+" + numberFormat(((dataJSON.today.internal.death / dataJSON.total.internal.death) * 100).toFixed(2)) + "%"

    covid_recovered_vn.innerHTML = numberFormat(dataJSON.total.internal.recovered)
    now_num_recovered_vn.innerHTML = "+" + numberFormat(dataJSON.today.internal.recovered)
    new_num_recovered_vn.innerHTML = "+" + numberFormat(((dataJSON.today.internal.recovered / dataJSON.total.internal.recovered) * 100).toFixed(2)) + "%"

}
fetchFnc()


let table = document.getElementById('table')
// Covid VN
let fetchFnc2 = async () => {
    let dataFetch2 = await fetch(`https://static.pipezero.com/covid/data.json`, {
    })
    let dataJSON2 = await dataFetch2.json()
    // console.log(dataJSON2.locations)

    for (let i = 0; i < dataJSON2.locations.length; i++) {
        table.innerHTML += `
        <tr>
            <td>${dataJSON2.locations[i].name}</td>
            <td>${dataJSON2.locations[i].cases}</td>
            <td>${dataJSON2.locations[i].casesToday}</td>
            <td>${dataJSON2.locations[i].death}</td>
        </tr>
        `

    }

}
fetchFnc2()

$("#search").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#table tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});
document.getElementById('nav-tick').onclick = function () {
  if (document.getElementById('nav-tick').checked){
      document.getElementById('nav-mobile').style.display = 'block'
      document.getElementById('nav').style.borderBottomLeftRadius = '0'
      document.getElementById('nav').style.borderBottomRightRadius = '0'
  }
  else {
      document.getElementById('nav-mobile').style.display = 'none'
      document.getElementById('nav').style.borderBottomLeftRadius = '24px'
      document.getElementById('nav').style.borderBottomRightRadius = '24px'
  }
}

// World Map
google.charts.load("current", {
    packages: ["geochart"]
  });
  google.charts.setOnLoadCallback(drawRegionsMap);
  // World Map
google.charts.load("current", {
    packages: ["geochart"]
  });
  google.charts.setOnLoadCallback(drawRegionsMap);
  
  function drawRegionsMap() {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((res) => {
        let cases = [];
  
        res.Countries.forEach((country) => {
          cases.push([country.Country , country.TotalConfirmed]);
        });
  
        var data = google.visualization.arrayToDataTable([
          ["Quốc gia", "Số ca mắc"],
          ...cases,
          ['Russia', cases[142][1]],
          ['United States', cases[184][1]],
          ['Venezuela', cases[188][1]],
          ['Iran', cases[78][1]],
          ['South Korea', cases[89][1]],
          ['Vietnam', cases[189][1]],
          
        ]);
  
        var options = {
          colorAxis: { colors: [ "#21bf73","#6BBC5B", "#6BBC5B", "#B4BA43",  "#feb72b", "#FC9135", "#FA6A3F", "#f84449"] }
        };
  
        var chart = new google.visualization.GeoChart(
          document.querySelector(".world-map")
        );
  
        chart.draw(data, options);
      });
  }



let covid_case = document.getElementById('covid-cases')
let now_covid_case = document.getElementById('now-num-cases')
let new_num_cases = document.getElementById('new-num-cases')

let covid_deaths = document.getElementById('covid-deaths')
let now_num_deaths = document.getElementById('now-num-deaths')
let new_num_deaths = document.getElementById('new-num-deaths')

let covid_recovered = document.getElementById('covid-recovered')
let now_num_recovered = document.getElementById('now-num-recovered')
let new_num_recovered = document.getElementById('new-num-recovered')

let covid_first_vacxin = document.getElementById('covid-first-vacxin')
let now_num_first_vacxin = document.getElementById('now-num-first-vacxin')
let new_num_first_vacxin = document.getElementById('new-num-first-vacxin')

let covid_second_vacxin = document.getElementById('covid-second-vacxin')
let now_num_second_vacxin = document.getElementById('now-num-second-vacxin')
let new_num_second_vacxin = document.getElementById('new-num-second-vacxin')


function numberFormat(number) {
    let fmt = new Intl.NumberFormat();
    return fmt.format(number);
}
let fetchFnc = async () => {
    let dataFetch = await fetch(`https://static.pipezero.com/covid/data.json`, {
    })
    let dataJSON = await dataFetch.json()
    console.log(dataJSON)
    covid_case.innerHTML = numberFormat(dataJSON.total.world.cases)
    now_covid_case.innerHTML = "+" + numberFormat(dataJSON.today.world.cases)
    new_num_cases.innerHTML = "+" + numberFormat(((dataJSON.today.world.cases / dataJSON.total.world.cases) * 100).toFixed(2)) + "%"

    covid_recovered.innerHTML = numberFormat(dataJSON.total.world.recovered)
    now_num_recovered.innerHTML = "+" + numberFormat(dataJSON.today.world.recovered)
    new_num_recovered.innerHTML = "+" + numberFormat(((dataJSON.today.world.recovered / dataJSON.total.world.recovered) * 100).toFixed(2)) + "%"

}
fetchFnc()


let fetchFnc7 = async () => {
    let dataFetch7 = await fetch(`https://api.coronatracker.com/v3/stats/worldometer/global`, {
    })
    let dataJSON7 = await dataFetch7.json()
    // console.log(dataJSON7)
    covid_deaths.innerHTML = numberFormat(dataJSON7.totalActiveCases)
    now_num_deaths.innerHTML = "+" + numberFormat(dataJSON7.totalNewCases)
    new_num_deaths.innerHTML = "+" + numberFormat(((dataJSON7.totalNewCases / dataJSON7.totalActiveCases) * 100).toFixed(2)) + "%"
}
fetchFnc7()

let fetchFnc4 = async () => {
    let dataFetch4 = await fetch(`https://ix.cnn.io/data/novel-coronavirus-2019-ncov/vaccines-world/vaccine-owid-world-history.json?q=1642241675`, {
        'Access-Control-Allow-Origin': '*'
    })
    let dataJSON4 = await dataFetch4.json()
    // console.log(dataJSON4)

    covid_first_vacxin.innerHTML = numberFormat(dataJSON4.data[0].data[dataJSON4.data[0].data.length - 1].peopleVaccinated)
    // new_num_first_vacxin.innerHTML = numberFormat(dataJSON4.data[0].data[dataJSON4.data[0].data.length - 1].daily_people_vaccinated)
    // now_num_first_vacxin.innerHTML = numberFormat(dataJSON4.data[0].data[dataJSON4.data[0].data.length - 1].peopleVaccinated - dataJSON4.data[0].data[dataJSON4.data[0].data.length - 1].daily_people_vaccinated)
    new_num_first_vacxin.innerHTML = Math.round(dataJSON4.data[0].data[dataJSON4.data[0].data.length - 1].peopleVaccinatedPer100) + "%"
    new_num_second_vacxin.innerHTML = Math.round(dataJSON4.data[0].data[dataJSON4.data[0].data.length - 1].peopleFullyVaccinatedPer100) + "%"
    covid_second_vacxin.innerHTML = numberFormat(dataJSON4.data[0].data[dataJSON4.data[0].data.length - 1].peopleFullyVaccinated)

}
fetchFnc4()

let fetchFnc5 = async () => {
    let dataFetch5 = await fetch(`https://d6wn6bmjj722w.population.io/1.0/population/World/today-and-tomorrow/n`, {
    })
    let dataJSON5 = await dataFetch5.json()
    // console.log(dataJSON5.total_population[dataJSON5.total_population.length - 1].population)
    // covid_case.innerHTML = numberFormat(dataJSON.total.world.cases)
    // new_num_cases.innerHTML = numberFormat(dataJSON.today.world.cases)
    // now_covid_case.innerHTML = numberFormat(dataJSON.total.world.cases - dataJSON.today.world.cases)

    // covid_deaths.innerHTML = numberFormat(dataJSON.total.world.death)
    // new_num_deaths.innerHTML = numberFormat(dataJSON.today.world.death)
    now_num_first_vacxin.innerHTML = numberFormat(dataJSON5.total_population[dataJSON5.total_population.length - 1].population)

    // covid_recovered.innerHTML = numberFormat(dataJSON.total.world.recovered
    now_num_second_vacxin.innerHTML = numberFormat(dataJSON5.total_population[dataJSON5.total_population.length - 1].population)

}
fetchFnc5()

let table = document.getElementById('table')
// Covid VN
let fetchFnc2 = async () => {
    let dataFetch2 = await fetch(`https://api.covid19api.com/summary`, {
    })
    let dataJSON2 = await dataFetch2.json()
    // console.log(dataJSON2.Countries)

    for(let i = 0; i < dataJSON2.Countries.length; i++){
        table.innerHTML +=    `
        <tr>
            <td>${dataJSON2.Countries[i].Country}</td>
            <td>${dataJSON2.Countries[i].TotalConfirmed}</td>
            <td>${dataJSON2.Countries[i].NewConfirmed}</td>
            <td>${dataJSON2.Countries[i].TotalDeaths}</td>
        </tr>
        `

    }

}
fetchFnc2()

$("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#table tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

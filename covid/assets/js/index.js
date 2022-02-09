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

// VN
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


let time = document.getElementById('update')

var currentdate = new Date();
var datetime = currentdate.getHours() + ":"
    + currentdate.getMinutes() + ", " + currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear()

time.innerHTML += datetime

function numberFormat(number) {
    let fmt = new Intl.NumberFormat();
    return fmt.format(number);
}

// Covid VN
let fetchFnc = async () => {
    let dataFetch = await fetch(`https://static.pipezero.com/covid/data.json`, {
    })
    let dataJSON = await dataFetch.json()
    // console.log(dataJSON)
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

let fetchFnc7 = async () => {
    let dataFetch7 = await fetch(`https://api.coronatracker.com/v3/stats/worldometer/global`, {
    })
    let dataJSON7 = await dataFetch7.json()
    // console.log(dataJSON7)
    covid_deaths.innerHTML = numberFormat(dataJSON7.totalDeaths)
    now_num_deaths.innerHTML = "+" + numberFormat(dataJSON7.totalNewDeaths)
    new_num_deaths.innerHTML = "+" + numberFormat(((dataJSON7.totalNewDeaths / dataJSON7.totalDeaths) * 100).toFixed(2)) + "%"

    covid_case.innerHTML = numberFormat(dataJSON7.totalConfirmed)
    now_covid_case.innerHTML = "+" + numberFormat(dataJSON7.totalNewCases)
    new_num_cases.innerHTML = "+" + numberFormat(((dataJSON7.totalNewCases / dataJSON7.totalActiveCases) * 100).toFixed(2)) + "%"

    covid_recovered.innerHTML = numberFormat(dataJSON7.totalRecovered)
    // now_num_recovered.innerHTML = "+" + numberFormat(dataJSON7.today.world.recovered)
    // new_num_recovered.innerHTML = "+" + numberFormat(((dataJSON7.today.world.recovered / dataJSON7.total.world.recovered) * 100).toFixed(2)) + "%"


    let fetchFnc10 = async () => {
        let dataFetch10 = await fetch(`https://api.coronatracker.com/v3/stats/worldometer/totalTrendingCases?limit=2`, {
        })
        let dataJSON10 = await dataFetch10.json()
        // console.log(dataJSON10)
        let a = "+" + dataJSON10[0].totalRecovered - dataJSON10[1].totalRecovered
        now_num_recovered.innerHTML = numberFormat(a)
        new_num_recovered.innerHTML = "+" + numberFormat(((a / dataJSON10[0].totalRecovered) * 100).toFixed(2)) + "%"
    }
    fetchFnc10()
}
fetchFnc7()

// https://api.coronatracker.com/v3/stats/worldometer/totalTrendingCases?limit=100


// Vaccin in the world
let fetchFnc4 = async () => {
    let dataFetch4 = await fetch(`https://ix.cnn.io/data/novel-coronavirus-2019-ncov/vaccines-world/vaccine-owid-world-history.json?q=1642241675`, {
        'Access-Control-Allow-Origin': '*'
    })
    let dataJSON4 = await dataFetch4.json()
    // console.log(dataJSON4)

    let a = dataJSON4.data[0].data[dataJSON4.data[0].data.length - 1].peopleVaccinated - dataJSON4.data[0].data[dataJSON4.data[0].data.length - 1].peopleFullyVaccinated
    covid_first_vacxin.innerHTML = numberFormat(a)
    // new_num_first_vacxin.innerHTML = numberFormat(dataJSON4.data[0].data[dataJSON4.data[0].data.length - 1].daily_people_vaccinated)
    // now_num_first_vacxin.innerHTML = numberFormat(dataJSON4.data[0].data[dataJSON4.data[0].data.length - 1].peopleVaccinated - dataJSON4.data[0].data[dataJSON4.data[0].data.length - 1].daily_people_vaccinated)

    new_num_second_vacxin.innerHTML = Math.round(dataJSON4.data[0].data[dataJSON4.data[0].data.length - 1].peopleFullyVaccinatedPer100) + "%"
    covid_second_vacxin.innerHTML = numberFormat(dataJSON4.data[0].data[dataJSON4.data[0].data.length - 1].peopleFullyVaccinated)
// Dan so the gioi
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
    new_num_first_vacxin.innerHTML = (a / dataJSON5.total_population[dataJSON5.total_population.length - 1].population).toFixed(2) + "%"
    now_num_first_vacxin.innerHTML = numberFormat(dataJSON5.total_population[dataJSON5.total_population.length - 1].population)

    // covid_recovered.innerHTML = numberFormat(dataJSON.total.world.recovered
    now_num_second_vacxin.innerHTML = numberFormat(dataJSON5.total_population[dataJSON5.total_population.length - 1].population)

}
fetchFnc5()
}
fetchFnc4()



// Dan so VN
let fetchFnc6 = async () => {
    let dataFetch6 = await fetch(`https://d6wn6bmjj722w.population.io/1.0/population/Vietnam/today-and-tomorrow/`, {
    })
    let dataJSON6 = await dataFetch6.json()
    // console.log(dataJSON5.total_population[dataJSON5.total_population.length - 1].population)
    // covid_case.innerHTML = numberFormat(dataJSON.total.world.cases)
    // new_num_cases.innerHTML = numberFormat(dataJSON.today.world.cases)
    // now_covid_case.innerHTML = numberFormat(dataJSON.total.world.cases - dataJSON.today.world.cases)

    // covid_deaths.innerHTML = numberFormat(dataJSON.total.world.death)
    // new_num_deaths.innerHTML = numberFormat(dataJSON.today.world.death)
    now_num_first_vacxin_vn.innerHTML = numberFormat(dataJSON6.total_population[dataJSON6.total_population.length - 1].population)

    // covid_recovered.innerHTML = numberFormat(dataJSON.total.world.recovered
    now_num_second_vacxin_vn.innerHTML = numberFormat(dataJSON6.total_population[dataJSON6.total_population.length - 1].population)
}
fetchFnc6()


// Vaccin Vietnam
let fetchFnc2 = async () => {
    let dataFetch2 = await fetch(`https://api.zingnews.vn/public/v2/corona/getChart?type=vaccination`, {
    })
    let dataJSON2 = await dataFetch2.json()
    // console.log(dataJSON2.data)

    covid_first_vacxin_vn.innerHTML = numberFormat(dataJSON2.data.first.total )

    new_num_first_vacxin_vn.innerHTML = Math.round(dataJSON2.data.firstRatio) + "%"

    now_num_first_vacxin_vn.innerHTML = numberFormat((dataJSON2.data.first.total - dataJSON2.data.first.datas[dataJSON2.data.first.datas.length - 1].y))

    covid_second_vacxin_vn.innerHTML = numberFormat(dataJSON2.data.second.total)

    new_num_second_vacxin_vn.innerHTML = Math.round(dataJSON2.data.secondRatio) + "%"

    now_num_second_vacxin_vn.innerHTML = numberFormat((dataJSON2.data.second.total - dataJSON2.data.second.datas[dataJSON2.data.second.datas.length - 1].y))


}
fetchFnc2()


// News

let tbody = document.getElementById('news')
let fetchFnc3 = async () => {
    let dataFetch3 = await fetch(`https://api.coronatracker.com/news/trending?limit=50&offset=9&language=vi`, {
    })
    let dataJSON3 = await dataFetch3.json()
    for (let i = 0; i < dataJSON3.items.length; i++) {
        // console.log(dataJSON3.items[i])
        var d = new Date(dataJSON3.items[i].publishedAt).toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'});
        tbody.innerHTML += `   
        <tr class="new">
            <td>
                <a target="modal-iframe" onclick="show()" href="${dataJSON3.items[i].url}">                 
                    <img src="${dataJSON3.items[i].urlToImage}"
                alt="">
                </a>
            </td>
            <td>
                <a target="modal-iframe" onclick="show()" href="${dataJSON3.items[i].url}">                 
                <p class="title">${dataJSON3.items[i].title}</p><br>
                
                <p class="content">${d}</p>
                <p class="content">${dataJSON3.items[i].description}</p>
                </a>
            </td>
        </tr>
`
    }
}
fetchFnc3()



// Modal News

const newsBtns = document.querySelectorAll('.new-click')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('#modal-close')

function show() {
    modal.classList.add('open')
}

function hide() {
    modal.classList.remove('open')
}

modal.addEventListener('click', hide())

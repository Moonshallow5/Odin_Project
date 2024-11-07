import { getWeatherImg,getWeatherWind } from './helper2'
import { format } from "date-fns"
export function displayToday(data){

    const icon=getWeatherImg(data.currentConditions.icon)
    const direction=getWeatherWind(data.currentConditions.winddir)
    console.log("yo")
    console.log(data.currentConditions.icon)


    const todaysForecast=document.createElement('div')
    todaysForecast.classList.add('todays-forecast');
    console.log(icon)
    todaysForecast.innerHTML = 
        `<div class="today-top">
        <h2>${data.resolvedAddress}</h2>
        <h3><span class="temp">${data.currentConditions.temp}</span><span class="temp-unit">°F</span></h3>
        <h3>${data.currentConditions.conditions}</h3>
        <figure class="image_weather"><img src="${icon}" alt="${data.currentConditions.icon}"></figure>
        
        </div>
        <div class ="today-mid">
        <p> High: <span class="temp"> ${data.days[0].tempmax}</span><span class="temp-unit">°F</span></p>
        <p> Low: <span class="temp">${data.days[0].tempmin}</span><span class="temp-unit">°F</span></p>
        <p>Humidity: ${data.currentConditions.humidity}%</p>
        <p>Precip: ${data.days[0].precipprob}%</p>

        </div> 
        
        <div class="today-end">
        <p><span class="bold">Wind:</span> ${data.currentConditions.windspeed} mph out of the ${direction} with gusts up to ${data.days[0].windgust} mph</p>
        <p><span class="bold">Forecast:</span> ${data.description}</p>
        </div>
        `



        const forecast=document.querySelector('.forecast')
        forecast.append(todaysForecast)
    }


        export function display7DayForecast(data) {
            const forecast = document.querySelector('.forecast');
            const weekForecast = document.createElement('div');
            //weekForecast.innerHTML = '';
            weekForecast.classList.add('week-forecast');
            weekForecast.innerHTML = '<h2>7 Day Forecast</h2>';
            const ul = document.createElement('ul');
            ul.classList.add('week');
            for (let i = 0; i <= 6; i++) {
                const li = document.createElement('li');
                li.classList.add('day');
                const icon = getWeatherImg(data.days[i].icon);
                li.innerHTML = `${format(data.days[i].datetime.replace(/-/g, '/'), 'ccc')}  <figure class="icon-week-forecast"><img src="${icon}" alt="${data.days[i].icon}" class="icon-week"></figure> <div class="temp-range"><span class="temp">${data.days[i].tempmin}</span><span class="temp-unit">°F</span> - <span class="temp">${data.days[i].tempmax}</span><span class="temp-unit">°F</span></div>`;
                ul.append(li);
                console.log(data.days[i].datetime);
            }
            weekForecast.append(ul);
            forecast.append(weekForecast);

        }
    
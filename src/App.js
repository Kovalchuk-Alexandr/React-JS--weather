// Создание компонента, обычно имя такое, как у файла (App)
import { useState } from 'react'
import Form from './components/Form'
import Weather from './components/Weather'
import sun from './img/sun.svg'
import axios from 'axios'

function App() {
    // Массив городов, по которым мы уже узнали погоду
    // будем передавать его в компонент Weather, там будем его перебирать
    // Временные данные в массиве для отладки
    // const [cities, setCities] = useState([
    //     { name: 'New York', temp: 20, feels: 10 },
    //     {name: 'London', temp: 8, feels: 0}
    // ])
    const [cities, setCities] = useState([])

    const getWeather = (city) => {
        // Если пользователь не ввел город, выходим
        if (city === '') return
        
        const API = 'a5a5e9892a19ed5d0a715a750f23a374'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`
        console.log(city)

        // чтобы работать с url, нужно подключить библиотеку axios npm i axios
        axios.get(url)
            .then(res => {
                // Для проверки выведем в косоль, то что считали с URL
                console.log(res)

                setCities(cities => [{
                    name: city,
                    temp: res.data.main.temp,
                    feels: res.data.main.feels_like
                }, ...cities])
            })
            .catch(err => console.log(err))
    }

    // При нажатии на город - удаляем
    // отфильтровуем в новый массив все, кроме того, который удаляем
    const deleteWeather = (city) => {
        const newCities = cities.filter(el => {
            return el.name !== city
        })
        // Устанавливаем новый массив, как список городов
        setCities(newCities)
    }

    return (<div className='main'>
        {/* для передачи параметра из основной ф.App 
        можно передавать любые типы данных: объекты, массивы и т.д. */}
        <img src={sun} className='sun' alt=''></img>
        <Form getWeather={getWeather} />
        {/* Передаем в компоненты соответствующие функции */}
        <Weather cities={cities} deleteWeather={deleteWeather} />
    </div>)
}

export default App
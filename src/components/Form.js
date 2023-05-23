import { useState } from "react";

// (props) - properties - свойства, которые принимаем внутри этого компонента
function Form(props) {
    const [city, setCity] = useState('')

    const getWeather = (city) => {
        props.getWeather(city.trim())
        // Чтобы очистить input после ввода, изменяем состояние
        setCity('')
    }

    return (
        <div>
            <h1>Getting weather data</h1>
            <form>
                <input placeholder="Enter you city" value={city}
                    onChange={e => setCity(e.target.value)}/>
                {/* <button type="button" onClick={() => props.getWeather(city.trim())}>Get weather</button> */}
                <button type="button" onClick={() => getWeather(city)}>Get weather</button>
            </form>
        </div>
        
    )
}

export default Form;
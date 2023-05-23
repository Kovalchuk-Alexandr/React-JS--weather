// Создаем новый компонент (функцию) затем можно переместить в отельный файл
import { useEffect, useState } from 'react'
import '../css/form.css'

// (props) - properties - свойства, которые принимаем внутри этого компонента
// const printInfo = (data) => {
//     console.log('Text on Click from Func!')
//     console.log(`Text on Click " ${data} " from param`)
//     userinfo = data
// }

function Form(props) {
    const printInfo = (data) => {
        // console.log('Text on Click from Func!')
        // console.log(`Text on Click " ${data} " from param`)
        // userinfo = data
        setUserinfo(data)
    }

    const addItem = () => {
        props.addItem({
            id: Math.floor(Math.random() * 2000),
            title: userinfo,
            desc: userinfo + ' - description'
        })
    }
    // Так уже не сработает
    // let userinfo = "Info"
    // Потому создаем 'состояние': массив, который включает переменную
    // и функцию, которая ее устанавливает. 'Info' - значение по-умолчанию
    const [userinfo, setUserinfo] = useState('Info')

    // ф. меняет код автоматически, если мы меняем значение состояния
    useEffect(() => {
        let obj = document.getElementsByClassName('maintext')
        for (let i = 0; i < obj.length; i++)
            obj[i].innerText = userinfo
    })

    // if (userinfo.length < 1)
    //     return (<h1>Hello!</h1>)
    // else
        return (
            <form>
                <h2>{userinfo}</h2>
                {/* <p>{props.info}</p> */}
                {/* 'class' - зарезервированнное выражение в RJS
                потому используем className="input" */}
                {/* Получаем текст, который ввели и подставляем вместо значения в userinfo */}
                <input className="input" onChange={e => setUserinfo(e.target.value)} placeholder={props.info} />
                {/* в RJS событие записываем в формате onClick={(e) => {}}*/}
                <button type="button" onClick={(e) => { console.log(e); printInfo('Click'); addItem() }}
                    onMouseMove={() => console.log('OnMouseMove')}>Click Me</button>
                {/* условия можно вставлять в HTML */}
                {userinfo !== '' && <p>Your data: {userinfo}</p>}
                <p className='maintext'></p>
            </form>
        )
}

// Можно установить значения по-умолчанию
Form.defaultProps = {
    info: 'Enter any data (defoult)'
}

export default Form;
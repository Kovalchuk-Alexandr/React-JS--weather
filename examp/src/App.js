// Создание компонента, обычно имя такое, как у файла (App)
// подключение файла с собственными стилями App.css
import './css/App.css'
import React, { useState } from 'react'
import Form from './components/Form'
import imgTree from './img/single-tree.jpg'
import Block from './components/Block'

// function App() - старая запись
// const App = () =>  - Новая
// Форма записи через класс
// class App extends React.Component {
//     render() {
//         return (<div>
//             <h1>Hello from App!</h1>
//         </div>)
//     }

// Создаем новый компонент (функцию) затем можно переместить в отельный файл
// (props) - properties - свойства, которые принимаем внутри этого компонента
// выносим в отдельный файл Forms.js
// function Form(props) {
//     return (
//         <form>
//             {/* <p>{props.info}</p> */}
//             <input placeholder={props.info}/>
//             <button>Click Me</button>
//         </form>
//     )
// }

function App() {
    // 1-й вариант
    // const items = [
    //     {id: 1, title: 'first', desc: 'Anons'},
    //     {id: 2, title: 'second', desc: 'Anons' },
    //     {id: 3, title: 'third', desc: 'Anons' },
    // ]
    
    // 2-й вариант, чтобы изменения отображались, нужно массив (см. выше)
    // преобразовать в состояние
    const [items, setItems] = useState([
        {id: 1, title: 'first', desc: 'Anons'},
        {id: 2, title: 'second', desc: 'Anons' },
        {id: 3, title: 'third', desc: 'Anons' },
    ])


    // Создадим ф., которая будет принимать данные, заносить в массив и выводить
    const addItem = (item) => {
        // так уже не сработает
        // items.push(item)
        setItems(items => [item, ...items])
    }

    return (<div>
        <h2>Hello from App!</h2>
        {/* Вместо обработки формы внутри ф., вызываем компонент (ф.), как тэг */}
        {/* <form>
            <input />
            <button>Click Me</button>
        </form> */}
        {/* для передачи параметра из основной ф.App 
        можно передавать любые типы данных: объекты, массивы и т.д. */}
        <Form addItem={addItem} info='Enter a date' />
        <Form addItem={addItem} info='Put some info' />
        <Form addItem={addItem} />
        {/* В компоненты Block.js передаем массив items, чтобы перебрать */}
        <Block items={items} />
        {/* Можно вызвать несколько раз, удобно!!!
        <Form />
        <Form />  */}
        {/* Вывод изображений: можно поключить ссылку или импортировать сохраненное изображение */}
        {/* <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000" alt="" /> */}
        <img src={imgTree}  width='50%' alt="" />
    </div>)
}

export default App
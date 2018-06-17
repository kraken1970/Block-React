import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className="app-content">Всем привет, я компонент App!</div>
        <div className="app2">
          Всем привет, я компонент App! Я умею отображать новости.
          <News data={my_news} /> {/*добавлено св-во data*/}
          <Comments />
        </div>
      </div>
    );
  }
}

class News extends Component {
  render() {
    return <div className="news">К сожалению, новостей нет.</div>;
  }
}

class Comments extends Component {
  render() {
    return <div className="comments">Нет новостей - комментирoвать нечего</div>;
  }
}

let my_news = [
  {
    author: "Саша Печкин",
    text: "В четверг, четвертого числа..."
  },
  {
    author: "Просто Вася",
    text: "Считаю, что $ должен стоить 35 рублей!"
  },
  {
    author: "Гость",
    text: "Бесплатно. Скачать. Лучший сайт - http://localhost:3000"
  }
];

export default App;

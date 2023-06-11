import { Routes, Route } from 'react-router-dom';
import { Main } from './Main';
import { Footer } from './Footer';

const obj = {
  adjective1: 'Дорогие',
  adjective2: 'Дорогая',
  adjective3: 'Дорогой',
  pronoun1: 'вас',
  pronoun2: 'тебя',
};

export const App = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Main
              adjective={obj.adjective1}
              name='гости'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/gleb-alexandra'
          element={
            <Main
              adjective={obj.adjective1}
              name='Глеб и Александра'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/olga-anatolievna'
          element={
            <Main
              adjective={obj.adjective2}
              name='мама'
              pronoun1={obj.pronoun2}
            />
          }
        />
        <Route
          path='/natalya-vladimir-dmitriy'
          element={
            <Main
              adjective={obj.adjective1}
              name='Наталья, Владимир и Дмитрий'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/ilya-olga'
          element={
            <Main
              adjective={obj.adjective1}
              name='мама и папа'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/nikolay-maria'
          element={
            <Main
              adjective={obj.adjective1}
              name='Николай и Мария'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/andrey-janna'
          element={
            <Main
              adjective={obj.adjective1}
              name='Андрей и Жанна'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/sergey-varvara'
          element={
            <Main
              adjective={obj.adjective1}
              name='Сергей и Варвара'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/marina'
          element={
            <Main
              adjective={obj.adjective2}
              name='Марина'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/nikolay-natalya'
          element={
            <Main
              adjective={obj.adjective1}
              name='Николай и Наталья'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/alexandr-nina'
          element={
            <Main
              adjective={obj.adjective1}
              name='бабушка и дедушка'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/nina'
          element={
            <Main
              adjective={obj.adjective2}
              name='бабушка'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/andrey-irina'
          element={
            <Main
              adjective={obj.adjective1}
              name='Андрей и Ирина'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/inva-ekaterina'
          element={
            <Main
              adjective={obj.adjective1}
              name='Иван и Екатерина'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/vladimir-julia'
          element={
            <Main
              adjective={obj.adjective1}
              name='Владимир и Юлия'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/maksim-tatyana'
          element={
            <Main
              adjective={obj.adjective1}
              name='Максим и Татьяна'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/mihail-larisa'
          element={
            <Main
              adjective={obj.adjective1}
              name='Михаил и Лариса'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/andrey-ekaterina-alisa'
          element={
            <Main
              adjective={obj.adjective1}
              name='Андрей, Екатерина и Алиса'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/alexey-lily'
          element={
            <Main
              adjective={obj.adjective1}
              name='Алексей и Лилия'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/roman-irina-sonya-lev'
          element={
            <Main
              adjective={obj.adjective1}
              name='Роман, Ирина, Сонечка и Лёва'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/mark-yana'
          element={
            <Main
              adjective={obj.adjective1}
              name='Марк и Яна'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/alexey'
          element={
            <Main
              adjective={obj.adjective3}
              name='Алексей'
              pronoun1={obj.pronoun2}
            />
          }
        />
        <Route
          path='/sergey-ekaterina'
          element={
            <Main
              adjective={obj.adjective1}
              name='Сергей и Екатерина'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/ivan-anna'
          element={
            <Main
              adjective={obj.adjective1}
              name='Ванюша и Анна'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/anton-regina'
          element={
            <Main
              adjective={obj.adjective1}
              name='Антон и Регина'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/ilya-viktoria'
          element={
            <Main
              adjective={obj.adjective1}
              name='Илья и Виктория'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/pavel-elena'
          element={
            <Main
              adjective={obj.adjective1}
              name='Павел и Елена'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/vladislav-alina'
          element={
            <Main
              adjective={obj.adjective1}
              name='Владислав и Алина'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/semen'
          element={
            <Main
              adjective={obj.adjective3}
              name='Семён'
              pronoun1={obj.pronoun2}
            />
          }
        />
        <Route
          path='/maxim'
          element={
            <Main
              adjective={obj.adjective3}
              name='Максим'
              pronoun1={obj.pronoun2}
            />
          }
        />
        <Route
          path='/vitaliy'
          element={
            <Main
              adjective={obj.adjective3}
              name='Виталий'
              pronoun1={obj.pronoun2}
            />
          }
        />
        <Route
          path='/seymur-hursant'
          element={
            <Main
              adjective={obj.adjective1}
              name='Сеймур и Хурсант'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/sergey-natalya'
          element={
            <Main
              adjective={obj.adjective1}
              name='Сергей и Наталья'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/alexandr-natalya'
          element={
            <Main
              adjective={obj.adjective1}
              name='Александр и Наталья'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/anton-andreevich'
          element={
            <Main
              adjective={obj.adjective3}
              name='Антон Андреевич'
              pronoun1={obj.pronoun1}
            />
          }
        />
        <Route
          path='/ivan-igorevich'
          element={
            <Main
              adjective={obj.adjective3}
              name='Иван Игоревич'
              pronoun1={obj.pronoun1}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

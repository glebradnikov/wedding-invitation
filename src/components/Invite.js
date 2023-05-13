export const Invite = (props) => {
  return (
    <section className='invite'>
      <div className='invite__container'>
        <h2 className='invite__title'>
          {props.adjective}
          <br />
          {props.name}!
        </h2>
        <p className='invite__text'>
          Вот и наступил самый долгожданный день в нашей жизни, который мы хотим
          провести в кругу близких и друзей.
        </p>
        <p className='invite__text'>
          Мы счастливы пригласить {props.pronoun1} на нашу свадьбу! Надеемся,
          что {props.pronoun2} этот особенный день с нами.
        </p>
        <p className='invite__datetime'>Суббота | 08.07.2023 | 15:30</p>
        <p className='invite__text'>Глэмпинг «Клевер»</p>
        <p className='invite__text'>
          Ярославский р-н, Карабихское с.п., п. Дубки, Глэмпинг «Клевер»
        </p>
        <p className='invite__signature'>Глеб и Александра</p>
      </div>
    </section>
  );
};
